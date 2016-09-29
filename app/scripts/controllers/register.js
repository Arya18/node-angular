'use strict';

/**
 * @ngdoc function
 * @name demoProjectApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the demoProjectApp
 */
angular.module('demoProjectApp')
  .controller('RegisterCtrl', ["$scope","$http", function ($scope,$http) {
    $scope.user = {};

    $scope.submitForm = function () {
    	
    	$scope.user = JSON.stringify($scope.user);
    	var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("C:\\Test.txt", true);
s.WriteLine('Hello');
s.Close();
        };
  }]);
