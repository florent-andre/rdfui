Angular RDF-UI
======================

Angular RDF-UI is a set of angular directive to make the creation of full rdf compliant user interface, simple to code, simple to use, clean and configurable.

## Features

- Semantically expressives html nodes with directives
- Default templates and configurations to display your graphs
- Full JsonLD compliant
- View and Edit mode with just an html attibute
- Management of graph metadata, history, suggestion and models
- and more to come...

## Supported browsers

@TODO.

## Demo

As of today, you need to compile the code and start one more command line to view it in action.

@TODO : a demo page base on github hosting.

Watch the Tree component in action on the [demo page](http://jimliu.github.io/angular-ui-tree/).

## Requirements

- Angularjs

## Compilation 

```bash
git clone git@github.com:florent-andre/rdfui.git
cd rdfui
npm install
bower update
grunt build
```

## demo

```
grunt serve
```

## Usage

### Download
- Using [bower](http://bower.io/) to install it. @TODO : a publication on bower for direct usage
- [Download](https://github.com/florent-andre/rdfui/archive/master.zip) from github.

### Load CSS 
@TODO : update
Load the css file: `angular-ui-tree.min.css` in your application:
```html
<link rel="stylesheet" href="bower_components/angular-ui-tree/dist/angular-ui-tree.min.css">

<link rel="stylesheet" href="bower_components/angular-ui-select/dist/select.css" />
```


### Load Script
@TODO : update
Load the script file: `angular-ui-tree.js` or `angular-ui-tree.min.js` in your application:

```html
<script src="bower_components/angular-rdf-ui/dist/angular-rdf-ui.js"></script>
<script src="bower_components/angular-ui-select/dist/select.js"></script>
```

### Code
@TODO : update
Add the sortable module as a dependency to your application module:

```js
var myAppModule = angular.module('MyApp', ['rdf.ui','ui.select'])
```

Injecting `ui.tree`, `ui-tree-nodes`, `ui-tree-node`, `ui-tree-handle` to your html.

#### HTML View or Templates
@TODO : update
```html
<div ui-tree>
  <ol ui-tree-nodes="" ng-model="list">
    <li ng-repeat="item in list" ui-tree-node>
      <div ui-tree-handle>
        {{item.title}}
      </div>
      <ol ui-tree-nodes="" ng-model="item.items">
        <li ng-repeat="subItem in item.items" ui-tree-node>
          <div ui-tree-handle>
            {{subItem.title}}
          </div>
        </li>
      </ol>
    </li>
  </ol>
</div>
```


## Structure of angular-rdf-ui

This structure is mainly based on : http://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-rdf-graph
Notable differences are on the use of "subjects", "predicates" and "objects" levels.

@TODO : transform this in header with links. This links leads to page that define the api

    rdfui-graph                             --> Root of tree
      rdfui-mainlang                     --> Container of nodes
      rdfui-langdisplay                     --> Container of nodes
      rdfui-metadata                     --> Container of nodes
      rdfui-history                     --> Container of nodes
      rdfui-suggestions                     --> Container of nodes
      rdfui-model                     --> Container of nodes
      rdfui-subjects                     --> Container of nodes
        rdfui-filter                     --> Container of nodes
        rdfui-subject                     --> Container of nodes
            rdfui-filter                     --> Container of nodes
            rdfui-predicates                     --> Container of nodes
                rdfui-filter                     --> Container of nodes
                rdfui-predicate                     --> Container of nodes
                    rdfui-objects                     --> Container of nodes
                        rdfui-filter                     --> Container of nodes
                        rdfui-object                     --> Container of nodes
                            rdfui-literal                     --> Container of nodes
                                rdfui-lang                     --> Container of nodes
                                rdfui-datatype                     --> Container of nodes
                            rdfui-Iri                     --> Container of nodes
                                rdfui-dereference                     --> Container of nodes
                            rdfui-blanknode                     --> Not implemented for now, managed as well-know IRI (cf http://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#section-skolemization)
          
# Notes

## Diffence between subjects, properties, objects and subject, property, object

* DOM nodes ending with an "s" are the one were you can : 
  * define templates
  * add or remove child nodes (thus without s)
  * create filters for the childrens to display

* DOM node without s are mostly for displaying the data and modifiing it. 

# Usage

## subjects nodes

* transclusion and scope avaliability
 * the subjects' scope is avalaible in transcluded content via expose.subjects property
 * transcluded content is positionned below the template.
 
* attribute :
 * `template-name` : call an sujects' template in the form of rdfuiSubjects.{{template-name}}.tpl.html. If this attribute is not defined a default empty template is used.
    
    
# filter documentation 

basic structure for a filter is : 
$scope.treeFilter = {
              type : 'accept',
              on : {property : '@type', values : ['Concept']}
          }
          
* "type" values can be "accept" or "reject"
* "on" value is a Json Object with 2 properties : 
 * "property" : defining the json-ld property where the filter is done
 * "values" : is an array containing the accepted or refused values.
* "fn" : it's an optional property. this property contains the function to do the filtering. If present this is this function that is used. If not present this function is calculated from the previous properties. This function have to implement // TODO :: document this // 
 
 
# get the parent controller

* rdfui-* webcomponents are all isolated scope.
* A binding to the parent controller is available throw the $parentScope object
              
## Migrate From v1.x to v2.0
[Migrate From v1.x to v2.0](https://github.com/JimLiu/angular-ui-tree/wiki/Migrate-From-v1.x-to-v2.0)

## API

### ui-tree
`ui-tree` is the root scope for a tree

#### Attributes
##### data-drag-enabled
Turn on dragging and dropping of nodes.
- `true` (default): allow drag and drop
- `false`: turn off drag and drop

##### data-max-depth
Number of levels a nodes can be nested (default 0). 0 means no limit.
**Note**
If you write your own [$callbacks.accept](#accept) method, you have to check `data-max-depth` by yourself.

##### data-drag-delay
Number of milliseconds a click must be held to start a drag. (default 0)

##### data-empty-place-holder-enabled
If a tree is empty, there will be an empty place hoder which is used to drop node from other trees by default.
- `true` (default): display an empty place holder if the tree is empty
- `false`: do not display an empty place hoder

##### Example 
- turn on/off drag and drop.
- Limit depth to 5
- 500 milliseconds delay
```html
<div ui-tree data-drag-enabled="tree.enabled" data-max-depth="5" data-drag-delay="500">

</div>
```

#### Methods of scope
##### collapseAll()
Collapse all it's child nodes.

##### expandAll()
Expand all it's child nodes.

##### $callbacks (type: Object)
`$callbacks` is a very important property for `angular-ui-tree`. When some special events trigger, the functions in `$callbacks` are called. The callbacks can be passed through the directive.
Example:
```js
myAppModule.controller('MyController', function($scope) {
  $scope.treeOptions = {
    accept: function(sourceNodeScope, destNodesScope, destIndex) {
      return true;
    },
  };
});
```
```html
<div ui-tree="treeOptions">
  <ol ui-tree-nodes ng-model="nodes">
    <li ng-repeat="node in nodes" ui-tree-node>{{node.title}}</li>
  </ol>
</div>
```

#### Methods in $callbacks
##### <a name="accept"></a>accept(sourceNodeScope, destNodesScope, destIndex)
Check if the current dragging node can be dropped in the `ui-tree-nodes`.

**Parameters:**
- `sourceNodeScope`: The scope of source node which is dragging.
- `destNodesScope`: The scope of `ui-tree-nodes` which you want to drop in.
- `destIndex`: The position you want to drop in.

**Return**
If the nodes accept the current dragging node.
- `true` Allow it to drop.
- `false` Not allow.

##### <a name="beforeDrag"></a>beforeDrag(sourceNodeScope)
Check if the current selected node can be dragged.

**Parameters:**
- `sourceNodeScope`: The scope of source node which is selected.

**Return**
If current node is draggable.
- `true` Allow it to drag.
- `false` Not allow.

##### <a name="dropped"></a>dropped(event)
If a node moves it's position after dropped, the `nodeDropped` callback will be called.

**Parameters:**
- <a name="eventParam"></a>`event`: Event arguments, it's an object.
  * `source`: Source object
    + `nodeScope`: The scope of source node which was dragged.
    + `nodesScope`: The scope of the parent nodes of source node  when it began to drag.
    + `index`: The position when it began to drag.
  * `dest`: Destination object
    + `nodesScope`: The scope of `ui-tree-nodes` which you just dropped in.
    + `index`: The position you dropped in.
  * `elements`: The dragging relative elements.
    + `placeholder`: The placeholder element.
    + `dragging`: The dragging element.
  * `pos`: Position object.

##### <a name="dragStart"></a>dragStart(event)
The `dragStart` function is called when the user starts to drag the node.
**Parameters:**
Same as [Parameters](#eventParam) of dropped.

##### dragMove(event)
The `dragMove` function is called when the user moves the node.

**Parameters:**
Same as [Parameters](#eventParam) of dropped.

##### dragStop(event)
The `dragStop` function is called when the user stop dragging the node.

**Parameters:**
Same as [Parameters](#eventParam) of dropped.

##### beforeDrop(event)
The `beforeDrop` function is called before the dragging node is dropped.

**Parameters:**
Same as [Parameters](#eventParam) of dropped.

### ui-tree-nodes
`ui-tree-nodes` is the container of nodes. Every `ui-tree-node` should have a `ui-tree-nodes` as it's container, a `ui-tree-nodes` can have multiple child nodes.

#### Attributes
##### data-nodrop<a name="nodes_attrs_nodrop"></a>
Turn off drop of nodes.
##### data-max-depth<a name="nodes_attrs_maxDepth"></a>
Number of levels a nodes can be nested (default 0). 0 means no limit. It can override the `data-max-depth` in `ui-tree`.
**Note**
If you write your own [$callbacks.accept](#accept) method, you have to check `data-nodrop` and `data-max-depth` by yourself.

Example: turn off drop.
```html
<ol ui-tree-nodes ng-model="nodes" data-nodrop>
  <li ng-repeat="node in nodes" ui-tree-node>{{node.title}}</li>
</ol>
```

#### Properties of scope
##### $element (type: AngularElement)
The html element which bind with the `ui-tree-nodes` scope.

##### $modelValue (type: Object)
The data which bind with the scope.

##### $nodes (type: Array)
All it's child nodes. The type of child node is scope of `ui-tree-node`.

##### $nodeScope (type: Scope of ui-tree-node)
The scope of node which current `ui-tree-nodes` belongs to.
For example:

    ui-tree-nodes                       --> nodes 1
      ui-tree-node                      --> node 1.1
        ui-tree-nodes                   --> nodes 1.1
          ui-tree-node                  --> node 1.1.1
          ui-tree-node                  --> node 1.1.2
      ui-tree-node                      --> node 1.2

The property `$nodeScope of` `nodes 1.1` is `node 1.1`. The property `$nodes` of `nodes 1.1` is [`node 1.1.1`, `node 1.1.2`]

##### maxDepth
Number of levels a node can be nested. It bases on the attribute [data-max-depth](#nodes_attrs_maxDepth).

##### nodrop
Turn off drop on nodes. It bases on the attribute [data-nodrag](#nodes_attrs_nodrop).

#### Methods of scope
##### depth()
Get the depth.

##### outOfDepth(sourceNode)
Check if depth limit has reached

##### isParent(nodeScope)
Check if the nodes is the parent of the target node.
**Parameters:**
- `nodeScope`: The target node which is used to check with the current nodes.


### ui-tree-node
A node of a tree. Every `ui-tree-node` should have a `ui-tree-nodes` as it's container.

#### Attributes
##### data-nodrag
Turn off drag of node.
Example: turn off drag.
```html
<ol ui-tree-nodes ng-model="nodes">
  <li ng-repeat="node in nodes" ui-tree-node data-nodrag>{{node.title}}</li>
</ol>
```

##### data-collapsed
Collapse the node.

#### Properties of scope
##### $element (type: AngularElement)
The html element which bind with the `ui-tree-nodes` scope.

##### $modelValue (type: Object)
The data which bind with the scope.

##### collapsed (type: Bool)
If the node is collapsed

- `true`: Current node is collapsed;
- `false`: Current node is expanded.

##### $parentNodeScope (type: Scope of ui-tree-node)
The scope of parent node.

##### $childNodesScope (type: Scope of ui-tree-nodes)
The scope of it's `ui-tree-nodes`.

##### $parentNodesScope (type: Scope of ui-tree-nodes)
The scope of it's parent `ui-tree-nodes`.

For example:

    ui-tree-nodes                       --> nodes 1
      ui-tree-node                      --> node 1.1
        ui-tree-nodes                   --> nodes 1.1
          ui-tree-node                  --> node 1.1.1
          ui-tree-node                  --> node 1.1.2
      ui-tree-node                      --> node 1.2

- `node 1.1.1`.`$parentNodeScope` is `node 1.1`.
- `node 1.1`.`$childNodesScope` is `nodes 1.1`.
- `node 1.1`.`$parentNodesScope` is `nodes 1`.

#### Methods of scope
##### collapse()
Collapse current node.

##### expand()
Expand current node.

##### toggle()
Toggle current node.

##### remove()
Remove current node.

##### depth()
Get the depth of the node.

##### maxSubDepth()
Get the max depth of all the child nodes. If there is no child nodes, return 0.

##### isSibling(targetNodeScope)
Check if the current node is sibling with the target node.
**Parameters:**
- `targetNodeScope`: The target node which is used to check with the current node.

##### isChild(targetNodeScope)
Check if the current node is a child of the target node.
**Parameters:**
- `targetNodeScope`: The target node which is used to check with the current node.


### ui-tree-handle
Use the `ui-tree-handle` to specify an element used to drag the object. If you don't add a `ui-tree-handle` for a node, the entire node can be dragged.

## NgModules Link

[Give us a like on ngmodules](http://ngmodules.org/modules/angular-ui-tree)

## Development environment setup

@TODO : document other dependencies


@TODO : review this install process

* installation of grunt-protactor-runner module
./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update


* In order to test that the protactor installation is okay, run : 
grunt e2e-test

==> under this are others options to make the installation working. To review, but may be not needed.

* local install
- Install protractor
npm install protractor --save-dev
- Download the selenium standalone server
./node_modules/protractor/bin/webdriver-manager update

* global install (seems don't work when launching via grunt)
sudo npm install protractor -g
sudo webdriver-manager update

#### Prerequisites

* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

#### Dependencies

* [Grunt](http://gruntjs.com/) (task automation)
* [Bower](http://bower.io/) (package management)

#### Installation
Run the commands below in the project root directory.

#####1. Install Grunt and Bower

    $ sudo npm install -g grunt-cli bower

#####2. Install project dependencies

    $ npm install
    $ bower install

## Useful commands

####Running a Local Development Web Server
To debug code and run end-to-end tests, it is often useful to have a local HTTP server. For this purpose, we have made available a local web server based on Node.js.

To start the web server, run:

    $ grunt webserver

To access the local server, enter the following URL into your web browser:

    http://localhost:8080/demo/

By default, it serves the contents of the demo project.


####Building angular-ui-tree
To build angular-ui-tree, you use the following command.

    $ grunt build

This will generate non-minified and minified JavaScript files in the `dist` directory.

####Run tests
You can run the tests once or continuous.

    $ grunt test
    $ grunt test:continuous
