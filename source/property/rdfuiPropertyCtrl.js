
(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .controller('rdfuiPropertyCtrl', ['$scope', '$element', '$transclude', '$compile', '$http',
  function($scope, $element, $transclude, $compile, $http) {

      this.scope = $scope;
      $scope.name = "rdfuiPropertyCtrl";
    
    $scope.showSelector = false;
    
    $scope.choice = {};
    
    $scope.addObject = function(){
        
        if($scope.isResource){
            $scope.showSelector = true;
        }else{
            $scope.objects.push({
                "@value" : "",
                "@language" : ""
            });
        }
        
        
        console.log("Ajout d'un nouvel object !!!!");
    };
    
    $scope.selectionDone = function($item,$model){
        console.log(arguments);
    };
    
    $scope.person = {};
    
    return $scope;
    
  }]);
    
})();