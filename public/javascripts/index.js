angular.module('userSingleApp',['ngRoute','ngTable'])
    //配置路由
    .config(function ($routeProvider) {
        $routeProvider
        //路由到编辑页面
            .when('/',{
                templateUrl:'template/login.hbs',
                controller:'loginController'
            })
            .when('/users/edit',{
                templateUrl:'template/edit.hbs',
                controller:'editController'
            })
            .when('/users/signup',{
                templateUrl:'template/signup.hbs',
                controller:'signupController'
            })
            .when('/users/login',{
                templateUrl:'template/login.hbs',
                controller:'loginController'
            })
            .when('/users/userlist',{
                templateUrl:'template/userlist.hbs',
                controller:'userlistController'
            })
            .when('/users/forgotpwd',{
                templateUrl:'template/forgotpwd.hbs',
                controller:'forgotpwdController'
            })
            .when('/users/detail',{
                templateUrl:'template/detail.hbs',
                controller:'detailController'
            });
    })
    .controller('editController',['$scope',function ($scope) {
        var self=this;
        $scope.pageclass='page-edit';
        self.message="编辑用户的个人信息";

    }])
    .controller('signupController',["$http","$location","$scope",function ($http,$location,$scope) {
        var self=this;
        $scope.pageclass='page-signup';
        self.message="注册用户的个人信息";
        self.captchaUrl='/captcha';
        self.changeimg=function () {
            self.captchaUrl='/captcha?d='+Math.random();
        };
        self.signup=function () {
            $http.post('/signup',self.user)
                .then(function (resp) {
                    //验证码出错时返回错误
                    if(resp.data.captchaErrorMsg){
                        self.captchaErrorMsg=
                            resp.data.captchaErrorMsg;
                        return;
                    }
                    //路由到新路径
                    $location.path('/users/userlist');//跳转到新的页面
                });
        };
    }])
    .controller('detailController',['$scope',function ($scope) {
        var self=this;
        $scope.pageclass='page-detail';
        self.message="列出用户的个人信息";
        self.personCount=2;
        self.keyInfo={};
        self.mouseInfo={};
        self.keyStroke=function (event) {
            self.keyInfo.keyCode=event.keyCode;
        };
        self.mouseClick=function (event) {
            self.mouseInfo.clientX=event.clientX;
            self.mouseInfo.clientY=event.clientY;
            self.mouseInfo.screenX=event.screenX;
            self.mouseInfo.screenY=event.screenY;
        }
    }])
    .controller('userlistController',['$http','$scope','NgTableParams','$location',function($http,$scope,NgTableParams,$location) {
        var self=this;
        $scope.pageclass='page-userlist';
        self.data=[];
        self.message="用户列表";
        $http.get('/http-list').then(
            function (resp) {
                self.allUsers=resp.data.users;
                self.tableParams=new NgTableParams({},{dataset:self.allUsers});
            });
        self.user={};
        self.edit=function (obj) {
            self.uid=obj;
            self.user={gender:'女'};
            //
            $http.get('/get-user-by-uid?uid='+obj).then(
                function (resp) {
                    self.user=resp.data.users[0];
                }
            )
        }
        self.del=function (obj) {
            $http.get('/del-uerlist?uid='+obj).then(function (resp) {
                self.message=resp.data.msg;
            })
            $location.path('/users/userlist');//跳转到新的页面
            parent.location.reload();
        };
        self.update=function (obj) {
            self.user.uid=obj;
            $http.post('/userlist-update',self.user)
                .then(
                    function (resp) {
                        self.message=resp.data.msg;
                    });
            parent.location.reload();
            $location.path('/users/userlist')//跳转到新的页面
        };
    }])
    .controller('loginController',['$scope','$http',function ($scope,$http) {
        var self=this;
        $scope.pageclass='page-login';
        self.message="登录用户的个人信息";
        self.login=function () {
            $http.post('/login',self.user).then(//post服务器路由也是post
                function (resp) {
                    self.returnClass="alert alert-success";
                    if(resp.data.users.length===0){
                        self.returnClass='alert alert-danger';
                        self.messageFull="请检查你的用户名或密码是否正确！";
                        return;
                    }
                    self.uid=resp.data.users[0]._id;
                    self.messageFull='你的账户是：'+resp.data.users[0].name+' 你的Email是：'+resp.data.users[0].email;
                    //self.message=resp.data.msg;
                    //self.messageFull=resp.data.user.username+'你的密码是：'+resp.data.user.password;
                });
        }
    }])
    .controller('forgotpwdController',['$scope',function ($scope) {
        var self=this;
        $scope.pageclass='page-forgotpwd';
        self.message="忘记密码个人信息处理";
    }]);
angular.module("mainApp",['userSingleApp','ngAnimate']);

$(function () {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $(".back").fadeIn(500);
        } else {
            $(".back").fadeOut(500);
        }
    });
    $(".back").click(function () {
        $("html,body").animate({ scrollTop:0},300);
        return false;
    });
});


