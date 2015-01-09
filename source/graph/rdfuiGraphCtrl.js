(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiGraphCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService) {
        this.scope = $scope;
        
                
        $scope.initialisation = $q.defer();
        $scope.initiated = $scope.initialisation.promise;
        
        $scope.name = "graphCtrl";
        
        $scope.graph = null;
        
        $scope.currentNode = null;
        
        $scope.lang = {};
        $scope.lang.main = "fr";
        $scope.lang.available = ["en","fr","es"];
        $scope.lang.displayed = $scope.lang.available;
        
        //@deprecated use $scope.lang.* instead of this ones.
//        $scope.mainLang = "fr"; //main lang used for display
//        $scope.languages = ["en","fr","es"]; //list of languages available for this graph
//        $scope.languagesDisplayed = []; //list of languages the user choose to display
//        $scope.languagesDisplayed = $scope.languages;
        
        $scope.$watch('graphUri',function(nv,ov){
            if(nv){
                if(!$scope.drfType){
                    graphService.getGraphData($scope.graphUri).then(function(data){
                        
                        $scope.graph = data;
                        $scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                        
                        $scope.initialisation.resolve();
                    });
                }else{ //a drfType is filled, so we go local (only option for now)
                    
                    //TODO : clean this... maybe define a drf service that return a standard object for all dereferences types
                    $scope.graph = {};
                    $scope.graph["@context"] = angular.copy($scope.$parentGraphCtrl.graph["@context"]);
                    $scope.graph["@graph"] = [graphService.findNode($scope.$parentGraphCtrl.graph,$scope.graphUri)];
                    $scope.initialisation.resolve();
                }
                
            }
        });
        
        $scope.getLiteralValues = function(/**String*/ uri){
            var labels = graphService.getLabelFromUri($scope.graph['@graph'],uri,$scope.lang.main);
            return labels.length > 0 ? labels : [null];
        };
        
        $scope.setCurrentNode = function(/**String*/nodeUri){
            var g = $scope.graph['@graph'];
            $scope.currentNode = g[g.lazyIndexOf(function(a,b){
                return a['@id'] == b;
            },nodeUri)];
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
            console.log("TODO : implement this");
            console.warn(node);
        };
        
        $scope.newSubItem = function(node){
            console.log("TODO : implement this");
            console.warn(node);
        };
        
        return $scope;
        
        
      }
    ]);
})();
