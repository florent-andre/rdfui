

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
            require: ['?^^rdfuiGraph'], //start searching the optional rdfuiGraph controller on the parent DOM node
            scope : {
              graphUri : '@',
              graphData : '=', //use it when you want to load graph data from a locally available jsonld file
              drfType : '@', //dereference type can be 'local' for using the parent graphData or NULL to make a request.
              lazyLoading : '@',
              parameters : '=',
            },
            controller : 'rdfuiGraphCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : 'default';
                return 'graph/rdfuiGraph.'+tName+'.tpl.html';
            },
            compile: function(tElement, tAttr, transclude) {
                var contents = tElement.contents().remove();
                var compiledContents;
                
                var getFirstParent = function(parentGraphCtrl){
                    if(parentGraphCtrl.$parentGraphCtrl){
                        return getFirstParent(parentGraphCtrl.$parentGraphCtrl);
                    }
                    return parentGraphCtrl;
                };
                
                return function(scope, elm, attr, ctrls) {
                    
                    //this need to be placed before the compile for immediate availability for the children nodes
                    //make the parent scope available throw .$parentScope property
                    scope.$parentScope = scope.$parent;
                    
                    if(!compiledContents) {
                        compiledContents = $compile(contents, transclude);
                    }
                    compiledContents(scope, function(clone, scope) {
                             elm.append(clone);
                    });
                    
                    if(ctrls[0]){
                        scope.$parentGraphCtrl = getFirstParent(ctrls[0].scope);
                      
                    }
                    
                    
                };
            },
          };
    }]);
})();
