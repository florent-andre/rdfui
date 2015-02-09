describe('graphService', function () {

    var scope, $compile, $httpBackend,filtersService;
    var element;
    var graphService;

    var graph1 = "http://test.graphOneLang";
    var graph2 = "http://test.graphDereference";
    
    beforeEach(module('rdf.ui'));
    beforeEach(module('rdf.ui.tests.value'));

    beforeEach(inject(function ($rootScope, _$compile_, $injector, graphOneLang, graphDereference, _filtersService_, _graphService_) {
        scope = $rootScope;
        $compile = _$compile_;
        filtersService = _filtersService_;
        graphService = _graphService_;
        
        $httpBackend  = $injector.get('$httpBackend');
        
        $httpBackend.when('GET', /\/skosifier\?uri=.*\.graphOneLang/).respond(graphOneLang.value);
        $httpBackend.when('GET', /\/skosifier\?uri=.*\.graphDereference/).respond(graphDereference.value);
        
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });
    
    it('should return data after calling the http service',function(){
        var data = graphService.getGraphData(graph1);
        $httpBackend.flush();
        expect(data).not.toBe(undefined);
        
    });
    
    it('should say if a property describe ressources or not',function(){
        //TODO :: review this test to conform with treeStructure releated one (use of deferrer)
        var data = graphService.getGraphData(graph1);
        $httpBackend.flush();
        expect(data).not.toBe(undefined); 
        
        expect(graphService.isReference("altLabel",graph1)).toBe(false);
        expect(graphService.isReference("broader",graph1)).toBe(true);
        expect(graphService.isReference("narrower",graph1)).toBe(true);
        expect(function(){graphService.isReference("notInContext",graph1);}).toThrow();
        
    });
    
    
    it('should do correct filtering',function(){
        var dfd = graphService.getGraphData(graph2);
        $httpBackend.flush();
        
        dfd.then(function(data){
          
            expect(data).not.toBe(undefined);
            console.log(data);
            //with no filter definition, equivalent to an acceptAll filter
            var acceptAll = graphService.doFilter(data);
            expect(acceptAll.length).toBe(19);
            
            //with a particular filter :
            var treeFilter = {
                    "type" : "accept",
                    "on" : {"property" : "@type", "values" : ["Concept"]}
                }
            
            var filterFn = filtersService.compile(treeFilter);
            
            var prop = graphService.doFilter(data,filterFn);
            expect(prop.length).toBe(2);
            
             
        },function(d){
            //there is an error
            expect(true).toBe(false);
        });
        
    });
    
    
    function checkGraph1TreeStructure(/**treeRepresentation*/ t, /** int */ firstParentIndex){
        var firstParent = t[firstParentIndex];
        expect(firstParent['@id']).toBe('http://www.culturecommunication.gouv.fr/ark:/67717/T96-1930');
        
        expect(firstParent.$_children).not.toBe(undefined);
        expect(firstParent.$_children.length).toBe(1);
        
        var firstChild = firstParent.$_children[0];
        expect(firstChild['@id']).toBe('http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931');
        expect(firstChild.$_children).not.toBe(undefined);
        expect(firstChild.$_children.length).toBe(11);
        
        var secondChild = firstChild.$_children[10];
        expect(secondChild['@id']).toBe('http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956');
        expect(secondChild.$_children).not.toBe(undefined);
        expect(secondChild.$_children.length).toBe(8);
    }
    
    it('should create a good treeStructure without filter',function(){
        var dfd = graphService.getGraphData(graph1);
        $httpBackend.flush();
        
        dfd.then(function(data){
          
            expect(data).not.toBe(undefined);
            console.log(data);
            expect(true).toBe(true);
            var t = graphService.getTreeRepresentation(data);
            console.log(t);
            
            //without filters, the first concept is in second position. 
            checkGraph1TreeStructure(t, 1);
            
        },function(d){
            //there is an error
            expect(true).toBe(false);
        });
        
    });
    
    it('should create a good treeStructure whith a filter (on graph1)',function(){
        var dfd = graphService.getGraphData(graph1);
        $httpBackend.flush();
        
        dfd.then(function(data){
          
            expect(data).not.toBe(undefined);
            var t = graphService.getTreeRepresentation(data,filtersService.rejectType(['ConceptScheme']));
            console.log(t);
            
            //without filters, the first concept is in second position. 
            checkGraph1TreeStructure(t, 0);
            
        },function(d){
            //there is an error
            expect(true).toBe(false);
        });
        
    });
    
    
    function checkGraph2TreeStructure(/**treeRepresentation*/ t, /** int */ firstParentIndex){
        var firstParent = t[firstParentIndex];
        expect(firstParent['@id']).toBe('http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1045');
        
        expect(firstParent.$_children).not.toBe(undefined);
        expect(firstParent.$_children.length).toBe(1);
        
        var firstChild = firstParent.$_children[0];
        expect(firstChild['@id']).toBe('http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1114');
        expect(firstChild.$_children).not.toBe(undefined);
        expect(firstChild.$_children.length).toBe(0);
    }
    
    it('should create a good treeStructure with filters (on graph2)',function(){
        var dfd = graphService.getGraphData(graph2);
        $httpBackend.flush();
        
        dfd.then(function(data){
           
            expect(data).not.toBe(undefined);
            var t = graphService.getTreeRepresentation(data,filtersService.acceptType(['Concept']));
            
            checkGraph2TreeStructure(t,0);
            
                        
        },function(d){
            //there is an error
            expect(true).toBe(false);
        });
        
        
    });
    
    it('should create a good treeStructure with filters (on graph2) when treeRepresentation called multiple times',function(){
        var dfd = graphService.getGraphData(graph2);
        $httpBackend.flush();
        
        dfd.then(function(data){
           
            expect(data).not.toBe(undefined);
            var t = graphService.getTreeRepresentation(data,filtersService.acceptType(['Concept']));
            t = graphService.getTreeRepresentation(data,filtersService.acceptType(['Concept']));
            t = graphService.getTreeRepresentation(data,filtersService.acceptType(['Concept']));
            
            checkGraph2TreeStructure(t,0);
            
                        
        },function(d){
            //there is an error
            expect(true).toBe(false);
        });
        
        
    });
    
    it('should create a good treeStructure when filter is not present on the first call, but on the others',function(){
        var dfd = graphService.getGraphData(graph2);
        $httpBackend.flush();
        
        dfd.then(function(data){
           
            expect(data).not.toBe(undefined);
            var t = graphService.getTreeRepresentation(data);
            
            var treeFilter = {
                    "type" : "accept",
                    "on" : {"property" : "@type", "values" : ["Concept"]}
                }
            
            var filterFn = filtersService.compile(treeFilter);
            t = graphService.getTreeRepresentation(data,filterFn);//['@graph'];
            
//            t = graphService.getTreeRepresentation(data,filtersService.acceptType(['Concept']));
//            t = graphService.getTreeRepresentation(data,filtersService.acceptType(['Concept']));
            
            checkGraph2TreeStructure(t,0);
            
                        
        },function(d){
            //there is an error
            expect(true).toBe(false);
        });
        
        
    });
    
    describe('graphService.findNode', function () {
        
        it('should accept directly jsonLD, or the @graphDefinition',function(){
            var dfd = graphService.getGraphData(graph2);
            $httpBackend.flush();
            
            dfd.then(function(data){
               
                expect(data).not.toBe(undefined);
                var fromGraphLD = graphService.findNode(data,'http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1114');
                expect(fromGraphLD).not.toBe(undefined);
                
                var fromGraphData = graphService.findNode(data['@graph'],'http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1114');
                expect(fromGraphData).not.toBe(undefined);
                
                            
            },function(d){
                //there is an error
                expect(true).toBe(false);
            });
        });
    });
    
    
});
