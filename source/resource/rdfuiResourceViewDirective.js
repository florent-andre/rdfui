
(function () {
  'use strict';

  angular.module('rdf.ui')
  .directive('rdfuiResourceView', ['$compile','graphService',function($compile, graphService) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph'],
        scope : {
            templateName : '=',
            uri : '@',
        },
        transclude : true,
        templateUrl : function(elem,attrs){
            var tName = attrs.templateName ? attrs.templateName : 'default';
            return 'resource/rdfuiResourceView.'+tName+'.tpl.html';
        },
        controller : 'rdfuiResourceViewCtrl',
        
        compile: function(tElement, tAttr, transclude) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, elm, attr, ctrls) {
                
                if(!compiledContents) {
                    compiledContents = $compile(contents, transclude);
                }
                compiledContents(scope, function(clone, scope) {
                         elm.append(clone);
                });
                
                if(ctrls[0]){
                    scope.graphCtrl = ctrls[0].scope;
                }
                
                //TODO : review this part, not still used since migration
                scope.$watch('uri',function(){
                    //TODO : make a service to get the access uri
                    scope.accessUri = scope.uri;
                });
                
                scope.getLiteralValues = function(/**String*/ uri){
                    if(!uri) { return [null]; }
                    var labels = graphService.getLabelFromUri(scope.graphCtrl.graph['@graph'],uri,scope.graphCtrl.lang.main);
                    return labels.length > 0 ? labels : [null];
                };
                
            };
        },
        
    };//end return
  }]); //end directive
})();