
(function () {
  'use strict';

  angular.module('rdf.ui')
  .directive('rdfuiObject', ['$compile', 'graphService',function($compile, graphService) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph','^rdfuiProperty','^rdfuiObjects'],
        scope : {
            object : '='
        },
        controller : 'rdfuiObjectCtrl',
        transclude : true,
        templateUrl : function(elem,attrs){
            var tName = attrs.templateName ? attrs.templateName : 'default';
            return 'object/rdfuiObject.'+tName+'.tpl.html';
        },
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
                
                if(ctrls.length === 3){
                    scope.graphCtrl = ctrls[0].scope;
                    scope.propertyCtrl = ctrls[1].scope;
                    scope.objectsCtrl = ctrls[2].scope;
                }
                
            };
        },
    };
  }]);
})();