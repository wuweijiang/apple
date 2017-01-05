angular.module("ctrls",["data"])
    .controller("index",["$scope","$http","indexData",function ($scope,$http,indexDate) {
        indexDate.then(function (data) {
            $scope.data=data.data
        })

    }])
    .controller("list",["$scope","$http","listData",function ($scope,$http,listDate) {
        listDate.then(function (data) {
            $scope.data=data.data
        })

    }])
    .controller("show",["$scope","$http","showData",function ($scope,$http,showDate) {
    showDate.then(function (data) {
        $scope.data=data.data
    })

}])