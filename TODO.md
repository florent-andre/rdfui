


## modèles de données pour la gestion des modifications dans les ressources

* Le modèle de donnée qui devrait être créé lors de la récupération de valeur pour permettre la modification des valeurs.

* Les objets (au sens rdf) contenus dans une propriété peuvent être de type "literal" ou "reference" (ie liens vers une autre ressource) 
Les instances de ces objets doivent donc disposer d'une propriété "objectType" qui indique si il s'agit d'un literal ou de lien vers des resources (la propriété est alors de type référence).
De ce type découle une structure de l'objet différente : 
var obj1 = {
	objectType : rdfObjectType.literal,
	sourceValue : ['aaa',...],
	typeValue : (values types of RDF),
	currentValue : ['bbb',...]
}

var obj2 = {
	objectType : rdfObjectType.reference
	sourceValues : [ref1,ref2,ref3,...],
	currentValues : [ref1,ref2],
	sourceObjects : [obj1, obj2,obj3,...],
	currentObjects : [obj1,obj2]
}

* Lorsque l'objet est de type "reference" on fait une différence entre la "Value" - qui est l'uri de l'objet référencé - et l'"object" qui correspond aux valeurs, à l'objet associé à cette uri lorsqu'elle est déréférencée. 


* Les propriétés de sourceValue et currentValue permettent de gérer les "diff" entre les valeurs actuellement dans la base et les valeurs courantes. 
* Au niveau de litterals, c'est actuellement géré par les $view et $... d'angular.
* Une reflexion doit être menée par rapport à la version "compilée" de la liste d'objets telle que présentée ici (les sources values sous forme de tableau) et la version unitaire de chaque objet (telle qu'elle est affichée et modifiée sur l'interface). 
* Peut être que la version "compilée" doit être gérée au niveau des "objects" (notez le s). 
* Il faut alors être attentif à la gestion des ajouts / suppression au niveau de la liste des objetcs. Cette gestion doit être faite au niveau de objects et une prise en compte du "bubbling" depuis les objets unitaires doit aussi peut être être mise en place.


### A mettre dans la documentation : pour la gestion de la modifications sur les literals

* cette gestion des modifications se fait au niveau de la gestion angular entre le "view" et le "current_value". Le système de gestion des modifications se base sur le suivit de ces valeurs et leur tracking pour faire la création du fichier de diff.


## gestion des langues : 
* gestion des langues affichée :
 * idée : pouvoir gérer l'affichage dynamique en fonction des langues sélectionnées comme "display language"
* pour ca il faut faire l'implémentation du "filtre" des langues dans le "objects"
 * page source : /rdfui/demo/europeana.html
  * il faut bouger la propriété "langs" des rdui-property vers les rdfui-objects
 * pour s'inspirer du fonctionnement : /rdfui/source/properties/rdfuiPropertiesCtrl.js
 * et le faire dans : /rdfui/source/objects/rdfuiObjectsCtrl.js
 * a voir si ce paramètre de langs est un "filtre" classique (à priori oui, mais plus complexe à implémenter) ou un filtre particulier
 * il faudrait "néttoyer" le passage de paramètre en héritage car le "objects" qui est utilisé pour faire la boucle semble venir de "property" et non de "objects".
  * ==> l'ajout de nouveau "object" doit se fait au niveau de objects et non au niveau de "property"

* dans la même idée, sur europeana.html, la partie du code 
```
<div>
				                        		<h2>{{propertyCtrl.propertyLabel}} :
				                        			<div ng-if="hasType.resource" class="btn-group">
												        <label class="btn btn-primary" ng-model="$displayType.value" btn-radio="'simpleUri'">URI</label>
												        <label class="btn btn-primary" ng-model="$displayType.value" btn-radio="'light'">Label</label>
												        <label class="btn btn-primary" ng-model="$displayType.value" btn-radio="'full'">Full</label>
												    </div>
				                        		</h2>
```
doit être "sortie" de rdfui-objects pour être remontée au niveau des propriété. 
 * le truc c'est que le "guessobjectType" se base en partie sur la présence d'objets existant pour savoir quel est le type d'objet lorsqu'il ne sont pas correctement définis... c'est pas très clean, et après tout ce n'est pas trop grave si l'on doit récupérer dans ce cas la liste des objets en liens avec cette propriété : peut être prévoir une fonction en 2 temps pour le guess qui indique si il lui faut les objets ou pas car il manque la définition.

## autre

* l'affichage des propriétés non skos et le déférencing de ces propriétés.

* gestion de collapse all / expand all

* la gestion de load partiels de graphes (dans la partie tree)

* implémenter le déréférence hub dans stanbol pour faire l'appel à toutes les ressources externes

* la gestion de l'ordre alphabétique par défaut des résultats

* restaure jshint configuration about space and tabs

