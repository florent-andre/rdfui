(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiObjectsCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'objectsCtrl';
        
        
        return $scope;
        
        
      }
    ]);
})();
