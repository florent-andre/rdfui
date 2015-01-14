(function() {
  'use strict';

  var demoApp = angular.module('demoApp', 
          ['rdf.ui',
           'ui.tree',
           'ngMockE2E',
           'ngSanitize',
           'ui.select',
           'rdf.ui.tests.value']);
  
  demoApp.run(function($httpBackend, nafGraph) {
	  
      //queries for the directives template. No mock
      $httpBackend.when('GET', /\/tpl\/*/).passThrough();
      
      //queries for the graph's main data
	  $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(nafGraph.value);
	  
	  //queries for the graph's metadata
	  //$httpBackend.when('GET', /\/graphs\?scheme=.*/).respond(graphDereference.metadata);
      
	  
	});
  
  demoApp.controller('GlobalCtrl',function($scope){
     $scope.test= {};
     $scope.test.value = "%%%%%%%%%%%%%%%%%%% global ctrl test value %%%%%%%%%%%%%";
     
     $scope.$on('rdfui.itemSelected',function(event,data){
         console.log("dans le on");
         console.log(arguments);
         /**
          * ==> créer un service qui expose la sélection
          puis faire la partie affichage avec filtrage (voir pour la requête coté serveur)
          
          puis faire l'affichage du résultat coté détail.
          */
      });
  });
  
  demoApp.controller('FilterCtrl', function($scope) {
      
      $scope.nafN1Filter = {
              "type" : "accept",
              "on" : {"property" : "@type", "values" : ["http://dashboard.com/ontology/v0.1#nafTypeN1"]}
          }
  });
  
  demoApp.controller('SelectorCtrl', function($scope) {
      
      $scope.nafN1Filter = {
              "type" : "accept",
              "on" : {"property" : "@type", "values" : ["http://dashboard.com/ontology/v0.1#nafTypeN1"]}
          }
      
      $scope.select = {};
      
      $scope.selectionDone = function($item, $model){
    	  console.log("DEFINE THIS");
    	  console.log(arguments);
    	  
    	  $scope.$emit("rdfui.itemSelected", $item);
    	  
    	  
    	  
      };
      
      //transformation for propsFilter
      //TODO : put this in the webcomponent or create a new "propsFilter"
      console.log($scope);
    //TODO : remove that to use directly ng-model
      $scope.$watch('$subjects',function(nv,ov){
          if(nv != null){
        	  nv.forEach(function(d){
        	    	 //console.log(d);
        	    	 d.$intitule = d['http://dashboard.com/ontology/v0.1#intitule']['@value'];
        	    	 d.$sousClasse = d['http://dashboard.com/ontology/v0.1#sousClasse']['@value'];
        	      });
//              var objs = nv[scope.propertyName];
//              if(!objs) {objs = [];}
//              if (!Array.isArray(objs)){ objs = [objs];}
//              scope.objects = objs;
//              if(scope.objects && typeof scope.objects[0] == 'string') {
//                  scope.isResource = true;
//              }
          }
          
      });
      
//      $scope.updateChoices = function(searchTerm){
//    	  console.warn("** in the search" + searchTerm);
//      }
      
      
  });

})();