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
  
  demoApp.controller('GlobalCtrl',function($scope, rdfuiConfig, graphService){
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
     
     
     
     $scope.createNewGraph = function(entity){
         console.warn("!!!!!! Ca clique !!!!");
         
         var graphInit = {
                 "@context": {
                     "altLabel": "http://www.w3.org/2004/02/skos/core#altLabel",
                     "broader": {
                       "@id": "http://www.w3.org/2004/02/skos/core#broader",
                       "@type": "@id"
                     },
                     "Collection": "http://www.w3.org/2004/02/skos/core#Collection",
                     "Concept": "http://www.w3.org/2004/02/skos/core#Concept",
                     "ConceptScheme": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
                     "contributor": "http://purl.org/dc/elements/1.1/contributor",
                   },
                   "@graph": [
                     {
                       "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96",
                       "@type": "ConceptScheme",
                       "contributor": "",
                       "created": 2001,
                       "creator": "Inventaire général du patrimoine culturel",
                       "description": {
                         "@language": "fr",
                         "@value": "Le thésaurus de la désignation\ndéveloppe sous une forme méthodique les termes utiles à la\ndésignation des oeuvres architecturales et mobilières.\nL'organisation propre au thesaurus permet de situer chaque\nterme dans une hiérarchie dont les entrées principales sont classées selon des catégories fonctionnelles liées à l'usage religieux, funéraire, industriel, etc. Il comporte en outre tous les renvois nécessaires, des définitions sommaires, des notes d'utilisation."
                       },
                     },
                   ]
         };
         
         
         
         var graphUri = "testNewGraph";
         var facetteName = "data";
         var userName = "myUser";
         
         var parameters = {
                 scheme : '', //the default one 
                 queryFn : function(/*string*/ uri){
                     return {
                         method : 'POST',
                         url : rdfuiConfig.server+'graph/'+facetteName+'/'+userName+'/'+uri,
                         data : graphInit
                     };
                 }
         };
         
         graphService.createGraph(graphUri,parameters,graphInit);
         
         //$scope.selected.oie = entity;
         return false;
     }
     
     //try to create a graph from object with no context
     $scope.createNewGraphNoContext = function(entity){
         console.warn("This will not throw error, but return an empty graph");
         
         var sourceObject = {
                 name : "test",
                 creationDate : "12/12/12",
                 author : "testMan"
         }
         
         
         var graphUri = "testNewGraphNoContext";
         var facetteName = "data";
         var userName = "myUser";
         
         var parameters = {
                 scheme : '', //the default one 
                 queryFn : function(/*string*/ uri){
                     return {
                         method : 'POST',
                         url : rdfuiConfig.server+'graph/'+facetteName+'/'+userName+'/'+uri,
                         data : sourceObject
                     };
                 }
         };
         
         graphService.createGraph(graphUri,parameters,sourceObject);
         
         //$scope.selected.oie = entity;
         return false;
     }
     
     $scope.graphListSubjectFilter = {
             "type" : "accept",
             "on" : {"property" : "@id", "values" : ["org.apache.clerezza.rdf.core.BNode@35341ee4"]}
         }
     
     $scope.graphList = [
                         
                         {"@context":
                             {
                                 "http://ooffee.eu/ns/urban#author":{"@type":"http://www.w3.org/2001/XMLSchema#string"},
                                 "http://ooffee.eu/ns/urban#dateCreate":{"@type":"http://www.w3.org/2001/XMLSchema#string"},
                                 "http://ooffee.eu/ns/urban#dateUpdate":{"@type":"http://www.w3.org/2001/XMLSchema#string"},
                                 "http://ooffee.eu/ns/urban#id":{"@type":"http://www.w3.org/2001/XMLSchema#string"},
                                 "http://ooffee.eu/ns/urban#name":{"@type":"http://www.w3.org/2001/XMLSchema#string"},
                                 "http://ooffee.eu/ns/urban#status":{"@type":"http://www.w3.org/2001/XMLSchema#string"},
                                 "xsd":"http://www.w3.org/2001/XMLSchema#"
                             },
                         "@graph":[
                                   {
                                       "@id":"org.apache.clerezza.rdf.core.BNode@28048a43",
                                       "http://ooffee.eu/ns/urban#name":"Yes"},
                                       {"@id":"org.apache.clerezza.rdf.core.BNode@35341ee4",
                                           "http://ooffee.eu/ns/urban#advertising":[
                                                                                    "org.apache.clerezza.rdf.core.BNode@5b1ececb",
                                                                                    "org.apache.clerezza.rdf.core.BNode@70d82605",
                                                                                    "org.apache.clerezza.rdf.core.BNode@7ea84c23"],
                                            "http://ooffee.eu/ns/urban#author":"Julien",
                                            "http://ooffee.eu/ns/urban#dateCreate":"09/02/2015",
                                            "http://ooffee.eu/ns/urban#dateUpdate":"09/02/2015",
                                            "http://ooffee.eu/ns/urban#id":"b277",
                                            "http://ooffee.eu/ns/urban#isfooter":[
                                                                                  "org.apache.clerezza.rdf.core.BNode@5c89066b",
                                                                                  "org.apache.clerezza.rdf.core.BNode@439aa029"
                                                                                  ],
                                            "http://ooffee.eu/ns/urban#ishomePage": ["org.apache.clerezza.rdf.core.BNode@28048a43","org.apache.clerezza.rdf.core.BNode@4211493b"],
                                           "http://ooffee.eu/ns/urban#name":"xsq",
                                           "http://ooffee.eu/ns/urban#status":"App"
                                               },
                                           {"@id":"org.apache.clerezza.rdf.core.BNode@4211493b","http://ooffee.eu/ns/urban#name":"No"},
                                           {"@id":"org.apache.clerezza.rdf.core.BNode@439aa029","http://ooffee.eu/ns/urban#name":"Yes"},
                                           {"@id":"org.apache.clerezza.rdf.core.BNode@5b1ececb","http://ooffee.eu/ns/urban#name":"SmartMap"},
                                           {"@id":"org.apache.clerezza.rdf.core.BNode@5c89066b","http://ooffee.eu/ns/urban#name":"No"},
                                           {"@id":"org.apache.clerezza.rdf.core.BNode@70d82605","http://ooffee.eu/ns/urban#name":"App IPAD"},
                                           {"@id":"org.apache.clerezza.rdf.core.BNode@7ea84c23","http://ooffee.eu/ns/urban#name":"Version Web"}]},

             ,
         ];
     
  });
  
//  demoApp.controller('FilterCtrl', function($scope) {
//      
//      $scope.nafN1Filter = {
//              "type" : "accept",
//              "on" : {"property" : "@type", "values" : ["http://dashboard.com/ontology/v0.1#nafTypeN1"]}
//          }
//  });
  
//  demoApp.controller('SelectorCtrl', function($scope) {
//      
//      $scope.nafN1Filter = {
//              "type" : "accept",
//              "on" : {"property" : "@type", "values" : ["http://dashboard.com/ontology/v0.1#nafTypeN1"]}
//          }
//      
//      $scope.select = {};
//      
//      $scope.selectionDone = function($item, $model){
//    	  console.log("DEFINE THIS");
//    	  console.log(arguments);
//    	  
//    	  $scope.$emit("rdfui.itemSelected", $item);
//    	  
//    	  
//    	  
//      };
//      
//      //transformation for propsFilter
//      //TODO : put this in the webcomponent or create a new "propsFilter"
//      console.log($scope);
//    //TODO : remove that to use directly ng-model
//      $scope.$watch('$subjects',function(nv,ov){
//          if(nv != null){
//        	  nv.forEach(function(d){
//        	    	 //console.log(d);
//        	    	 d.$intitule = d['http://dashboard.com/ontology/v0.1#intitule']['@value'];
//        	    	 d.$sousClasse = d['http://dashboard.com/ontology/v0.1#sousClasse']['@value'];
//        	      });
////              var objs = nv[scope.propertyName];
////              if(!objs) {objs = [];}
////              if (!Array.isArray(objs)){ objs = [objs];}
////              scope.objects = objs;
////              if(scope.objects && typeof scope.objects[0] == 'string') {
////                  scope.isResource = true;
////              }
//          }
//          
//      });
//      
////      $scope.updateChoices = function(searchTerm){
////    	  console.warn("** in the search" + searchTerm);
////      }
//      
//      
//  });

})();