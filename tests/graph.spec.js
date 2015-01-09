describe('main', function () {

    var scope, $compile, $httpBackend;
    var element;

    beforeEach(module('rdf.ui'));
    beforeEach(module('rdf.ui.tests.value'));

    beforeEach(inject(function ($rootScope, _$compile_, $injector, graphOneLang) {
        scope = $rootScope;
        $compile = _$compile_;
        
        $httpBackend  = $injector.get('$httpBackend');
        
        $httpBackend.when('GET', '/entries').respond([
          { id: 1, name: "Entry 1" }, 
          { id: 2, name: "Entry 2" }
        ]);
        
        $httpBackend.when('GET', /\/skosifier\?uri=.*/).respond(graphOneLang.value);
        
        // TODO: move test element + data to a generic module so we can reuse it for other tests
        element = angular.element('<rdfui-graph graph-uri="http://test.json">' +
          '</rdfui-graph>');
        
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

//    it('should be created', function () {
//        var tree = createTree();
//        expect(tree.find('h2')).toExist();
//        
//        //flush because request done on init
//        $httpBackend.flush();
//        
//    });
    
    it('should call the http service',function(){
    	var tree = createTree();
    	//$httpBackend.expectGET('/entries');
//        controller.load(function(){
//          expect(scope.entries.length).toBe(2);
//        });
        $httpBackend.flush();
//    	console.log(scope);
        expect(element.scope().graph).toBe(undefined);
        
        expect(element.isolateScope().graph).not.toBe(null);
        
    });
    
    it('should contains and export the graphUri property',function(){
        var tree = createTree();
        
        $httpBackend.flush();
        
        expect(element.isolateScope().graphUri).not.toBe(null);
        expect(element.isolateScope().graphUri).not.toBe(undefined);
        
        console.log("******************************");
        console.log(element.isolateScope().graphUri);
        //TODO : a test to see the value of the graphuri in the dom
    });
    

    // test if nodes and child nodes all are rendered
//    it('should show 15 nodes', function () {
//      var tree = createTree();
//      expect(tree.find('li').length).toEqual(15);
//    });
//
//    it('should show 4 root nodes', function () {
//      var tree = createTree();
//      expect(tree.children('ol').first().children('li').length).toEqual(4);
//    });
//
//    it('should show the first node with no child nodes', function () {
//      var tree = createTree();
//      expect(tree.children('li').first().children('li').length).toEqual(0);
//    });
//
//    it('should show the third node with 3 child nodes', function () {
//      var tree = createTree();
//      expect(tree.children('ol').first().children('li').eq(2).find('> ol').children('li').length).toEqual(3);
//    });
//
//    // test if the node text is shown
//    it('should show \'item1\' as text for the first node', function () {
//      var tree = createTree();
//      expect(tree.children('ol').first().children('li').first()).toHaveText('item1');
//    });
//
//    it('should show \'item2.1.2\' as text for the second child node of the first child node of node 2', function () {
//      var tree = createTree();
//      expect(tree.children('ol').first().children('li').eq(1).find('> ol').children('li').first().find('> ol').children('li').eq(1)).toHaveText('item2.1.2');
//    });

    // TODO: simulate drag and drop events and check if the position of the nodes is still correct
    // code to simulate d&d: https://github.com/jquery/jquery-ui/blob/master/tests/jquery.simulate.js

});
