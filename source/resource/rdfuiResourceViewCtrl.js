(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiResourceViewCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'resourceViewCtrl';
        
        
        return $scope;
        
        
      }
    ]);
})();
