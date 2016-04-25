(function() {
  'use strict';

  var demoApp = angular.module('demoApp', 
          ['rdf.ui',
           'ui.tree',
           'ngMockE2E',
           'ngSanitize',
           'ui.select',
           'rdf.ui.tests.value']);
  
  demoApp.run(function($httpBackend, europeanaGraph) {
      
      //queries for the directives template. No mock
      $httpBackend.when('GET', /\/tpl\/*/).passThrough();
      
      //queries for the graph's main data
      $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(europeanaGraph.value);
      
      //queries for the graph's metadata
      $httpBackend.when('GET', /\/graphs\?scheme=.*/).respond(europeanaGraph.metadata);
      
      
    });
  
  demoApp.controller('globalCtrl',function($scope){
      
  });
  
  demoApp.controller('MainCtrl', function($scope) {
      
      $scope.treeFilter = {
              "type" : "accept",
              "on" : {"property" : "@type", "values" : ["Concept"]}
          }
  });

})();