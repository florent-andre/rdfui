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
        
        $scope.addObject = function(){
            
            if($scope.hasType.resource){
                console.log('TODO : implent this add a ressource type');
            }
            
            if($scope.hasType.literal){
                if($scope.hasType.literalType.plain){
                    console.log($scope.objects);
                    $scope.objects.push({ '@language' : null, '@value' : null });
                    
                }
                if($scope.hasType.literalType.typed){
                    console.log('TODO : implent this add a typed literal');
                }
            }
            
            console.log($scope.hasType);
            console.log('ajout d\'un nouvel object');
            
        };
        
        return $scope;
        
        
      }
    ]);
})();
