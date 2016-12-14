// var static=require('../lib/static.js');
var express=require('express');
var router=express.Router();
var svgCaptcha = require('svg-captcha');
var mongoose=require('mongoose');
var crypto=require('crypto');
var User_m=require('../models/user.js');
var credentials=require('../credentials.js');
var emailService=require('../lib/email.js')(credentials);

//GET home page
router.get('/',function (req,res,next) {
    //使用默认布局（main1.hbs）
    res.render('index',{title:'Express'});//{title:'Express'}上下文对象
});
router.get('/user',function (req,res,next) {
    res.render('user');
});
router.get('/experience',function (req,res,next) {
    res.render('experience');
});
router.get('/web',function (req,res,next) {
    res.render('web');
});
router.get('/react',function (req,res,next) {
    res.render('react');
});
router.get('/phone',function (req,res,next) {
    res.render('phone');
});
router.get('/captcha',function (req,res,next) {
    var text = svgCaptcha.randomText();
    var captcha = svgCaptcha(text);
    req.session.captcha = text;
    res.set('Content-Type', 'image/svg+xml');
    res.status(200).send(captcha);
});

//加密函数
function hashPW(pwd){
    return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}
router.post('/signup',function (req,res,next) {
    if(req.session.captcha.toLowerCase()!==req.body.captcha.toLowerCase()){
        var data={captchaErrorMsg:'请检查验证码是否正确！'};
        return res.send(data);
    }
    var user=new User_m({username:req.body.username});
    user.set('hashed_password',hashPW(req.body.password));
    user.set('email',req.body.email);
    user.set('age',req.body.age);
    user.save(function (err) {//数据库自带保存函数save
        if(err){
            req.session.error=err;
            return res.redirect('/user#/users/singup');
        }else{
            console.log('======register-save======='+user.id+"=="+req.body.username+'===pwd==='+user.hashed_password);
            emailService.send(req.body.email,'thank you for signup!','自定义内容');
            req.session.user=user.id;
            req.session.username=user.username;
            req.session.msg='Authenticated as'+user.username;
            return res.redirect('/user#/users/userlist');
        }
    })
});
router.post('/login',login);
function login(req,res,next) {
    User_m.find({username:req.body.username,hashed_password:hashPW(req.body.password)})
        .select('username age email')
        .exec(function (err,users) {
            var data={
                users:users.map(function (user) {
                    return {
                        _id:user._id,
                        name:user.username,
                        email:user.email,
                        age:user.age,
                    };
                })
            };
            if(data.users.length>0){
                req.session.usersSessionID=data.users[0]._id;
            }
            res.send(data);
        });
}
router.get('/http-list',function (req,res,next) {
    //1.查询全部的记录
    User_m.find({},function (err,users) {
        //2.查询age="14"的记录
        //User_m.find().where('age').equals('14').exec(function (err,users) {
        //3.查询age>10,从0开的6条记录的username，age，email字段
        //User_m.find().where('age').gte(10).select('username age email').skip(0).limit(6).exec(function (err,users) {
        //4.查询age=14，从0开的3条记录的username，age，email字段
        //User_m.find({age:14}).select('username age email').skip(0).limit(3).exec(function (err,users) {
        //5.查询所有记录的age和username字段
        //User_m.find({},{age:true,username:true},function (err,users) {
        //6.查询age=15的记录的age和username字段
        //User_m.find({age:14},{age:true,username:true},function (err,users) {
        //7.查询username=jack的记录
        //User_m.find({username:'jack'},function(err,users){
        var data={
            users:users.map(function (user) {
                return {
                    _id:user._id,
                    name:user.username,
                    email:user.email,
                    age:user.age,
                };
            })
        };
        res.send(data);
    });
});
router.get('/get-user-by-uid',function (req,res,next) {
    User_m.find().where("_id").equals(req.query.uid).exec(function (err,users) {
        var data={
            users:users.map(function (user) {
                return {
                    _id:user._id,
                    username:user.username,
                    email:user.email,
                    age:user.age,
                    gender:user.gender,
                    address:user.address,
                    phone:user.phone,
                    nickname:user.nickname,
                    loginname:user.loginname,
                };
            })
        };
        console.log(data);
        res.send(data);
    });
});
router.get('/del-uerlist',function (req,res,next) {
    var data={};
    User_m.remove().where("_id").equals(req.query.uid).exec(function (err,users) {
        if(err){
            data={msg:'失败'+req.query.uid};
        }else{
            data={msg:'成功'+req.query.uid};
            console.log("!!!!!"+req.query.uid);
        }
        return res.send(data);

    });
});
router.post('/userlist-update',function (req,res,next) {
    var data={};
    User_m.update({_id:req.body.uid},
        {$set:{email:req.body.email,
            loginname:req.body.loginname,
            gender:req.body.gender,
            nickname:req.body.nickname,
            //username:req.body.username,
            age:req.body.age,
            address:req.body.address,
            phone:req.body.phone,
            update:true}},
        {upsert:false,multi:true}).exec(function (err,users) {
        if(err){
            console.log('===ffff===');
            console.log(err);
            data={msg:'失败'+req.body.uid};
        }else{
            data={msg:'成功'+req.body.uid};
            console.log("!!!!!"+req.body.uid);
        }
        return res.send(data);
    });
});
module.exports=router;