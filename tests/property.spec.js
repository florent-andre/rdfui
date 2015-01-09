describe('rdfui-property', function () {

    //REMARQUE ; 
    // tous les tests ici sont à revoir.
    // le test du subjects nécessite la présence du noeud dom rdf-graph
    // pour le faire le mock de ce noeud parent : http://demisx.github.io/angularjs/unit-testing/2014/10/28/unit-testing-angular-child-directive-that-requires-parent.html
    
    var scope, $compile, $httpBackend;
    var element;

    //beforeEach(module('rdf.ui'));
    beforeEach(module('rdf.ui'));
    beforeEach(module('rdf.ui.tests.value'));

    beforeEach(inject(function ($rootScope, _$compile_, $injector, graphOneLang) {
        scope = $rootScope;
        $compile = _$compile_;
        
        $httpBackend  = $injector.get('$httpBackend');
        
//        $httpBackend.when('GET', '/entries').respond([
//          { id: 1, name: "Entry 1" }, 
//          { id: 2, name: "Entry 2" }
//        ]);
        
        $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(graphOneLang.value);
        
        // TODO: move test element + data to a generic module so we can reuse it for other tests
        element = angular.element(
                '<rdfui-graph graph-uri="http://test.json">'
                    + '<rdfui-property ng-model="currentNode"></rdfui-property>'
               +'</rdfui-graph>');
        
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

    function createTree() {
        $compile(element)(scope);
        scope.$digest();
        return element;
    }
    
    //@TODO : reactive this test, but for now testing that graphCtrl contains currentNode, but this is the job of the rdfui-subject element
    xit('should expose the graphCtrl and his currentNode property',function(){
    	var tree = createTree();
        $httpBackend.flush();
        
        expect(tree.scope().graph).toBe(undefined);
        expect(tree.isolateScope().graph).not.toBe(undefined);
        
        var propNode = tree.find('rdfui-property');
        console.log(tree.find('rdfui-property'));
        
        expect(propNode.scope().graphCtrl).toBe(undefined);
        expect(propNode.isolateScope().graphCtrl).not.toBe(null);
        
        expect(propNode.isolateScope().graphCtrl.currentNode).not.toBe(null);
        console.log(propNode.isolateScope().graphCtrl.currentNode);
        expect(true).toBe(false);
        
    });
    
});
