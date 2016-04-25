

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
    .directive('rdfuiMetadata', ['$compile', 'rdfuiConfig', 'graphService', 'langService','arrayService',
                                 function($compile,rdfuiConfig,graphService,langService,arrayService) {
        return {
            restrict: 'A',
            require: ['?^rdfuiGraph'], //start searching the optionnal rdfuiGraph controller on the parent DOM node
            
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
                        scope.$graphCtrl = ctrls[0].scope;
                        
                        //1° TODO : a call to the graphService with an object definition of the retrive config
                        //{ scheme : 'urn:x-metadata', endpoint : 'function(uri){ ... }'}
                        var scheme = 'urn:x-metadata:';
                        var parameters = {
                                scheme : scheme, //the default one 
                                queryFn : function(/*string*/ uri){
                                    return rdfuiConfig.server+'graphs?scheme='+scheme+'&uri='+uri;
                                }
                        };
                        
                        graphService.getGraphData(scope.$graphCtrl.graphUri,parameters).then(function(data){
                            //graph language definition from metadatas
                            arrayService.merge(scope.$graphCtrl.lang.available, langService.getLanguagesFromMetadata(data));
                            //for now, by default, choose the first language of the list as mainlang
                            scope.$graphCtrl.lang.main = scope.$graphCtrl.lang.available[0];
                            //for now, by default, display all the languages
                            scope.$graphCtrl.lang.displayed = scope.$graphCtrl.lang.available;
                            
                            //if no language list defined in the metadata
                            if(!scope.$graphCtrl.lang.available){
                                console.warn('there is no languages defined in the metadata of this graph !');
                                console.warn('fallback to some default values');
                                scope.$graphCtrl.lang.main = 'fr';
                                scope.$graphCtrl.lang.available = ['en','fr','es'];
                                scope.$graphCtrl.lang.displayed = scope.$graphCtrl.lang.available;
                            }
                            
                        });
                        //1.1) mettre en place l'appel pour le test
                        
                        //2) check si il y a une balise de langue définie
                        //3) si non, faire appel à la fonction de lang guesser
                        //4) rajouter les langues et le type de language code utilisé dans les métadata.
                    }
                    
                };
            },
          };
    }]);
})();
