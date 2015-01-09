(function () {
  'use strict';

  angular.module('rdf.ui')

/**
 * Directive that build a 2 inputs fields for create a literal.
 * 
 * The main model is changed only if the 2 required inputs are valid.
 * 
 * To manage this, this directive deal with an internal model (scope.literal) that maintain copies of the 
 * main model values.
 */
  .directive('rdfuiProperty', ['$compile', 'graphService','propertyFilter', 'langFilter',
    function($compile, graphService, propertyFilter, langFilter) {
    return {
        restrict: 'E',
        require: ['ngModel','?^rdfuiGraph'],
        scope : {
            langs : "=", //les langues doivent être générés au niveau du rui-subject
            selectedLang : "=",
            subject : "=",
            propertyLabel : "@",
            templateName : "=",
        },
        transclude : true,
        templateUrl : function(elem,attrs){
            var tName = attrs.templateName ? attrs.templateName : "default";
            return 'property/rdfuiProperty.'+tName+'.tpl.html';
        },
        controller : 'rdfuiPropertyCtrl',
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
                
              //TODO : use a if here as this function is called two times : first with values initialized a secondly whith no values...
                //try to check why we have that here.
                if(ctrls[1]){
                    scope.graphCtrl = ctrls[1].scope;
                    
                    //TODO : create a service for "deference" depending on context the name of the property
                    
                    scope.objects = [];
                    scope.isResource = false;
                    
                    //TODO : use scope binding instead of attr ? Not sure
                    attr.$observe('propertyName',function(value){
                        scope.propertyName = value;
                        scope.graphCtrl.initiated.then(function(){
                            scope.isResource = graphService.isResource(scope.propertyName,scope.graphCtrl.graph);
                        });
                        
                    });
                    
                    //TODO : remove that to use directly ng-model
                    scope.$watch('subject',function(nv,ov){
                        if(nv != null){
                            var objs = nv[scope.propertyName];
                            if(!objs) {objs = [];}
                            if (!Array.isArray(objs)){ objs = [objs];}
                            scope.objects = objs;
//                            if(scope.objects && typeof scope.objects[0] == 'string') {
//                                scope.isResource = true;
//                            }
                        }
                        
                    });
                    
                    scope.graphCtrl.getLinkableConcepts().then(function(d){
                        scope.values = d;
                        scope.values.forEach(function(val,i){
                            var p = propertyFilter(val,"prefLabel");
                            if(p){
                                val.$literals = langFilter(p,scope.graphCtrl.mainLang);
                            }else{
                                //warning :: objects with no literal in the main langage 
                                console.warn(val);
                            }
                        });
                        
                    });
                }
                
            };
        },
        
    };//end return
    
    }]); //end directive
  
})(); //end anonymous function