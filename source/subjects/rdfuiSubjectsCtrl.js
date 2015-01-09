(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiSubjectsCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;
        
        //TODO : use a watch collection to react on change for the differents attributes
        $scope.$watch('graphData',function(nv,ov){
            
            if(nv){ //remark don't add this condition : && (nv !== ov) because if present the watch is not done when subjects is on dereferencing.
                var filterFn = filtersService.compile($scope.filter);
                $scope.$subjects = graphService.doFilter(nv,filterFn);
                
                //TODO : clean this graphTree management.
                $scope.graphTree = graphService.getTreeRepresentation(nv,filterFn);//['@graph'];
                
            }
        });
        
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
