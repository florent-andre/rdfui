

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
    
    .directive('rdfuiLiteralEdit', [ 'graphService',function(graphService) {
    return {
        restrict: 'E',
        require: 'ngModel',
        templateUrl : 'literal/rdfuiLiteralEdit.tpl.html',
        scope : {
            langs : '=',
            selectedLang : '=',
            property : '='
        },
        priority: 1, // needed for angular 1.2.x
        link: function(scope, elm, attr, ngModel) {
            
            ngModel.$render = function(){
                scope.literal = angular.copy(ngModel.$viewValue,{});
            };
        
            //main model --> directive's model
            scope.$watch(function(){return ngModel.$viewValue;},function(newval,oldval){
                if(!oldval){
                    return;
                }
                scope.literal['@value'] = newval['@value'];
                scope.literal['@language'] = newval['@language'];
            },true);
            
            //directive's model --> main model
            scope.$watch('literal',function(newval,oldval){
                if(!oldval) {
                    return;
                }
                if(scope.literalForm.$valid){
                    //check if some changes occur
                    if(ngModel.$viewValue['@value'] != newval['@value']
                    ||
                    ngModel.$viewValue['@language'] != newval['@language']){
                        graphService.buildChanges(null,scope.property,[ngModel.$viewValue,newval]);
                        ngModel.$viewValue['@value'] = newval['@value'];
                        ngModel.$viewValue['@language'] = newval['@language'];
                    }
                    
                  }else{
                    //the form is not valid, so we don't update the model
                      console.log('the form is not valid, so we don\'t update the model');
                  }
            },true);
            
        }
    };
    }]);
})();