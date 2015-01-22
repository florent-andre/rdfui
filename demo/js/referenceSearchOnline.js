(function() {
  'use strict';

  var demoApp = angular.module('demoApp', 
          ['rdf.ui',
           'ui.tree',
           'ngSanitize',
           'ui.select',
           'rdf.ui.tests.value']);
  
  demoApp.run(function($httpBackend, $http, nafGraph,lazyOIE,oneTripleOIE) {
	  
      //queries for the directives template. No mock
//      $httpBackend.when('GET', /\/tpl\/*/).passThrough();
//      
//      //queries for the graph's main data
//	  $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(nafGraph.value);
//	  
//	  
//	  $httpBackend.when('POST', /\graph\/data\/\*\/http:\/\/test\.com\/oie\//).respond(lazyOIE.value);
//	   $httpBackend.when('POST', /\graph\/data\/.*/).respond(lazyOIE.value);

	  //queries for the graph's metadata
	  //$httpBackend.when('GET', /\/graphs\?scheme=.*/).respond(graphDereference.metadata);
      
      
      //NOTE : the cryptoJs lib is not still maintained.
      //Migrate to : https://github.com/digitalbazaar/forge
      //set the login password
      function getAuthorization(log,mp){
          var bytes = CryptoJS.enc.Utf8.parse(log + ":" + mp);
          var pw = "Basic " + CryptoJS.enc.Base64.stringify(bytes);
          return pw;
      }



      function setAuth(){
          var log = "admin";
          var mp="admin";
          //for $http related queries
          $http.defaults.headers.common['Authorization'] = getAuthorization(log,mp);

      }
      
      setAuth();
      
	  
	});
  
  demoApp.controller('GlobalCtrl',function($scope, rdfuiConfig){
     $scope.test= {};
     $scope.test.value = "%%%%%%%%%%%%%%%%%%% global ctrl test value %%%%%%%%%%%%%";
     
     $scope.test.filter = null;
     $scope.selected = { oie : null};
     
     $scope.$on('rdfui.itemSelected',function(event,data){
//         console.log("dans le on");
//         console.log(arguments);
//         console.log("******************");
//         console.log(data['http://dashboard.com/ontology/v0.1#section']);
         $scope.test.filter = {
                 "type" : "accept",
                 "on" : {"property" : "http://dashboard.com/ontology/v0.1#section", "values" : [data['http://dashboard.com/ontology/v0.1#section']]}
             };
      });
    
     $scope.nafParameters = {
             scheme : "", //the default one 
             queryFn : function(/*string*/ uri){
                 return {
                     method : "GET",
                     url : rdfuiConfig.server+"graph/data/*/"+uri,
                 };
             }
     };
     
     $scope.oieParameters = null;
     
     
     
     $scope.onOIEClick = function(entity){
         console.warn("!!!!!! Ca clique !!!!");
         $scope.selected.oie = entity;
         return false;
     }
     
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