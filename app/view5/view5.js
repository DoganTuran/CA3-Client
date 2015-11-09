

'use strict';
angular.module('myApp.view5', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/view5', {
                            templateUrl: 'view5/view5.html',
                            controller: 'View5Ctrl'
                        })
                        .when('/view5delete/:username', {
                            template: '<p>{{result}}</p>',
                            controller: 'View5dCtrl'
                        });

            }])


        .controller('View5Ctrl', function ($http, $scope) {

            $http.get('api/demoadmin/users')
                    .success(function (data, status, headers, config) {
                        $scope.data = data;
                    })
                    .error(function (data, status, headers, config) {

                    });

            


        })


        .filter('rolesToString', function () {
            return function (rolesArray) {
                var rolesString = "";
                for (var i in rolesArray) {
                    rolesString += rolesArray[i].role + ", ";
                }
                if (rolesArray.length >= 1) {
                    rolesString = rolesString.substring(0, rolesString.length - 2);
                }
                return rolesString;
            };
        })