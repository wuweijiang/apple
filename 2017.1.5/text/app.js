angular.module("myapp",["ngRoute", 'ngAnimate',"ctrls","data"])
    .config(function ($routeProvider) {
        $routeProvider.when("/",{
            templateUrl:"index.html",
            controller:"index"
        }).when("/list",{
            templateUrl:"list.html",
        }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"list"
        }).when("/show/:id",{
            templateUrl:"show.html",
            controller:"show"
        }).otherwise("/")

    })