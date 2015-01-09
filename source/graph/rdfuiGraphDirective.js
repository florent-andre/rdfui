

/**
 * Directive that build a 2 inputs fields for create a literal.
 * 
 * The main model is changed only if the 2 required inputs are valid.
 * 
 * To manage this, this directive deal with an internal model (scope.literal) that maintain copies of the 
 * main model values.
 */
(function () {

    'use strict';
    
    angular.module('rdf.ui')
    .directive('rdfuiGraph', ['$compile', function($compile) {
        return {
            restrict: 'E',
            require: ['?^^rdfuiGraph'], //start searching the optionnal rdfuiGraph controller on the parent DOM node
            scope : {
              graphUri : "@",
              drfType : "@" //dereference type can be "local" for using the parent graphData or NULL to make a request.
            },
            controller : 'rdfuiGraphCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : "default";
                return 'graph/rdfuiGraph.'+tName+'.tpl.html';
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
                    
                    if(ctrls[0]){
                        scope.$parentGraphCtrl = ctrls[0].scope;
                    }
                    
                };
            },
          };
    }]);
})();
