

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
    .directive('rdfuiObjects', ['$compile', 'graphService', function($compile, graphService) {
        return {
            restrict: 'E',
            //require: ['?^rdfuiGraph','^rdfuiProperty'],
            require: ['?ngModel','?^rdfuiGraph','?^rdfuiProperty'],
            scope : {
                //TODO : clean properties here, only graphUri is required
              //  langs : "=", //les langues doivent être générés au niveau du rui-subject
              //selectedLang : "=",
              //subject : "=",
              //propertyLabel : "@",
              //graphUri : "@"
//              graphData : "=",
              templateName : "=",
              objects : "="
//              filter : "="
            },
            //scope:true,
            //priority: 1, // needed for angular 1.2.x
            controller : 'rdfuiObjectsCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : "default";
                return 'objects/rdfuiObjects.'+tName+'.tpl.html';
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
                    
                    if(ctrls.length == 3){
                        scope.ngModelObjects = ctrls[0];
                        scope.graphCtrl = ctrls[1].scope;
                        scope.propertyCtrl = ctrls[2] ? ctrls[2].scope : null;
                        
                        scope.graphCtrl.initiated.then(function(){
                            
                            scope.hasType = graphService.guessObjectsType(scope.graphCtrl.graph, scope.propertyCtrl.propertyName, scope.objects);
                            
                        });
                        
                        
                    }
                    
                };
            },
            
          };
    }]);
})();
