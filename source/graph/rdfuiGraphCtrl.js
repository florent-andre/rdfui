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
        
        $scope.availableProperties = [];
        
        
        $scope.$watch('graphUri',function(nv,ov){
            if(nv){
                $scope.loadGraph();
            }
        });
        
        $scope.$watch('graphData',function(nv,ov){
            if(nv){
                $scope.initialisation = $q.defer();
                $scope.initiated = $scope.initialisation.promise;
                $scope.graph = nv;
                
                $scope._postLoad();
                $scope.initialisation.resolve();
            }
        });
        
        $scope.loadGraph = function(){
//            
//            $scope.initialisation = $q.defer();
//            $scope.initiated = $scope.initialisation.promise;
            
            //options for lazy loading
              if($scope.lazyLoading){
                  graphService.getLazyGraph($scope.graphUri, $scope.parameters, true).then(function(data){
                      $scope.graph = data;
                      //TODO : ?? remove the graphTree building here as it's now done in a specific controller, right ??
                      //$scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                      $scope._postLoad();
                      $scope.initialisation.resolve();
                  });
                  return;
              }
              
              //option for 'normal fetching' and local graph extraction
              if(!$scope.drfType){
                  graphService.getLazyGraph($scope.graphUri, $scope.parameters, false).then(function(data){
                      
                      $scope.graph = data;
                      //TODO : ?? remove the graphTree building here as it's now done in a specific controller, right ??
                      $scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                      
                      $scope._postLoad();
                      $scope.initialisation.resolve();
                  });
              }else{ //a drfType is filled, so we go local (only option for now)
                  
                  //TODO : clean this... maybe define a drf service that return a standard object for all dereferences types
                  $scope.graph = {};
                  $scope.graph['@context'] = angular.copy($scope.$parentGraphCtrl.graph['@context']);
                  $scope.graph['@graph'] = [graphService.findNode($scope.$parentGraphCtrl.graph,$scope.graphUri)];
                  
                  $scope._postLoad();
                  $scope.initialisation.resolve();
              }
          };
          
        $scope._postLoad = function(){
            $scope.availableProperties = graphService.getProperties($scope.graph);
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
        
        //TODO : use an objet for the text to be updated
        $scope.isEdit = true;
        $scope.isEditText = 'View';
        
        $scope.switchEdit = function(){
            $scope.isEdit = !$scope.isEdit;
            $scope.isEditText = $scope.isEdit ? 'View' : 'Edit';
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
