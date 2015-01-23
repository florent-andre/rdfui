
(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .controller('rdfuiMainlangCtrl', ['$scope', '$q', 'langService',
  function($scope,$q,langService) {

    $scope.name = 'rdfuiMainlangCtrl';
    
//    $scope.mainLangSelected = null;
    
    $q.when(langService.getIsoLangsAsArray()).then(function(data){
        $scope.allLangs = data;
    });
    
//    $scope.langSelected = function(i,m){
//        $scope.graphCtrl.mainLang = i;
//    };
    
  }]);
    
})();