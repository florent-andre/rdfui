(function () {
  'use strict';

  angular.module('rdf.ui')
  
  .filter('property',function(){
        return function(input,propName){
            return input[propName];
        };
  })
    
  .filter('lang',function(){
        return function(input,lang){
            var result = [];
            if(!Array.isArray(input)) { input = [input];}
            input.forEach(function(d,i){
                if(d['@language'] == lang) {
                    result.push(d['@value']);
                }
            });
            return result;
        };
  })
  
  //TODO : see how to chain filter inside a filter to create a propLang filter
  
  
  /**
  * Filter that can filter results with a OR on differents properties
  * "person in people | filter: {name: $select.search, age: $select.search}"
  * performs a AND between 'name: $select.search' and 'age: $select.search'.
  */
  .filter('propsFilter', function() {
      return function(items, props) {
          
          function hasMatch(arr,text){
              var res = false;
              arr.some(function(d){
                 if(d.toString().toLowerCase().indexOf(text) !== -1){
                     res = true;
                     return true;
                 }
              });
              return res;
          }
          
          var out = [];
          if (angular.isArray(items)) {
              items.forEach(function(item) {
                  var itemMatches = false;
                  var keys = Object.keys(props);
                  for (var i = 0; i < keys.length; i++) {
                      var prop = keys[i];
                      var text = props[prop].toLowerCase();
                      if(item[prop]){
                          var values = item[prop];
                          if(!angular.isArray(values)) {values = [values];}
                          if(hasMatch(values,text)){
//                          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                              itemMatches = true;
                              break;
                          }
                      }
                  }
                  if (itemMatches) {
                      out.push(item);
                  }
              });
          } else {
              // Let the output be the input untouched
              out = items;
          }
          return out;
      };
  })
  
  
  ;
  
}());
    