(function() {
  'use strict';

  var demoApp = angular.module('demoApp', 
          ['rdf.ui',
           'ui.tree',
           'ngMockE2E',
           'ngSanitize',
           'ui.select',
           'rdf.ui.tests.value']);
  
  demoApp.run(function($httpBackend, graphDereference) {
	  
      //queries for the directives template. No mock
      $httpBackend.when('GET', /\/tpl\/*/).passThrough();
      
      //queries for the graph's main data
	  $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(graphDereference.value);
	  
	  //queries for the graph's metadata
	  $httpBackend.when('GET', /\/graphs\?scheme=.*/).respond(graphDereference.metadata);
      
	  
	});
  
  demoApp.controller('globalCtrl',function($scope){
     $scope.test= {};
     $scope.test.value = "%%%%%%%%%%%%%%%%%%% global ctrl test value %%%%%%%%%%%%%"; 
  });
  
  demoApp.controller('MainCtrl', function($scope) {
      
      $scope.treeFilter = {
              "type" : "accept",
              "on" : {"property" : "@type", "values" : ["Concept"]}
          }
  });

})();