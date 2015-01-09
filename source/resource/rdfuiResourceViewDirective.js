
(function () {
  'use strict';

  angular.module('rdf.ui')
  .directive('rdfuiResourceView', ['graphService',function(graphService) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph'],
        templateUrl : 'resource/rdfuiResourceView.tpl.html',
        scope : {
//            langs : "=", //les langues doivent être générés au niveau du rui-subject
//            selectedLang : "=",
//            subject : "=",
            uri : "@",
        },
        priority: 1, // needed for angular 1.2.x
        link: function($scope, elm, attr, ctrls) {
            
//            var graphCtrl = ;
//            console.log("/////////////////////////////////////////////");
//            console.log(graphCtrl);
//            console.log("/////////////////////////////////////////////");
            
            //TODO : use a if here as this function is called two times : first with values initialized a secondly whith no values...
            //try to check why we have that here.
            if(ctrls[0]){
                
                $scope.graphCtrl = ctrls[0].scope;
                
                $scope.$watch('uri',function(){
                    //TODO : make a service to get the access uri
                    $scope.accessUri = $scope.uri;
                });
                
                $scope.getLiteralValues = function(/**String*/ uri){
                    if(!uri) { return [null]; }
                    var labels = graphService.getLabelFromUri($scope.graphCtrl.graph['@graph'],uri,$scope.graphCtrl.lang.main);
                    return labels.length > 0 ? labels : [null];
                };
            }
            
        }
    };
  }]);
})();