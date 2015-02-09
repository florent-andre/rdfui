(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiGraphCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'arrayService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService, arrayService) {
        this.scope = $scope;
        
                
        $scope.initialisation = $q.defer();
        $scope.initiated = $scope.initialisation.promise;
        
        $scope.name = 'graphCtrl';
        
        $scope.graph = null;
        
        $scope.currentNode = null;
        
        $scope.lang = {};
        $scope.lang.main = 'fr';
        $scope.lang.available = ['en','fr','es'];
        $scope.lang.displayed = $scope.lang.available;
        
        //@deprecated use $scope.lang.* instead of this ones.
//        $scope.mainLang = "fr"; //main lang used for display
//        $scope.languages = ["en","fr","es"]; //list of languages available for this graph
//        $scope.languagesDisplayed = []; //list of languages the user choose to display
//        $scope.languagesDisplayed = $scope.languages;
        
        
        
        $scope.$watch('graphUri',function(nv,ov){
            if(nv){
                $scope.loadGraph();
            }
        });
        
        $scope.$watch('graphData',function(nv,ov){
            if(nv){
                $scope.initialisation = $q.defer();
                $scope.graph = nv;
                $scope.initialisation.resolve();
            }
        });
        
        $scope.loadGraph = function(){
            
            $scope.initialisation = $q.defer();
            //options for lazy loading
              if($scope.lazyLoading){
                  console.log('#######');
                  console.log($scope.parameters);
                  graphService.getLazyGraph($scope.graphUri, $scope.parameters, true).then(function(data){
                      console.log('lazy graph data');
                      $scope.graph = data;
                      //TODO : ?? remove the graphTree building here as it's now done in a specific controller, right ??
                      //$scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                      
                      $scope.initialisation.resolve();
                  });
                  return;
              }
              console.log('??? ca continue ??');
              //option for 'normal fetching' and local graph extraction
              if(!$scope.drfType){
                  graphService.getLazyGraph($scope.graphUri, $scope.parameters, false).then(function(data){
                      
                      $scope.graph = data;
                      //TODO : ?? remove the graphTree building here as it's now done in a specific controller, right ??
                      $scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                      
                      $scope.initialisation.resolve();
                  });
              }else{ //a drfType is filled, so we go local (only option for now)
                  
                  //TODO : clean this... maybe define a drf service that return a standard object for all dereferences types
                  $scope.graph = {};
                  $scope.graph['@context'] = angular.copy($scope.$parentGraphCtrl.graph['@context']);
                  $scope.graph['@graph'] = [graphService.findNode($scope.$parentGraphCtrl.graph,$scope.graphUri)];
                  $scope.initialisation.resolve();
              }
          };
        
        $scope.getLiteralValues = function(/**String*/ uri){
            var labels = graphService.getLabelFromUri($scope.graph['@graph'],uri,$scope.lang.main);
            return labels.length > 0 ? labels : [null];
        };
        
        $scope.setCurrentNode = function(/**String*/nodeUri){
            var g = $scope.graph['@graph'];
            var index = arrayService.lazyIndexOf(g,function(a,b){
                return a['@id'] == b;
            },nodeUri);
            $scope.currentNode = g[index];
        };
        
        $scope.getLinkableConcepts = function(){
            
            var dfd = $q.defer();
            $scope.initiated.then(function(){
                dfd.resolve($scope.graph['@graph']);
            });
            //for now return all the graph, but have to do a filter on it for no parent circle relations
            return dfd.promise;
        };
        
        $scope.remove = function(node){
            console.log('TODO : implement this');
            console.warn(node);
        };
        
        $scope.newSubItem = function(node){
            console.log('TODO : implement this');
            console.warn(node);
        };
        
        return $scope;
        
        
      }
    ]);
})();
