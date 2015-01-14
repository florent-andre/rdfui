/**
 */
(function () {
  'use strict';
  // The source file for this constants values is in rdfui/tests/utils/graphValues.js
  angular.module('rdf.ui.tests.value')
    .constant('graphOneLang', {
      metadata : {
    	  "@context": {
    		    "ConceptScheme": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
    		    "creator": {
    		      "@id": "http://purl.org/dc/terms/creator",
    		      "@type": "http://www.w3.org/2001/XMLSchema#string"
    		    },
    		    "format": {
    		      "@id": "http://purl.org/dc/terms/format",
    		      "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
    		    },
    		    "http://purl.org/ontology/bibo/edition": {
    		      "@type": "http://www.w3.org/2001/XMLSchema#string"
    		    },
    		    "language": {
    		      "@id": "http://purl.org/dc/terms/language",
    		      "@type": "http://www.w3.org/2001/XMLSchema#language"
    		    },
    		    "publisher": {
    		      "@id": "http://purl.org/dc/terms/publisher",
    		      "@type": "http://www.w3.org/2001/XMLSchema#string"
    		    },
    		    "rights": {
    		      "@id": "http://purl.org/dc/terms/rights",
    		      "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
    		    },
    		    "subject": {
    		      "@id": "http://purl.org/dc/terms/subject",
    		      "@type": "http://www.w3.org/2001/XMLSchema#string"
    		    },
    		    "title": {
    		      "@id": "http://purl.org/dc/terms/title",
    		      "@type": "http://www.w3.org/2001/XMLSchema#string"
    		    },
    		    "xsd": "http://www.w3.org/2001/XMLSchema#"
    		  },
    		  "@id": "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		  "@type": "ConceptScheme",
    		  "creator": "E04F47110C7AD4F332D4F7D93BA3D675",
    		  "format": "http://dbpedia.org/page/Simple_Knowledge_Organization_System",
    		  "http://purl.org/ontology/bibo/edition": "1.0.0",
    		  "language": [
    		    "en",
    		    "fr"
    		  ],
    		  "publisher": "ministriy",
    		  "rights": "http://creativecommons.org/licenses/by-sa/3.0/",
    		  "subject": [
    		    "Archaeology",
    		    "History"
    		  ],
    		  "title": "pallissitest"
    		},
      value : {
    	  "@context": {
    		    "altLabel": "http://www.w3.org/2004/02/skos/core#altLabel",
    		    "broader": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#broader",
    		      "@type": "@id"
    		    },
    		    "Collection": "http://www.w3.org/2004/02/skos/core#Collection",
    		    "Concept": "http://www.w3.org/2004/02/skos/core#Concept",
    		    "ConceptScheme": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
    		    "contributor": "http://purl.org/dc/elements/1.1/contributor",
    		    "created": "http://purl.org/dc/terms/created",
    		    "creator": "http://purl.org/dc/elements/1.1/creator",
    		    "description": "http://purl.org/dc/elements/1.1/description",
    		    "hasTopConcept": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#hasTopConcept",
    		      "@type": "@id"
    		    },
    		    "hiddenLabel": "http://www.w3.org/2004/02/skos/core#hiddenLabel",
    		    "inScheme": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#inScheme",
    		      "@type": "@id"
    		    },
    		    "language": "http://purl.org/dc/elements/1.1/language",
    		    "member": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#member",
    		      "@type": "@id"
    		    },
    		    "modified": "http://purl.org/dc/terms/modified",
    		    "narrower": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#narrower",
    		      "@type": "@id"
    		    },
    		    "prefLabel": "http://www.w3.org/2004/02/skos/core#prefLabel",
    		    "publisher": "http://purl.org/dc/elements/1.1/publisher",
    		    "related": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#related",
    		      "@type": "@id"
    		    },
    		    "rights": "http://purl.org/dc/elements/1.1/rights",
    		    "scopeNote": "http://www.w3.org/2004/02/skos/core#scopeNote",
    		    "subject": "http://purl.org/dc/elements/1.1/subject",
    		    "title": "http://purl.org/dc/elements/1.1/title",
    		    "topConceptOf": {
    		      "@id": "http://www.w3.org/2004/02/skos/core#topConceptOf",
    		      "@type": "@id"
    		    }
    		  },
    		  "@graph": [
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96",
    		      "@type": "ConceptScheme",
    		      "contributor": "",
    		      "created": 2001,
    		      "creator": "Inventaire général du patrimoine culturel",
    		      "description": {
    		        "@language": "fr",
    		        "@value": "Le thésaurus de la désignation\ndéveloppe sous une forme méthodique les termes utiles à la\ndésignation des oeuvres architecturales et mobilières.\nL'organisation propre au thesaurus permet de situer chaque\nterme dans une hiérarchie dont les entrées principales sont classées selon des catégories fonctionnelles liées à l'usage religieux, funéraire, industriel, etc. Il comporte en outre tous les renvois nécessaires, des définitions sommaires, des notes d'utilisation."
    		      },
    		      "hasTopConcept": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1930",
    		      "language": "fr",
    		      "modified": "2011-12-19 11:29:20",
    		      "publisher": "Ministère chargé de la culture",
    		      "rights": "Diffusion et reproduction soumises à autorisation préalable du ministre chargé de la culture ou, le cas échéant, du titulaire des droits d'auteur s'il est distinct de lui (article L.335-3 du Code de la propriété intellectuelle)",
    		      "subject": {
    		        "@language": "fr",
    		        "@value": "objet mobilier ; élément d'architecture ; mobilier monumental ; mobilier religieux ; mobilier domestique ; instruments de musique ; instruments scientifiques ; machines industrielles ; patrimoine maritime et fluvial"
    		      },
    		      "title": {
    		        "@language": "fr",
    		        "@value": "Thésaurus de la désignation des oeuvres architecturales et mobilières"
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1930",
    		      "@type": "Concept",
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "narrower": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "meuble domestique"
    		      },
    		      "topConceptOf": "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1930",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "sièges"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "narrower": [
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1933",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1935",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1937",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1939",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1942",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1949",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1946",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1944",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1952",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1954",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "siège"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Meuble de repos servant à s'asseoir. Les sièges se répartissent en différentes catégories selon le nombre de personnes pouvant s'asseoir et les parties du corps soutenues ; ils peuvent être de matériaux divers, bois, métal, osier, paille, etc."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1933",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nescabeaux"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "escabeau"
    		      },
    		      "related": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-2428",
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège d'une place sans dossier dont le dessus est en bois plein. Il est monté sur pieds ou sur panneaux verticaux et affecte des formes diverses."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1935",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\npoufs"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "pouf"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Tabouret rembourré, sans accotoirs et sans pieds visibles."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1937",
    		      "@type": "Concept",
    		      "altLabel": {
    		        "@language": "fr",
    		        "@value": "\nselle à traire"
    		      },
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nselles"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "selle"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège en bois, d'une place et souvent assez bas, que l'on fiche en terre. La selle peut être monopode, bipode ou polypode et servir particulièrement pour la traite."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1939",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\ntabourets"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "tabouret"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège d'une place, sans dossier, garni ou non, de formes diverses. Le tabouret peut être d'encoignure, et comporte alors un angle droit."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1942",
    		      "@type": "Concept",
    		      "altLabel": {
    		        "@language": "fr",
    		        "@value": "\nchaise pour l'habit"
    		      },
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nchaises"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "chaise"
    		      },
    		      "related": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-411",
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Tout siège d'une place, à dossier, sans accotoirs. La chaise pour l'habit est une variante dont le dossier se rattache directement aux pieds pour laisser le passage à l'habit."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1944",
    		      "@type": "Concept",
    		      "altLabel": [
    		        {
    		          "@language": "fr",
    		          "@value": "\nfumeuse à dossier"
    		        },
    		        {
    		          "@language": "fr",
    		          "@value": "\nfumeuse à pupitre"
    		        }
    		      ],
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nfumeuses"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "fumeuse"
    		      },
    		      "related": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1946",
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège sur lequel on s'assoit à cheval pour fumer, à fond un peu plus bas que celui de la voyeuse assise qu'il remplace au XIXe siècle. La fumeuse comporte parfois une boîte sous l'accoudoir, comme la ponteuse, où se place, le cas échéant, le matériel de fumeur.\nLa fumeuse à dossier ou la fumeuse à pupitre sont des variantes."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1946",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nvoyeuses"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "voyeuse"
    		      },
    		      "related": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1944",
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Meuble en forme de chaise, dont le \"dossier\" comportant un accoudoir ou un enroulement supérieur garni, permet à l'usager, assis face au \"dossier\", d'observer le jeu. La voyeuse assise, la voyeuse à genoux, et la ponteuse constituent des variantes de la voyeuse."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1949",
    		      "@type": "Concept",
    		      "altLabel": {
    		        "@language": "fr",
    		        "@value": "\nfauteuil sans accotoirs"
    		      },
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nfauteuils"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "fauteuil"
    		      },
    		      "related": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-413",
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège d'une place à dossier et accotoirs. Le fauteuil sans accotoirs comporte des supports d'accotoirs"
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1952",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nbancs"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "banc"
    		      },
    		      "related": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-409",
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège à plusieurs places, à fond en bois.Il comporte ou non un dossier, des accotoirs et des éléments annexes."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1954",
    		      "@type": "Concept",
    		      "altLabel": [
    		        {
    		          "@language": "fr",
    		          "@value": "\nbanquette à accotoirs"
    		        },
    		        {
    		          "@language": "fr",
    		          "@value": "\nbanquette à dossier"
    		        }
    		      ],
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nbanquettes"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "banquette"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège à plusieurs places, peu profond, garni, comportant éventuellement soit un dossier, soit des accotoirs, soit les deux."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956",
    		      "@type": "Concept",
    		      "altLabel": {
    		        "@language": "fr",
    		        "@value": "\nsofa"
    		      },
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1931",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\ncanapés"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "narrower": [
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1964",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1962",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1963",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1960",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1961",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1958",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1957",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1959"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "canapé"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège à plusieurs places, garni, comportant un dossier et des accotoirs.Les places peuvent être marquées par le dossier ou par des accotoirs intermédiaires."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1957",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nboudeuses"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "boudeuse"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège à deux places adossées ayant leur dossier commun.Il peut comporter un accoudoir."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1958",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956"
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1959",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\ncanapés en borne"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "canapé en borne"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Canapé de plan centré (circulaire, elliptique, en trèfle, carré, pentagonal, octogonal ou autre) dont le dossier est cylindrique, conique, en dôme, ou constitué de divers dossiers adossés.Les places peuvent être alors individualisées."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1960",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956"
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1961",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nconfidents"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "confident"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège à deux places juxtaposées en sens inverse, les dossiers dessinant généralement un S."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1962",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956"
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1963",
    		      "@type": "Concept",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956",
    		      "hiddenLabel": {
    		        "@language": "fr",
    		        "@value": "\nindiscrets"
    		      },
    		      "inScheme": [
    		        "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "indiscret"
    		      },
    		      "scopeNote": {
    		        "@language": "fr",
    		        "@value": "Siège à trois places adossées, les dossiers en continuité formant une sorte d'hélice."
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1964",
    		      "broader": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956"
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-C1",
    		      "@type": "Collection",
    		      "inScheme": "http://www.culturecommunication.gouv.fr/ark:/67717/T96",
    		      "member": [
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1933",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1935",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1937",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1939"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "sièges d'une place sans dossier"
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-C2",
    		      "@type": "Collection",
    		      "inScheme": "http://www.culturecommunication.gouv.fr/ark:/67717/T96",
    		      "member": [
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1949",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1946",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1944",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1942"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "sièges d'une place à dossier"
    		      }
    		    },
    		    {
    		      "@id": "http://www.culturecommunication.gouv.fr/ark:/67717/T96-C3",
    		      "@type": "Collection",
    		      "inScheme": "http://www.culturecommunication.gouv.fr/ark:/67717/T96",
    		      "member": [
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1956",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1954",
    		        "http://www.culturecommunication.gouv.fr/ark:/67717/T96-1952"
    		      ],
    		      "prefLabel": {
    		        "@language": "fr",
    		        "@value": "sièges à plusieurs places"
    		      }
    		    }
    		  ]
    		},
     
    })
    
    //TODO : extract this to another file
    .constant('graphDereference', {
      metadata : {
          "@context": {
                "ConceptScheme": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
                "creator": {
                  "@id": "http://purl.org/dc/terms/creator",
                  "@type": "http://www.w3.org/2001/XMLSchema#string"
                },
                "format": {
                  "@id": "http://purl.org/dc/terms/format",
                  "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
                },
                "http://purl.org/ontology/bibo/edition": {
                  "@type": "http://www.w3.org/2001/XMLSchema#string"
                },
                "language": {
                  "@id": "http://purl.org/dc/terms/language",
                  "@type": "http://www.w3.org/2001/XMLSchema#language"
                },
                "publisher": {
                  "@id": "http://purl.org/dc/terms/publisher",
                  "@type": "http://www.w3.org/2001/XMLSchema#string"
                },
                "rights": {
                  "@id": "http://purl.org/dc/terms/rights",
                  "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
                },
                "subject": {
                  "@id": "http://purl.org/dc/terms/subject",
                  "@type": "http://www.w3.org/2001/XMLSchema#string"
                },
                "title": {
                  "@id": "http://purl.org/dc/terms/title",
                  "@type": "http://www.w3.org/2001/XMLSchema#string"
                },
                "xsd": "http://www.w3.org/2001/XMLSchema#"
              },
              "@id": "http://www.culture-terminology.org/thesaurus/E04F47110C7AD4F332D4F7D93BA3D675/pallissitest",
              "@type": "ConceptScheme",
              "creator": "E04F47110C7AD4F332D4F7D93BA3D675",
              "format": "http://dbpedia.org/page/Simple_Knowledge_Organization_System",
              "http://purl.org/ontology/bibo/edition": "1.0.0",
              "language": [
                "en-US",
                "fr-FR"
              ],
              "publisher": "ministriy",
              "rights": "http://creativecommons.org/licenses/by-sa/3.0/",
              "subject": [
                "Archaeology",
                "History"
              ],
              "title": "pallissitest"
            },
      value : {
          "@context": {
              "altLabel": "http://www.w3.org/2004/02/skos/core#altLabel",
              "broader": {
                "@id": "http://www.w3.org/2004/02/skos/core#broader",
                "@type": "@id"
              },
              "Concept": "http://www.w3.org/2004/02/skos/core#Concept",
              "ConceptScheme": "http://www.w3.org/2004/02/skos/core#ConceptScheme",
              "created": "http://purl.org/dc/terms/created",
              "DatatypeProperty": "http://www.w3.org/2002/07/owl#DatatypeProperty",
              "definition": "http://www.w3.org/2004/02/skos/core#definition",
              "exactMatch": {
                "@id": "http://www.w3.org/2004/02/skos/core#exactMatch",
                "@type": "@id"
              },
              "http://www.w3.org/2008/05/skos-xl#altLabel": {
                "@type": "@id"
              },
              "http://www.w3.org/2008/05/skos-xl#prefLabel": {
                "@type": "@id"
              },
              "inScheme": {
                "@id": "http://www.w3.org/2004/02/skos/core#inScheme",
                "@type": "@id"
              },
              "inverseOf": {
                "@id": "http://www.w3.org/2002/07/owl#inverseOf",
                "@type": "@id"
              },
              "label": "http://www.w3.org/2000/01/rdf-schema#label",
              "modified": "http://purl.org/dc/terms/modified",
              "narrower": {
                "@id": "http://www.w3.org/2004/02/skos/core#narrower",
                "@type": "@id"
              },
              "ObjectProperty": "http://www.w3.org/2002/07/owl#ObjectProperty",
              "prefLabel": "http://www.w3.org/2004/02/skos/core#prefLabel",
              "related": "http://www.w3.org/2004/02/skos/core#related",
              "subPropertyOf": {
                "@id": "http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
                "@type": "@id"
              }
            },
            "@graph": [
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/actionProduction",
                "@type": "ObjectProperty",
                "label": "actionProduction",
                "subPropertyOf": "related"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/broaderGeneric",
                "@type": "ObjectProperty",
                "inverseOf": "http://data.culture.fr/thesaurus/ginco/ns/narrowerGeneric",
                "label": "broaderGeneric",
                "subPropertyOf": "broader"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/broaderInstantive",
                "@type": "ObjectProperty",
                "inverseOf": "http://data.culture.fr/thesaurus/ginco/ns/narrowerInstantive",
                "label": "broaderInstantive",
                "subPropertyOf": "broader"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/broaderPartitive",
                "@type": "ObjectProperty",
                "inverseOf": "http://data.culture.fr/thesaurus/ginco/ns/narrowerPartitive",
                "label": "broaderPartitive",
                "subPropertyOf": "broader"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/causeEffet",
                "@type": "ObjectProperty",
                "label": "causeEffet",
                "subPropertyOf": "related"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/CustomConceptAttribute",
                "@type": "DatatypeProperty",
                "label": "CustomConceptAttribute"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/narrowerGeneric",
                "@type": "ObjectProperty",
                "inverseOf": "http://data.culture.fr/thesaurus/ginco/ns/broaderGeneric",
                "label": "narrowerGeneric",
                "subPropertyOf": "narrower"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/narrowerInstantive",
                "@type": "ObjectProperty",
                "inverseOf": "http://data.culture.fr/thesaurus/ginco/ns/broaderInstantive",
                "label": "narrowerInstantive",
                "subPropertyOf": "narrower"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/narrowerPartitive",
                "@type": "ObjectProperty",
                "inverseOf": "http://data.culture.fr/thesaurus/ginco/ns/broaderPartitive",
                "label": "narrowerPartitive",
                "subPropertyOf": "narrower"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/ginco/ns/TermeAssocie",
                "@type": "ObjectProperty",
                "label": "TermeAssocie",
                "subPropertyOf": "related"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/22050164-9e86-46da-8989-375a0b6da6b1",
                "@type": "http://purl.org/iso25964/skos-thes#PreferredTerm",
                "created": "2014-09-23T18:13:32+02:00",
                "http://purl.org/iso25964/skos-thes#status": 1,
                "http://www.w3.org/2008/05/skos-xl#literalForm": {
                  "@language": "en-US",
                  "@value": "tunnels"
                },
                "modified": "2014-10-16T15:39:35+02:00"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/4b78db04-0a5c-4a39-98c8-4f09667875f8",
                "@type": "http://purl.org/iso25964/skos-thes#PreferredTerm",
                "created": "2011-09-01T00:00:00+02:00",
                "http://purl.org/iso25964/skos-thes#status": 1,
                "http://www.w3.org/2008/05/skos-xl#literalForm": {
                  "@language": "fr-FR",
                  "@value": "tunnel"
                },
                "modified": "2014-10-16T15:39:35+02:00"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/5c822173-6001-458e-89c0-7c9a44ff1a7e",
                "@type": "http://purl.org/iso25964/skos-thes#SimpleNonPreferredTerm",
                "created": "2011-09-01T00:00:00+02:00",
                "http://purl.org/iso25964/skos-thes#status": 1,
                "http://www.w3.org/2008/05/skos-xl#literalForm": {
                  "@language": "fr-FR",
                  "@value": "édicule du génie civil"
                },
                "modified": "2013-04-23T00:00:00+02:00"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/c27ebdd0-747a-45ea-843a-4f0cd301c828",
                "@type": "http://purl.org/iso25964/skos-thes#SimpleNonPreferredTerm",
                "created": "2011-09-01T00:00:00+02:00",
                "http://purl.org/iso25964/skos-thes#status": 1,
                "http://www.w3.org/2008/05/skos-xl#literalForm": {
                  "@language": "fr-FR",
                  "@value": "ouvrage du génie civil"
                },
                "modified": "2013-04-23T00:00:00+02:00"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/f9f0f455-b55c-4e41-98e8-dca20d108795",
                "@type": "http://purl.org/iso25964/skos-thes#PreferredTerm",
                "created": "2011-09-01T00:00:00+02:00",
                "http://purl.org/iso25964/skos-thes#status": 1,
                "http://www.w3.org/2008/05/skos-xl#literalForm": {
                  "@language": "fr-FR",
                  "@value": "ouvrage d'art"
                },
                "modified": "2013-04-23T00:00:00+02:00"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/T96",
                "@type": "ConceptScheme"
              },
              {
                "@id": "http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1045",
                "@type": "Concept",
                "altLabel": [
                  {
                    "@language": "fr-FR",
                    "@value": "édicule du génie civil"
                  },
                  {
                    "@language": "fr-FR",
                    "@value": "ouvrage du génie civil"
                  }
                ],
                "created": "2011-09-01T00:00:00+02:00",
                "definition": {
                  "@language": "fr-FR",
                  "@value": "Construction, dont la conception et la réalisation ont fait intervenir des connaissances en ingénierie, pouvant entraîner l'établissement d'une voie de communication, d'un dispositif de retenue des eaux, etc."
                },
                "http://purl.org/iso25964/skos-thes#status": 1,
                "http://www.w3.org/2008/05/skos-xl#altLabel": [
                  "http://data.culture.fr/thesaurus/resource/ark:/67717/5c822173-6001-458e-89c0-7c9a44ff1a7e",
                  "http://data.culture.fr/thesaurus/resource/ark:/67717/c27ebdd0-747a-45ea-843a-4f0cd301c828"
                ],
                "http://www.w3.org/2008/05/skos-xl#prefLabel": "http://data.culture.fr/thesaurus/resource/ark:/67717/f9f0f455-b55c-4e41-98e8-dca20d108795",
                "inScheme": [
                  "http://data.culture.fr/thesaurus/resource/ark:/67717/T96",
                  "http://www.culture-terminology.org/thesaurus/mcc/light"
                ],
                "modified": "2013-04-23T00:00:00+02:00",
                "narrower": "http://data.culture.fr/thesaurus/resource/ark:/67717/T96-1114",
                "prefLabel": {
                  "@language": "fr-FR",
                  "@value": "ouvrage d'art"
                }
              },
              {
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
              },
              {
                "@id": "http://purl.org/iso25964/skos-thes#status",
                "@type": "DatatypeProperty",
                "label": "status"
              }
            ]
          },
     
    })
    
    
})();
