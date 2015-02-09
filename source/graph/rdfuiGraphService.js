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
    .factory('graphService', ['$http', '$log', '$q', '$rootScope', 'rdfuiConfig', 'filtersService', 'arrayService',
      function ($http,$log, $q, $rootScope, rdfuiConfig,filtersService,arrayService) {
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
            console.warn('@Deprecated :: use graphService.getLazyGraph instead');
            if(!parameters){
                parameters = {
                        scheme : '', //the default one 
                        endpointFn : function(/*string*/ uri){
                            return rdfuiConfig.server+'skosifier?uri='+uri;
                        }
                };
            }
            
            var $dfd = $q.defer();//$.Deferred();
            
            graphInit.push($dfd);
            
            var uri = graphUri.replace(/ /g,'%20');
            
            $http({
                method : 'GET',
                url : parameters.endpointFn(uri), //rdfuiConfig.server+'skosifier?uri='+uri,
                //headers: {'Accept':'application/json-ld'}
            }).success(function(data){
                //TODO : use self._postProcess(data);
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
                $dfd.resolve(data);
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
                //we take the first object
                var obj = objects[0];
                hasType.literalType.plain = obj['@language'] ? true : false;
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
        
        //TODO : mettre ces éléments d'history dans un graph service
        graphService.buildChanges = function(s,p,o){
            
            var graphUrl = 'http://www.culture-terminology.org/thesaurus/C4DFECD168B5A529F18140FDAC52E554/el%20tiltredre';
            
            if(s == null){
                console.warn('TODO : retrive the current graph url');
                graphUrl = 'http://www.culture-terminology.org/thesaurus/C4DFECD168B5A529F18140FDAC52E554/el%20tiltredre';
            }
            var historyGraphUrl = 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a';
            
            var oldo = o[0];
            var newo = o[1];
            //build the change on object
            
            
            var historyRoot = {
                    '@id': historyGraphUrl,
                    '@type': [
                      'history'
                    ],
                    'change': [
                      {
                        '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#85be670a-076a-4da3-af97-724511485438'
                      }
                    ],
                    'historyOf': [
                      {
                        '@id': graphUrl
                      }
                    ]
                  };
            
            var doc = [
              historyRoot,
              {
                '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#fa55df25-3150-4225-85fe-9eb03d059621',
                '@type': [
                  'http://www.culture-terminology.org/ontologies/history#subject'
                ],
                'http://www.culture-terminology.org/ontologies/history#element': [
                  {
                    '@id': 'http://www.athenaeurope.org/athenawiki/AthenaThesaurus/Michael_Subjects#Slavery'
                  }
                ],
                'http://www.culture-terminology.org/ontologies/history#property': [
                  {
                    '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#64a37452-c07b-40c6-ac14-d8d5e935e10d'
                  }
                ]
              },
              {
                '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#85be670a-076a-4da3-af97-724511485438',
                '@type': ['change'],
                'http://www.culture-terminology.org/ontologies/history#date': [
                    {
                        '@value': 1413927724650.0
                      }
                    ],
                    'http://www.culture-terminology.org/ontologies/history#from': [
                      {
                        '@id': 'http://define.GRAPH.VERSION'
                      }
                    ],
                    'http://www.culture-terminology.org/ontologies/history#subject': [
                      {
                        '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#fa55df25-3150-4225-85fe-9eb03d059621'
                      }
                    ],
                    'http://www.culture-terminology.org/ontologies/history#user': [
                      {
                        '@value': 'default user'
                      }
                    ]
                    },
                    {
                    '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#97fac8c6-a264-4e4b-bd8b-f49109aed656',
                    '@type': [
                      'object'
                    ],
                    'element': [
                    {
                        '@language': oldo['@language'],
                        '@value': oldo['@value']
                      }
                    ],
                    'newValue': [
                      {
                        '@language': newo['@language'],
                        '@value': newo['@value']
                      }
                    ]
                    },
                    {
                    '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#64a37452-c07b-40c6-ac14-d8d5e935e10d',
                    '@type': ['property'],
                    'element': [
                      { '@id': 'http://www.w3.org/2004/02/skos/core#prefLabel'}
                    ],
                    'object': [
                      {
                        '@id': 'http://www.culture-terminology.org/ontoHisto/4b8e72a0-f558-47fe-9880-40bb366b268a#97fac8c6-a264-4e4b-bd8b-f49109aed656'
                      }
                      ]
                    }
                    ];
            
            var context = {
                        'history': 'http://www.culture-terminology.org/ontologies/history#history',
                        
                        'change': {
                            '@id': 'http://www.culture-terminology.org/ontologies/history#change',
                            '@type': '@id'
                          },
                          
                        'historyOf' : 'http://www.culture-terminology.org/ontologies/history#historyOf',
                        'element' : 'http://www.culture-terminology.org/ontologies/history#element',
                        'newValue' : 'http://www.culture-terminology.org/ontologies/history#newValue',
                        
                        'property' : 'http://www.culture-terminology.org/ontologies/history#property',
                        'object' : 'http://www.culture-terminology.org/ontologies/history#object',
            };
                
            var jsonLd = {
                    '@context' : context,
                    '@graph' : doc
            };
            
            console.log(jsonLd);
            
            $http({
                url : rdfuiConfig.server+'skosifier/changesV2',
                method : 'POST',
                headers : {'content-type':'application/ld+json'},
                data : jsonLd
                //dataType : 'json',
                });

        };
        
        self = graphService;
        return graphService;
    }
    ]);

})();