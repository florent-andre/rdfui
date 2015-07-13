(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiObjectCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'objectCtrl';
        
        $scope.$displayType = 'simpleUri';
        
        
        $scope.switchDisplay = function(){
            $scope.$displayType = 'light';
        };
        
        
        $scope.radioModel = 'Middle';

        $scope.checkModel = {
          left: false,
          middle: true,
          right: false
        };
        
        
        return $scope;
      }
    ]);
})();
