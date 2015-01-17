(function () {
  'use strict';
  
  angular.module('rdf.ui')

   /**
    * @ngdoc service
    * @name ui.tree.service:$helper
    * @requires ng.$document
    * @requires ng.$window
    *
    * @description
    * This service return functions that can be call with an RDF entity as parameter
    * Functions are call filters, they return "true" if entity pass the filter "false" if rejected
    */
    .factory('filtersService', ['$http', '$log', '$q', '$rootScope', 'rdfuiConfig',
      function ($http,$log, $q, $rootScope, rdfuiConfig) {
        
        var self = null;
        var filtersService = {};
        
        function entityPropertyInArray(entity,property,array){
            var values = entity[property];
            //if the for this property is not an array
            if(!Array.isArray(values)){
                return (array.indexOf(entity[property]) != -1);
            }
            
            //if it's an array
            //TODO : use the array.find function when available
            var res = false;
            values.forEach(function(d,i){
               if(array.indexOf(d) != -1 ) {res = true;}
            });
            
            return res;
        }
        
        filtersService.acceptAll = function(){
            return function(){return true;};
        };
        
        filtersService.rejectAll = function(){
            return function(){return false;};
        };
        
        //@deprecated
        filtersService.rejectType = function(/** array of type */ types){
            return function(/**Entity as jsonLD */ entity){
                return !entityPropertyInArray(entity,'@type',types);
            };
        };
        
        //@deprecated
        filtersService.acceptType = function(/** array of type */ types){
            return function(/**Entity as jsonLD */ entity){
                return entityPropertyInArray(entity,'@type',types);
            };
        };
        
        filtersService.compile = function(/** */ filterDef){
            if(!filterDef) {return null;}
            filterDef.fn = function(/**entity as jsonLD*/ entity){
                var res = entityPropertyInArray(entity,filterDef.on.property,filterDef.on.values);
                return filterDef.type == "accept" ? res : !res;
            };
            
            return filterDef.fn;
        };
        
                
        self = filtersService;
        return filtersService;
    }
    ]);

})();