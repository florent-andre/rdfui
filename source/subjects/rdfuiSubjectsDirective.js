

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
    .directive('rdfuiSubjects', ['$compile',function($compile) {
        return {
            restrict: 'E',
            require: ['?^rdfuiGraph'],
            scope : {
              graphData : "=",
              templateName : "=",
              filter : "=",
            },
            controller : 'rdfuiSubjectsCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : "default";
                return 'subjects/rdfuiSubjects.'+tName+'.tpl.html';
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
                        scope.graphCtrl = ctrls[0].scope;
                        //Expose the user controler before the use of graph directive
                        scope.$parentScope = scope.graphCtrl.$parentScope;
                        scope.toto = scope.graphCtrl;
                        console.log("*******************");
                        console.log(scope.$parentScope);
                        console.log(scope.graphCtrl.$parentScope == null);
                    }
                    
                };
            },
            
          };
    }]);
})();
