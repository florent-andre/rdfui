describe('filtersService', function () {

    var scope, $compile, $httpBackend,filtersService;
    var element;
    var graphService;

//    var graph1 = "http://test.graphOneLang";
//    var graph2 = "http://test.graphDereference";
    
    var entityConcept = {
            "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1114",
            "@type": "Concept",
            "broader": "http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1045",
            "created": "2011-09-01T00:00:00+02:00",
            "definition": {
              "@language": "fr-FR",
              "@value": "Ouvrage de franchissement souterrain par une voie de communication d’un obstacle naturel (montagne, cours d’eau, bras de mer, etc.)."
            },
            "exactMatch": [
              "http://vocab.getty.edu/aat/300007899",
              "http://fr.dbpedia.org/resource/Tunnel",
              "http://data.bnf.fr/ark:/12148/cb119754118"
            ],
            "http://purl.org/iso25964/skos-thes#status": 1,
            "http://www.w3.org/2008/05/skos-xl#prefLabel": [
              "http://data.culture.fr/thesaurus/resource/ark:/67717/4b78db04-0a5c-4a39-98c8-4f09667875f8",
              "http://data.culture.fr/thesaurus/resource/ark:/67717/22050164-9e86-46da-8989-375a0b6da6b1"
            ],
            "inScheme": [
              "http://data.culture.fr/thesaurus/resource/ark:/67717/T96",
              "http://www.culture-terminology.org/thesaurus/mcc/light"
            ],
            "modified": "2014-10-16T15:39:35+02:00",
            "prefLabel": [
              {
                "@language": "fr-FR",
                "@value": "tunnel"
              },
              {
                "@language": "en-US",
                "@value": "tunnels"
              }
            ]
          };
    
    var entityObjectProperty = {
            "@id": "http://data.culture.fr/thesaurus/ginco/ns/TermeAssocie",
            "@type": "ObjectProperty",
            "label": "TermeAssocie",
            "subPropertyOf": "related"
          };
    
    beforeEach(module('rdf.ui'));
    
    beforeEach(inject(function ($rootScope, _$compile_, $injector, _filtersService_, _graphService_) {
        scope = $rootScope;
        filtersService = _filtersService_;    
    }));
    
    it('should print the jasmine version',function(){
        if (jasmine.version) { //the case for version 2.0.0
            console.log('jasmine-version:' + jasmine.version);
         }
         else { //the case for version 1.3
            console.log('jasmine-version:' + jasmine.getEnv().versionString());
         }
    });
    
    it('should correctly accept or reject entities (deprecated functions)',function(){
        
        var f = filtersService.rejectType(['ObjectProperty']);
        expect(f(entityConcept)).toBe(true);
        expect(f(entityObjectProperty)).toBe(false);
        
        f = filtersService.acceptType(['Concept']);
        expect(f(entityConcept)).toBe(true);
        expect(f(entityObjectProperty)).toBe(false);
        
        f = filtersService.acceptType(['Something']);
        expect(f(entityConcept)).toBe(false);
        expect(f(entityObjectProperty)).toBe(false);
        
    });
    
    it('should return null if parameter is null or undefined',function(){
        
        expect(filtersService.compile(null)).toBe(null);
        expect(filtersService.compile(undefined)).toBe(null);
        
    });
    
    it('should correctly compile the filter definition',function(){
        
        var defAcceptConcept = {
            "type" : "accept",
            "on" : {"property" : "@type", "values" : ["Concept"]}
        };
        var f = filtersService.compile(defAcceptConcept);
        expect(defAcceptConcept.fn).not.toBe(undefined);
        expect(f(entityConcept)).toBe(true);
        expect(f(entityObjectProperty)).toBe(false);
        
        var defRejectConcept = {
                type : "reject",
                on : {"property" : "@type", "values" : ["Concept"]}
            };
        f = filtersService.compile(defRejectConcept);
        expect(defRejectConcept.fn).not.toBe(undefined);
        expect(f(entityConcept)).toBe(false);
        expect(f(entityObjectProperty)).toBe(true);
        
        var defAcceptBroader = {
                type : "accept",
                on : {"property" : "broader", "values" : ["http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1045"]}
            };
        f = filtersService.compile(defAcceptBroader);
        expect(defAcceptBroader.fn).not.toBe(undefined);
        expect(f(entityConcept)).toBe(true);
        expect(f(entityObjectProperty)).toBe(false);
        
        //expect(true).toBe(false);
    });
    
    //TODO : test on "label node" and array of references
    xit('should work on label node',function(){
        
        //for example on this definition
//        "definition": {
//            "@language": "fr-FR",
//            "@value": "Ouvrage de franchissement souterrain par une voie de communication d’un obstacle naturel (montagne, cours d’eau, bras de mer, etc.)."
//          },
          
    });
    
    it('should work on array of references',function(){
        
        //for example, on this property of the testEntity
//        "http://www.w3.org/2008/05/skos-xl#prefLabel": [
//                                                        "http://data.culture.fr/thesaurus/resource/ark:/67717/4b78db04-0a5c-4a39-98c8-4f09667875f8",
//                                                        "http://data.culture.fr/thesaurus/resource/ark:/67717/22050164-9e86-46da-8989-375a0b6da6b1"
//                                                      ],
        
        var filterOK = {
                "type" : "accept",
                "on" : {"property" : "http://www.w3.org/2008/05/skos-xl#prefLabel", 
                        "values" : ["http://data.culture.fr/thesaurus/resource/ark:/67717/22050164-9e86-46da-8989-375a0b6da6b1"]
                        }
            };
        
        var f = filtersService.compile(filterOK);
        expect(f(entityConcept)).toBe(true);
        
        var filterNOK = {
                "type" : "accept",
                "on" : {"property" : "http://www.w3.org/2008/05/skos-xl#prefLabel", 
                        "values" : ["http://test.value"]
                        }
            };
        
        var f = filtersService.compile(filterNOK);
        expect(f(entityConcept)).toBe(false);
        
    });
    
    xit('should be able to define "or" or "and" operator between values for a property',function(){
       
        //for the preflabel property, be able to filter : 
        // *if one of the value in the filter is present
        // *if all the values in the filter are present
        // *if only this values are present
        // *if at least this values are present
        
        // ==> suggestion for this : create a "strategy" property in the filter for defining this differents strategies.
        
    });

});
