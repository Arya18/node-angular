  'use strict';

describe('MainCtrl', function() {

  beforeEach(module('demoProjectApp'));

  it('should create a `product` model with 3 products', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('MainCtrl', {$scope: scope});
        expect(scope.awesomeThings.length).toBe(3);
        //expect(scope.logo).toBe('HCLDemo');
  }));

  // it('should set a default value for the `orderProp` model', function($controller) {
  //       var scope = {};
  //       var ctrl = $controller('MainCtrl', {$scope: scope});
  //       expect(scope.orderProp).toBe('age');
  //   });
  
  it('should show logo name', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('MainCtrl', {$scope: scope});
        //expect(scope.phones.length).toBe(3);
        expect(scope.logo).toBe('DemoProject');
  }));
  
});
