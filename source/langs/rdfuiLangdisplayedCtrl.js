
(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .controller('rdfuiLangdisplayedCtrl', ['$scope', '$q', 'langService',
  function($scope,$q,langService) {

    $scope.name = 'rdfuiLangdisplayedCtrl';
    
//    $scope.lang = {};
//    
//    $scope.lang.langDisplayed = [];
    
    $q.when(langService.getIsoLangsAsArray()).then(function(data){
        $scope.allLangs = data;
    });
    
//    $scope.langSelected = function(i,m){
////        console.warn('********************');
////        console.warn(arguments);
////        console.warn($scope.langDisplayed);
//        //$scope.graphCtrl.mainLang = i;
//    };
    
  }]);
    
})();