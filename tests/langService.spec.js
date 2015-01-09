describe('langService', function () {

    var scope, $compile, $httpBackend,filtersService;
    var element;
    var graphService;
    var langService;

    var graph1 = "http://test.graphOneLang";
    var graph2 = "http://test.graphDereference";
    
    beforeEach(module('rdf.ui'));
    beforeEach(module('rdf.ui.tests.value'));

    beforeEach(inject(function ($rootScope, _$compile_, $injector, graphOneLang, 
            graphDereference, _filtersService_, _graphService_, _langService_) {
        scope = $rootScope;
        $compile = _$compile_;
        filtersService = _filtersService_;
        graphService = _graphService_;
        langService = _langService_;
        
        $httpBackend  = $injector.get('$httpBackend');
        
        $httpBackend.when('GET', /\/skosifier\?uri=.*\.graphOneLang/).respond(graphOneLang.metadata);
        $httpBackend.when('GET', /\/skosifier\?uri=.*\.graphDereference/).respond(graphDereference.metadata);
        
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });
    
    
    it('should return the correct language list from metadata',function(){
        
        var dfd = graphService.getGraphData(graph1);
        $httpBackend.flush();
        
        dfd.then(function(data){
            expect(data).not.toBe(undefined); 
            
            
            expect(langService.getLanguagesFromMetadata(data).length).toBe(2);
            
        });
        
        
    });
    
    
});
