(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiObjectsCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'objectsCtrl';
        
        //management of the display type
        $scope.$displayType = {value : 'light'};
//        $scope.switchDisplay = function(){
//            $scope.$displayType.value = 'light';
//        };
        
        
        return $scope;
        
        
      }
    ]);
})();
