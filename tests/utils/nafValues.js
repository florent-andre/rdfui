/**
 */
(function () {
  'use strict';
  // The source file for this constants values is in rdfui/tests/utils/nafValues.js
  angular.module('rdf.ui.tests.value')
    .constant('nafGraph', {
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
    "http://dashboard.com/ontology/v0.1#section": {
      "@type": "@id"
    }
  },
  "@graph": [
    {
      "@id": "http://dashboard.com/ontology/v0.1#002c5088-b1e4-48e8-8029-17e502a4a716",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de verre plat"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#008b79ca-da45-4605-9d5c-481eb2c83da8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de motocycles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#00b39c33-9d1c-4e2a-9963-6bb8d95a6deb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "19.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "19"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "19.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Cokéfaction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "19.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#00c8bb11-ca6c-4393-8ef7-5e3b991b6ebd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "8.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "8"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "8.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Exploitation de gravières et sablières, extraction d'argiles et de kaolin"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "08.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#00fb1c6e-8399-4f7f-937b-fc78479e5781",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres transports routiers de voyageurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.39B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#00fcbbe0-5161-473b-912b-a7ee906687e4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.47"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage de volailles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.47Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#01219f7f-2cb2-4e91-aaa5-31df4e1228df",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "81.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "81"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "81.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités de nettoyage des bâtiments et nettoyage industriel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "81.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#018727b1-5043-4929-b263-86c7af5bb3ea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de voitures et de véhicules automobiles légers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#01dbc2ac-168a-481b-8111-88ac5572b4df",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de véhicules militaires de combat"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#01f130c5-6a73-4fdf-bee1-48462c9dfe5c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "93.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "93"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "93.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités liées au sport"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "93.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#01f820a7-1153-4fe8-893c-304b3e199169",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Blanchisserie-teinturerie de gros"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.01A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#033c5ced-c9f7-409d-b24d-3a54dfc74324",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Distribution sociale de revenus"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.30C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0364b1b0-d036-4ed8-83b3-a0db493dc490",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de routes et autoroutes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#036c91aa-f358-47ec-9fd3-75328f3e53fe",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce d'électricité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#03a74aeb-4c3f-47d8-9e4c-fc83f511656d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines d'imprimerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.99A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#04511de6-d482-47e9-87ed-bf3824acf869",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Vente à domicile"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.99A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#04b445c7-7aec-4e58-bb36-6f96754af2c1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Courtage de valeurs mobilières et de marchandises"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#04c7ead5-f778-492f-98a3-251fb5115401",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports de voyageurs par taxis"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#04f531cd-5857-4fc0-b53f-bbfb5dcf0ee5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Administration publique (tutelle) des activités économiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#05650d4c-41eb-41df-9f73-e3f1b54f5131",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "3.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "3"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "3.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Pêche en eau douce"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "03.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Information et communication"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "J"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0640427f-eb9c-4d0e-9296-913e1773d58e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.84"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de condiments et assaisonnements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.84Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0662a49f-a502-4a72-950f-d403f778f707",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "65.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "65"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "65.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Caisses de retraite"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "65.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#06fb69fc-2be4-4b61-8965-fed9999808b1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de terrassement courants et travaux préparatoires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.12A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#07e8612e-da3e-4b30-9363-971ac0a71d13",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux d'isolation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#08049985-a3c7-4731-bee2-7a622b42fbcc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Restauration collective sous contrat"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0876e77f-4d0f-4d64-b007-447480012bcc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits réfractaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#08f4c45e-1e00-4461-8c13-6018c46e04b5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Préparation de jus de fruits et légumes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#08f89596-ec87-4fcf-a8d8-a33b820c4fce",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Pratique dentaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#095dc221-5a64-4803-be3f-4fae10e25120",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location de camions avec chauffeur"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.41C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#09aaa256-f7ed-4fc0-af7f-760b3a63dc79",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traitement et revêtement des métaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.61Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0a2fd725-1cef-4691-9b29-f7e40eb2036c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Intermédiaires du commerce en machines, équipements industriels, navires et avions"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0aa768e1-e24d-41f6-ab02-b0610a40cdcc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.45"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Métallurgie des autres métaux non ferreux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.45Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0ab9d64c-2473-42b2-9935-ae45278346fb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "7.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "7"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "7.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de minerais d'uranium et de thorium"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "07.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0b5b9735-5b5f-4bee-8395-0d3db3524b04",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Étirage à froid de barres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0bba6b72-76df-430f-aa88-9924aa51f6e1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres cultures non permanentes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0bdc222d-04d8-4ae9-922c-b0b6f62704bf",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "21.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "21"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "21.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits pharmaceutiques de base"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "21.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0be3cf0f-1d9b-4d0f-861e-4a6f6a8efbf0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres machines spécialisées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.99B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0c001992-0baf-4079-a411-92e14f4a9579",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'éléments en plâtre pour la construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.62Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0d4dfa1b-a6bd-4ed7-81d7-1c083c6c38a5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Intermédiaires du commerce en matières premières agricoles, animaux vivants, matières premières textiles et produits semi-finis"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0dc6aa74-1e94-4813-95b3-0aa24054d812",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matériel de levage et de manutention"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0dc792d7-848a-48ca-a8e2-5773a5b0db24",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Ennoblissement textile"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0dfa5768-4089-417d-ade2-98b8d91347b7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location avec opérateur de matériel de construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.99E"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0e1a753c-b261-4213-8dff-e61601b4252c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Laminage à froid de feuillards"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0e238e4d-ac5f-4a46-8297-3cef5b828ab2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.33"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de revêtement des sols et des murs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.33Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0e5656ba-cb55-4d4c-9bd5-d71194fe21ed",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fonderie d'acier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0e771f1a-47fd-4423-aeb9-a05dac882081",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de poissons, crustacés et mollusques en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0efdd148-54b8-4a97-87ec-59bd63a3829e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail de machines et équipements agricoles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0f2a5cac-93a6-45cb-9421-448048703cbc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Supermarchés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.11"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0f3a4a1e-64d6-420e-8ebc-ad5c7872e953",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Intermédiaires du commerce en bois et matériaux de construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0f6d288a-1359-40d4-a70c-399549473709",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "73.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "73"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "73.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agences de publicité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "73.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0fbdac77-a928-40a0-8131-6046f11191c4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.15"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits azotés et d'engrais"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.15Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0fc078f3-7bf5-480f-84fc-3d2a6f34fc31",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.45"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de parfumerie et de produits de beauté"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.45Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#0ffd73d6-c915-40e4-ae5e-305d3ebfbc0b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail d'autres biens personnels et domestiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#10ba0803-e31c-4518-b66f-b5113947843d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de moteurs et turbines, à l'exception des moteurs d'avions et de véhicules"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1132239e-4f82-4810-b539-154cf6650d79",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.49"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'autres biens domestiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.49Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#11545e11-73e5-487b-a761-b688e514271e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "68.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "68"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "68.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Administration d'immeubles et autres biens immobiliers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "68.32A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#115afb74-b88f-4502-8aea-25dba75d4c9f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.65"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de jeux et jouets en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.65Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#117712ff-aef9-45dc-8ad5-1624714588d2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de ciment"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#118bd744-c9ef-4919-b09f-32390f2c06fd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de structures métalliques et de parties de structures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#11a4f5a6-5771-4176-b448-0eb9712c28c6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "79.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "79"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "79.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres services de réservation et activités connexes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "79.90Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#11aa502c-1957-4d57-9f9f-ad5f0115404b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.43"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage de chevaux et d'autres équidés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.43Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "F"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12063642-7ad0-4d27-97eb-837176502513",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autre accueil ou accompagnement sans hébergement d'enfants et d'adolescents"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.99A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#120b52ff-9bf2-42c9-9520-cc5765084471",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.75"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de parfumerie et de produits de beauté en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.75Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Industries extractives"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1276c6c5-9d27-46a4-8e86-dbe3a7ea3548",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de centres d'appels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#127afbb5-4df3-403e-958a-ed258d1bbf2c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.26"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de produits à base de tabac en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.26Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12a4493c-e8b9-4573-bf8f-93c8ba3f34da",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location-bail de propriété intellectuelle et de produits similaires, à l'exception des œuvres soumises à copyright"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de services administratifs et de soutien"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "N"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12cccd75-96c1-4c58-9e95-1a3beffd1e7a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "94.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "94"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "94.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des organisations patronales et consulaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "94.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12e60606-b600-46ee-a031-f02dacce763e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) non spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.90Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12eb1c9b-cf81-4152-b677-971b183a78c2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des sociétés holding"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#12ecdc36-45eb-4653-a144-f92c384088ae",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.59"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Formation continue d'adultes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.59A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1327da69-25b5-4b1c-9feb-e9c01ec73eea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités des médecins spécialistes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.22C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#149f2acd-90bd-4616-bb4f-84bffc4860eb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de livres en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.61Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#15070c15-32d8-481a-a6b5-b825840616a2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.82"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de textiles, d'habillement et de chaussures sur éventaires et marchés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.82Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#154c521c-2743-44cd-9cae-846d161b59a3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de produits surgelés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.11A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Industrie manufacturière"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#15d3fbf8-6de1-42b9-8e12-0226e18cbfa3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enrichissement et retraitement de matières nucléaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.13A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#15f59d00-dea7-42df-aa48-36e7bf50b06d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles en fourrure"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#166b6456-c6dc-4b72-87c7-3614f567b25b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "9.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "9"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "9.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de soutien aux autres industries extractives"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "09.90Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités de services"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "S"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1684de7a-93f7-4e2a-bb44-1dd799e7def6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.43"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'appareils électroménagers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.43Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1691ea7e-a800-495e-a63c-5a3e3f38c226",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'instruments de musique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#171b4e92-7610-4264-984b-142ab7fe1071",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de journaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités spécialisées, scientifiques et techniques"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "M"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#17893fff-aad8-42a3-a2ec-32c506ee819a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.93"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de tapis et moquettes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.93Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#17dfea80-f97a-4d43-9970-a85d7c52ece4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.72"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de biscuits, biscottes et pâtisseries de conservation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.72Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#185f8425-5887-450f-9289-c5050829bd49",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.65"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'ouvrages en fibre-ciment"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.65Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#185fe1c2-07a0-4435-8293-d6bf8e7dc1dd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.04"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production d'autres boissons fermentées non distillées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.04Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#186e1945-fa6e-4696-853b-7ca9654498a7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.69"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres ouvrages en béton, en ciment ou en plâtre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.69Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#18724ab6-b5d4-4c5d-ba72-abe8ffec5cbb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.43"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'isolateurs et pièces isolantes en céramique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.43Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1919b729-09b5-4808-bc79-1287d1ebaf08",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de produits surgelés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.39A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#194b3ab2-f7f7-4056-affb-67c77b479fc4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "74.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "74"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "74.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activité des économistes de la construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "74.90A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#199d88a1-a23f-440c-9286-44ee787be835",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Crédit-bail"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1aa59776-b358-40b7-8c92-78eee27a5b06",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "41.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "41"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "41.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction d'autres bâtiments"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "41.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1ac03df2-0cb1-4e28-a2fc-3d47fb3daa71",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'équipements électriques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1aef52dc-ce43-4685-ab47-472401f21557",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.85"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de plats préparés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.85Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1aff00ec-1621-4d6c-b175-bfc009161ea2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de plâtrerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1c5fd04f-f653-4269-9983-0f0dc86b6592",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de la canne à sucre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1c6cd9fe-555b-4212-a3cc-30949cb33bd4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.34"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de boissons"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.34Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1c986e79-4ff8-4e26-90dd-14ee108ffd4b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'ordinateurs, d'équipements informatiques périphériques et de logiciels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1cb6a124-f68f-4671-9484-ee7db92c12b0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de colorants et de pigments"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1ce1b959-4b46-4424-81de-11609e8fe766",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "8.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "8"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "8.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités extractives n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "08.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1d118219-5e30-43c2-a4f9-5218f251346a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.59"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de meubles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.59A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1d733c52-1654-40b6-afa2-a59d24a6f462",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'ordinateurs et d'équipements périphériques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1d9074c5-7b75-4970-ab63-cf66cf78cdb2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres pompes et compresseurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1e3cfbd6-0257-4466-810e-d5f2ec49de00",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.04"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Entretien corporel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.04Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1e63ac7e-6ca6-498a-857e-ab5357afc417",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction d'ouvrages d'art"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.13A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1e67a7b6-8774-447f-be9f-db2565e52916",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de répertoires et de fichiers d'adresses"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1e846e83-a0e6-459b-b00b-5feb7c2b7bf2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements d'emballage, de conditionnement et de pesage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1e862ca1-76af-43e7-a5e2-8d7f9f428643",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles de joaillerie et bijouterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1e8e92ef-c409-4b8c-b551-0ddfef96e7ab",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits amylacés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.62Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1ecabcac-d540-440c-856e-922a1c65f4f8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail de camions"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1f03c9a0-525a-405a-b6ea-ea22543e1ddd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "61.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "61"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "61.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Télécommunications sans fil"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "61.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1f1118dd-acaa-418d-8d06-dd34dbe828fa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de fruits à pépins et à noyau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#1fa9753c-4665-4ec7-8b04-0eb50ce054f8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.54"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'appareils électroménagers en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.54Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#20076319-bc53-4c65-a50d-70861f52992e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "62.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "62"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "62.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Conseil en systèmes et logiciels informatiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "62.02A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#202260dd-de4c-4d99-95d3-5168405eeb56",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de céréales, de tabac non manufacturé, de semences et d'aliments pour le bétail"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#206a1f87-67ad-4988-a838-fc367cd19e4b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "65.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "65"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "65.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Assurance vie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "65.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#21c73505-d5bc-417d-99c8-9499ca024cea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.83"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transformation du thé et du café"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.83Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#224dc3f3-1287-4fbe-b002-3934a1edbcaf",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement social pour adultes et familles en difficultés et autre hébergement social"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.90B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2261fe26-d539-4dcb-a18e-14f4faae2b0f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros d'équipements automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#227756b2-cf1e-4084-a0cd-ac8066a84c3b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production d'électricité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#228f5452-8426-4a19-9283-3ac866c82e27",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "79.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "79"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "79.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agences de voyage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "79.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#22ff9287-3c8d-4ee6-ae4f-0fc17f053151",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.34"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Tréfilage à froid"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.34Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#23488b5d-66cb-4ef2-b69a-375a4dfc9b88",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'appareils électroménagers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#236ac23b-f62b-447e-b508-6932af185f7f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de quincaillerie, peintures et verres en grandes surfaces (400 m² et plus)"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.52B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2380a969-7673-4a4d-a46d-a0b32e4d113c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de viandes de boucherie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.32A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2387f12c-106c-4104-a611-d641d115ff32",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres équipements de transport n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#23a1de4e-4f5a-4eb0-80d3-45df78c2a7f2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de jeux et jouets"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#242c6593-fa56-4d48-9777-38d330d74e6a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de fromage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.51C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#249f9ee3-ed57-4201-a121-3e1bfea1eebc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Frappe de monnaie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#25ae3fbf-4a25-462c-8c2b-064bc402bf66",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "94.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "94"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "94.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des organisations religieuses"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "94.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#25ff5877-53e5-4290-adeb-70a7cab230c1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.72"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de la chaussure"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.72A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2629074f-3eca-4806-91ff-dac49b81d6a2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "68.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "68"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "68.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location de terrains et d'autres biens immobiliers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "68.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2650930d-b1c7-4a3f-a33b-986a2d595f6e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "51.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "51"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "51.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports spatiaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "51.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2733b4bb-b4d0-44c4-85e1-3242c6f503eb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.82"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de cacao, chocolat et de produits de confiserie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.82Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2795da15-51a7-4367-b36b-920e3480a39e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.89"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits alimentaires n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.89Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#27bea834-2d8d-44fd-a172-f15c8c07e842",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités des services financiers, hors assurance et caisses de retraite, n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#27ff2abf-cbfe-4f5e-a7fd-bb5dc2ae93d8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles de brosserie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2816a9c3-1155-48bb-937f-29c5ea1512c5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits abrasifs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#28478cdf-ffb0-4fad-9c3a-10f909fe4938",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres intermédiations monétaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#285b2b5c-ccf3-406a-9ca4-4dd2101c47dc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.7"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matériels optique et photographique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.70Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#286b14e9-fc6b-4032-b284-09df45dd8fcc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "19.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "19"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "19.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Raffinage du pétrole"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "19.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#286cc09f-3c21-499f-83ae-aeceef6b4804",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "7.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "7"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "7.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction d'autres minerais de métaux non ferreux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "07.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#28a610d3-cf21-4af0-930f-6535a39edfeb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.8"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de supports magnétiques et optiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.80Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#29a26276-7cd3-4dd9-88b0-b64102bb0777",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de viandes et de produits à base de viande en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2a5b5331-9043-4113-8424-5f8d9ca52bad",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services de déménagement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2a8253a2-3cde-4108-a4ff-d8ea7fb74154",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports routiers réguliers de voyageurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.39A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2a8a8492-f0fa-4e1e-b679-087deeead978",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de vins effervescents"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.02A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2ab81bec-b5a2-49ad-a56e-2976fa966e6b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.54"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fonderie d'autres métaux non ferreux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.54Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2aca0afd-73bc-4e2d-9756-ae0f55c80422",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles céramiques à usage domestique ou ornemental"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2bfd57b6-55aa-4c40-afd1-dca23f29026f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.81"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail alimentaire sur éventaires et marchés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.81Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2cb198ea-c957-4375-b88e-cce260da6b16",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de conditionnement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2ceb99dd-44e2-4bf6-9ace-5785a8546cf5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'emballages métalliques légers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2d202b39-24a7-468d-a8d3-0112f71ca29d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.5"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Forge, estampage, matriçage ; métallurgie des poudres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.50A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2d236d0e-d0a6-4057-861a-135e65949266",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.95"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines pour les industries du papier et du carton"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.95Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2d32bbfe-2be2-4a92-b5cf-ef22bc1d8998",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "41"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Supports juridiques de programmes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "41.1"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2d392b38-e022-4c6b-9fc4-34da0841c6b1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.44"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Métallurgie du cuivre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.44Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2d674c8c-4eee-442a-b79e-4ef056117b87",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "69.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "69"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "69.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités comptables"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "69.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Santé humaine et action sociale"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "Q"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2e617ac6-04e5-42a0-bcae-0fc067c2adbd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "68.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "68"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "68.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Agences immobilières"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "68.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2e6fa6af-de89-47a7-9bd4-d842339415ce",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.05"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de bière"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.05Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2ec8c158-d7d6-48c4-b204-8adca3b3cd0a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Vinification"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.02B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2ee6fa5e-a496-42e7-b172-ce5663963207",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture du riz"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2f1e6ead-9bf6-412a-aa7b-3c9156718051",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.44"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits céramiques à usage technique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.44Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2f22010c-c22b-406d-8c3a-d524873ee9d1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction aéronautique et spatiale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2f2ca010-cb5d-4494-b3a8-b0e71106c02c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.25"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements aérauliques et frigorifiques industriels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.25Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2fc3f3e3-438a-447d-8d24-fe31248bf70e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "5.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "5"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "5.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de lignite"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "05.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#2fed6134-c82a-4276-b0c3-bdd228aa92ea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de composants et d'équipements électroniques et de télécommunication"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#301bb013-b73b-4aba-9e9f-0fc3877efc9b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de parfums et de produits pour la toilette"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#303a96c3-1eab-4805-a4fe-a125a95c3a36",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.25"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de boissons en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.25Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3064aaac-be12-41fb-ae97-9ed5f4d30271",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Messagerie, fret express"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#314788d4-ac82-40b8-b4c1-e6e630b73d52",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux d'étanchéification"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.99A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#319cbd47-4ec8-4518-9927-217c5d906fe0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Aide à domicile"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.10A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#328454bc-a6e0-4440-b4ea-d557214ea24d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de fûts et emballages métalliques similaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3299db4c-eb71-4b35-991a-918f448c4ab8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement médicalisé pour personnes âgées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.10A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#32f6d7f8-6a23-4bde-8bd8-3a11d51d2079",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.74"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'articles médicaux et orthopédiques en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.74Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3309cc1e-cdde-46f8-9d05-465a56e30f24",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.96"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres textiles techniques et industriels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.96Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3313b36c-5dbb-4ea9-a520-fe66f6ed9810",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement primaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#34683150-19e5-454e-b78d-ef31c4042eb5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des infirmiers et des sages-femmes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.9"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3481111d-1855-4c2f-9ca9-1e5d7788e753",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de terrassement spécialisés ou de grande masse"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.12B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#34e8f3c8-7cbe-4c16-b519-07ecf31aefa2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.53"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'huiles essentielles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.53Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#35897a96-3777-4a71-9c97-affe281f0b30",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "91.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "91"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "91.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion des sites et monuments historiques et des attractions touristiques similaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "91.03Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#35f13982-3598-49fc-9f18-3db14fc7552d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.49"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage d'autres animaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.49Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#36161b26-cef5-4478-8f2a-c0f78002eaac",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de combustibles gazeux par conduites"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#36175926-fbba-448b-9bfc-443ec54071c8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Aide par le travail"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.10C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3663c1fb-84af-4ef3-82c8-74823be95eba",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "91.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "91"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "91.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion des musées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "91.02Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#36f0c51f-f1b0-4be6-9d31-2677859dfe53",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports routiers de fret de proximité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.41B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#37426cf0-2032-4cc0-b054-d83e7cbcde09",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.59"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'autres équipements du foyer"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.59B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#37fc2586-13ed-490b-9367-fb67299dde3b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits minéraux non métalliques n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#395b3d4d-d2b9-4c91-86c9-ca191f652053",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "41"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Promotion immobilière d'autres bâtiments"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "41.10C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#39cbed46-1775-4104-8d56-c1e9af0e2c74",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "29.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "29"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "29.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de véhicules automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "29.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#39e5478e-bb1d-46d0-af7d-dca180f373cd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'objets divers en bois ; fabrication d'objets en liège, vannerie et sparterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3a135549-c6e9-4922-8d36-982e37e6f4fc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres articles en caoutchouc"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3a505115-4e69-4632-9ea2-97beb00e0591",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de quincaillerie, peintures et verres en petites surfaces (moins de 400 m²)"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.52A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3a7f71df-5d97-41e3-8bdf-8248195ad13e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Charcuterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.13B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3ab50698-7bd1-4093-bb14-09bcedd467d5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.77"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'articles d'horlogerie et de bijouterie en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.77Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3ab86a4a-139b-44a9-855b-49ef766c9ac6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de céréales (à l'exception du riz), de légumineuses et de graines oléagineuses"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3adfd311-3a09-4ee9-9c53-d5c143669942",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités du travail des grains"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.61B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3b1b01a1-5887-4e46-a5b0-585740c92734",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement social pour handicapés physiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.30B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3be9d62d-cfd4-449b-9c9a-20c095d88444",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "38.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "38"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "38.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traitement et élimination des déchets dangereux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "38.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3bf9fbe1-3e48-4cf9-a81e-4243d6a95d2c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "90.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "90"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "90.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Arts du spectacle vivant"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "90.01Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3c207e68-af14-4088-83aa-2b6bda540576",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de pâte à papier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3c94fcd6-d2e6-4d4e-a8bd-0f16f6cdbb1e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autre distribution de crédit"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3cd3f721-ead3-44ce-9639-8998026ac1eb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.77"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de déchets et débris"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.77Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3d24745b-c9b7-4819-a026-74d5a3011388",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "55.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "55"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "55.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hôtels et hébergement similaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "55.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3dada29e-badc-4d89-b8d0-cb3c47999cd0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres vêtements et accessoires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3dbda8fa-9d0e-4001-9e44-19096502b106",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de chaux et plâtre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3dea9a87-c076-4d2e-ad86-dded8d2e4bcf",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Restauration de type rapide"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.10C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3e366c6f-cfe1-491e-a64c-0e05e56a5d7a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de soutien à la production animale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.62Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3e9e6a51-9e7f-4332-859b-1dcf6c55357d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transformation et conservation de la viande de boucherie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3eadcdba-0bd2-4c7f-83d9-9b73cb5c9343",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "A 615"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "A 88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "A 272"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": ""
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "A 732"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3f5c00e7-1c76-4cc1-8eba-78792d4e6c4d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Laboratoires d'analyses médicales"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.90B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#3f87b91a-73df-429c-8c74-b63013cf0694",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.27"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de plantes à boissons"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.27Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#402e5044-1df9-4bbe-8859-9b57f26c8f17",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.7"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Chasse, piégeage et services annexes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.70Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#407819a4-6a66-4f26-a92d-6aed4b5c8711",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.72"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de minerais et métaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.72Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#40a13935-180e-4642-ab54-df24a93a6254",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.5"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matériel médico-chirurgical et dentaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.50A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#40a6634a-7ab8-4d44-93e0-f1f5861ea4de",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce d'alimentation générale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.11B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#40d9585c-8f3b-4d09-982e-f890b6b8766e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "94.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "94"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "94.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des organisations professionnelles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "94.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#411906a2-4ddd-4356-af9c-a58921b702aa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.93"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles en fils métalliques, de chaînes et de ressorts"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.93Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#41749151-4bb1-41ef-bde9-c0300e73bb67",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Tissage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#42c7f73a-d6e9-463f-8aec-b7589d81add7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "15.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "15"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "15.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles de voyage, de maroquinerie et de sellerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "15.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#42c8cad0-6191-43e3-ade9-d3c5cb5284ab",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Vente à distance sur catalogue général"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.91A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#42e9da5a-0d4a-40e9-a3df-4f409545c847",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement médicalisé pour adultes handicapés et autre hébergement médicalisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.10C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#432ec5b5-ec47-434d-b5dd-5c62db95509c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Entretien et réparation d'autres véhicules automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#43d27cd4-f2d3-465a-8b72-c4de29ef06b8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Meunerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.61A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4489c56e-e050-4b79-b7e6-ea7e6f062066",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.15"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation et maintenance navale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.15Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#44d30b48-f032-41b8-8029-91bf1e1519fe",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "71.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "71"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "71.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activité des géomètres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "71.12A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#452e0a4d-cf89-4399-9a77-88ff6c3de0a1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "79.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "79"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "79.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des voyagistes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "79.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#455c6f33-2f97-4a29-b3f8-3167816b6e77",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.33"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de produits laitiers, œufs, huiles et matières grasses comestibles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.33Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#46135779-e2b5-4a14-b863-b80d859fd4a1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation de matériels électroniques et optiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4626e91f-17b4-499f-a238-a23546f3fcf3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.28"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de plantes à épices, aromatiques, médicinales et pharmaceutiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.28Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#46af2276-e060-41ac-b228-9976c913f473",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux d'installation d'équipements thermiques et de climatisation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.22B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#47451335-9e78-4d4a-a30f-5df33b5228e9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de papiers peints"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#47d5ac34-b99c-4e14-b1f8-841d71dc8ff1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de générateurs de vapeur, à l'exception des chaudières pour le chauffage central"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#47e093c2-58b2-48f9-ac7b-f618389192bc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "3.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "3"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "3.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Aquaculture en mer"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "03.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#48215b2c-2940-4c39-ae7d-0d7be6c3f36b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fonderie de fonte"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4845e740-7d69-4464-a573-700159d88705",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de carton ondulé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.21A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4870f67e-16cf-4a99-94c0-6c30a6858d86",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.7"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Taille, façonnage et finissage de pierres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.70Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#48845dfa-926c-4be4-96d5-2bae05feea6f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres travaux spécialisés de construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.99"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#488729aa-b7db-458d-8834-2126b4c410f7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services auxiliaires des transports par eau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#48e4d6d7-3d5b-4a93-b71a-7f14f41e29c7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.5"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports par conduites"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.50Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#492a5688-e00b-48f8-9416-c3cb0efbc948",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.34"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de peinture et vitrerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.34Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4974ed18-44ca-48ab-b0a1-d2e74121bdaa",
      "@type": "http://dashboard.com/ontology/v0.1#nafType"
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#49792b14-934d-491f-81f0-ec4d2c161488",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.63"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de machines pour l'extraction, la construction et le génie civil"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.63Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4a41a7fb-1eb3-46b3-a3d8-c76eb4f42cde",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "38.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "38"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "38.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Récupération de déchets triés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "38.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4b6d8ef6-8bb8-4941-a661-972eb23522c3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités hospitalières"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4bb95086-2252-4700-9e2d-86506438cec2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.69"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de fournitures et équipements industriels divers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.69B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4c4a9ac3-956b-4254-bcfa-9917ff95dc41",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage de vaches laitières"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4c8df6a1-84cf-46e9-a770-996aee0e5837",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "15.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "15"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "15.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de chaussures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "15.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4cbcff81-1028-4c41-8bd7-a0a8f2dfda85",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "41"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Promotion immobilière de bureaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "41.10B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4cc32335-b4eb-45dc-8227-8da5dd29ab87",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.96"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines pour le travail du caoutchouc ou des plastiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.96Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4cd1f3fc-6153-4040-a63a-2cb07c41bb2c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports ferroviaires de fret"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4dbfbf6e-0150-4c5b-a92b-e20b6beda6e7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Action sociale sans hébergement n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.99B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4dd2b076-63e1-43cc-a39b-a5d5e1a2b93c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.49"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits céramiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.49Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4de2089d-3d9d-4f66-a917-1fc059752cb6",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités extra-territoriales"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "U"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4dfd43b4-8ca4-4e1f-9986-1a7825c023ad",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement social pour handicapés mentaux et malades mentaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4e3c4b7b-0aab-42c8-bb6d-e124d419ca35",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication et façonnage d'autres articles en verre, y compris verre technique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#4f281f5e-f194-4554-85f1-1971d4e80122",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.37"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de café, thé, cacao et épices"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.37Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#502f174f-d3d0-466b-b7b0-2414da0dce8b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "29.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "29"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "29.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de carrosseries et remorques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "29.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#50eca51f-853e-45a1-ab51-28467568e8a2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement pré-primaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#51523b03-ccf8-46d8-90a4-a41347125699",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transformation et conservation de la viande de volaille"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5158316b-693b-4aec-ab4c-8e2bb160f8d4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de câbles de fibres optiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#51c9ecb0-5a60-4e01-826a-326279db8376",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.73"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de produits pharmaceutiques en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.73Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#52234643-f373-4da9-b137-a2bb73fa7fa9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.6"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de soutien à l'enseignement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.60Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#52629d73-6771-4c37-b3d0-6aa6046afe79",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "18.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "18"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "18.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autre imprimerie (labeur)"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "18.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#53b15228-e03d-484d-b1b0-c59492d6f89c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autre transformation et conservation de légumes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.39A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#53c202dd-f913-499a-991d-913c2f640140",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'autres biens personnels et domestiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#54609e44-cc6f-4211-aafd-2a62d4d781c8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de films et de programmes pour la télévision"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.11A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#548ed46d-6513-460e-af7b-bf9b2fb8a6f7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.35"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail de matériels de transport aérien"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.35Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#54a59dce-3898-47bd-8d2c-3cc11aa4d3b4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "8.93"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "8"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "8.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de sel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "08.93Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#54d83c64-0e45-41f8-acc9-0caf1366dc0b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.86"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'aliments homogénéisés et diététiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.86Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#564e1ebf-b748-406c-977e-c1818ddc1408",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'emballages en matières plastiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#56ad42cf-791d-4883-8df7-0bdf0136da3a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de portes et fenêtres en métal"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#56c85ce6-2bb1-4cca-afab-414a8a1535d7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "36.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "36"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "36.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Captage, traitement et distribution d'eau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "36.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#572477f5-d9dc-4665-a657-a046a0b41601",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "62.09"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "62"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "62.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités informatiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "62.09Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5742e7d0-eb8d-4aba-9f3e-b4ef5e82d13d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "37.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "37"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "37.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Collecte et traitement des eaux usées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "37.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5772f236-4afd-4809-af1b-08e163f25b16",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Vente par automates et autres commerces de détail hors magasin, éventaires ou marchés n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.99B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#579b1cae-d5d3-49f7-8767-80a365989b1e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion de fonds"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#57b50560-a35b-4d47-9279-7b2e02073f41",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement social pour personnes âgées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.30A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5a18c285-0075-49a3-8292-b8b39be2dc13",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services auxiliaires des transports terrestres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5a4902a5-e34a-4150-ab01-c883955d5247",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture d'agrumes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5a7ec733-0d42-4390-bf38-1fba353ae252",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de combustibles et de produits annexes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.71Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5b910484-aaad-4d73-92de-aa81b2ec1976",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "6.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "6"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "6.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de pétrole brut"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "06.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5bb9c472-4cdf-4a90-a6b4-d0ab1d969580",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits chimiques organiques de base"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5bde9c93-ad19-4fa0-9e3b-d50496e8fa25",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "63.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "63"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "63.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traitement de données, hébergement et activités connexes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "63.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5be0fc63-f6d9-40c2-b9a9-2b6ba3aeed90",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "8.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "8"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "8.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de tourbe"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "08.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5bea3c78-db83-480b-865a-1bc8002dec5a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Entreposage et stockage non frigorifique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.10B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5cdc58cb-f665-4c00-9cbd-b5230b433bb4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "18.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "18"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "18.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Imprimerie de journaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "18.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5cea1415-5d87-4c78-9134-f4e6c6d6b396",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements hydrauliques et pneumatiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5dcb33f4-e68e-44bf-ace0-2182bfa48818",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "81.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "81"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "81.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités combinées de soutien lié aux bâtiments"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "81.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5dfa6c62-ae14-4979-b484-33e256c54514",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location de longue durée de voitures et de véhicules automobiles légers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.11B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5e404e78-5baa-4baa-9805-0d21cbf0a3da",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "12.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "12"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "12.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits à base de tabac"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "12.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5e56c44a-663f-4009-ad65-c2202407f8a1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail d'articles de loisirs et de sport"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f0e5c55-0dc7-4944-8d5d-ad88622dc578",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.63"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traitement primaire des récoltes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.63Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f33d418-100c-4dbc-a026-0659b05478fa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Mécanique industrielle"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.62B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f3b4b24-5144-4858-a3c3-345ff5d079a1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de logiciels applicatifs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.29C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f51cf85-9143-44a1-88ff-9a50fb2ed89e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "3.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "3"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "3.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Aquaculture en eau douce"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "03.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f619fad-aaa6-4735-86f4-07e1531d2eea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "71.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "71"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "71.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Analyses, essais et inspections techniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "71.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f8185a5-1f89-4ef8-b486-ef697ec5412b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de placage et de panneaux de bois"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5f9caba9-b10b-4116-9699-83f16170d14e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.44"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage de chameaux et d'autres camélidés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.44Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#5fda319e-89df-4f5a-a34a-b5c4040908c4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de revues et périodiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce ; réparation d'automobiles et de motocycles"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "G"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6146b7cc-eb1b-4671-9973-d112ef9d6087",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "61.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "61"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "61.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Télécommunications filaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "61.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6186d856-f083-4221-b864-104c1946a0f9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres textiles n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#619ea299-1e12-4e63-8ac0-c6b3df15335f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'équipements de communication"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#62151081-a276-4628-a48b-b2ab4c2625d0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.16"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de plantes à fibres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.16Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#626574d1-9d65-43e5-9f99-b55b33de55b7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.26"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de fruits oléagineux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.26Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#62c6c2a0-43bb-40a8-b44b-f8847f0ff265",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "73.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "73"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "73.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Régie publicitaire de médias"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "73.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#62fb8157-fcfd-4ecf-b8ca-436062840883",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.25"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture d'autres fruits d'arbres ou d'arbustes et de fruits à coque"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.25Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#636beddb-fe82-430a-8984-acbac0527113",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement secondaire général"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#64456586-dc42-48a5-8b98-9ee69aa26421",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de métaux précieux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#64851e17-2ef2-492f-9c81-b7b8399b9cfa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Installation de structures métalliques, chaudronnées et de tuyauterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#648af7ff-d490-48ec-ab4f-8f19b9c21a1d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "18.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "18"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "18.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de pré-presse"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "18.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#651c2347-097b-459f-a673-3eaf7a6cb222",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres articles à mailles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.39Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#65d5d6e1-19a4-4b2a-bb2c-0c594a0e5fca",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités manufacturières n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#663221b8-d073-4a2a-940a-058d342ab735",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "51.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "51"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "51.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports aériens de fret"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "51.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#66cbe91b-8a81-44f9-b77d-04b64e1119a2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "74.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "74"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "74.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités photographiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "74.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#66fcdc19-ac17-44be-a0ec-511ccfa05e1f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de verre creux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6751cc69-86c9-4c76-9297-3fccc78a69e5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.94"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de ficelles, cordes et filets"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.94Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#67cd08ee-c4b3-4ed2-9cb3-8d67a033ccb0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'appareils ménagers non électriques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#67d0ca6a-451f-4326-b380-bdf496840469",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Sciage et rabotage du bois, hors imprégnation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.10A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#67d97fc8-30e7-4502-bf5b-3eabbcd064d6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de fleurs et plantes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6826765d-9af5-4d57-a725-af9b2bcd232c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation de machines et équipements mécaniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#68af8a3a-2f14-4e36-94ec-3b612161cdc1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.33"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail de machines de bureau et de matériel informatique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.33Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#68f0ec91-c681-43cd-8561-e96f227b330f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.09"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres services personnels n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.09Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#691e74e2-c551-4524-b22b-d478069feed8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.76"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'autres produits intermédiaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.76Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#69e90943-ec5a-4a43-afe5-4c10e71c8179",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "74.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "74"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "74.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités spécialisées, scientifiques et techniques diverses"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "74.90B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6b167a55-ec19-449b-b944-5f4b66386475",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "75.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "75"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "75.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités vétérinaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "75.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6b4c2e18-0a85-4661-a95e-ec5b2196cd5b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "29.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "29"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "29.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres équipements automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "29.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6bb80665-77b4-4a52-a13e-0dbab8161631",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.33"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Profilage à froid par formage ou pliage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.33Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6bffce91-dd25-4d7c-aecd-9fcafac88efa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.35"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de produits à base de tabac"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.35Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6cc8b4f2-2fd8-4b09-902b-43450f6563e7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "92.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "92"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "92.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Organisation de jeux de hasard et d'argent"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "92.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6cd30e3f-c160-48f6-8711-0c8867abe30e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de pièces techniques à base de matières plastiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6cddb8a5-f6d0-4675-afc6-f2db9d771487",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'huiles et graisses brutes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.41A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6d3ae991-b787-4ec1-9b6f-23ff8a26e2b5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'aliments pour animaux de compagnie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6d56ceac-4293-48c3-8af1-c080f7258afa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "74.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "74"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "74.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités spécialisées de design"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "74.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6e0ee03f-c105-4599-b268-974afaf83d65",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.72"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de serrures et de ferrures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.72Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6e721156-7702-401b-97f9-1ee076dbf919",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation de meubles et d'équipements du foyer"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6e81c235-7ee7-45aa-9546-418f74c6609c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "53.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "53"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "53.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités de poste et de courrier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "53.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6ed0793c-8840-44ab-8f64-3b1d36bb0026",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Ambulances"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.90A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6f04b664-fa9c-4370-ab80-af7faeb4f9c8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication et rechapage de pneumatiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6f42bd32-4574-4337-afb4-ab551294f2b2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.66"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'autres machines et équipements de bureau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.66Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6f449e9e-b955-4812-b8b1-876b3731cdd8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de locomotives et d'autre matériel ferroviaire roulant"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6f5e127c-9b1c-4bff-a4be-258a61f35292",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.6"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements d'irradiation médicale, d'équipements électromédicaux et électrothérapeutiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.60Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Agriculture, sylviculture et pêche"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6f72cc3b-c2e6-4881-984e-f68aa5f1eafb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Accueil ou accompagnement sans hébergement d'adultes handicapés ou de personnes âgées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.10B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#6ff6a4e0-ec3c-4a63-b031-aee34aa0c521",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de cidre et de vins de fruits"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.03Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#71a057b1-74dd-4f53-82bf-7e9abf3563f6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "93.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "93"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "93.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des centres de culture physique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "93.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#71e7a50c-f5fa-42aa-b8b2-6bde3d594c05",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités chirurgicales"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.22B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#72f7f2c7-59d5-461c-b076-9910b2646782",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Accueil ou accompagnement sans hébergement d'enfants handicapés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.91B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#73340f8c-b5a0-4eec-a458-80f95ef9f5d2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.78"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerces de détail d'optique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.78A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#73556ceb-7a29-4d52-b1f3-56a1494b75c4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "81.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "81"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "81.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Nettoyage courant des bâtiments"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "81.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#73e6daa4-0fd8-4a0b-81f2-105aa3a0dc7a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location de courte durée de voitures et de véhicules automobiles légers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.11A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#73f9db7e-1974-474f-9525-6425d7c2f17f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services funéraires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.03Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#740a51ec-fd81-4218-b332-962d90a38223",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de textiles en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#744aeabe-8867-4f07-bdca-43e01152ce2a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements d'aide à la navigation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.51A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#746c70c2-03f5-4000-9794-aec8a6876c3a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Distribution d'électricité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#74c9d1c7-46fd-47ab-b3d3-e4f4afd3799b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "93.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "93"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "93.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités récréatives et de loisirs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "93.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#74e24749-f49b-404d-8a85-166bea8332aa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction et entretien de tunnels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.13B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7537c19e-f0d0-4384-9941-7d9c45e9def0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location de vidéocassettes et disques vidéo"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#75777331-9709-46c5-94db-deb1e3537b63",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de pesticides et d'autres produits agrochimiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement et restauration"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "I"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#76933949-affc-4e43-b80b-098bbd97db4f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Projection de films cinématographiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7747fd8d-14f4-4378-85ee-6ffb84af3998",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "65.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "65"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "65.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réassurance"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "65.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#776c260c-2ccb-4e7f-b20d-d272d0b5bfcb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "62.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "62"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "62.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion d'installations informatiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "62.03Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#778c7f07-f216-4d54-9752-8cfafc77679f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de réseaux pour fluides"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#78a38f2f-cdaf-47fe-a4bb-bfccfda0d380",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'appareils sanitaires en céramique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#78eaab5a-20fb-43fb-84b6-6805f45778e7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Administration publique (tutelle) de la santé, de la formation, de la culture et des services sociaux, autre que sécurité sociale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#79534571-3e89-4c25-ba7e-5f566f59c51d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail de machines et équipements pour la construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#79951b05-c1a8-4b93-8607-28ec924bf3dc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Administration de marchés financiers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7a4ee77b-3e84-479d-a920-63e396ad10e7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles de bijouterie fantaisie et articles similaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7b27771d-6e84-4958-b638-fb8abacd5c66",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Distribution de films cinématographiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.13A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7b278d31-10b5-459d-997f-841d6065c129",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Téléphériques et remontées mécaniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.39C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7b77b429-bd36-4a98-b52b-f7405ef48878",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.73"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'appareils sanitaires et de produits de décoration"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.73B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7b880647-f19e-4bf0-8bd7-047d0a088392",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.15"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'engrenages et d'organes mécaniques de transmission"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.15Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7b8a751e-0164-447f-ad0b-a179c3aa2e95",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.17"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Centrales d'achat alimentaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.17A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7bedac33-9ac1-481d-92b1-e51aa6c97e64",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Imprégnation du bois"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.10B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7bf74506-68d1-48bd-8b4d-614011bdecb1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines-outils pour le travail des métaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7c09c082-8d8e-4dfd-ae94-6ee67e2ca777",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.45"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage d'ovins et de caprins"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.45Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7c369e30-b657-4a4f-aefc-5e494b665b39",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de matériel agricole"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.61Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7cd95d6a-06cb-4820-92c0-95a524b3c256",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement social pour enfants en difficultés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.90A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7cf2af67-9415-417b-8ec5-d290af15585d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.33"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matériel d'installation électrique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.33Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7d22c907-105e-42fe-8358-e6c0efc9048c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "31.09"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "31"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "31.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres meubles et industries connexes de l'ameublement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "31.09B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7e435e64-a7d1-4b52-8690-af82cfb8d9eb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "55.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "55"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "55.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Terrains de camping et parcs pour caravanes ou véhicules de loisirs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "55.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7e57aa16-ca33-41a5-99b8-65d3f534034c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "93.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "93"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "93.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de clubs de sports"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "93.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7e754bc2-ce7b-4845-8dc7-8cb2adc632b1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.17"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation et maintenance d'autres équipements de transport"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.17Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7e864fb8-6c18-40be-9efa-2571308020ed",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.16"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matières plastiques de base"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.16Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7f6cf429-9b58-4d68-9b11-5d32f680de71",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'emballages en bois"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#7f6daf33-aba6-4ca2-a8b6-7d103d50b3f1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "39.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "39"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "39.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Dépollution et autres services de gestion des déchets"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "39.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8078100f-7f95-4541-b050-47f5f95063ed",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "31.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "31"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "31.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de meubles de bureau et de magasin"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "31.01Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#80aed31b-fe89-4577-bb16-894be8fcfe89",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "68.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "68"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "68.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des marchands de biens immobiliers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "68.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#81101f40-59f0-42cb-8fa3-790f0a1cafbb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.17"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres intermédiaires du commerce en denrées, boissons et tabac"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.17B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#81175131-2266-4139-8f6f-20b3f1e6230c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de cartonnages"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.21B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#811e0e64-f74c-4766-aaa0-1808ea20c4b3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "91.04"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "91"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "91.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion des jardins botaniques et zoologiques et des réserves naturelles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "91.04Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#81b61291-f617-4fe1-83a3-5c6cd8763b4a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'instrumentation scientifique et technique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.51B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#821ebafe-befe-4268-a25a-c6549e502555",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "8.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "8"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "8.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de pierres ornementales et de construction, de calcaire industriel, de gypse, de craie et d'ardoise"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "08.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#827ba032-2913-4a75-b2d4-7d7348e195b2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de jeux électroniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#82cf8ba7-3ff9-4882-ae9c-a68da5055b71",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "81.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "81"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "81.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services d'aménagement paysager"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "81.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#82da109f-59a6-4255-8186-31f155173089",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Supérettes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.11C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#839f9dd3-98c6-445f-bed9-4041daf245d7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activité des médecins généralistes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8419b1c7-80a6-49d0-809a-c347b4979f10",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Blanchisserie-teinturerie de détail"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.01B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8478e788-f53e-454b-9833-e0e14f43f24d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "90.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "90"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "90.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Création artistique relevant des arts plastiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "90.03A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#84cb1c9d-9bfc-4d18-b570-9d5e9ab694f8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de boissons alcooliques distillées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.01Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#85087fdc-17bb-4a8e-b4e4-8b51e9dbff3d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.5"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de lunettes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.50B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8535973d-b1d0-4d1a-a5ee-6b4fff41f67b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.46"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élaboration et transformation de matières nucléaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.46Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#856f520d-7371-4c99-9649-c98ebfd75186",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "38.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "38"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "38.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Démantèlement d'épaves"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "38.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8578664b-ef78-4014-895c-83875f0ca822",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de peintures, vernis, encres et mastics"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#85aab54c-a9e3-44f2-9f70-f591f4d8472d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion des retraites complémentaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.30B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#85f93b46-8039-4e22-baf5-fdbdb5ffb9d8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Sidérurgie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#861333a6-98b7-467f-9d00-706fd31d3358",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de fours et brûleurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8641b9e2-84dd-43cd-a6e7-2086ddfed541",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Entreposage et stockage frigorifique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.10A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#868c4b9c-1004-4ebe-96ab-c3d1bd4bb4bb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "8.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "8"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "8.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction des minéraux chimiques et d'engrais minéraux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "08.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#86b056a5-438a-4c5c-822c-cb78389983b6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "50.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "50"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "50.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports maritimes et côtiers de passagers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "50.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#86c7c7b8-a9c6-4f2c-b51a-2fc7b246c1d5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'équipements automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#887d1070-0dd2-4388-a4ad-26731694eba2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "65.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "65"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "65.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres assurances"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "65.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#88b2ce0b-4638-4f82-b654-ddb78275162f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Cuisson de produits de boulangerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.71B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#88ebd653-82cb-45d0-84dd-3bd900ac5917",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.69"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de matériel électrique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.69A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#892a5027-d4f8-416c-8194-a0067202f500",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de matériels de télécommunication en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#897859c4-fd6a-43f0-b0d1-3c09be84ff8c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "2.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "2"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "2.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Exploitation forestière"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "02.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8994e466-43af-416e-bd07-fb80663868ec",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "69.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "69"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "69.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités juridiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "69.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#89c82a8d-69fc-4b98-a757-b0ff7d3f9d7b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.69"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de fournitures et équipements divers pour le commerce et les services"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.69C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8aa850a1-1353-4ae3-bde6-989ecc56a01f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "80.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "80"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "80.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités liées aux systèmes de sécurité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "80.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8b0cf793-572b-47f0-afd6-8a5d93632304",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des professionnels de la rééducation, de l'appareillage et des pédicures-podologues"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.90E"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8b0f27f8-eafa-4b9f-bd1f-c833b4a8efa0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "50.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "50"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "50.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports fluviaux de fret"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "50.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8b485c8d-900f-477b-93bf-b50a41851c2e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de cuirs et peaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8b6be944-e6aa-4f7c-b9ec-797aa538231e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines pour l'extraction ou la construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8b8a7b34-308f-484f-9b61-3f0fa684a747",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Libellé"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "Code"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8bbe11f4-1cc1-41e0-859a-85f69338cdd7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'huiles et graisses raffinées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.41B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8c01aff7-a863-4447-b47f-b5693a9cfdf4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Cafétérias et autres libres-services"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.10B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8c743264-0613-45cf-8331-d018d929d498",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits chimiques inorganiques de base n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.13B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8cd20eca-f4a6-4bcb-a323-784e484ebd83",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Décolletage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.62A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités financières et d'assurance"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "K"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8de739dc-532f-4641-8636-2d4551f39bf0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de fibres de verre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8dfd9255-046b-418e-a54c-b58cc59293c7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de combustibles gazeux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8e5b5129-47b3-4aa0-9784-e80d900859ce",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de radiateurs et de chaudières pour le chauffage central"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8e750a01-91bf-4933-b10b-1a17a087f66b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.38"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de poissons, crustacés et mollusques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.38A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8e7d817b-8e98-4bb5-86e5-c16df7f6ff29",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Conception d'ensemble et assemblage sur site industriel d'équipements de contrôle des processus industriels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.20C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#8f778711-e666-4735-80c9-289985aabc1d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.15"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture du tabac"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.15Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#903594e4-6216-49a4-aeac-369993dc4818",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'ordinateurs et d'équipements périphériques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9135664c-76f6-4991-8bf1-9bd3f7c66d19",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de vêtements de travail"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#91768e66-7748-43af-bc5f-bdef17288483",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités auxiliaires de services financiers, hors assurance et caisses de retraite, n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.19B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#91f59a1a-52fd-457c-a397-6e88ce13ce3f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.63"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'enregistrements musicaux et vidéo en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.63Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#928b184b-315f-4c64-9888-8f2346a0ecc6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres travaux de finition"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.39Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#92a72f62-17bd-4d01-bc18-6ce0c2dcee6b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.73"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de pâtes alimentaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.73Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#92b4d6fa-cd68-49ce-ba7c-cbad7bc90f7a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transformation et conservation de fruits"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.39B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#93f72f82-bde3-41ba-92b0-465f046c8c1c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de couverture par éléments"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.91B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#946e70f1-26df-4523-abdd-bfa46e3dffec",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "72.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "72"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "72.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Recherche-développement en autres sciences physiques et naturelles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "72.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9479f55b-a96d-4f42-86b4-4900896f4165",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de plaques, feuilles, tubes et profilés en matières plastiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#94854528-254b-46a3-983a-19f05582ea52",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de gaz industriels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#94d12347-b879-4118-97a0-bccbafa68777",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "80.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "80"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "80.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités d'enquête"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "80.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#95018ac8-0d2c-4812-b4a7-a00c9678a545",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) alimentaire non spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.39B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#951e1976-b81c-4e7d-993a-2c0bb2e33ed4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de légumes, de melons, de racines et de tubercules"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#955f9d86-0bea-492c-82cd-fd2433d500a6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres commerces de détail alimentaires en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#957482d3-388f-463d-8458-eebb11e8ec10",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de réseaux électriques et de télécommunications"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités immobilières"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "L"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9657ea70-1769-4cff-aa57-eea93d694cb2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de lait liquide et de produits frais"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.51A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#96e01a04-eff6-4549-8b54-7b1df358cd89",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'armes et de munitions"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#973cf844-4774-405f-98ee-00d84e4cbb18",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Distribution de combustibles gazeux par conduites"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#979f89cb-42e9-4bda-9903-8b0badb9e625",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agents et courtiers d'assurances"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#97c6fca1-1137-4ab0-9dde-842848a62db3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.15"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Intermédiaires du commerce en meubles, articles de ménage et quincaillerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.15Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#982c8b7a-d056-4ec2-bda2-40d8bc282227",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "41"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "41.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Promotion immobilière de logements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "41.10A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#983f7b81-ce43-4c68-859f-92c08336eee4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "38.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "38"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "38.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Collecte des déchets non dangereux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "38.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#98aa88ea-aa57-484b-91d5-838663774530",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "81.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "81"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "81.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Désinfection, désinsectisation, dératisation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "81.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#99376536-9894-4596-8ee3-6f6ff2049721",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits de consommation courante en matières plastiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9981cfd7-bb33-49e9-92ea-b9b6c3e409fc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "60.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "60"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "60.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de chaînes thématiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "60.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9a9c76fb-80f1-4aac-bc75-d839fddf13d7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.59"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres enseignements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.59B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9af0122e-33bf-4d3b-aa1d-a10564aad327",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.18"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Intermédiaires spécialisés dans le commerce d'autres produits spécifiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.18Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9b073e9d-ef19-4f7e-9aae-4f2e52a2956a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "91.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "91"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "91.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion des bibliothèques et des archives"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "91.01Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9b07f56a-78ab-47a3-a74f-02be575f1126",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "63.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "63"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "63.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Portails Internet"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "63.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9b34aa33-06ce-4ab8-ac95-08bb5a147ff0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de bicyclettes et de véhicules pour invalides"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9bb91603-7c3d-4571-a325-de1249adcde3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Défense"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9bc6cf7d-c3f0-4dc8-bf5a-1ec2d15764bb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "6.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "6"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "6.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de gaz naturel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "06.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9c2d5dc0-f829-40ce-ba02-0343469bb0f7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits électroniques grand public"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9c33f796-8cd9-4fc9-b836-223bc6963f6c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.94"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines pour les industries textiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.94Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9c5b4b95-6c2b-46ae-a3c9-8c12b5739ce7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.73"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de bois et de matériaux de construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.73A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9cfe9b38-fcab-4554-9862-f5a116c6f53f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de carburants en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9d3663ec-3242-4b34-89e7-902f492a68af",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Vente à distance sur catalogue spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.91B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9e58a4cd-1fa5-428c-8d33-4962e63359c6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles textiles, sauf habillement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9f49ab81-fa03-4c6f-845a-c5533ca31bee",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "63.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "63"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "63.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agences de presse"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "63.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9f97f639-d2b6-4424-9067-175f6dbcff46",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de films pour le cinéma"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.11C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9fa7e238-4c65-471d-9c41-413da83d4719",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "90.04"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "90"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "90.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion de salles de spectacles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "90.04Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9fb8a702-9cc3-42c2-8bc6-a86689b69286",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.53"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de tapis, moquettes et revêtements de murs et de sols en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.53Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#9ff83295-6864-4e10-9bff-61592c03fde9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.53"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fonderie de métaux légers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.53Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a0bcbdae-be0b-4659-88cb-58fa41fe0b7e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de radiodiagnostic et de radiothérapie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.22A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a0cf6df3-476e-4435-9a70-a1a849e65bf9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.64"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de mortiers et bétons secs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.64Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a15d6231-0901-4121-aabe-a9ca788eb32f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports urbains et suburbains de voyageurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a1ba8cfb-e1e9-4db2-a240-b22f1ca4d5fc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "31.09"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "31"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "31.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de sièges d'ameublement d'intérieur"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "31.09A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a1c085f8-7d1e-4cc3-86a0-87f838560811",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres commerces de détail en magasin non spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.19B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a1cb41ae-f04b-4229-acba-87400be1f844",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de logiciels système et de réseau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.29A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a23c0495-70f6-4cbb-a3ae-a236b58df161",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "88.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "88"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "88.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Accueil de jeunes enfants"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "88.91A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a25bfde3-3ff0-4d6d-af4b-a728872c010d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "22.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "22"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "22.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'éléments en matières plastiques pour la construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "22.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a2ab852a-a391-410f-96e6-4e5b6c086404",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de beurre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.51B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a393e016-95ce-4b53-b374-7d0fdce83f64",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.06"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de malt"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.06Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a40682fb-c8d8-44b5-b76b-362459dfb1a7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de vêtements de dessous"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a4f6a858-feec-4b33-8bd7-7edd42a55049",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.73"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de moules et modèles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.73A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a50b4395-7722-434d-9f40-9e5a8fa083d2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.46"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage de porcins"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.46Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a575f565-2ada-405c-b4b3-05e18023ac3d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'appareils d'éclairage électrique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a59da562-8c3c-418c-b758-d98d513b1ab4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de voies ferrées de surface et souterraines"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a5adff05-4e95-4fa1-a4c4-d1ee67aaeff2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Justice"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a646152f-0679-47f3-ae75-5803831900c7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles de papeterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a65f9ca3-c86c-4682-8577-ae14e8af010b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Centrales d'achat de carburant"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.12A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a6974fb6-f4c0-4ea0-8af2-e3ceac52e983",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de briques, tuiles et produits de construction, en terre cuite"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a6c1ee39-2a17-4740-9e0b-37e9bf812331",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "38.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "38"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "38.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Collecte des déchets dangereux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "38.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a6f8eb71-2c47-4fe6-bba3-ca6d9f458088",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Manutention portuaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.24A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "P"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a8038363-217b-42b6-8763-325a0b442eb5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux d'installation électrique dans tous locaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.21A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a8e3f16c-6ce1-41a7-9a1c-334beedd1a49",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Boulangerie et boulangerie-pâtisserie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.71C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a92ba6a8-6bf2-4df5-b804-d9f562396468",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités générales de sécurité sociale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.30A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#a97f52e0-ff4a-4225-99ae-cba0f8af0f6e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de menuiserie métallique et serrurerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.32B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production et distribution d'eau ; assainissement, gestion des déchets et dépollution"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "E"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#aae22cdc-897a-4298-9b2a-ceab1d9a3a28",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "71.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "71"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "71.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Contrôle technique automobile"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "71.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#aafc7b66-297b-4127-ae3d-6524e6c214d7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "70.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "70"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "70.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Conseil en relations publiques et communication"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "70.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ab08ed24-e2c1-4ca3-9983-2b861f0a0993",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "93.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "93"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "93.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des parcs d'attractions et parcs à thèmes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "93.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ab1b7c14-059e-44e9-8341-97984649cb9e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "71.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "71"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "71.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Ingénierie, études techniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "71.12B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#abb062e0-b745-436a-9203-9ddc39d517ce",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités de soutien aux entreprises n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ac0f8a89-8f39-4acd-a164-13772379818d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "78.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "78"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "78.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autre mise à disposition de ressources humaines"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "78.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#acdaa7a3-1a08-41f6-9bbd-1d465c7afdb0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "94.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "94"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "94.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres organisations fonctionnant par adhésion volontaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "94.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#acea5376-093a-4a8d-a164-4b59208b7829",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "94.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "94"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "94.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des syndicats de salariés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "94.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ad17d458-0f84-4d3c-8881-6f20a9ca3f18",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.59"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits chimiques n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.59Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Administration publique"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "O"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#aed320bd-1ab9-4e03-a8ec-db3c84ba2c14",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hypermarchés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.11"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#aed597e7-a3aa-4c79-928a-9987ab979823",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.79"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de biens d'occasion en magasin"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.79Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#aefc3265-1612-43fd-bb77-ce2f1329a332",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.43"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de matériels audio et vidéo en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.43Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#af10a26f-7e86-4b11-b193-67880c90b3fb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.16"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation et maintenance d'aéronefs et d'engins spatiaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.16Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#af85ecd8-d21d-494f-86da-124294f1b9a6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "31.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "31"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "31.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matelas"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "31.03Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#afd5e997-bfac-4139-9b37-1864df1b864c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de la vigne"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b0d872c1-3128-4bb9-af0b-786b3fdd0344",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux d'installation électrique sur la voie publique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.21B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b0f153bc-1a76-402f-906b-7e0fab074675",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production et distribution de vapeur et d'air conditionné"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b11257a0-cb20-42b9-b81a-07344ea234a0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Coiffure"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.02A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b176cc0b-cc99-4e79-93f6-22248f479f5f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres articles de robinetterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b1ebafb6-b3a6-4e82-9314-d3dd8134835a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "31.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "31"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "31.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de meubles de cuisine"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "31.02Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b1fba0ff-75a2-4225-985c-fa5f0ca8d2a6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de pain, pâtisserie et confiserie en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b22686bd-12da-4a8b-b620-ba24c39e25a6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.16"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Intermédiaires du commerce en textiles, habillement, fourrures, chaussures et articles en cuir"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.16Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b26aa1b9-0d7f-4a7c-9cd6-ab4f39ce0607",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.5"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture et élevage associés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.50Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b2745f88-1ec7-4e8e-a5cc-838e8c27d3f4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de margarine et graisses comestibles similaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b2d2c2b8-4274-4bf6-91d5-9867cd35cb5c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.73"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres outillages"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.73B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b300a924-130c-4a39-9407-d8aeaae378fe",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines et d'équipements de bureau (à l'exception des ordinateurs et équipements périphériques)"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b379b7ed-9677-46d1-828d-6d87788ced52",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Supports juridiques de gestion de patrimoine mobilier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.19A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b3c6da3a-25b0-452a-be8a-814c07f56795",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Affaires étrangères"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b4d4a346-1e67-40b3-8b7f-c721e4ef6566",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'ouvrages en métaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b505129a-b0d4-4a40-b132-aa49e45faa8a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "61.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "61"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "61.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Télécommunications par satellite"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "61.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b50c9404-a88d-4904-a25d-a69a2713efa4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Métallurgie de l'aluminium"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b5720f65-bd41-4465-b7fa-000b1e5f4f60",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Post-production de films cinématographiques, de vidéo et de programmes de télévision"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b5a2f5ac-2d8c-437b-b23b-e98fc36d835a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de charpente"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.91A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b6a2aa57-51ac-4ef9-bac5-4d615596c3ae",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de tubes, tuyaux, profilés creux et accessoires correspondants en acier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b6c5e4c6-2712-4766-84d2-0255375419c6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de films institutionnels et publicitaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.11B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b6dbcda0-dfe6-45d7-8aae-ce03b1d81d5c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de charpentes et d'autres menuiseries"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b745ee16-be93-4a99-b962-372ef60e81e0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "62.01"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "62"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "62.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Programmation informatique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "62.01Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b7ce3e3a-acf3-4e0b-b07b-34454119e4df",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Administration publique générale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b808fe84-9bb1-430e-b961-b35a50b7d4bd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles métalliques ménagers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.99A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b8456227-7955-4c1d-8d26-c27632b19bc4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Grands magasins"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.19A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b86f7abf-0d79-49b9-bf28-6a33d07c23d2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "41.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "41"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "41.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de maisons individuelles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "41.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b92a1472-a1de-46eb-9cb2-802e5dc818ce",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "80.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "80"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "80.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de sécurité privée"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "80.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b96f8818-8af5-47df-9259-951b8a3d83c8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Entretien et réparation de véhicules automobiles légers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b97c7997-3097-4d0b-9e95-98c090723569",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.64"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'articles de sport en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.64Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b98f4f2f-1a20-4b28-8fff-48a8ac0b7ff5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports routiers de fret interurbains"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.41A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b9c261be-098e-46a0-af6c-5206a86b7bab",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines agricoles et forestières"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#b9e7342a-adf8-485b-b45a-c06ddc552b0e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement médicalisé pour enfants handicapés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.10B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#baedf762-f122-44ba-8620-eb632b5a8a4d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce et réparation de motocycles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#baf51ce6-5aef-4b87-9240-d31c39561af2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "96.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "96"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "96.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Soins de beauté"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "96.02B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bb4b1f27-a53d-42fa-9592-79457f97e8d1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de montage de structures métalliques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.99B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bb660685-c1e4-4abf-ac8e-6476def19dcb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.95"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de non-tissés, sauf habillement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.95Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bbe93257-418a-4e24-8f55-d6f2dbb290d2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.48"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'articles d'horlogerie et de bijouterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.48Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bc273fc0-0a5d-4e38-851b-24f48c922ba5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "90.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "90"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "90.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de soutien au spectacle vivant"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "90.02Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bc306852-d58d-4803-b395-178697e4edb2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transformation et conservation de poisson, de crustacés et de mollusques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bc60f61a-4ec8-45d7-9de0-85d7223416be",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agences de recouvrement de factures et des sociétés d'information financière sur la clientèle"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bc70e1b6-ed49-4b5b-90eb-f4ff36dc626f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.07"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Industrie des eaux de table"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.07A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bcd1ad51-ad00-4b45-b929-672fff878d28",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "9.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "9"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "9.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de soutien à l'extraction d'hydrocarbures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "09.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bcede9a5-ba72-4846-87ee-566dcb9094fc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de menuiserie bois et PVC"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.32A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bdc683db-7978-4948-9e01-5bdc2d5918a9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Affrètement et organisation des transports"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bdfad5fe-948b-46c5-9046-3db4a6128799",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.64"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traitement des semences"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.64Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bee37843-cb35-4ff1-a9b4-ea4b022dcf68",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres services de restauration n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bf099fdb-7a72-449b-81c9-c5f08d9887cd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'habillement en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.71Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bf991a7e-8a39-48db-951b-76ef15890e57",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de vêtements de dessus"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bfdfb110-77ae-4988-a62e-52467ca80315",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'habillement et de chaussures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#bfed1065-2c90-407d-a30a-fdb0cc4cf2df",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "55.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "55"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "55.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres hébergements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "55.90Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c0bc0cfc-4755-470d-a1a7-f1baf11d4183",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.74"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de quincaillerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.74A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c10dc5a2-0a4e-42b4-b199-eadb7714d6f3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'aliments pour animaux de ferme"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c16ed190-f61d-4954-9c16-ae719223e106",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Façonnage et transformation du verre plat"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c19d78f8-8fa0-4535-b775-c1d898ee07ba",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "68.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "68"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "68.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location de logements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "68.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c1ce956a-2672-453d-bbec-088cd51852a3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail d'ordinateurs, d'unités périphériques et de logiciels en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c20acf71-0ae9-4bda-b48f-c6e0f1e63b08",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.75"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de produits chimiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.75Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c2204bbb-6c96-422c-9d9d-fa3614d6a81a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de glaces et sorbets"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c268d230-cdb7-47cf-9d0b-ce09556ee3b9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de savons, détergents et produits d'entretien"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c2931f9b-dd4b-47fd-8640-ae99e229b063",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.65"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de mobilier de bureau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.65Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c30aa05e-99c7-48ca-a18f-7797e8cccd8e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de colles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c31b5f21-b073-44d6-9875-c932b0c2a9ad",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Agencement de lieux de vente"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.32C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c33303b3-3d4e-4ff1-9ac1-04e49e1beb9d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) d'animaux vivants"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c3483fd7-4d72-4d05-8392-4fa5100894a4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Forages et sondages"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.13Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c35d6364-32f0-4081-aca7-cee3f4002032",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.6"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de fibres artificielles ou synthétiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.60Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c4d142b2-7a36-4e03-8460-eabb25980d12",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres réservoirs, citernes et conteneurs métalliques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c4e2f4d5-4b6a-41ae-b44f-89a7c888eaa0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction d'ouvrages maritimes et fluviaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c5f6fc29-68c5-4611-95b0-77d0f2c07e29",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.81"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de sucre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.81Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c644f6f1-f80e-40c2-a5d6-4b20548ffe4f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.49"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres machines-outils"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.49Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c6c33f55-7ce7-4335-87d8-95224d2b2523",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "2.4"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "2"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "2.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services de soutien à l'exploitation forestière"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "02.40Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c76f5244-9ce6-419a-8d04-d1e4689a23e4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de fruits et légumes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c770614c-cf14-4a63-ac91-93d15acca628",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "87.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "87"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "87.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement social pour toxicomanes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "87.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c7821df8-2ca4-405f-98ff-9096faf1a022",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services des traiteurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c80d0460-cdb9-414e-93c3-5f3f6e7b4762",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de bateaux de plaisance"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c8a673ff-1bd8-4f5b-8e30-0bb75980ac5a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités d'ordre public et de sécurité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c8aba65e-d5c5-417a-ac99-110ffbeeec50",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Débits de boissons"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c8b04971-dee5-42de-882f-3738c45a0c57",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Horlogerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c909a773-8892-4752-8cee-31094e6ad92d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "90.03"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "90"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "90.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autre création artistique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "90.03B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c9881747-ab08-454e-b6f2-c796b11bc442",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "78.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "78"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "78.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agences de placement de main-d'œuvre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "78.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c99434ec-98b2-40d5-9329-9c3559bee500",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Élevage d'autres bovins et de buffles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c99825b4-c392-40b6-8cf2-ae9d1be72ffa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "60.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "60"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "60.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de chaînes généralistes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "60.20A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "D"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ca106359-61b1-40e7-a92a-b2d617d15cea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines pour la métallurgie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cb38a326-07ae-4394-ae21-b30f9820fd15",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Manutention non portuaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.24B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cb3b5cde-63c9-49ed-a93c-4ccd30b111a7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Magasins multi-commerces"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.11E"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cb85f7e5-362a-4290-81b1-f279440b21bd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.74"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de fournitures pour la plomberie et le chauffage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.74B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cb97bf0f-9966-47da-804d-edf4c2012f06",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de moteurs, génératrices et transformateurs électriques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cbcd0f0e-5a7a-490d-a2fc-9f9764d03425",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "24.43"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "24"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "24.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Métallurgie du plomb, du zinc ou de l'étain"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "24.43Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cc468074-1271-492f-9325-83f6285b6182",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de matériel de distribution et de commande électrique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ccc58458-ff7e-4930-a52e-29da28acb7f7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.78"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres commerces de détail spécialisés divers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.78C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cd919045-2127-4eb6-b5ec-ca975b430199",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Reproduction de plantes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ce17d529-a4ed-4e7b-8caf-438200400998",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transformation et conservation de pommes de terre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ce6b80f9-9966-400b-a9ab-23ab9e23caea",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Photocopie, préparation de documents et autres activités spécialisées de soutien de bureau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ce82c74b-9459-463f-a001-c39150cc601c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "55.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "55"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "55.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Hébergement touristique et autre hébergement de courte durée"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "55.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cee9e152-6d75-4a11-8796-75684a33d1c6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "30.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "30"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "30.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction de navires et de structures flottantes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "30.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#cf99969c-5d75-4879-a3b1-c363c8c4ea2e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de livres"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d211e44b-65a7-4055-b186-ef78bba1b53e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "81.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "81"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "81.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités de nettoyage n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "81.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports et entreposage"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "H"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d24bf7bb-b649-4f53-b450-5b982fbcb412",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Installation de machines et équipements mécaniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.20B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d259a66e-e508-4dc8-8d03-9c1f1ea7a9f1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation de chaussures et d'articles en cuir"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d2b74fb2-367c-4442-9f0d-05a82de6e58b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux d'installation d'eau et de gaz en tous locaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.22A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d313dd8e-454e-48c9-b502-5aaea4d620f5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "51.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "51"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "51.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports aériens de passagers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "51.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d347b455-2928-4b01-bbe1-49a1724931fe",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition et distribution vidéo"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.13B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d39a17a1-f5a3-416a-8f3d-f2e5e7313a42",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.42"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement supérieur"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.42Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d4290530-64cc-43cb-bab2-6f3ec9e859cc",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de santé humaine non classées ailleurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.9"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d490cd2e-0c52-48b3-8408-0a45bffcdcd6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.53"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement de la conduite"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.53Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d54a75c0-10e9-48e8-93e7-24da792bf03b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "97.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "97"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "97.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des ménages en tant qu'employeurs de personnel domestique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#e06a2427-f486-4485-aebf-4fa184381ccb",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "97.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d56a3c33-2db1-4b4c-843a-6b0f7c93bb5b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "84.25"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "84"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "84.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services du feu et de secours"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#addfe1af-7bf1-4abf-9203-3d5d6c58bce6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "84.25Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d61e4e1f-6c99-48a7-a6ad-909fc655e191",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de volailles et gibier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.32C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d6369f94-bf5b-4d5b-8d64-ab1b1371db3e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "38.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "38"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "38.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traitement et élimination des déchets non dangereux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#aa5b3f84-71fd-486d-b10b-2d9d8a1fe1e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "38.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d6cb281e-db06-4169-a8c7-10fd53fcba33",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.39"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail d'autres machines, équipements et biens matériels n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.39Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d724c760-a7bb-4bb0-953a-44707b402cca",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "42.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "42"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "42.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Construction d'autres ouvrages de génie civil n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "42.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d7299b55-082a-4a78-bac5-3bd252a82822",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Installation d'équipements électriques, de matériels électroniques et optiques ou d'autres matériels"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.2"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d7e69ac6-b177-48d1-a022-602f21fc3d2f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de papier et de carton"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d84b6c04-5f3a-496d-9f25-0bec48ecb198",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités d'édition"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d87bbf3d-505c-41cb-b73d-e87ccf2d53f4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres travaux d'installation n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Arts, spectacles et activités récréatives"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "R"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d8d7860c-c2ee-4f05-962e-c90c2d75a176",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Culture de fruits tropicaux et subtropicaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d96063a4-9cdc-4d02-b352-f6dc1e492491",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "63.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "63"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "63.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres services d'information n.c.a."
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "63.99Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d9a4f2d5-0e35-46f1-80ba-3e170488b62e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de cartes électroniques assemblées"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#d9eac6ba-1813-4c03-80ef-9acf749c3b8e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.44"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de vaisselle, verrerie et produits d'entretien"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.44Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#da1fed38-30f0-4e26-9fb2-6918a5873f69",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "2.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "2"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "2.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Récolte de produits forestiers non ligneux poussant à l'état sauvage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "02.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#da94ddd9-a465-4fc1-b36d-898c356901f6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Préparation de fibres textiles et filature"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#daa12188-4c52-4d65-9434-8ab73b8a5f4e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de machines-outils"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.62Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#daae47ec-77bb-4261-b953-d2c7a8a8da33",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de textiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#db026a8a-c182-47bd-b9fa-5184decc2db9",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.94"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de vis et de boulons"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.94Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#dcba734c-667a-4072-b7ec-60323aa82a0f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "21.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "21"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "21.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de préparations pharmaceutiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "21.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#dd51aafb-490b-43ff-868d-be971ea75993",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.62"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de journaux et papeterie en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.62Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ddad58be-6d22-4dcf-8d14-d6f7653fce44",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "59.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "59"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "59.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enregistrement sonore et édition musicale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "59.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ddc6bde5-499e-45de-ba9e-c6d494b9ac3b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "50.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "50"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "50.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports maritimes et côtiers de fret"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "50.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ddd206e1-d7cd-40ea-a9e7-b35320ddab3b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de vêtements en cuir"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#de307732-3ae7-4e5d-97d4-ee10fb92a684",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres fils et câbles électroniques ou électriques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#de4237a9-f571-4b28-9578-d978a97e10cb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.52"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement culturel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.52Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#def15b64-c803-4f8a-b141-48ee39bc97d8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "74.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "74"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "74.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Traduction et interprétation"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "74.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#def95868-1aa7-42f4-8bf7-e73aec21a435",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "98.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "98"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "98.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités indifférenciées des ménages en tant que producteurs de biens pour usage propre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#e06a2427-f486-4485-aebf-4fa184381ccb",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "98.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#dfb44931-84a1-4aff-958c-6852ad2e3c5d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "70.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "70"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "70.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des sièges sociaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "70.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#dfd2b469-8d9a-45a1-b899-1e288aebdc21",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Organisation de foires, salons professionnels et congrès"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e0535aed-e8e1-416c-8ae9-e17028712425",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "56.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "56"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "56.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Restauration traditionnelle"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#762d52c3-1d97-43ac-9fce-00452211843d",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "56.10A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e06a2427-f486-4485-aebf-4fa184381ccb",
      "@type": "http://dashboard.com/ontology/v0.1#nafType",
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des ménages en tant qu'employeurs ; activités indifférenciées des ménages en tant que producteurs de biens et services pour usage propre"
      },
      "http://dashboard.com/ontology/v0.1#section": {
        "@language": "fr",
        "@value": "T"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e0988590-8792-4446-ba7b-a0244890f81f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'emballages en papier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.21C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e0d5bc41-6dbe-426d-8fc8-7cbde67755ae",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Pâtisserie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.71"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e0eaed7b-40dd-4885-a15c-813d9c01f884",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "14.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "14"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "14.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles chaussants à mailles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "14.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e122a540-5159-4a3f-8a37-d44e335ecb5d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités auxiliaires d'assurance et de caisses de retraite"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e209ffc5-8519-4169-9356-3df49dc3f7f2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Centrales d'achat non alimentaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.19A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e3d913de-0271-4979-8c3d-fb7f082b3d37",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'appareils électroménagers et d'équipements pour la maison et le jardin"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e435eac0-dafe-4833-a7d3-98808609669c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "78.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "78"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "78.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des agences de travail temporaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "78.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e460012c-c676-4e14-bdbd-b8666edf8c6d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.93"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de machines pour l'industrie agro-alimentaire"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.93Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e4662997-ee51-44ce-8bcd-5c1fc0fbb908",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "60.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "60"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "60.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition et diffusion de programmes radio"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "60.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e4869f1f-a3f4-4629-8162-17ba2a5784b5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "15.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "15"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "15.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Apprêt et tannage des cuirs ; préparation et teinture des fourrures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "15.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e4b3fbd1-09ea-4399-a8a3-a58fe212086c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.64"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de machines pour l'industrie textile et l'habillement"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.64Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e505c1ce-3836-4bd8-a903-d9bfe58e62b6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "16.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "16"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "16.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de parquets assemblés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "16.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e55a111c-1c91-499b-9dd2-bbce2e94e084",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres matériels électriques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.90Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e586ae45-56d5-4df8-a6bb-f2e65c05a37c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fonds de placement et entités financières similaires"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e61b550d-d593-40ae-a2d3-74b93403d718",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "50.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "50"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "50.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transports fluviaux de passagers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "50.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e66612b9-9c9d-4096-b54e-6768cfcff978",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation de produits électroniques grand public"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e6d393d7-826d-4610-83ed-82c2051b8f14",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements de communication"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e6fd75bf-60dd-473b-8dbc-22b0d7640f9f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "68.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "68"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "68.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Supports juridiques de gestion de patrimoine immobilier"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#957d5613-d01f-40c8-8d5b-8eab97cb295f",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "68.32B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e7f31a75-6e3d-450c-95df-61a7d4c33cdd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.5"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Découpage, emboutissage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.50B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e8847c92-8728-4414-b184-ced525fedcbe",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de fruits et légumes en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e8bbc761-d28c-48a6-b321-7f0c6062cab5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres produits laitiers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.51"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e8c537f4-71b7-4e11-af28-0d40ebc1be4f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "58.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "58"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "58.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Édition de logiciels outils de développement et de langages"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "58.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e8ef2378-eb19-4b74-813d-15f0d69e0b07",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres articles en papier ou en carton"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e9849b7d-f5e0-4c16-92b3-bf20f91a6ebf",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.72"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de maroquinerie et d'articles de voyage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.72B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#e9908e97-cf0a-4c8f-ad57-f7aeae481be7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.13"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Préparation industrielle de produits à base de viande"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.13A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ea1720be-de3c-48a3-8ed4-8fa191570292",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "29.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "29"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "29.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'équipements électriques et électroniques automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "29.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ea766e4b-7ca0-4b23-8086-736a0ae35300",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.41"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement post-secondaire non supérieur"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.41Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#eaffbb3c-7bbe-4eec-89a8-d80567df0105",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "53.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "53"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "53.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de poste dans le cadre d'une obligation de service universel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "53.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#eb754cf2-4a89-4c26-be1b-f4f61824f714",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.31"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de carreaux en céramique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.31Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ebe66033-e9dc-4bf2-9d6d-4c93058ede65",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "71.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "71"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "71.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités d'architecture"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "71.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ec6b194f-fcae-41cf-9ebd-759ebc28d336",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.47"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de meubles, de tapis et d'appareils d'éclairage"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.47Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ec961047-88e6-4ccd-85b9-2bbb5721d13c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.63"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de béton prêt à l'emploi"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.63Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ed0ead1a-a8d2-4ce3-9bcf-4fb1e6bacf88",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de produits à base de viande"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.32B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ed54d62e-70f9-4f21-bfd7-4f2132514317",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "70.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "70"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "70.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Conseil pour les affaires et autres conseils de gestion"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "70.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ee17faff-9eb1-4152-8d65-b89acd9ea58f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "77.34"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "77"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "77.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Location et location-bail de matériels de transport par eau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "77.34Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ee3378d2-b95f-431d-91de-0e69a79b3413",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "94.92"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "94"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "94.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des organisations politiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "94.92Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ee3e97b3-8e42-4433-8562-5a2a7adbaaa4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "10.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "10"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "10.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication industrielle de pain et de pâtisserie fraîche"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "10.71A"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#eea7ac9a-e430-4fe8-98a7-d9accc1dd571",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres cultures permanentes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.29Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ef17073c-6622-4308-ae10-de0e253d7c1f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de maçonnerie générale et gros œuvre de bâtiment"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.99C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ef3fe355-87b3-4a8b-b9b8-525f5846645a",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "32.3"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "32"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "32.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles de sport"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "32.30Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ef4f3c28-185f-4eab-b9f5-1a8514313028",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "26.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "26"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "26.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de composants électroniques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "26.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ef90e283-b5c5-4b03-b104-9d38d2bf02aa",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.89"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.8"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres commerces de détail sur éventaires et marchés"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.89Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f0315042-6ac8-43e0-a365-a7b7c192c0a5",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "35.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "35"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "35.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transport d'électricité"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#c99a0837-cfc7-4fb6-989e-d4c2157e0ae2",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "35.12Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f059cbe2-a4ac-4c50-b78d-d40d7df2a8bf",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "3.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "3"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "3.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Pêche en mer"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "03.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f1bcae70-b9e4-4aba-a096-7dbd8ec96db6",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.76"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de détail de fleurs, plantes, graines, engrais, animaux de compagnie et aliments pour ces animaux en magasin spécialisé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.76Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f2e095e6-2ed4-43e0-a2e3-552d8308dc1f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "13.91"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "13"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "13.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'étoffes à mailles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "13.91Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f2f11419-f571-48e4-86fa-df474a49bbd2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.24"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'outillage portatif à moteur incorporé"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.24Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f34aa74a-182f-4d5b-8061-d10e4ddf8ad0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.32"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement secondaire technique ou professionnel"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.32Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f35d4d92-ac84-458d-be95-aef3bc1febf4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.38"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) alimentaire spécialisé divers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.38B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f3f7291d-2170-474f-a6c8-b37bd664b682",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "23.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "23"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "23.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'éléments en béton pour la construction"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "23.61Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f40ebbab-8ed1-4b60-899a-c5c88295bee7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "82.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "82"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "82.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services administratifs combinés de bureau"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#12a5d2d3-baae-488e-89f7-3dd145ac73e8",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "82.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f47c0562-faca-420b-adf7-9e40d0159711",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "62.02"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "62"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "62.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Tierce maintenance de systèmes et d'applications informatiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "62.02B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f4933224-9a89-48b1-b751-501ad3380da2",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "1.61"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "1"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "1.6"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de soutien aux cultures"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "01.61Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f4e51bf5-5dbc-455f-905d-2935f14ca588",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "99.0"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "99"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "99.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités des organisations et organismes extraterritoriaux"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#4de2089d-3d9d-4f66-a917-1fc059752cb6",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "99.00Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f4e71318-8fdd-4a07-b07e-f7becdcb85ec",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "85.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "85"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "85.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Enseignement de disciplines sportives et d'activités de loisirs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#a7d625ed-5152-4cf0-96b3-f96156f07ca1",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "85.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f51418ec-e0de-41c7-9fd7-5bd9050e71be",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.71"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de coutellerie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.71Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f53420f9-5da0-4839-b67c-666de0f5cefd",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "49.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "49"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "49.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Transport ferroviaire interurbain de voyageurs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "49.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f540ef94-562d-426a-a2d2-21fe18b36ef1",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "17.22"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "17"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "17.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'articles en papier à usage sanitaire ou domestique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "17.22Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f5921309-8e28-4add-a228-5d0becfd37a7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "86"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "86.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Centres de collecte et banques d'organes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#2daf4918-b0dc-4aa4-9690-d164b3a67bea",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "86.90C"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f597ec0c-f869-4c38-a943-11c5b3854324",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "61.9"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "61"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "61.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres activités de télécommunication"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#05d4ca49-9833-4b67-b93e-3e40c9f0c0b0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "61.90Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f5acd81b-32d1-418d-964a-27b06c29f564",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.17"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de caoutchouc synthétique"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.17Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f62b1c2e-ce31-4487-9207-7d021e3b24c4",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "95.25"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "95"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "95.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'articles d'horlogerie et de bijouterie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#16723b3a-78aa-45d7-a1a5-7b45a4fa7569",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "95.25Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f66b309d-3634-49d2-9b32-eb376151486d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "18.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "18"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "18.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Reproduction d'enregistrements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "18.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f6edb98c-427e-4f61-8d25-91c2f58508fe",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "33.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "33"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "33.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Réparation d'autres équipements"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "33.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f74097e5-0a86-4401-a50a-c57f3c1b5598",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "73.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "73"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "73.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Études de marché et sondages"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "73.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f76b3a55-bf28-484c-8925-964f7dfce67b",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "64.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "64"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "64.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités de banque centrale"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "64.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f79fbd7d-a008-4a78-bdea-5701173d0a8d",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "93.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "93"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "93.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Gestion d'installations sportives"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d88347cc-d6cb-4112-90cb-3d2728a1f969",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "93.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f7fa71df-f750-49c8-93b3-7dbf53682ff0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "52.23"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "52"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "52.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Services auxiliaires des transports aériens"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#d22f61ff-197a-4f9a-aa1f-c7d1d9a7ab61",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "52.23Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f87668c0-727a-4207-a167-78036cfd8068",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "27.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "27"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "27.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de piles et d'accumulateurs électriques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "27.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f8a1400c-9de6-4bda-9aa9-7db9c9b4dcd0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "43.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "43"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "43.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Travaux de démolition"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1200a70a-718d-4d30-9196-ddd3df5d9378",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "43.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f8bfca3c-c464-44c5-92a6-da35625fcf3f",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "28.29"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "28"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "28.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres machines d'usage général"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "28.29B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f8cfe7f6-1f81-4ddd-af73-cbf3c5ed23f7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "25.99"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "25"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "25.9"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication d'autres articles métalliques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "25.99B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f8f9db70-5a00-423a-84b8-3d537a0da4c8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "20.51"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "20"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "20.5"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Fabrication de produits explosifs"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "20.51Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#f9b41446-59ed-44f9-a2da-2e05a7eb4f57",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres intermédiaires du commerce en produits divers"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.19B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fa4f985a-914e-41b5-91f5-7da83e944e05",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "45.19"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "45"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "45.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce d'autres véhicules automobiles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "45.19Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fa622065-e751-4ef7-b5ff-57e82752e0d3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "66.21"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "66"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "66.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Évaluation des risques et dommages"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#8cde606e-257f-41b0-bc1d-76ef5d695de3",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "66.21Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fabd34c6-7608-468a-8237-25babf5c49bb",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.12"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Autres intermédiaires du commerce en combustibles, métaux, minéraux et produits chimiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.12B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fc456e34-de70-490a-8e9e-7123fa74c4e3",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "2.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "2"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "2.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Sylviculture et autres activités forestières"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#6f64513f-457c-4580-b360-d4cb902ec16b",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "02.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fc8026c6-8f72-4dbf-9b0e-efe856099ec0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "7.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "7"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "7.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de minerais de fer"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "07.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fd013243-04e8-4471-9219-fa2320af440c",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.36"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.3"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de sucre, chocolat et confiserie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.36Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fd54ba1a-5445-45f9-bc9c-bdddcb91dbf0",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "72.11"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "72"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "72.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Recherche-développement en biotechnologie"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "72.11Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fd7cae70-59d9-48c9-adf3-bf08bf7d21c8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "18.14"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "18"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "18.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Reliure et activités connexes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "18.14Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fd8546df-1508-4b96-b888-3fc55d853ca7",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "98.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "98"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "98.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Activités indifférenciées des ménages en tant que producteurs de services pour usage propre"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#e06a2427-f486-4485-aebf-4fa184381ccb",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "98.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#febcfd1f-4702-4da2-a8e8-9c96fdf2e98e",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "47.78"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "47"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "47.7"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerces de détail de charbons et combustibles"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "47.78B"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#feda5e48-06c2-4315-8ed8-4aeb36f3b205",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "5.1"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "5"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "5.1"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Extraction de houille"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#121810f6-8991-478f-a43d-a6f3611b9bd0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "05.10Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#fef50f6d-910f-45ab-9dae-981a4177c1a8",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "72.2"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "72"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "72.2"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Recherche-développement en sciences humaines et sociales"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#1788dc65-9d39-4583-9e80-29641f2aacdc",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "72.20Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ff6bb6c2-2a8c-4952-be81-e2498cb65378",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "46.46"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "46"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "46.4"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Commerce de gros (commerce interentreprises) de produits pharmaceutiques"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#60181472-49a2-4d50-97ab-0969de01e4d0",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "46.46Z"
      }
    },
    {
      "@id": "http://dashboard.com/ontology/v0.1#ffcf8895-0b82-4f6d-82a2-83e2b87b8578",
      "@type": "http://dashboard.com/ontology/v0.1#nafTypeN1",
      "http://dashboard.com/ontology/v0.1#classe": {
        "@language": "fr",
        "@value": "11.07"
      },
      "http://dashboard.com/ontology/v0.1#division": {
        "@language": "fr",
        "@value": "11"
      },
      "http://dashboard.com/ontology/v0.1#groupe": {
        "@language": "fr",
        "@value": "11.0"
      },
      "http://dashboard.com/ontology/v0.1#intitule": {
        "@language": "fr",
        "@value": "Production de boissons rafraîchissantes"
      },
      "http://dashboard.com/ontology/v0.1#niveauNaf": {
        "@language": "fr",
        "@value": "Niveau 2"
      },
      "http://dashboard.com/ontology/v0.1#section": "http://dashboard.com/ontology/v0.1#15bca1a9-7371-415d-b065-25c1ff9534af",
      "http://dashboard.com/ontology/v0.1#sousClasse": {
        "@language": "fr",
        "@value": "11.07B"
      }
    }
  ]
}
    }) 
    
})();
