

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
    .directive('rdfuiSubject', ['$compile',function($compile) {
        return {
            restrict: 'E',
            require: ['?^rdfuiGraph'],
            scope : {
                //TODO : clean properties here, only graphUri is required
              //  langs : "=", //les langues doivent être générés au niveau du rui-subject
              //selectedLang : "=",
              //subject : "=",
              //propertyLabel : "@",
              //graphUri : "@"
//              graphData : "=",
//              templateName : "=",
              //filter : "="
              entity : "=",
              uri : "@" //TODO : define if uri have to be with @ or not. and how to manage if entity and uri are filled.
            },
            //scope:true,
            //priority: 1, // needed for angular 1.2.x
//            priority : 0,
            controller : 'rdfuiSubjectCtrl',
            //transclude : 'element',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : "blank";
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
                    }
                    
                };
            },
            
          };
    }]);
})();
