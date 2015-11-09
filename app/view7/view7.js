'use strict';

angular.module('myApp.view7', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view7', {
                    templateUrl: 'view7/view7.html',
                    controller: 'View7Ctrl'
                });
            }])
        .controller('View7Ctrl', function ($http, $scope) {
            $scope.addUser = function (user) {
                var dataObj = {
                    username: $scope.user.name,
                    password: $scope.user.password
                };

                $http.post("api/demouser", dataObj).success(function (data, status) {
                    $scope.result = data.message;
                }).error(function (data, status) {
                    $scope.result = "Error";
                });
            };

        });

