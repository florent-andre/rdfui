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
  .directive('rdfuiLangdisplayed', ['graphService','propertyFilter', 'langFilter',
    function(graphService, propertyFilter, langFilter) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph'],
        templateUrl : 'langs/rdfuiLangdisplayed.tpl.html',
        scope : {
        },
        //priority: 1, // needed for angular 1.2.x
        controller : 'rdfuiLangdisplayedCtrl',
        link: function(scope, elm, attr, ctrls) {
            
            if(ctrls[0]){
                scope.graphCtrl = ctrls[0].scope;
                
                //initialisation of the langDisplayed with the current graphControler values
                //scope.langDisplayed = scope.graphCtrl.languagesDisplayed;
            }
            
            
        },
    };//end return
    
    }]); //end directive
  
})(); //end anonymous function