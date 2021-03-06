/**
 * @license Angular UI Tree v2.1.5
 * (c) 2010-2014. https://github.com/JimLiu/angular-ui-tree
 * License: MIT
 */
(function () {
  'use strict';
  //
  angular.module('rdf.ui', ['rdf.ui.tpl','ui.select','ui.bootstrap'])
      //TODO : update this constants definitions
    .constant('treeConfig', {
      treeClass: 'angular-ui-tree',
      emptyTreeClass: 'angular-ui-tree-empty',
      hiddenClass: 'angular-ui-tree-hidden',
      nodesClass: 'angular-ui-tree-nodes',
      nodeClass: 'angular-ui-tree-node',
      handleClass: 'angular-ui-tree-handle',
      placeHolderClass: 'angular-ui-tree-placeholder',
      dragClass: 'angular-ui-tree-drag',
      dragThreshold: 3,
      levelThreshold: 30
    })
    
    .constant('rdfuiConfig', {
        server: 'http://127.0.0.1:8080/',
        /*emptyTreeClass: 'angular-ui-tree-empty',
        hiddenClass: 'angular-ui-tree-hidden',
        nodesClass: 'angular-ui-tree-nodes',
        nodeClass: 'angular-ui-tree-node',
        handleClass: 'angular-ui-tree-handle',
        placeHolderClass: 'angular-ui-tree-placeholder',
        dragClass: 'angular-ui-tree-drag',
        dragThreshold: 3,
        levelThreshold: 30*/
      });

})();

(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .filter('property',function(){
        return function(input,propName){
            return input[propName];
        };
  })
    
  .filter('lang',function(){
        return function(input,lang){
            var result = [];
            if(!Array.isArray(input)) { input = [input];}
            input.forEach(function(d,i){
                if(d['@language'] == lang) {
                    result.push(d['@value']);
                }
            });
            return result;
        };
  })
  
  //TODO : see how to chain filter inside a filter to create a propLang filter
  
  
  /**
  * Filter that can filter results with a OR on differents properties
  * "person in people | filter: {name: $select.search, age: $select.search}"
  * performs a AND between 'name: $select.search' and 'age: $select.search'.
  */
  .filter('propsFilter', function() {
      return function(items, props) {
          
          function hasMatch(arr,text){
              var res = false;
              arr.some(function(d){
                 if(d.toString().toLowerCase().indexOf(text) !== -1){
                     res = true;
                     return true;
                 }
              });
              return res;
          }
          
          var out = [];
          if (angular.isArray(items)) {
              items.forEach(function(item) {
                  var itemMatches = false;
                  var keys = Object.keys(props);
                  for (var i = 0; i < keys.length; i++) {
                      var prop = keys[i];
                      var text = props[prop].toLowerCase();
                      if(item[prop]){
                          var values = item[prop];
                          if(!angular.isArray(values)) {values = [values];}
                          if(hasMatch(values,text)){
//                          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                              itemMatches = true;
                              break;
                          }
                      }
                  }
                  if (itemMatches) {
                      out.push(item);
                  }
              });
          } else {
              // Let the output be the input untouched
              out = items;
          }
          return out;
      };
  })
  
  
  ;
  
}());
    
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
                return filterDef.type == 'accept' ? res : !res;
            };
            
            return filterDef.fn;
        };
        
                
        self = filtersService;
        return filtersService;
    }
    ]);

})();
(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiGraphCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'arrayService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService, arrayService) {
        this.scope = $scope;
        
                
        $scope.initialisation = $q.defer();
        $scope.initiated = $scope.initialisation.promise;
        
        $scope.name = 'graphCtrl';
        
        $scope.graph = null;
        
        $scope.currentNode = null;
        
        $scope.lang = {};
        $scope.lang.main = 'fr';
        $scope.lang.available = ['en','fr','es'];
        $scope.lang.displayed = $scope.lang.available;
        
        $scope.availableProperties = [];
        
        
        $scope.$watch('graphUri',function(nv,ov){
            if(nv){
                $scope.loadGraph();
            }
        });
        
        $scope.$watch('graphData',function(nv,ov){
            if(nv){
                $scope.initialisation = $q.defer();
                $scope.initiated = $scope.initialisation.promise;
                $scope.graph = nv;
                
                $scope._postLoad();
                $scope.initialisation.resolve();
            }
        });
        
        $scope.loadGraph = function(){
//            
//            $scope.initialisation = $q.defer();
//            $scope.initiated = $scope.initialisation.promise;
            
            //options for lazy loading
              if($scope.lazyLoading){
                  graphService.getLazyGraph($scope.graphUri, $scope.parameters, true).then(function(data){
                      $scope.graph = data;
                      //TODO : ?? remove the graphTree building here as it's now done in a specific controller, right ??
                      //$scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                      $scope._postLoad();
                      $scope.initialisation.resolve();
                  });
                  return;
              }
              
              //option for 'normal fetching' and local graph extraction
              if(!$scope.drfType){
                  graphService.getLazyGraph($scope.graphUri, $scope.parameters, false).then(function(data){
                      
                      $scope.graph = data;
                      //TODO : ?? remove the graphTree building here as it's now done in a specific controller, right ??
                      $scope.graphTree = graphService.getTreeRepresentation(data);//['@graph'];
                      
                      $scope._postLoad();
                      $scope.initialisation.resolve();
                  });
              }else{ //a drfType is filled, so we go local (only option for now)
                  
                  //TODO : clean this... maybe define a drf service that return a standard object for all dereferences types
                  $scope.graph = {};
                  $scope.graph['@context'] = angular.copy($scope.$parentGraphCtrl.graph['@context']);
                  $scope.graph['@graph'] = [graphService.findNode($scope.$parentGraphCtrl.graph,$scope.graphUri)];
                  
                  $scope._postLoad();
                  $scope.initialisation.resolve();
              }
          };
          
        $scope._postLoad = function(){
            $scope.availableProperties = graphService.getProperties($scope.graph);
        };
        
        $scope.getLiteralValues = function(/**String*/ uri){
            var labels = graphService.getLabelFromUri($scope.graph['@graph'],uri,$scope.lang.main);
            return labels.length > 0 ? labels : [null];
        };
        
        $scope.setCurrentNode = function(/**String*/nodeUri){
            var g = $scope.graph['@graph'];
            var index = arrayService.lazyIndexOf(g,function(a,b){
                return a['@id'] == b;
            },nodeUri);
            $scope.currentNode = g[index];
            
        };
        
        
        $scope.getLinkableConcepts = function(){
            
            var dfd = $q.defer();
            $scope.initiated.then(function(){
                dfd.resolve($scope.graph['@graph']);
            });
            //for now return all the graph, but have to do a filter on it for no parent circle relations
            return dfd.promise;
        };
        
        //TODO : use an objet for the text to be updated
        $scope.isEdit = true;
        $scope.isEditText = 'View';
        
        $scope.switchEdit = function(){
            $scope.isEdit = !$scope.isEdit;
            $scope.isEditText = $scope.isEdit ? 'View' : 'Edit';
        };
        
        $scope.remove = function(node){
            console.log('TODO : implement this');
            console.warn(node);
        };
        
        $scope.newSubItem = function(node){
            console.log('TODO : implement this');
            console.warn(node);
        };
        
        return $scope;
        
        
      }
    ]);
})();



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
    * angular-ui-tree.
    */
    .factory('graphService', ['$http', '$log', '$q', '$rootScope', 'rdfuiConfig', 'filtersService', 'arrayService', 'guidService',
      function ($http,$log, $q, $rootScope, rdfuiConfig, filtersService, arrayService, guidService) {
        var currentTermino = null;

        var self = null;
        var graphService = {};

        /**
         *
         * @returns all the terminologies the user can access to.
         */
        /*graphService.getCurrentTerminos = function(force){
            var $dfd = $.Deferred();
            console.log('=======> caull search termino');
            if(currentTermino && !force){
                $dfd.resolve(currentTermino);
                return $dfd.promise();
            }

            $.when(self.searchTerminos('*')).then(function(results){
                currentTermino = results;
                $dfd.resolve(currentTermino);
            });

            //$dfd.resolve( currentTermino );
            return $dfd.promise();

        };*/

        /**
         * return terminology information for a current uri
         * @param uri
         * @returns
         */
        /*graphService.getCurrentTermino = function(uri){
            console.warn('@DEPRECATED : not still use this function as really low. Implement a faster one on use graphService.getMetadata(graphUrl)')
            var $dfd = $.Deferred();
            var encUri = uri.replace(/ /g,'%20');
            $.when(self.getCurrentTerminos()).then(function(result){

                result.some(function(d){
                    console.warn(d.gUrl);
                    if(d.gUrl == uri || d.gUrl == encUri){
                        $dfd.resolve(d);
                        return true;
                    }
                });

            });

            return $dfd.promise();
        };*/

        /**
         * return a metadata object for a graph
         * @param graphUri
         */
        /*graphService.getMetadata = function(graphUri){
            var $dfd = $q.defer();//$.Deferred();

            $http({
                url : lh.server+'skosifier/metadata?for='+graphUri,
                method : 'GET',
                headers : {'Accept':'application/json'},
                //dataType : 'json',
                })
                .success(function(data){
                    console.log('$$$$$$$$$$$$$$');
                    console.log(data);

                    organisationFactory.getById(data.creator).then(function(_org){
                        $dfd.resolve({
                            //TODO : remove this un-escape when title is clean
                            title : unescape(data.title),
                            data : data,
                            gUrl : graphUri,
                            langs : data.language,
                            editUrl : './edit/index.html?uri='+graphUri, //TODO : see to remove this information as this is not generic.
                            org : _org[0],
                        });
                    });
                });

            return $dfd.promise;
        };
        */

        /*graphService.createNew = function(jmapping, stringFile,fileFormat) {

//            $('#imageLoader').html('<img src='./import/images/ajax-loader1.gif'>');
//            $('#submit').css('display','none');
//            console.log('jmapping : ');
//            console.log(jmapping);
            var form = new FormData();

            stringFile = (!stringFile) ? '' : stringFile;
            var fileType = 'text/plain';
            if(fileFormat && fileFormat.fileType) fileType = fileFormat.fileType;

            console.warn('TODO : be sure to fix the correct file type (text/xml for skos)' + fileType);
            console.warn('TODO : put this as a parameter of the function');
            var blob = new Blob([stringFile],{type : fileType});
            form.append('file',blob);
            form.append('conf',JSON.stringify(jmapping));

            console.log(form);

            console.warn('!!!!!!!!! fix the auth');
            console.warn('******* fix the autor pass :: get the code and not the name');
            //TODO : remove this asap
            var bytes = CryptoJS.enc.Utf8.parse('admin' + ':' + 'admin');
            //var bytes = CryptoJS.enc.Utf8.parse('tto' + ':' + 'toto');
            var pw = 'Basic ' + CryptoJS.enc.Base64.stringify(bytes);

            //TODO : faire un return qd debug ok
//            return

            return $http({
                method : 'POST',
                url : lh.server + 'skosifier',
                data: form,
                //angular workaround in order to send : headers: {'Content-Type': 'multipart/form-data'},
                //source : http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined,
                        'Authorization' : pw
                    }
            });
        }

        */
        //TODO :: dataCache is deprecated use graphCache instead
        //@deprecated
        var dataCache = [];
        var getWatchDog = function(index){
            return dataCache[index];

        };

        //manage defereds for retrieving the graphs.
        var graphInit = [];

        var graphCache = {};

        graphService._postProcess = function(data,parameters,graphUri){
            dataCache.push(data);
            graphCache[parameters.scheme+graphUri] = data;

            //do normalisation of the graph serialization with adding an @graph property if not present
            if(!data['@graph']){

                var graphObject = {};
                Object.keys(data).forEach(function(k){
                    //we keep this two properties
                    if(! (k == '@context' || k == '@graph')){
                      //we move the others
                        graphObject[k] = data[k];
                        delete data[k];
                    }

                });

                //we finally build the @graph property :
                data['@graph'] = [graphObject];
            }
            
            //make all the objects values as array to be able to add and remove directly in the model
            data['@graph'].forEach(function(node){
                Object.keys(node).forEach(function(k){
                    if(k != '@id'){
                        if (!Array.isArray(node[k])){ node[k] = [node[k]];}
                    }
                    
                });
            });
            
            //add the information about the graphUri
            data.$graphUri = graphUri;
        };


        graphService.createGraph = function(/**String*/graphUri, /*graphQueryParameter*/ parameters, /*jsonld*/ initData){
            if(!parameters){
                parameters = {
                        scheme : '', //the default one
                        queryFn : function(/*string*/ uri){
                            return {
                                method : 'POST',
                                url : rdfuiConfig.server+'graph/data/*/'+uri,
                                data : initData
                            };
                        }
                };
            }

            var $dfd = $q.defer();

            $http(parameters.queryFn(graphUri)).success(function(data){
                self._postProcess(data,parameters,graphUri);
                $dfd.resolve(data);
            });

            return $dfd.promise;

        };

        //TODO : remove getGraphData and then rename getLazyGraph into getGraphData
        graphService.getLazyGraph = function(/**String*/graphUri, /*graphQueryParameter*/ parameters, /*boolean*/ lazy){
            if(!parameters && !lazy){
                parameters = {
                        scheme : '', //the default one
                        queryFn : function(/*string*/ uri){
                            return {
                                method : 'GET',
                                url : rdfuiConfig.server+'skosifier?uri='+uri,
                            };
                        }
                };
            }
            
            var $dfd = $q.defer();
            graphInit.push($dfd);
            var uri = graphUri.replace(/ /g,'%20');

            if(lazy && !parameters){
                var data = {};
                data.$graphUri = graphUri;
                //self._postProcess(data,parameters,graphUri);
                $dfd.resolve(data);
                return $dfd.promise;
            }

            $http(parameters.queryFn(graphUri)).success(function(data){
                self._postProcess(data,parameters,graphUri);
                $dfd.resolve(data);
            });

            return $dfd.promise;

        };



        graphService.getGraphData = function(/**String*/graphUri, /*graphQueryParameter*/ parameters){

            if(!parameters){
                parameters = {
                        scheme : '', //the default one
                        queryFn : function(/*string*/ uri){
                            return rdfuiConfig.server+'skosifier?uri='+uri;
                        }
                };
            }
            console.log('getGraphData step 1');
            var $dfd = $q.defer();//$.Deferred();

            graphInit.push($dfd);

            var uri = graphUri.replace(/ /g,'%20');
            console.log('getGraphData : ' + uri);
            console.log('avant ajax');
            console.log(parameters.queryFn(uri));
            $http({
                method : 'GET',
                url : parameters.queryFn(uri), //rdfuiConfig.server+'skosifier?uri='+uri,
                //headers: {'Accept':'application/json-ld'}
            }).success(function(data){
                //TODO : use self._postProcess(data);
                console.log(data);
                dataCache.push(data);
                graphCache[parameters.scheme+graphUri] = data;

                //do normalisation of the graph serialization with adding an @graph property if not present
                if(!data['@graph']){

                    var graphObject = {};
                    Object.keys(data).forEach(function(k){
                        //we keep this two properties
                        if(! (k == '@context' || k == '@graph')){
                          //we move the others
                            graphObject[k] = data[k];
                            delete data[k];
                        }

                    });

                    //we finally build the @graph property :
                    data['@graph'] = [graphObject];
                }
                console.log(data);
                $dfd.resolve(data);
            }).error(function(){
                console.log('ERROR');
            });

            return $dfd.promise;
        };

        //@deprecated
        graphService.isReference = function(/*String*/ propertyName, /*String or jsonLD*/ graph){
            console.warn('@deprecated :: use .isResource instead');
            return self.isResource(propertyName,graph);
        };

        graphService.isResource = function(/*String*/ propertyName, /*String or jsonLD*/ graph){
            if(!graph['@graph']) {graph = graphCache[graph];}

            if(graph['@context'][propertyName]){
                return graph['@context'][propertyName]['@type'] ?
                        graph['@context'][propertyName]['@type'] == '@id' ? true : false : false;
            }else{
                throw new RangeError('The property ' + propertyName + ' is not defined in this graph context');
            }
        };


        graphService.guessObjectsType = function(/*String or jsonLD*/ graph, /*String*/ propertyName, /*Array of objects*/ objects){

            var hasType = {};
            try{
                hasType.resource = self.isResource(propertyName,graph);
            }catch(e){
//                console.trace( e.message +' , so we guess it's a literal');
                hasType.resource = false;
            }
            hasType.literal = !hasType.resource;

            if(hasType.literal){
                //try now to guess if it's a plain or a typed literal
                hasType.literalType = {};
                if(!objects[0]){ //if there is no object (during creation of a new property)
                    //we automatically define it as plain
                    //TODO : do a better selection based on model
                    hasType.literalType.plain = true;
                    
                }else{
                  //we take the first object
                    var obj = objects[0];
                    hasType.literalType.plain = obj['@language'] ? true : false;
                }
                
                hasType.literalType.typed = !hasType.literalType.plain;
            }
            return hasType;
        };

        graphService.getPropertiesList = function(/*jsonLD*/ graph){
            return Object.keys(graph['@context']);
        };

        graphService.getLiteralProperties = function(/*jsonLD*/graph){
            return self.getPropertiesList(graph).filter(function(d){
                return !self.isResource(d);
            });
        };


        graphService.doFilter = function(/**jsonLD or array*/ graph, /**filter function*/ filterFn){
            if(!filterFn) {filterFn = filtersService.acceptAll();}
            var data = graph['@graph'] ? graph['@graph'] : graph;
            return data.filter(filterFn);

        };

        graphService.getTreeRepresentation = function(/**jsonLD*/ graph,
                /**filter function*/ filter,
                /**String */ parentProperty
                ){

            if(!filter) {filter = filtersService.acceptAll();}
            //TODO : for now only deal with broader as default, use json-ld description to find out witch one is with @id.
            if(!parentProperty) {parentProperty = 'broader';}

            var data = graph['@graph'];
                return data.reduce(function(previous,current,index,array){
                    
                    //manage case were the only item in the @graph array is a null element
                    if(!current){return previous;}
                    
                    if(!filter.call(null,current)) {return previous;}
                    //0) we add a $_children array to all elements in order to allow drag children for all
                    if(!current.$_children) { current.$_children = []; }
                    //1) check if there is a broader property or not
                    if(!current[parentProperty]){
                        previous.push(current);
                    }else{
                        //searching the broader elements in the graph
                        var elements = Array.isArray(current[parentProperty]) ? current[parentProperty] : [current[parentProperty]];
                        //console.log(elements);
                        elements.forEach(function(d,i){
                            var b = graphService.findNode(data,d);
                            if(b){
                                //do the parent already had a children array ?
                                if(b.$_children){

                                    //is this element not already in the children array ?
                                    if(b.$_children.indexOf(current) == -1){
                                        //then add it
                                        b.$_children.push(current);
                                    }//else do nothing.
                                }else{
                                    //the parent don't have children array so we create it
                                    b.$_children = [current];
                                }
                            }else{
                                //TODO : find a better way to manage that.
                                console.error('Ce broader n\'existe pas dans le graph, problème de consistance');
                            }
                        });

                    }

                    return previous;

                },[]);
        };

        graphService.getLabelFromUri = function(/**jsonLD*/ graph, /**String*/ nodeUri, /**string*/lang){
            //TODO : make this value as a variable
            var property = 'prefLabel';
            var node = graphService.findNode(graph,nodeUri);
            if(node){

                if(node[property] && Array.isArray(node[property])){
                    // return all representations for a property
                    return node[property].reduce(function(previous,current){
                        if(current['@language'] == lang) { previous.push(current); }
                        return previous;
                    },[]);
                }

                if(node[property]){
                    if(node[property]['@language'] == lang) { return [node[property]]; }
                    return [];
                }

                return [];

            }else{
                console.warn('TODO : define return code');
            }
        };

        graphService.findNode = function(g,nodeUri){
            var graph = Array.isArray(g) ? g : g['@graph'];

            var index = arrayService.lazyIndexOf(graph, function(a,b){
                return a['@id'] == b;
            },nodeUri);

            return index != -1 ? graph[index] : null;
        };

        graphService.findObject = function(graph,nodeFilter,property){
            var entities = self.doFilter(graph,filtersService.compile(nodeFilter));
            var results = [];
            entities.forEach(function(d,i){
                if(d[property]) {results.push(d[property]);}
            });

            return results;
        };
        
        //## properties management to put in a model service
        
        graphService.getProperties = function(graph){
            return Object.keys(graph['@context']);
        };
        
        //get the current used properties
        graphService.getEntityProperties = function(entity){
            var properties = [];
            Object.keys(entity).forEach(function(d){
                //@id, @type and properties starting with $_ or $$ are not RDF properties
                if( !( d == '@id' || d == '@type' || d.indexOf('$_') === 0 || d.indexOf('$$') === 0)){
                    properties.push(d);
                }
            });
            return properties;
        };
        
        //## END properties management to put in a model service


        //TODO : put this build change into an history service ?
        graphService.buildChanges = function(graph, s,p,o){

            var $dfd = $q.defer();//$.Deferred();
            var graphUrl = graph.$graphUri; //'http://www.culture-terminology.org/thesaurus/C4DFECD168B5A529F18140FDAC52E554/el%20tiltredre';

            if(s == null || p == null || o == null){
                //TODO send an error
                console.error('The subject/property/object is undefined');
            }

            //TODO : define a static historyGraphUrl in the graph object or query it on the endpoint.
            var historyGraphUrl = 'http://www.culture-terminology.org/ontoHisto/'+guidService.guid();

            var olds = null;
            var news = null;

            if(Array.isArray(s)){
              olds = s[0];
              news = s[1];
            }

            var oldp = p[0];
            var newp = p[1];

            var oldo = o[0];
            var newo = o[1];

            //build the change on object

            var historyRootId = guidService.guid();
            var changeId = guidService.guid();
            var subjectId = guidService.guid();
            var propertyId = guidService.guid();
            var objectId = guidService.guid();
            //end

            var historyRoot = {
                    '@id': historyGraphUrl + '#' + historyRootId,
                    '@type': [
                      'history'
                    ],
                    'change': [
                      {
                        '@id': historyGraphUrl+'#'+changeId
                      }
                    ],
                    'historyOf': [
                      {
                        '@id': graphUrl
                      }
                    ]
                  };

            var subject = {
              '@id': historyGraphUrl+'#'+subjectId,
              '@type': [
                'subject'
              ],
              'property': [
                {
                  '@id': historyGraphUrl+'#'+propertyId
                }
                ]
            };

            if(!Array.isArray(s)){
              subject.element = [
                {
                  '@id': s
                }
              ];
            }else{

              if(news == null){
                console.log('TODO : modifier pour permettre la suppression s');
                  subject.element = ['all'];

              }else{
                if(olds !=null){
                  subject.element = [{
                    '@id': olds
                  }];
                  }
                subject.newValue = [{
                  '@id': news
                }];
              }

            }

            var object = {
              '@id': historyGraphUrl+'#'+objectId,
              '@type': [
                'object'
              ]
            };

            if(!Array.isArray(o)){
              object.element = [
                {
                  '@id': o
                }
              ];
            }else{

              if(newo == null){
                console.log('TODO : modifier pour permettre la suppression object o');
                object.element = oldo == 'http://www.culture-terminology.org/ontologies/history#all' ? {'@id':oldo}:oldo;

                object.newValue = {'@id':
                  'http://www.culture-terminology.org/ontologies/history#delete'
                };
              }else{
                if(oldo !=null){
                  object.element = [oldo];
                  }
                object.newValue = [newo];
              }

            }


            var property = {
              '@id': historyGraphUrl+'#'+propertyId,
              '@type': ['property'],
              'object': [
                {
                  '@id': historyGraphUrl+'#'+objectId
                }]
            };

            if(!Array.isArray(p)){
              property.element = [
                {
                  '@id': p
                }
              ];
            }else{

              if(newp == null){
                console.log('TODO : modifier pour permettre la suppression p');
                property.element = ['all'];
                property.newValue = ['delete'];
              }else{
                if(oldp != null){
                  property.element = [oldp];
                  }
                property.newValue = [newp];
              }

            }


            var doc = [
              historyRoot,
              {
                  '@id': historyGraphUrl+'#'+changeId,
                  '@type': ['change'],
                  'date': [
                      {
                          '@value': 1413927724650.0
                        }
                      ],
                      'from': [
                        {
                          '@id': 'http://define.GRAPH.VERSION'
                        }
                      ],
                      'subject': [
                        {
                          '@id': historyGraphUrl+'#'+subjectId
                        }
                      ],
                      'user': [
                        {
                          '@value': 'default user'
                        }                      ]
                 },
              subject,

              property,

              object

            ];


            var context = {
                        'history': 'http://www.culture-terminology.org/ontologies/history#history',

                        'change': {
                            '@id': 'http://www.culture-terminology.org/ontologies/history#change',
                            '@type': '@id'
                          },

                        'historyOf' : {
                            '@id' : 'http://www.culture-terminology.org/ontologies/history#historyOf',
                            '@type' : '@id'
                        },
                        'subject' : 'http://www.culture-terminology.org/ontologies/history#subject',
                        'element' : 'http://www.culture-terminology.org/ontologies/history#element',
                        'newValue' : 'http://www.culture-terminology.org/ontologies/history#newValue',
                        'user' : 'http://www.culture-terminology.org/ontologies/history#user',
                        'from': 'http://www.culture-terminology.org/ontologies/history#from',
                        'date': 'http://www.culture-terminology.org/ontologies/history#date',
                        'property' : 'http://www.culture-terminology.org/ontologies/history#property',
                        'object' : 'http://www.culture-terminology.org/ontologies/history#object',
                        'delete' : 'http://www.culture-terminology.org/ontologies/history#delete',
                        'all' : 'http://www.culture-terminology.org/ontologies/history#all'
            };

            var jsonLd = {
                    '@context' : context,
                    '@graph' : doc
            };


            var parameters = {
                    scheme : '', //the default one
                    queryFn : function(/*string*/ uri){
                        return {
                            method : 'POST',
                            url : rdfuiConfig.server+'history/data/myUser/'+uri,
                            data : jsonLd,
                            headers: {'Accept':'application/json-ld'},
                        };
                    }
            };

            $http(parameters.queryFn(graphUrl)).success(function(){
                console.log('ok');
                $dfd.resolve();
            }).error(function(){
                console.log('ko');
            });

            return $dfd.promise;






        };

        self = graphService;
        return graphService;
    }
    ]);

})();



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

/* jshint -W100 */
(function () {
  'use strict';
  angular.module('rdf.ui')
  
  .factory('langService', [
      function () {
        var langService = {};
        
        langService.getLanguagesFromMetadata = function(/*jsonLD*/ graph, /*String*/ langProperty){
            if(!langProperty) {langProperty = 'language';}
            console.log('$$$$$$$$$$$$$$$$$$$$$');
            console.log(graph['@graph']);
            var langs = graph['@graph'][0][langProperty];
            console.log(langs);
            return langs ?
                        Array.isArray(langs) ? langs : [langs]
                        : null;
        };
        
        langService.getIsoLangsAsArray = function(){
            var result = [];
            
            Object.keys(isoLangs).forEach(function(d){
                var val = isoLangs[d];
                val.code = d;
                result.push(val);
            });
            
            return result;
        };
        
        langService.getIsoLangs = function(){
            return isoLangs;
        };
        
        /**
         * from : http://stackoverflow.com/a/4900304
         * improvment ? : parse this file : http://loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt
         * or more nice, use the thesaurus from the librairie of congres : http://id.loc.gov/download/
         * ==> and do a webservice for it
         * 
         * ATTENTION : a property was added for right to left language. Keep this somewhere
         * 
         */
        
            var isoLangs = {
                ab : {
                    name : 'Abkhaz',
                    nativeName : 'аҧсуа'
                },
                aa : {
                    name : 'Afar ',
                    nativeName : 'Afaraf '
                },
                af : {
                    name : 'Afrikaans ',
                    nativeName : 'Afrikaans '
                },
                ak : {
                    name : 'Akan ',
                    nativeName : 'Akan '
                },
                sq : {
                    name : 'Albanian ',
                    nativeName : 'Shqip '
                },
                am : {
                    name : 'Amharic ',
                    nativeName : 'አማርኛ '
                },
                ar : {
                    name : 'Arabic ',
                    nativeName : 'العربية ',
                    dir : 'rtl'
                },
                an : {
                    name : 'Aragonese ',
                    nativeName : 'Aragonés '
                },
                hy : {
                    name : 'Armenian ',
                    nativeName : 'Հայերեն '
                },
                as : {
                    name : 'Assamese ',
                    nativeName : 'অসমীয়া '
                },
                av : {
                    name : 'Avaric ',
                    nativeName : 'авар мацӀ, магӀарул мацӀ '
                },
                ae : {
                    name : 'Avestan ',
                    nativeName : 'avesta '
                },
                ay : {
                    name : 'Aymara ',
                    nativeName : 'aymar aru '
                },
                az : {
                    name : 'Azerbaijani ',
                    nativeName : 'azərbaycan dili '
                },
                bm : {
                    name : 'Bambara ',
                    nativeName : 'bamanankan '
                },
                ba : {
                    name : 'Bashkir ',
                    nativeName : 'башҡорт теле '
                },
                eu : {
                    name : 'Basque ',
                    nativeName : 'euskara, euskera '
                },
                be : {
                    name : 'Belarusian ',
                    nativeName : 'Беларуская '
                },
                bn : {
                    name : 'Bengali ',
                    nativeName : 'বাংলা '
                },
                bh : {
                    name : 'Bihari ',
                    nativeName : 'भोजपुरी '
                },
                bi : {
                    name : 'Bislama ',
                    nativeName : 'Bislama '
                },
                bs : {
                    name : 'Bosnian ',
                    nativeName : 'bosanski jezik '
                },
                br : {
                    name : 'Breton ',
                    nativeName : 'brezhoneg '
                },
                bg : {
                    name : 'Bulgarian ',
                    nativeName : 'български език '
                },
                my : {
                    name : 'Burmese ',
                    nativeName : 'ဗမာစာ '
                },
                ca : {
                    name : 'Catalan',
                    nativeName : 'Català '
                },
                ch : {
                    name : 'Chamorro ',
                    nativeName : 'Chamoru '
                },
                ce : {
                    name : 'Chechen ',
                    nativeName : 'нохчийн мотт '
                },
                ny : {
                    name : 'Chichewa',
                    nativeName : 'chiCheŵa, chinyanja '
                },
                zh : {
                    name : 'Chinese ',
                    nativeName : '中文 (Zhōngwén), 汉语, 漢語 '
                },
                cv : {
                    name : 'Chuvash ',
                    nativeName : 'чӑваш чӗлхи '
                },
                kw : {
                    name : 'Cornish ',
                    nativeName : 'Kernewek '
                },
                co : {
                    name : 'Corsican ',
                    nativeName : 'corsu, lingua corsa '
                },
                cr : {
                    name : 'Cree ',
                    nativeName : 'ᓀᐦᐃᔭᐍᐏᐣ '
                },
                hr : {
                    name : 'Croatian ',
                    nativeName : 'hrvatski '
                },
                cs : {
                    name : 'Czech ',
                    nativeName : 'česky, čeština '
                },
                da : {
                    name : 'Danish ',
                    nativeName : 'dansk '
                },
                dv : {
                    name : 'Divehi',
                    nativeName : 'ދިވެހި '
                },
                nl : {
                    name : 'Dutch ',
                    nativeName : 'Nederlands, Vlaams '
                },
                en : {
                    name : 'English ',
                    nativeName : 'English '
                },
                eo : {
                    name : 'Esperanto ',
                    nativeName : 'Esperanto '
                },
                et : {
                    name : 'Estonian ',
                    nativeName : 'eesti, eesti keel '
                },
                ee : {
                    name : 'Ewe ',
                    nativeName : 'Eʋegbe '
                },
                fo : {
                    name : 'Faroese ',
                    nativeName : 'føroyskt '
                },
                fj : {
                    name : 'Fijian ',
                    nativeName : 'vosa Vakaviti '
                },
                fi : {
                    name : 'Finnish ',
                    nativeName : 'suomi, suomen kieli '
                },
                fr : {
                    name : 'French ',
                    nativeName : 'Français'
                },
                ff : {
                    name : 'Fula',
                    nativeName : 'Fulfulde, Pulaar, Pular '
                },
                gl : {
                    name : 'Galician ',
                    nativeName : 'Galego '
                },
                ka : {
                    name : 'Georgian ',
                    nativeName : 'ქართული '
                },
                de : {
                    name : 'German ',
                    nativeName : 'Deutsch '
                },
                el : {
                    name : 'Greek',
                    nativeName : 'Ελληνικά '
                },
                gn : {
                    name : 'Guaraní ',
                    nativeName : 'Avañeẽ '
                },
                gu : {
                    name : 'Gujarati ',
                    nativeName : 'ગુજરાતી '
                },
                ht : {
                    name : 'Haitian',
                    nativeName : 'Kreyòl ayisyen '
                },
                ha : {
                    name : 'Hausa ',
                    nativeName : 'Hausa, هَوُسَ '
                },
                he : {
                    name : 'Hebrew',
                    nativeName : 'עברית '
                },
                hz : {
                    name : 'Herero ',
                    nativeName : 'Otjiherero '
                },
                hi : {
                    name : 'Hindi ',
                    nativeName : 'हिन्दी, हिंदी '
                },
                ho : {
                    name : 'Hiri Motu ',
                    nativeName : 'Hiri Motu '
                },
                hu : {
                    name : 'Hungarian ',
                    nativeName : 'Magyar '
                },
                ia : {
                    name : 'Interlingua ',
                    nativeName : 'Interlingua '
                },
                id : {
                    name : 'Indonesian ',
                    nativeName : 'Bahasa Indonesia '
                },
                ie : {
                    name : 'Interlingue ',
                    nativeName : 'Originally called Occidental; then Interlingue after WWII '
                },
                ga : {
                    name : 'Irish ',
                    nativeName : 'Gaeilge '
                },
                ig : {
                    name : 'Igbo ',
                    nativeName : 'Asụsụ Igbo '
                },
                ik : {
                    name : 'Inupiaq ',
                    nativeName : 'Iñupiaq, Iñupiatun '
                },
                io : {
                    name : 'Ido ',
                    nativeName : 'Ido '
                },
                is : {
                    name : 'Icelandic ',
                    nativeName : 'Íslenska '
                },
                it : {
                    name : 'Italian ',
                    nativeName : 'Italiano '
                },
                iu : {
                    name : 'Inuktitut ',
                    nativeName : 'ᐃᓄᒃᑎᑐᑦ '
                },
                ja : {
                    name : 'Japanese ',
                    nativeName : '日本語 (にほんご／にっぽんご) '
               },
                jv : {
                    name : 'Javanese ',
                    nativeName : 'basa Jawa '
                },
                kl : {
                    name : 'Kalaallisut',
                    nativeName : 'kalaallisut, kalaallit oqaasii '
                },
                kn : {
                    name : 'Kannada ',
                    nativeName : 'ಕನ್ನಡ '
                },
                kr : {
                    name : 'Kanuri ',
                    nativeName : 'Kanuri '
                },
                ks : {
                    name : 'Kashmiri ',
                    nativeName : 'कश्मीरी, كشميري‎ '
                },
                kk : {
                    name : 'Kazakh ',
                    nativeName : 'Қазақ тілі '
                },
                km : {
                    name : 'Khmer ',
                    nativeName : 'ភាសាខ្មែរ '
                },
                ki : {
                    name : 'Kikuyu',
                    nativeName : 'Gĩkũyũ '
                },
                rw : {
                    name : 'Kinyarwanda ',
                    nativeName : 'Ikinyarwanda '
                },
                ky : {
                    name : 'Kirghiz',
                    nativeName : 'кыргыз тили '
                },
                kv : {
                    name : 'Komi ',
                    nativeName : 'коми кыв '
                },
                kg : {
                    name : 'Kongo ',
                    nativeName : 'KiKongo '
                },
                ko : {
                    name : 'Korean ',
                    nativeName : '한국어 (韓國語), 조선말 (朝鮮語) '
                },
                ku : {
                    name : 'Kurdish ',
                    nativeName : 'Kurdî, كوردی‎ '
                },
                kj : {
                    name : 'Kwanyama',
                    nativeName : 'Kuanyama '
                },
                la : {
                    name : 'Latin',
                    nativeName : 'latine, lingua latina '
                },
                lb : {
                    name : 'Luxembourgish',
                    nativeName : 'Lëtzebuergesch '
                },
                lg : {
                    name : 'Luganda',
                    nativeName : 'Luganda '
                },
                li : {
                    name : 'Limburgish',
                    nativeName : 'Limburgs '
                },
                ln : {
                    name : 'Lingala ',
                    nativeName : 'Lingála '
                },
                lo : {
                    name : 'Lao ',
                    nativeName : 'ພາສາລາວ '
                },
                lt : {
                    name : 'Lithuanian ',
                    nativeName : 'lietuvių kalba '
                },
                lu : {
                    name : 'Luba-Katanga ',
                    nativeName : ''
                },
                lv : {
                    name : 'Latvian ',
                    nativeName : 'latviešu valoda '
                },
                gv : {
                    name : 'Manx ',
                    nativeName : 'Gaelg, Gailck '
                },
                mk : {
                    name : 'Macedonian ',
                    nativeName : 'македонски јазик '
                },
                mg : {
                    name : 'Malagasy ',
                    nativeName : 'Malagasy fiteny '
                },
                ms : {
                    name : 'Malay ',
                    nativeName : 'bahasa Melayu, بهاس ملايو‎ '
                },
                ml : {
                    name : 'Malayalam ',
                    nativeName : 'മലയാളം '
                },
                mt : {
                    name : 'Maltese ',
                    nativeName : 'Malti '
                },
                mi : {
                    name : 'Māori ',
                    nativeName : 'te reo Māori '
                },
                mr : {
                    name : 'Marathi',
                    nativeName : 'मराठी '
                },
                mh : {
                    name : 'Marshallese ',
                    nativeName : 'Kajin M̧ajeļ '
                },
                mn : {
                    name : 'Mongolian ',
                    nativeName : 'монгол '
                },
                na : {
                    name : 'Nauru ',
                    nativeName : 'Ekakairũ Naoero '
                },
                nv : {
                    name : 'Navajo',
                    nativeName : 'Diné bizaad, Dinékʼehǰí '
                },
                nb : {
                    name : 'Norsk bokmål',
                    nativeName : 'Norsk bokmål'
                },
                nd : {
                    name : 'North Ndebele ',
                    nativeName : 'isiNdebele '
                },
                ne : {
                    name : 'Nepali ',
                    nativeName : 'नेपाली '
                },
                ng : {
                    name : 'Ndonga ',
                    nativeName : 'Owambo '
                },
                nn : {
                    name : 'Norsk nynorsk',
                    nativeName : 'Norsk nynorsk'
                },
                no : {
                    name : 'Norwegian ',
                    nativeName : 'Norsk '
                },
                ii : {
                    name : 'Nuosu ',
                    nativeName : 'ꆈꌠ꒿ Nuosuhxop '
                },
                nr : {
                    name : 'South Ndebele ',
                    nativeName : 'isiNdebele '
                },
                oc : {
                    name : 'Occitan ',
                    nativeName : 'Occitan '
                },
                oj : {
                    name : 'Ojibwe',
                    nativeName : 'ᐊᓂᔑᓈᐯᒧᐎᓐ '
                },
                cu : {
                    name : 'Church Slavic',
                    nativeName : 'ѩзыкъ словѣньскъ '
                },
                om : {
                    name : 'Oromo ',
                    nativeName : 'Afaan Oromoo '
                },
                or : {
                    name : 'Oriya ',
                    nativeName : 'ଓଡ଼ିଆ '
                },
                os : {
                    name : 'Ossetian',
                    nativeName : 'ирон æвзаг '
                },
                pa : {
                    name : 'Panjabi',
                    nativeName : 'ਪੰਜਾਬੀ, پنجابی‎ '
                },
                pi : {
                    name : 'Pāli ',
                    nativeName : 'पाऴि '
                },
                fa : {
                    name : 'Persian ',
                    nativeName : 'فارسی '
                },
                pl : {
                    name : 'Polish ',
                    nativeName : 'polski '
                },
                ps : {
                    name : 'Pashto',
                    nativeName : 'پښتو '
                },
                pt : {
                    name : 'Portuguese ',
                    nativeName : 'Português '
                },
                qu : {
                    name : 'Quechua ',
                    nativeName : 'Runa Simi, Kichwa '
                },
                rm : {
                    name : 'Romansh ',
                    nativeName : 'rumantsch grischun '
                },
                rn : {
                    name : 'Kirundi ',
                    nativeName : 'kiRundi '
                },
                ro : {
                    name : 'Romanian',
                    nativeName : 'română '
                },
                ru : {
                    name : 'Russian ',
                    nativeName : 'русский язык '
                },
                sa : {
                    name : 'Sanskrit',
                    nativeName : 'संस्कृतम् '
                },
                sc : {
                    name : 'Sardinian ',
                    nativeName : 'sardu '
                },
                sd : {
                    name : 'Sindhi ',
                    nativeName : 'सिन्धी, سنڌي، سندھی‎ '
                },
                se : {
                    name : 'Northern Sami ',
                    nativeName : 'Davvisámegiella '
                },
                sm : {
                    name : 'Samoan ',
                    nativeName : 'gagana faa Samoa '
                },
                sg : {
                    name : 'Sango ',
                    nativeName : 'yângâ tî sängö '
                },
                sr : {
                    name : 'Serbian ',
                    nativeName : 'српски језик '
                },
                gd : {
                    name : 'Gaelic ',
                    nativeName : 'Gàidhlig '
                },
                sn : {
                    name : 'Shona ',
                    nativeName : 'chiShona '
                },
                si : {
                    name : 'Sinhala',
                    nativeName : 'සිංහල '
                },
                sk : {
                    name : 'Slovak ',
                    nativeName : 'slovenčina '
                },
                sl : {
                    name : 'Slovene ',
                    nativeName : 'slovenščina '
                },
                so : {
                    name : 'Somali ',
                    nativeName : 'Soomaaliga, af Soomaali '
                },
                st : {
                    name : 'Sesotho',
                    nativeName : 'Sesotho'
                },
                es : {
                    name : 'Spanish',
                    nativeName : 'español, castellano '
                },
                su : {
                    name : 'Sundanese ',
                    nativeName : 'Basa Sunda '
                },
                sw : {
                    name : 'Swahili ',
                    nativeName : 'Kiswahili '
                },
                ss : {
                    name : 'Swati ',
                    nativeName : 'SiSwati '
                },
                sv : {
                    name : 'Swedish ',
                    nativeName : 'svenska '
                },
                ta : {
                    name : 'Tamil ',
                    nativeName : 'தமிழ் '
                },
                te : {
                    name : 'Telugu ',
                    nativeName : 'తెలుగు '
                },
                tg : {
                    name : 'Tajik ',
                    nativeName : 'тоҷикӣ, toğikī, تاجیکی‎ '
                },
                th : {
                    name : 'Thai ',
                    nativeName : 'ไทย '
                },
                ti : {
                    name : 'Tigrinya ',
                    nativeName : 'ትግርኛ '
                },
                bo : {
                    name : 'Tibetan',
                    nativeName : 'བོད་ཡིག '
                },
                tk : {
                    name : 'Turkmen ',
                    nativeName : 'Türkmen, Түркмен '
                },
                tl : {
                    name : 'Tagalog ',
                    nativeName : 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔ '
                },
                tn : {
                    name : 'Tswana ',
                    nativeName : 'Setswana '
                },
                to : {
                    name : 'Tonga',
                    nativeName : 'faka Tonga '
                },
                tr : {
                    name : 'Turkish ',
                    nativeName : 'Türkçe '
                },
                ts : {
                    name : 'Tsonga ',
                    nativeName : 'Xitsonga '
                },
                tt : {
                    name : 'Tatar ',
                    nativeName : 'татарча, tatarça, تاتارچا‎ '
                },
                tw : {
                    name : 'Twi ',
                    nativeName : 'Twi '
                },
                ty : {
                    name : 'Tahitian ',
                    nativeName : 'Reo Tahiti '
                },
                ug : {
                    name : 'Uighur',
                    nativeName : 'Uyƣurqə, ئۇيغۇرچە‎ '
                },
                uk : {
                    name : 'Ukrainian ',
                    nativeName : 'українська '
                },
                ur : {
                    name : 'Urdu ',
                    nativeName : 'اردو '
                },
                uz : {
                    name : 'Uzbek ',
                    nativeName : 'zbek, Ўзбек, أۇزبېك‎ '
                },
                ve : {
                    name : 'Venda ',
                    nativeName : 'Tshivenḓa '
                },
                vi : {
                    name : 'Vietnamese ',
                    nativeName : 'Tiếng Việt '
                },
                vo : {
                    name : 'Volapük ',
                    nativeName : 'Volapük '
                },
                wa : {
                    name : 'Walloon ',
                    nativeName : 'Walon '
                },
                cy : {
                    name : 'Welsh ',
                    nativeName : 'Cymraeg '
                },
                wo : {
                    name : 'Wolof ',
                    nativeName : 'Wollof '
                },
                fy : {
                    name : 'Frysk',
                    nativeName : 'Frysk'
                },
                xh : {
                    name : 'Xhosa ',
                    nativeName : 'isiXhosa '
                },
                yi : {
                    name : 'Yiddish ',
                    nativeName : 'ייִדיש '
                },
                yo : {
                    name : 'Yoruba ',
                    nativeName : 'Yorùbá '
                },
                za : {
                    name : 'Zhuang',
                    nativeName : 'Saɯ cueŋƅ, Saw cuengh '
                }
            };
            
            return langService;
        }
     ]);
})();


(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .controller('rdfuiLangdisplayedCtrl', ['$scope', '$q', 'langService',
  function($scope,$q,langService) {

    $scope.name = 'rdfuiLangdisplayedCtrl';
    
//    $scope.lang = {};
//    
//    $scope.lang.langDisplayed = [];
    
    $q.when(langService.getIsoLangsAsArray()).then(function(data){
        $scope.allLangs = data;
    });
    
//    $scope.langSelected = function(i,m){
////        console.warn('********************');
////        console.warn(arguments);
////        console.warn($scope.langDisplayed);
//        //$scope.graphCtrl.mainLang = i;
//    };
    
  }]);
    
})();
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

(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .controller('rdfuiMainlangCtrl', ['$scope', '$q', 'langService',
  function($scope,$q,langService) {

    $scope.name = 'rdfuiMainlangCtrl';
    
//    $scope.mainLangSelected = null;
    
    $q.when(langService.getIsoLangsAsArray()).then(function(data){
        $scope.allLangs = data;
    });
    
//    $scope.langSelected = function(i,m){
//        $scope.graphCtrl.mainLang = i;
//    };
    
  }]);
    
})();
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
  .directive('rdfuiMainlang', ['graphService','propertyFilter', 'langFilter',
    function(graphService, propertyFilter, langFilter) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph'],
        templateUrl : 'langs/rdfuiMainlang.tpl.html',
        scope : {
        },
        //priority: 1, // needed for angular 1.2.x
        controller : 'rdfuiMainlangCtrl',
        link: function(scope, elm, attr, ctrls) {
            
            if(ctrls[0]){
                scope.graphCtrl = ctrls[0].scope;
                
                //initialisation of the mainLangSelected with the current graph lang
//                scope.mainLangSelected = scope.graphCtrl.mainLang;
            }
            
            
        },
    };//end return
    
    }]); //end directive
  
})(); //end anonymous function


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
        require: ['ngModel','?^rdfuiGraph','?^rdfuiSubject'],
        templateUrl : 'literal/rdfuiLiteralEdit.tpl.html',
        scope : {
            langs : '=',
            selectedLang : '=',
            property : '='
        },
        priority: 1, // needed for angular 1.2.x
        link: function(scope, elm, attr, ctrls) {
            
            var ngModel = ctrls[0];
            var graph = ctrls[1].scope.graph;
            var subject = ctrls[2];
            
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
                        graphService.buildChanges(graph,subject,scope.property,[ngModel.$viewValue,newval]);
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
(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiObjectCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'objectCtrl';
        
        
        
        
        
        return $scope;
      }
    ]);
})();


(function () {
  'use strict';

  angular.module('rdf.ui')
  .directive('rdfuiObject', ['$compile', 'graphService',function($compile, graphService) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph','^rdfuiProperty','^rdfuiObjects'],
        scope : {
            object : '='
        },
        controller : 'rdfuiObjectCtrl',
        transclude : true,
        templateUrl : function(elem,attrs){
            var tName = attrs.templateName ? attrs.templateName : 'default';
            return 'object/rdfuiObject.'+tName+'.tpl.html';
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
                
                if(ctrls.length === 3){
                    scope.graphCtrl = ctrls[0].scope;
                    scope.propertyCtrl = ctrls[1].scope;
                    scope.objectsCtrl = ctrls[2].scope;
                }
                
            };
        },
    };
  }]);
})();
(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiObjectsCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'objectsCtrl';
        
        //management of the display type
        $scope.$displayType = {value : 'light'};
        
        $scope.addObject = function(){
            
            if($scope.hasType.resource){
                console.log('TODO : implent this add a ressource type');
            }
            
            if($scope.hasType.literal){
                if($scope.hasType.literalType.plain){
                    console.log($scope.objects);
                    $scope.objects.push({ '@language' : null, '@value' : null });
                    
                }
                if($scope.hasType.literalType.typed){
                    console.log('TODO : implent this add a typed literal');
                }
            }
            
            console.log($scope.hasType);
            console.log('ajout d\'un nouvel object');
            
        };
        
        return $scope;
        
        
      }
    ]);
})();



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
              //  langs : '=', //les langues doivent être générés au niveau du rui-subject
              //selectedLang : '=',
              //subject : '=',
              //propertyLabel : '@',
              //graphUri : '@'
//              graphData : '=',
              templateName : '=',
              objects : '='
//              filter : '='
            },
            //scope:true,
            //priority: 1, // needed for angular 1.2.x
            controller : 'rdfuiObjectsCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : 'default';
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

(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiPropertiesCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', '$timeout', 'graphService', 'filtersService', 'arrayService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, $timeout, graphService,filtersService,arrayService) {
        this.scope = $scope;
        
        
        //part related to adding a new property
        $scope.nodeProperties = [];
        $scope.possibleProperties = [];
        $scope.propertyToAdd = {value : null};
        
        $scope.addProperty = function(item,model){
            $scope.entity[item] = [];
            model = null; //in order to init the dropdown list to blank
            item = null;
            $timeout(function(){
                $scope.propertyToAdd.value = undefined;
            }, 5);
           
            updateProperties($scope.entity);
            
        };
        
        //end part related to adding a new property
        
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
                
                
                //another part of the update property : update the list of available properties for adding
                //TODO : clean this part with the elements on top
                $scope.nodeProperties = graphService.getEntityProperties(nv);
                $scope.possibleProperties = arrayService.lazyMinus($scope.graphCtrl.availableProperties,
                                                                   $scope.nodeProperties,
                                                                   function(a,b){return a == b;});
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
                
                $scope.$properties = graphService.getEntityProperties(nv);
                
                
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
    .directive('rdfuiProperties', ['$compile',function($compile) {
        return {
            restrict: 'E',
            require: ['?^rdfuiGraph'],
            scope : {
              entity : '=',
              filtername : '@',
              uri : '@' //TODO : define if uri have to be with @ or not. and how to manage if entity and uri are filled. 
            },
            controller : 'rdfuiPropertiesCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : 'default';
                return 'properties/rdfuiProperties.'+tName+'.tpl.html';
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
                    
                    if(ctrls[0]){
                        scope.graphCtrl = ctrls[0].scope;
                        //Expose the user controler before the use of graph directive
                        scope.$parentScope = scope.graphCtrl.$parentScope;
                    }
                    
                };
            },
            
          };
    }]);
})();


(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .controller('rdfuiPropertyCtrl', ['$scope', '$element', '$transclude', '$compile', '$http',
  function($scope, $element, $transclude, $compile, $http) {

      this.scope = $scope;
      $scope.name = 'rdfuiPropertyCtrl';
    
    $scope.showSelector = false;
    
    $scope.choice = {};
    
    $scope.addObject = function(){
        
        if($scope.isResource){
            $scope.showSelector = true;
        }else{
            $scope.objects.push({
                '@value' : '',
                '@language' : ''
            });
        }
        
        
        console.log('Ajout d\'un nouvel object !!!!');
    };
    
    $scope.selectionDone = function($item,$model){
        console.log(arguments);
    };
    
    $scope.person = {};
    
    return $scope;
    
  }]);
    
})();
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
        //TODO : remove the ngmodel here.
        require: ['?ngModel','?^rdfuiGraph'],
        scope : {
            langs : '=', //les langues doivent être générés au niveau du rui-subject
            selectedLang : '=',
            subject : '=',
            propertyLabel : '@',
            templateName : '=',
            propertyName : '@',
        },
        transclude : true,
        templateUrl : function(elem,attrs){
            var tName = attrs.templateName ? attrs.templateName : 'default';
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
                    
                    //TODO : create a service for 'deference' depending on context the name of the property
                    
                    scope.objects = [];
                    scope.isResource = false;
                    
                    //TODO : use scope binding instead of attr ? Not sure
                    attr.$observe('propertyName',function(value){
                        console.warn('this is deprecated. object type is now guessed in objects elements');
                        //scope.propertyName = value;
                        scope.graphCtrl.initiated.then(function(){
                            scope.isResource = graphService.isResource(scope.propertyName,scope.graphCtrl.graph);
                        });
                        
                    });
                    
                    
                    //TODO : remove that to use directly ng-model
                    scope.$watch('subject',function(nv,ov){
                        if(nv != null){
                            scope.objects = nv[scope.propertyName];
                        }
                        
                    });
                    
//                    scope.graphCtrl.getLinkableConcepts().then(function(d){
//                        scope.values = d;
//                        scope.values.forEach(function(val,i){
//                            var p = propertyFilter(val,'prefLabel');
//                            if(p){
//                                val.$literals = langFilter(p,scope.graphCtrl.mainLang);
//                            }else{
//                                //warning :: objects with no literal in the main langage 
//                                console.warn(val);
//                            }
//                        });
//                        
//                    });
                }
                
            };
        },
        
    };//end return
    
    }]); //end directive
  
})(); //end anonymous function
(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiResourceViewCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;

        $scope.name = 'resourceViewCtrl';
        
        
        return $scope;
        
        
      }
    ]);
})();


(function () {
  'use strict';

  angular.module('rdf.ui')
  .directive('rdfuiResourceView', ['$compile','graphService',function($compile, graphService) {
    return {
        restrict: 'E',
        require: ['?^rdfuiGraph'],
        scope : {
            templateName : '=',
            uri : '@',
        },
        transclude : true,
        templateUrl : function(elem,attrs){
            var tName = attrs.templateName ? attrs.templateName : 'default';
            return 'resource/rdfuiResourceView.'+tName+'.tpl.html';
        },
        controller : 'rdfuiResourceViewCtrl',
        
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
                    scope.graphCtrl = ctrls[0].scope;
                }
                
                //TODO : review this part, not still used since migration
                scope.$watch('uri',function(){
                    //TODO : make a service to get the access uri
                    scope.accessUri = scope.uri;
                });
                
                scope.getLiteralValues = function(/**String*/ uri){
                    if(!uri) { return [null]; }
                    var labels = graphService.getLabelFromUri(scope.graphCtrl.graph['@graph'],uri,scope.graphCtrl.lang.main);
                    return labels.length > 0 ? labels : [null];
                };
                
            };
        },
        
    };//end return
  }]); //end directive
})();
(function () {
  'use strict';
  
  angular.module('rdf.ui')

   /**
    * @ngdoc service
    * @name rdf.ui.service:array
    * 
    * @description
    * angular-ui-tree.
    */
    .factory('arrayService', [
      function () {
        
        var self = null;
        var arrayService = {};
        
        
        arrayService.toArray = function(v){
            return [].slice.call(v);
        };
        
        
        // ## Array.prototype.lazyIndexOf
        // Array.prototype.lazyIndexOf = function (f,searchElement /*, fromIndex */ )
        //lazy indexOf allow you to define your own comparator.
        // **Parameters**:
        // *{function}* **f** The array caller param
        // *{string}* **searchElement** the variable pass to indexOf
        // **Returns**:
        // *{bool}* : this comparator must compare two variables and return true/false
        // **Example**:
        // var lazyindex = Tab.lazyIndexOf(function(a,b){return a == b;}, "var search");
        
        arrayService.lazyIndexOf =  function (array, f,searchElement /*, fromIndex */ ) {
            if (array == null) {
                throw new TypeError();
            }
            var t = Object(array);
            /*jslint bitwise: true */
            var len = t.length >>> 0;
            /*jslint bitwise: false */
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[2]);
                if (n != n) { // shortcut for verifying if it's NaN  
                    n = 0;
                } else if (n !== 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                //if (k in t && t[k] === searchElement) {
                if (k in t && f.call(this,t[k],searchElement)) {
                    return k;
                }
            }
            return -1;
        };
        
        
        //TODO : migrate the other array utilities if usefull
        
        
      //-- arrays utilities
        
  //    
//      //TODO : create a lib for array management
//      //look at array imps here and see if include in the lib : https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_nest    
  //
//      //add the last() utility to array
  //    
//      // ## Array.last
//      // Get the last value of Array
//      // **Returns**:
//      // *{Array[]}* : Last value of Array
//      // **Example**:
//      //
//      //var last = Tab.last();
//      if(!Array.prototype.last) {
//          Array.prototype.last = function() {
//              return this[this.length - 1];
//          };
//      }
      
      
      //add to the first array parameter the contents of others arrays with no duplicates
      arrayService.merge = function(source /*, variable number of arrays */){
          for(var i = 1; i < arguments.length; i++){
              var array = arguments[i];
              for(var j = 0; j < array.length; j++){
                  if(source.indexOf(array[j]) === -1) {
                      source.push(array[j]);
                  }
              }
          }
          //return this;
      };
  //    
//      // ## Array.prototype.lazyMerge
//      // Array.prototype.lazyMerge = function(f /* variable number of arrays */)
//      // lazy merge, merge array with lazy comparator
//      // **Parameters**:
//      // *{function}* **f** The array caller param
//      // *{array}* **searchElement** the others array 
//      // **Returns**:
//      // *{array}* : return the first array
//      // **Example**:
//      //     tab.lazyMerge(function(a,b){return a == b;}, tab2, tab3);    
  //
  //
//      Array.prototype.lazyMerge = function(f /* variable number of arrays */){
//          for(var i = 1; i < arguments.length; i++){
//              var array = arguments[i];
//              for(var j = 0; j < array.length; j++){
//                  if(this.lazyIndexOf(f,array[j]) === -1) {
//                      this.push(array[j]);
//                  }
//              }
//          }
//          return this;
//      };
  //
      
      // do the substraction beetween 2 arrays with a configurable matcher
      arrayService.lazyMinus = function(sourceArray, minusArray, f){
          var result = [];
          
          for(var j = 0; j < sourceArray.length; j++){
              var po = arrayService.lazyIndexOf(minusArray, f,sourceArray[j]);
              if(po === -1) {
                  result.push(sourceArray[j]);
              }
          }
          return result;
      };
  //    
//      // ## Array.prototype.lazyUnion
//      // Array.prototype.lazyUnion = function(f /* variable number of arrays */)
//      // lazyunion : only keep elements in the original array that is in *all* params arrays
//      // **Parameters**:
//      // *{function}* **f** The array caller param
//      // *{array}* **searchElement** the others array 
//      // **Returns**:
//      // *{array}* : return the first array
//      // **Example**:
//      //     var lazyunion = Tab.lazyUnion(function(a,b){return a == b;}, Tab2, Tab3);
//          
//      Array.prototype.lazyUnion = function(f /* variable number of arrays */){
//          for(var i = 1; i < arguments.length; i++){
//              var array = arguments[i];
//              for(var j = 0; j < this.length; j++){
//                  if(array.lazyIndexOf(f,this[j]) === -1) {
//                      this.splice(j,1);
//                      j--;
//                  }
//              }
//          }
//          return this;
//      };
  //    
//      // ## Array.prototype.lazyUnionAndMerge
//      // Array.prototype.lazyUnionAndMerge = function(f /* variable number of arrays */)
//      // lazyunion + lazymerge
//      // **Parameters**:
//      // *{array}* **searchElement** the others array 
//      // **Example**:
//      //     Tab.lazyUnionAndMerge(function(a,b){return a == b;}, Tab2, Tab3);
  //
//      //TODO : test if multiple array is well passing throw
//      Array.prototype.lazyUnionAndMerge = function(f /* variable number of arrays */){
//          this.lazyUnion.apply(this, arguments);
//          this.lazyMerge.apply(this, arguments);
//      };
        
        self = arrayService;
        return arrayService;
    }
    ]);

})();
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

(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiSubjectCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, graphService,filtersService) {
        this.scope = $scope;
        
        //TODO : use a watch collection to react on change for the differents attributes
//        $scope.$watch('entity',function(nv,ov){
//            if(nv){
//                
//                //TODO :: this filtering have to be done in 'rdfui-properties' dom node
//                $scope.$properties = [];
//                //TODO : use the filter definition here instead where we add $_* and @id
//                Object.keys(nv).forEach(function(d){
//                    if( !((d == '@id') || d == '@type' || d.indexOf('$_') === 0)){
//                        $scope.$properties.push(d);
//                    }
//                });
//            }
//        });
        
        return $scope;
        
        
      }
    ]);
})();



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
    .directive('rdfuiSubject', ['$compile',function($compile) {
        return {
            restrict: 'E',
            require: ['?^rdfuiGraph'],
            scope : {
              entity : '=',
              uri : '@' //TODO : define if uri have to be with @ or not. and how to manage if entity and uri are filled.
            },
            controller : 'rdfuiSubjectCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : 'default';
                return 'subject/rdfuiSubject.'+tName+'.tpl.html';
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
                    
                    if(ctrls[0]){
                        scope.graphCtrl = ctrls[0].scope;
                        //Expose the user controler before the use of graph directive
                        scope.$parentScope = scope.graphCtrl.$parentScope;
                        
//                        console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSssss');
//                        console.log(scope.$parentScope);
//                        console.log(scope.graphCtrl.$parentScope == null);
                    }
                    
                };
            },
            
          };
    }]);
})();

(function () {
  'use strict';

  angular.module('rdf.ui')

    .controller('rdfuiSubjectsCtrl', ['$scope', '$element', '$transclude', '$compile', '$attrs', '$http', '$q', 'rdfuiConfig','graphService', 'filtersService',
      function ($scope, $element, $transclude, $compile, $attrs, $http, $q, rdfuiConfig, graphService, filtersService) {
        this.scope = $scope;
        
        
        
        //TODO : use a watch collection to react on change for the differents attributes
        $scope.$watch('graphData',function(nv,ov){
            
            if(nv){ //remark don't add this condition : && (nv !== ov) because if present the watch is not done when subjects is on dereferencing.
                if(!$scope.filter){
                    if($scope.graphCtrl.lazyLoading){
                        console.error('!!!!!!!!!!!!!!!!!!! no loading if no graph');
                        return;
                    }else{
                        console.warn('There is no filter defined. Default filter will be applied (all pass)');
                    }
                    
                }
                //TODO : define a rdfui-subjects.doFilter function
                var filterFn = filtersService.compile($scope.filter);
                $scope.$subjects = graphService.doFilter(nv,filterFn);
                
                //TODO : clean this graphTree management.
                $scope.graphTree = graphService.getTreeRepresentation(nv,filterFn);//['@graph'];
                
            }
        });
        
        $scope.$watch('filter',function(nv,ov){
           if(nv){
               if($scope.graphCtrl.lazyLoading){
                   $scope.graphCtrl.parameters = {
                           scheme : '', //the default one 
                           queryFn : function(/*string*/ uri){
                               return {
                                   method : 'POST',
                                   url : rdfuiConfig.server+'graph/data/*/'+uri,
                                   data : $scope.filter,
                               };
                              }
                           };
                   $scope.graphCtrl.loadGraph();
                   $scope.graphCtrl.initiated.then(function(){
                       //TODO : use the rdfui-subjects.doFilter fn
                       var filterFn = filtersService.compile($scope.filter);
                       $scope.$subjects = graphService.doFilter(nv,filterFn);
                       
                       //TODO : clean this graphTree management.
//                       $scope.graphTree = graphService.getTreeRepresentation(nv,filterFn);//['@graph'];
                   });
                   
                   
               }else{
                   console.warn('This usecase is not implemented for now');
               }
           }
        },true);
        
        $scope.remove = function(node){
            $scope.graphCtrl.remove(node);
        };
        
        $scope.newSubItem = function(node){
            $scope.graphCtrl.newSubItem(node);
        };
        
        return $scope;
        
        
      }
    ]);
})();



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
    .directive('rdfuiSubjects', ['$compile',function($compile) {
        return {
            restrict: 'E',
            require: ['?^rdfuiGraph'],
            scope : {
              graphData : '=',
              templateName : '=',
              filter : '=',
            },
            controller : 'rdfuiSubjectsCtrl',
            transclude : true,
            templateUrl : function(elem,attrs){
                var tName = attrs.templateName ? attrs.templateName : 'default';
                return 'subjects/rdfuiSubjects.'+tName+'.tpl.html';
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
                    
                    if(ctrls[0]){
                        scope.graphCtrl = ctrls[0].scope;
                        //Expose the user controler before the use of graph directive
                        scope.$parentScope = scope.graphCtrl.$parentScope;
                    }
                    
                };
            },
            
          };
    }]);
})();

angular.module('rdf.ui.tpl', ['graph/rdfuiGraph.default.tpl.html', 'langs/rdfuiLangdisplayed.tpl.html', 'langs/rdfuiMainlang.tpl.html', 'literal/rdfuiLiteralEdit.tpl.html', 'object/rdfuiObject.blank.tpl.html', 'object/rdfuiObject.default.tpl.html', 'object/rdfuiObject.full.tpl.html', 'objects/rdfuiObjects.blank.tpl.html', 'objects/rdfuiObjects.default.tpl.html', 'properties/rdfuiProperties.default.tpl.html', 'property/rdfuiProperty.baseObject.tpl.html', 'property/rdfuiProperty.blank.tpl.html', 'property/rdfuiProperty.default.tpl.html', 'resource/rdfuiResourceView.blank.tpl.html', 'resource/rdfuiResourceView.default.tpl.html', 'resource/rdfuiResourceView.full.tpl.html', 'resource/rdfuiResourceView.light.tpl.html', 'resource/rdfuiResourceView.simpleUri.tpl.html', 'subject/rdfuiSubject.default.tpl.html', 'subjects/rdfuiSubjects.blank.tpl.html', 'subjects/rdfuiSubjects.default.tpl.html', 'subjects/rdfuiSubjects.tpl.html', 'subjects/rdfuiSubjects.tree.node.tpl.html', 'subjects/rdfuiSubjects.tree.tpl.html']);

angular.module("graph/rdfuiGraph.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("graph/rdfuiGraph.default.tpl.html",
    "<ng-transclude></ng-transclude>");
}]);

angular.module("langs/rdfuiLangdisplayed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("langs/rdfuiLangdisplayed.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<p>Displayed language selection : </p>\n" +
    "	</div>\n" +
    "    <div class=\"col-md-8\">\n" +
    "    	<ui-select multiple \n" +
    "               ng-model=\"graphCtrl.lang.displayed\" \n" +
    "               reset-search-input=\"true\" \n" +
    "               >\n" +
    "        	<ui-select-match placeholder=\"Select langs to display\">{{$item}}</ui-select-match>\n" +
    "            	<ui-select-choices repeat=\"lang in graphCtrl.lang.available | filter: $select.search\">\n" +
    "                	<div ng-bind-html=\"lang | highlight: $select.search\"></div>\n" +
    "        	</ui-select-choices>\n" +
    "    	</ui-select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("langs/rdfuiMainlang.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("langs/rdfuiMainlang.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<p>Main language selection : </p>\n" +
    "	</div>\n" +
    "    <div class=\"col-md-8\">\n" +
    "    	<ui-select ng-model=\"graphCtrl.lang.main\">\n" +
    "        	<ui-select-match placeholder=\"Select a lang in the list or search for...\">{{graphCtrl.lang.main}}</ui-select-match>\n" +
    "            <ui-select-choices repeat=\"lang in graphCtrl.lang.available\">\n" +
    "                <div ng-bind-html=\"lang | highlight: $select.search\"></div>\n" +
    "        </ui-select-choices>\n" +
    "    </ui-select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("literal/rdfuiLiteralEdit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("literal/rdfuiLiteralEdit.tpl.html",
    "<div ng-form name=\"literalForm\">\n" +
    "	<input type=\"text\" \n" +
    "	   ng-model=\"literal['@value']\"\n" +
    "	   ng-model-onblur\n" +
    "	   required\n" +
    "	   >\n" +
    "	   </input>\n" +
    "	   \n" +
    "	   <select ng-model=\"literal['@language']\" \n" +
    "	   		   ng-options=\"l for l in langs\" \n" +
    "	   		   required=\"required\">\n" +
    "	   		<option value=\"\">Select a language</option>\n" +
    "	   </select>\n" +
    "	   \n" +
    "	   <span ng-show=\"literalForm.$invalid\">Fill the label and select a lang</span>\n" +
    "	   \n" +
    "		<button class=\"btn btn-scent\" >{{literal['@language']}}</button>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("object/rdfuiObject.blank.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("object/rdfuiObject.blank.tpl.html",
    "<!-- default blank page -->\n" +
    "<ng-transclude></ng-transclude>\n" +
    "");
}]);

angular.module("object/rdfuiObject.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("object/rdfuiObject.default.tpl.html",
    "<!-- default blank page -->\n" +
    "<ng-transclude></ng-transclude>\n" +
    "");
}]);

angular.module("object/rdfuiObject.full.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("object/rdfuiObject.full.tpl.html",
    "<!-- <p> full template to fill when markup in test file is okay</p> -->\n" +
    "<ng-transclude></ng-transclude>\n" +
    "");
}]);

angular.module("objects/rdfuiObjects.blank.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("objects/rdfuiObjects.blank.tpl.html",
    "<!-- this is the default, empty template when you don't want to use objects' templates -->\n" +
    " <ng-transclude></ng-transclude>");
}]);

angular.module("objects/rdfuiObjects.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("objects/rdfuiObjects.default.tpl.html",
    "<!-- this is the default, empty template when you don't want to use objects' templates -->\n" +
    " <ng-transclude></ng-transclude>");
}]);

angular.module("properties/rdfuiProperties.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("properties/rdfuiProperties.default.tpl.html",
    "<!-- this is the default, empty template when you don't want to use subject's templates -->\n" +
    "<ng-transclude></ng-transclude>\n" +
    "");
}]);

angular.module("property/rdfuiProperty.baseObject.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("property/rdfuiProperty.baseObject.tpl.html",
    "<rdfui-objects objects=\"objects\">\n" +
    "	<rdfui-object ng-repeat=\"obj in objects\" object=\"obj\">\n" +
    "		{{object}}\n" +
    "	</rdfui-object>\n" +
    "</rdfui-objects>");
}]);

angular.module("property/rdfuiProperty.blank.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("property/rdfuiProperty.blank.tpl.html",
    "<!-- This is the blank template for rdfuiproperties display -->\n" +
    "<div ng-transclude></div>\n" +
    "");
}]);

angular.module("property/rdfuiProperty.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("property/rdfuiProperty.default.tpl.html",
    "<h2>{{propertyLabel}}</h2>\n" +
    "<ul>\n" +
    "	<li ng-repeat=\"obj in objects\">\n" +
    "	   \n" +
    "		<div ng-if=\"!isResource\">\n" +
    "		<!-- @TODO : retrive property and lang from the parent object -->\n" +
    "			<rdfui-literal-edit \n" +
    "			     property=\"propertyName\"\n" +
    "			     ng-model=\"obj\" \n" +
    "			     langs=\"langs\" \n" +
    "			></rdfui-literal-edit>\n" +
    "		</div>\n" +
    "		\n" +
    "		 \n" +
    "		<div ng-if=\"isResource\">\n" +
    "			<rdfui-resource-view uri=\"{{obj}}\"></rdfui-resource-view>\n" +
    "		</div>\n" +
    "		 \n" +
    "	</li>\n" +
    "</ul>\n" +
    "    \n" +
    "<div ng-if=\"showSelector\">\n" +
    "    <p>Selected: {{person.selected}}</p>\n" +
    "    <ui-select ng-model=\"person.selected\" class=\"col-md-5\" on-select=\"selectionDone($item, $model)\">\n" +
    "        <ui-select-match placeholder=\"Select a concept in the list or search prefLabel...\">{{$select.selected.$literals[0]}}</ui-select-match>\n" +
    "        <ui-select-choices repeat=\"person in values | propsFilter: {$literals: $select.search}\">\n" +
    "            <div ng-bind-html=\"person.$literals[0] | highlight: $select.search\"></div>\n" +
    "            <small>\n" +
    "<!--               //TODO : display additionnal informations with the use of <rdfui-literal></rdfui-literal> -->\n" +
    "                uri : {{person['@id']}}\n" +
    "            </small>\n" +
    "        </ui-select-choices>\n" +
    "    </ui-select>\n" +
    "</div>\n" +
    "\n" +
    "<input type=\"button\" value=\"Add new\" ng-click=\"addObject()\"></input>\n" +
    "<div ng-transclude></div>");
}]);

angular.module("resource/rdfuiResourceView.blank.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resource/rdfuiResourceView.blank.tpl.html",
    "<!-- This is the blank template for rdfuiproperties display -->\n" +
    "<ng-transclude></ng-transclude>\n" +
    "");
}]);

angular.module("resource/rdfuiResourceView.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resource/rdfuiResourceView.default.tpl.html",
    "<!-- TODO : update this template regarding all the new developements -->\n" +
    "<a href=\"{{accessUri}}\">\n" +
    "	<span ng-repeat=\"v in getLiteralValues(uri)\">{{v['@value']}}</</span>\n" +
    "</a>\n" +
    "<ng-transclude></ng-transclude>");
}]);

angular.module("resource/rdfuiResourceView.full.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resource/rdfuiResourceView.full.tpl.html",
    "<rdfui-graph graph-uri=\"{{uri}}\" drf-type=\"local\">\n" +
    "	<rdfui-subjects graph-data=\"graph\" template-name=\"blank\">\n" +
    "		<rdfui-subject entity=\"$subjects[0]\">\n" +
    "			<div ng-if=\"!entity\">Data for this entity can't be retrieved - look at the URI type display</div>\n" +
    "			<rdfui-properties entity=\"entity\">\n" +
    "   				<div ng-repeat=\"prop in $properties\">\n" +
    "   					<rdfui-property ng-model=\"entity\" \n" +
    "                                    subject=\"entity\"\n" +
    "                                    property-name=\"{{prop.short}}\"\n" +
    "                                    property-label=\"{{prop.human}}\"\n" +
    "                                    langs=\"graphCtrl.lang.available\"\n" +
    "                                    selectedLang=\"graphCtrl.lang.main\"\n" +
    "                                    template-name=\"blank\"\n" +
    "                                    >\n" +
    "                    	<rdfui-objects ng-model=\"objects\"\n" +
    "                                       objects=\"objects\"\n" +
    "                                       template-name=\"blank\">\n" +
    "                        	<div>\n" +
    "                        		<b>{{propertyCtrl.propertyLabel}} : </b>\n" +
    "                       			<rdfui-object ng-repeat=\"obj in objects\"\n" +
    "	                                            object=\"obj\"\n" +
    "	                                            template-name=\"full\"\n" +
    "	                                            maxdfdlevel=\"2\"\n" +
    "	                                            >\n" +
    "                                \n" +
    "                                 	<div ng-if=\"objectsCtrl.hasType.resource\">\n" +
    "                                 		<!-- TODO : put all the logic for defining the template name in the objectCtrl -->\n" +
    "                                 		<!-- pour les uri non deréférencables -->\n" +
    "<!--                                  		<rdfui-resource-view uri=\"{{object}}\" template-name=\"simpleUri\"></rdfui-resource-view> -->\n" +
    "                                 		<rdfui-resource-view uri=\"{{object}}\" template-name=\"light\"></rdfui-resource-view>\n" +
    "                                 	</div>\n" +
    "                                  	<div ng-if=\"objectsCtrl.hasType.literal\">\n" +
    "										<div ng-if=\"objectsCtrl.hasType.literalType.plain\">\n" +
    "    										{{object['@value']}} <button class=\"btn btn-scent\" >{{object['@language']}}</button>\n" +
    "										</div>\n" +
    "										<div ng-if=\"objectsCtrl.hasType.literalType.typed\">\n" +
    "                                            {{object}}\n" +
    "                                    	</div>\n" +
    "                                  </div>\n" +
    "                             	</rdfui-object>\n" +
    "                            </div>\n" +
    "                          </rdfui-objects>\n" +
    "                      </rdfui-property>												               \n" +
    "   				</div>\n" +
    "   			</rdfui-properties>\n" +
    "		</rdfui-subject>\n" +
    "                                       \n" +
    "    </rdfui-subjects>\n" +
    "</rdfui-graph>\n" +
    "				\n" +
    "						");
}]);

angular.module("resource/rdfuiResourceView.light.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resource/rdfuiResourceView.light.tpl.html",
    "<rdfui-graph graph-uri=\"{{uri}}\" drf-type=\"local\">\n" +
    "	<rdfui-subjects graph-data=\"graph\" template-name=\"blank\">\n" +
    "		<rdfui-subject entity=\"$subjects[0]\">\n" +
    "			<div ng-if=\"!entity\">Data for this entity can't be retrieved - look at the URI type display</div>\n" +
    "			<rdfui-properties entity=\"entity\" filtername=\"lightDisplay\">\n" +
    "   				<div ng-repeat=\"prop in $properties\">\n" +
    "   					<rdfui-property ng-model=\"entity\" \n" +
    "                                    subject=\"entity\"\n" +
    "                                    property-name=\"{{prop.short}}\"\n" +
    "                                    property-label=\"{{prop.human}}\"\n" +
    "                                    langs=\"graphCtrl.lang.available\"\n" +
    "                                    selectedLang=\"graphCtrl.lang.main\"\n" +
    "                                    template-name=\"blank\"\n" +
    "                                    >\n" +
    "                    	<rdfui-objects ng-model=\"objects\"\n" +
    "                                       objects=\"objects\"\n" +
    "                                       template-name=\"blank\">\n" +
    "                       			<rdfui-object ng-repeat=\"obj in objects\"\n" +
    "	                                            object=\"obj\"\n" +
    "	                                            template-name=\"full\"\n" +
    "	                                            maxdfdlevel=\"2\"\n" +
    "	                                            >\n" +
    "<!--                                  	<div ng-if=\"objectsCtrl.hasType.resource\"> -->\n" +
    "                                 		<!-- TODO : put all the logic for defining the template name in the objectCtrl -->\n" +
    "                                 		<!-- pour les uri non deréférencables -->\n" +
    "<!--                                  		<rdfui-resource-view uri=\"{{object}}\" template-name=\"simpleUri\"></rdfui-resource-view> -->\n" +
    "<!--                                  		<rdfui-resource-view uri=\"{{object}}\" template-name=\"full\"></rdfui-resource-view> -->\n" +
    "<!--                                  	</div> -->\n" +
    "                                  	<div ng-if=\"objectsCtrl.hasType.literal\">\n" +
    "										<div ng-if=\"objectsCtrl.hasType.literalType.plain\">\n" +
    "    										<a href=\"{{graphCtrl.graphUri}}\">{{object['@value']}} </a><button class=\"btn btn-scent\" >{{object['@language']}}</button>\n" +
    "										</div>\n" +
    "<!-- 										<div ng-if=\"objectsCtrl.hasType.literalType.typed\"> -->\n" +
    "<!--                                             {{object}} -->\n" +
    "<!--                                     	</div> -->\n" +
    "                                  </div>\n" +
    "                             	</rdfui-object>\n" +
    "                          </rdfui-objects>\n" +
    "                      </rdfui-property>												               \n" +
    "   				</div>\n" +
    "   \n" +
    "<!--    				<button class=\"btn btn-scent\" ng-click=\"toggle()\">{{toggleText}}</button> -->\n" +
    "   			</rdfui-properties>\n" +
    "		</rdfui-subject>\n" +
    "                                       \n" +
    "    </rdfui-subjects>\n" +
    "</rdfui-graph>\n" +
    "				\n" +
    "						");
}]);

angular.module("resource/rdfuiResourceView.simpleUri.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resource/rdfuiResourceView.simpleUri.tpl.html",
    "<a href=\"{{accessUri}}\" target=\"blank\">\n" +
    "	{{accessUri}}\n" +
    "</a>\n" +
    "<ng-transclude></ng-transclude>");
}]);

angular.module("subject/rdfuiSubject.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("subject/rdfuiSubject.default.tpl.html",
    "<!-- this is the default, empty template when you don't want to use subject's templates -->\n" +
    "<ng-transclude></ng-transclude>");
}]);

angular.module("subjects/rdfuiSubjects.blank.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("subjects/rdfuiSubjects.blank.tpl.html",
    "<!-- this is the default, empty template when you don't want to use subjects' templates -->\n" +
    "\n" +
    "<!-- <p>===================== THIS IS BLANK TEMPLATE ==============</p> -->\n" +
    "\n" +
    "<!-- <p>Expose subjects :: {{$subjects}}</p> -->\n" +
    "<!-- <p>Expose graphTree :: {{graphTree}}</p> -->\n" +
    "\n" +
    "<!-- <p>=============================</p> -->\n" +
    "\n" +
    "<ng-transclude></ng-transclude>");
}]);

angular.module("subjects/rdfuiSubjects.default.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("subjects/rdfuiSubjects.default.tpl.html",
    "<!-- this is the default, empty template when you don't want to use subjects' templates -->\n" +
    "\n" +
    "<!-- <p>===================== THIS IS the default TEMPLATE ==============</p> -->\n" +
    "\n" +
    "<!-- <p>Expose subjects :: {{$subjects}}</p> -->\n" +
    "<!-- <p>Expose graphTree :: {{graphTree}}</p> -->\n" +
    "\n" +
    "<!-- <p>=============================</p> -->\n" +
    "<ng-transclude></ng-transclude>");
}]);

angular.module("subjects/rdfuiSubjects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("subjects/rdfuiSubjects.tpl.html",
    "<h2>TODO :: see if used in Subjects context...</h2>\n" +
    "    <h3>{{name}}</h3>\n" +
    "     <p>{{languages}}</p>\n" +
    "     <i>{{graphUri}}</i>\n" +
    "     <p>{{list}}<p>\n" +
    "     <p>{{test}}</p>\n" +
    "     <p>{{test.val}}</p>\n" +
    "<ng-transclude></ng-transclude>");
}]);

angular.module("subjects/rdfuiSubjects.tree.node.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("subjects/rdfuiSubjects.tree.node.tpl.html",
    "<div ui-tree-handle  class=\"tree-node tree-node-content\">\n" +
    "	<a class=\"btn btn-success btn-xs\" \n" +
    "	   ng-if=\"node.$_children && node.$_children.length > 0\" \n" +
    "	   data-nodrag \n" +
    "	   ng-click=\"toggle(this)\">\n" +
    "	    <span class=\"glyphicon\" \n" +
    "	          ng-class=\"{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}\">\n" +
    "	    </span>\n" +
    "	</a>\n" +
    "	<span ng-repeat=\"v in graphCtrl.getLiteralValues(node['@id'])\"\n" +
    "	      data-nodrag\n" +
    "	      ng-click=\"graphCtrl.setCurrentNode(node['@id'])\">{{ v['@value'] || '--undefined--' }}</span>\n" +
    "	<a class=\"pull-right btn btn-danger btn-xs\" data-nodrag ng-click=\"remove(this)\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n" +
    "	<a class=\"pull-right btn btn-primary btn-xs\" data-nodrag ng-click=\"newSubItem(this)\" style=\"margin-right: 8px;\"><span class=\"glyphicon glyphicon-plus\"></span></a>\n" +
    "</div>\n" +
    "<ol ui-tree-nodes=\"\" ng-model=\"node.$_children\" ng-class=\"{hidden: collapsed}\">\n" +
    "    <li ng-repeat=\"node in node.$_children track by $index\" ui-tree-node ng-include=\"'subjects/rdfuiSubjects.tree.node.tpl.html'\">\n" +
    "    </li>\n" +
    "<!--      ui-tree-node  -->\n" +
    "<!--     <li ng-repeat=\"n in node.$_children track by $index\"> -->\n" +
    "<!--         <p>{{n}}</p> -->\n" +
    "<!--         TOTOOOO. -->\n" +
    "<!--     </li> -->\n" +
    "</ol>\n" +
    "\n" +
    "\n" +
    "<!--     <p>{{node.$_children}}</p> -->\n" +
    "    <!-- ng-include=\"'subjects/rdfuiSubjects.tree.node.tpl.html'\" -->");
}]);

angular.module("subjects/rdfuiSubjects.tree.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("subjects/rdfuiSubjects.tree.tpl.html",
    "<h3> Browse\n" +
    "   <a href=\"\" class=\"btn btn-default pull-right\" ng-click=\"collapseAll()\">Collapse all</a>\n" +
    "   <a href=\"\" class=\"btn btn-default pull-right\" ng-click=\"expandAll()\">Expand all</a>\n" +
    "</h3>\n" +
    " \n" +
    "<div ui-tree id=\"tree-root\">\n" +
    "    <ol ui-tree-nodes=\"\" ng-model=\"graphTree\">\n" +
    "        <li ng-repeat=\"node in graphTree\" ui-tree-node ng-include=\"'subjects/rdfuiSubjects.tree.node.tpl.html'\"></li>\n" +
    "    </ol>\n" +
    "</div>\n" +
    "<ng-transclude></ng-transclude>");
}]);
