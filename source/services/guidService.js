(function() {
  'use strict';

  angular.module('rdf.ui')

   /**
    * @ngdoc service
    * @name rdf.ui.service:guid
    *
    * @description
    * angular-ui-tree.
    */
    .factory('guidService', [
      function () {
        var self = null;
        var guidService = {};

        guidService.guid = function(){
          var guid = (S4() + S4() + '-' + S4() + '-4' + S4().substr(0,3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
          return(guid);
        };

        function S4(){
          return (((1+Math.random())*0x10000)).toString(16).substring(1);
        }

        self = guidService;
        return guidService;
      }



      ]);

})();