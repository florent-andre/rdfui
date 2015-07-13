(function() {
  'use strict';

  var demoApp = angular.module('demoApp', 
          ['rdf.ui',
           'ui.tree',
           'ngMockE2E',
           'ngSanitize',
           'ui.select',
           'rdf.ui.tests.value']);
  
  demoApp.run(function($httpBackend, graphOneLang) {
	  
	  $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(graphOneLang.value);
	  $httpBackend.when('GET', /\/tpl\/*/).passThrough();
	  
	  //let all the requests to change endpoint pass
	  //TODO : create a mock response
	  $httpBackend.when('POST', /\/history\/data\/*/).respond('mok response have to be improved');//.passThrough();
	  
	});
  
  demoApp.controller('MainCtrl', function($scope) {
//    $scope.list = [{
//      "id": 1,
//      "title": "1. dragon-breath",
//      "items": []
//    }, {
//      "id": 2,
//      "title": "2. moiré-vision",
//      "items": [{
//        "id": 21,
//        "title": "2.1. tofu-animation",
//        "items": [{
//          "id": 211,
//          "title": "2.1.1. spooky-giraffe",
//          "items": []
//        }, {
//          "id": 212,
//          "title": "2.1.2. bubble-burst",
//          "items": []
//        }],
//      }, {
//        "id": 22,
//        "title": "2.2. barehand-atomsplitting",
//        "items": []
//      }],
//    }, {
//      "id": 3,
//      "title": "3. unicorn-zapper",
//      "items": []
//    }, {
//      "id": 4,
//      "title": "4. romantic-transclusion",
//      "items": []
//    }];

    $scope.selectedItem = {};

    $scope.options = {
    };

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + '.' + (nodeData.items.length + 1),
        items: []
      });
    };
  });

})();