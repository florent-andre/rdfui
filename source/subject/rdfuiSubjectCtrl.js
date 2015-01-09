(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiSubjectCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;
        
        //TODO : use a watch collection to react on change for the differents attributes
        $scope.$watch('entity',function(nv,ov){
            if(nv){
                
                //TODO :: this filtering have to be done in "rdfui-properties" dom node
                $scope.$properties = [];
                //TODO : use the filter definition here instead where we add $_* and @id
                Object.keys(nv).forEach(function(d){
                    if( !((d == "@id") || d == "@type" || d.indexOf("$_") === 0)){
                        $scope.$properties.push(d);
                    }
                });
            }
        });
        
        return $scope;
        
        
      }
    ]);
})();
