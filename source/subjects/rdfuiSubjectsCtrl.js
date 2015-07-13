(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiSubjectsCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'rdfuiConfig','graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, rdfuiConfig, graphService, filtersService) {
        this.scope = $scope;
        
        
        
        //TODO : use a watch collection to react on change for the differents attributes
        $scope.$watch('graphData',function(nv,ov){
            
            if(nv){ //remark don't add this condition : && (nv !== ov) because if present the watch is not done when subjects is on dereferencing.
                if(!$scope.filter){
                    if($scope.graphCtrl.lazyLoading){
                        console.error('!!!!!!!!!!!!!!!!!!! no loading if no graph');
                        return;
                    }else{
                        console.warn('There is no filter defined. Default filter will be applied (all pass)');
                    }
                    
                }
                //TODO : define a rdfui-subjects.doFilter function
                var filterFn = filtersService.compile($scope.filter);
                $scope.$subjects = graphService.doFilter(nv,filterFn);
                
                //TODO : clean this graphTree management.
                $scope.graphTree = graphService.getTreeRepresentation(nv,filterFn);//['@graph'];
                
            }
        });
        
        $scope.$watch('filter',function(nv,ov){
           if(nv){
               if($scope.graphCtrl.lazyLoading){
                   $scope.graphCtrl.parameters = {
                           scheme : '', //the default one 
                           queryFn : function(/*string*/ uri){
                               return {
                                   method : 'POST',
                                   url : rdfuiConfig.server+'graph/data/*/'+uri,
                                   data : $scope.filter,
                               };
                              }
                           };
                   $scope.graphCtrl.loadGraph();
                   $scope.graphCtrl.initiated.then(function(){
                       //TODO : use the rdfui-subjects.doFilter fn
                       var filterFn = filtersService.compile($scope.filter);
                       $scope.$subjects = graphService.doFilter(nv,filterFn);
                       
                       //TODO : clean this graphTree management.
//                       $scope.graphTree = graphService.getTreeRepresentation(nv,filterFn);//['@graph'];
                   });
                   
                   
               }else{
                   console.warn('This usecase is not implemented for now');
               }
           }
        },true);
        
        $scope.remove = function(node){
            $scope.graphCtrl.remove(node);
        };
        
        $scope.newSubItem = function(node){
            $scope.graphCtrl.newSubItem(node);
        };
        
        return $scope;
        
        
      }
    ]);
})();
