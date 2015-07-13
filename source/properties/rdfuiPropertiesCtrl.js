(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiPropertiesCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService', 'arrayService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService,arrayService) {
        this.scope = $scope;
        
        //TODO :: see if we can move this functions into the rdfuiFilterService as a properties filter
        var propertyFilter = function(entityProp,properties){
            
            //TODO : use the array.find function when available
            var res = false;
            if(properties.indexOf(entityProp) != -1 ) {res = true;}
            
            return res;
        };
        
        var compile = function(/** */ filterDef){
            if(!filterDef) {return null;}
            filterDef.fn = function(entityProp){
                var res = propertyFilter(entityProp,filterDef.properties);
                return filterDef.type == 'accept' ? res : !res;
            };
            
            return filterDef.fn;
        };
        //END TODO :: see if we can move this functions into the rdfuiFilterService as a properties filter
        
        var getFromDisplayConfig = function(val){
            
            var index = arrayService.lazyIndexOf(displayConfig,
                    function(a,b){return a.short == b;},
                    val
            );
            
            return index == -1 ? null : displayConfig[index];
            
        };
        
        var buildPropertyObject = function(short,weight,full,human){
            var res = {};
            if(short){
                res.short = short;
                //TODO : retrive the full from here
            }
            if(weight){
                res.weight = weight;
            }else{
                res.weight = -10;
            }
            if(full){
                res.full=full;
                //TODO : check the consistency with the full url retrived of throw a warning
                //TODO : extract the short if possible and not already existing
            }
            if(human){
                res.human = human;
            }else{
                res.human = res.short;
            }
            return res;
        };
        
        var updateProperties = function(nv){
            var prop = []; //Object.keys(nv).filter(compile($scope.propertiesFilter));
            
            var filterFn = compile($scope.propertiesFilter);
            
            if(nv){
              //step1 filter
                Object.keys(nv).forEach(function(d){
                    
                    var index = arrayService.lazyIndexOf($scope.propertiesFilter.properties,
                            function(a,b){ return a.short == b;},
                            d
                    );
                    
                    var filterResult = -1 != index;
                        
                    
                    filterResult = $scope.propertiesFilter.type == 'accept' ? filterResult : !filterResult;
                    
                    if(filterResult){
                        if(index != -1) {
                            prop.push($scope.propertiesFilter.properties[index]);
                        }else{
                            var v = getFromDisplayConfig(d);
                            if ( v == null){
                                v = buildPropertyObject(d,null,null,null);
                            }
                            prop.push(v);
                        }
                    }
                    
                });
                
                //step2 sort
                prop = prop.sort(function(a,b){
                    return b.weight - a.weight;
                });
            }
            
            
            $scope.$properties = prop;
        };
        
        var displayConfig = [ buildPropertyObject('prefLabel',10,null,'Prefered Label'),
                               buildPropertyObject('definition',5,null,'Definition'),
                               buildPropertyObject('exactMatch', 3,null,'exactMatch'),
                               buildPropertyObject('http://www.w3.org/2008/05/skos-xl#prefLabel', 8,null,null),
                              ];
        var filters = {
                minimalDisplay : {
                        type : 'accept',
                        properties : [ buildPropertyObject('prefLabel',10,null,'Prefered Label'),
                                       buildPropertyObject('definition',5,null,'Definition'),
                                       //buildPropertyObject('exactMatch', 20,null,'exactMatch'),
                                       buildPropertyObject('http://www.w3.org/2008/05/skos-xl#prefLabel', 8,null,null)
                                      ]
                },
        
                fullDisplay : {
                    type : 'reject',
                    properties : [buildPropertyObject('@id',null,null,null),
                                  buildPropertyObject('@type',null,null,null),
                                  buildPropertyObject('$_children',null,null,null),
                                  buildPropertyObject('$$hashKey',null,null,null),
                                  ]
                },
        
                lightDisplay : {
                    type : 'accept',
                    properties : [ buildPropertyObject('prefLabel',10,null,'Prefered Label'),
                                   buildPropertyObject('http://www.w3.org/2008/05/skos-xl#literalForm',5,null,'XL Literal Form'),
                                  ]
                },
        };
        
        $scope.propertiesFilter = filters.minimalDisplay;
        
        
        //TODO : use a watch collection to react on change for the differents attributes
        $scope.$watch('entity',function(nv,ov){
            if(nv){
                
                //TODO :: remove that when okay.
                $scope.$properties = [];
                //TODO : use the filter definition here instead where we add $_* and @id
                Object.keys(nv).forEach(function(d){
                    if( !((d == '@id') || d == '@type' || d.indexOf('$_') === 0)){
                        $scope.$properties.push(d);
                    }
                });
                
                updateProperties(nv);
            }
        });
        
        $scope.$watch('propertiesFilter',function(nv,ov){
            if(nv){
                updateProperties($scope.entity);
            }
        });
        
        $scope.$watch('filtername',function(nv,ov){
           if(nv){
               if(filters[nv]){
                   $scope.propertiesFilter = filters[nv];
                   updateProperties($scope.entity);
               }else{//default value
                   $scope.propertiesFilter = filters.fullDisplay;
                   updateProperties($scope.entity);
               }
           }
        });
        
        var expandText = '+';
        var colapseText = '-';
        
        $scope.toggleText = expandText;
        
        $scope.toggle = function(){
            $scope.toggleText = $scope.toggleText == expandText ? colapseText : expandText;
            $scope.propertiesFilter = $scope.propertiesFilter == filters.fullDisplay ? filters.minimalDisplay : filters.fullDisplay;
        };
        
        return $scope;
        
        
      }
    ]);
})();
