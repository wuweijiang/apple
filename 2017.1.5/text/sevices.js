angular.module("data",[])
.factory("indexData",function ($http) {
    return $http({url:"contain.txt"})
})
.factory("listData",function ($http) {
        return $http({url:"contain.txt"})
 })
 .factory("showData",function($http){
        return $http({url:"show.txt"})
 })