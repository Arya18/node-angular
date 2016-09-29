'use strict';

/**
 * @ngdoc function
 * @name demoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoProjectApp
 */
demoProjectApp.controller('MainCtrl', function ($rootScope, $scope, $http, $route, $resource) {
    $scope.logo = "DemoProject";
    $scope.awesomeThings = [
      "HTML5",
      "Angularjs",
      "Bootstrap",
      "karma"
    ];

    // function mainController($scope, $http) {
  $scope.formData = {};
  
  // when landing on the page, get all users and show them
  $http.get('/api')
    .success(function(data) {
      $scope.users = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.editUser = function() {
    // console.log(formData);
    var id = $("#userid").val();
    console.log(id);
    $http.post('/api/editUser/'+id, $scope.formData)
      .success(function(data) {
        $scope.users = data;
        $("#editModal").modal('hide');
        location.reload();
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteUser = function(id) {
    $http.delete('/api/deleteUser/' + id)
      .success(function(data) {
        $$rootScope.users = data;
        console.log(data)
        // $route.reload();
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.openModal = function($event) {
    console.log("asdas");
    var $row = $($event.target).closest('tr');
     var $columns = $row.find('td');
     console.log($columns);
     var values = [];
     $.each($columns, function(i, item) {
         values.push(item.innerText);
         console.log(values);
         
     });
    $("#editModal").modal('show');
    $("#userid").val(values[0]);
    $("#username").val(values[1]);
    $("#lastname").val(values[2]);
  };
// }
  });

demoProjectApp.controller('AngularWayWithOptionsCtrl', AngularWayWithOptionsCtrl);

function AngularWayWithOptionsCtrl($resource, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.users = [];
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(6);
    vm.dtColumnDefs = [
    ];
    $resource('data/users.json').query().$promise.then(function(users) {
        vm.users = users;
    });
  }


// demoProjectApp.controller('DTInstancesCtrl', DTInstancesCtrl);
// function DTInstancesCtrl(DTOptionsBuilder, DTColumnBuilder) {
//     var vm = this;
//     vm.dtInstances = [];
//     vm.dtOptions1 = DTOptionsBuilder.fromSource('/data/users.json')
//         .withDisplayLength(2)
//         .withPaginationType('full_numbers');
//     vm.dtColumns1 = [
//         DTColumnBuilder.newColumn('id').withTitle('ID'),
//         DTColumnBuilder.newColumn('firstName').withTitle('First name'),
//         DTColumnBuilder.newColumn('lastName').withTitle('Last name')
//     ];
//     vm.dtInstance1 = {};

//     vm.dtOptions2 = DTOptionsBuilder.fromSource('data1.json');
//     vm.dtColumns2 = [
//         DTColumnBuilder.newColumn('id').withTitle('ID'),
//         DTColumnBuilder.newColumn('firstName').withTitle('First name'),
//         DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
//     ];
//     vm.dtInstance2 = {};
//     vm.dtInstanceCallback = dtInstanceCallback;

//     function dtInstanceCallback(dtInstance) {
//         vm.dtInstance2 = dtInstance;
//     }
// }


  