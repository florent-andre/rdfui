// spec.js
describe('Rdfui tree and detail view', function() {

    it('should pass the basic test of title', function() {
        browser.get('');
        expect(browser.getTitle()).toEqual('RDFui demo');
    });

  it('should synchronize the 2 views (tree and detail)', function() {
      
      var treeDisplay = element(by.id('tree-root'));
      
      var meubleDomestique = treeDisplay.all(by.css('.tree-node-content')).get(1);
      
      expect(meubleDomestique.getText()).toEqual('meuble domestique');
      
      
      var properties = element.all(by.css('rdfui-property'));
      
      var prefLabelProperty = properties.get(0);
      var prefLabelHeader = prefLabelProperty.element(by.tagName('h2'));
      expect(prefLabelHeader.getText()).toEqual('prefLabels');
      
      //now we try to clic on the element
      meubleDomestique.element(by.css('span.ng-scope.ng-binding')).click();
      
      //tcheck that the last action don't throw an error
      browser.manage().logs().get('browser').then(function(browserLog) {
          expect(browserLog[browserLog.length - 1].level.value).not.toEqual(1000);
          console.log(browserLog[browserLog.length - 1]);
      });
      
      //and tcheck that the property display is updated
      //prefLabelProperty.element(by.css());
      expect(prefLabelProperty.element(by.css('rdfui-literal-edit')).isPresent()).toBe(true);
      
      var label = prefLabelProperty.element(by.model("literal['@value']"));
      expect(label.isPresent()).toBe(true);
      
      var lang = prefLabelProperty.element(by.model("literal['@language']"));
      expect(lang.isPresent()).toBe(true);
      expect(lang.all(by.css("option")).count()).toBe(4); //3 langs + the default value
      
      //try to send text and check if updated in the tree view
      var txt = 'my text';
      label.clear();
      label.sendKeys(txt);
      
      expect(meubleDomestique.getText()).toEqual(txt);
      
  });
  
  it('should display the narrower elements',function(){
     expect('do the test on narrower element').not.toBe(null);
     expect('test').toBe('todo');
  });
  
  xit('should allow to edit undefined prefLabel', function(){
      //TODO : extract code from preceding test and use it against the first "undefined" element.
  });
  
  //meuble domestique
  
});