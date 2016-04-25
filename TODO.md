
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

