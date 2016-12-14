var mongoose=require('mongoose');//导入模块
mongoose.Promise = global.Promise;
var Schema=mongoose.Schema;
var userSchema=new Schema({
    //属性存储值的类型
    username:{type:String,required:true},
    hashed_password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    gender:{type:String},
    address:{type:String},
    phone:{type:Number},
    nickname:{type:String},
    loginname:{type:String},
    picture:{type:Schema.Types.Mixed},
    morePictures:Schema.Types.Mixed,//this is not required
    createAt:{type:Date,default:Date.now},
});
var User=mongoose.model('User',userSchema);//创建一个用户
module.exports=User;