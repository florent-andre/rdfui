(function () {
  'use strict';
  
  angular.module('rdf.ui')

   /**
    * @ngdoc service
    * @name rdf.ui.service:array
    * 
    * @description
    * angular-ui-tree.
    */
    .factory('arrayService', [
      function () {
        
        var self = null;
        var arrayService = {};
        
        
        arrayService.toArray = function(v){
            return [].slice.call(v);
        };
        
        
        // ## Array.prototype.lazyIndexOf
        // Array.prototype.lazyIndexOf = function (f,searchElement /*, fromIndex */ )
        //lazy indexOf allow you to define your own comparator.
        // **Parameters**:
        // *{function}* **f** The array caller param
        // *{string}* **searchElement** the variable pass to indexOf
        // **Returns**:
        // *{bool}* : this comparator must compare two variables and return true/false
        // **Example**:
        // var lazyindex = Tab.lazyIndexOf(function(a,b){return a == b;}, "var search");
        
        arrayService.lazyIndexOf =  function (array, f,searchElement /*, fromIndex */ ) {
            if (array == null) {
                throw new TypeError();
            }
            var t = Object(array);
            /*jslint bitwise: true */
            var len = t.length >>> 0;
            /*jslint bitwise: false */
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[2]);
                if (n != n) { // shortcut for verifying if it's NaN  
                    n = 0;
                } else if (n !== 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                //if (k in t && t[k] === searchElement) {
                if (k in t && f.call(this,t[k],searchElement)) {
                    return k;
                }
            }
            return -1;
        };
        
        
        //TODO : migrate the other array utilities if usefull
        
        
      //-- arrays utilities
        
  //    
//      //TODO : create a lib for array management
//      //look at array imps here and see if include in the lib : https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_nest    
  //
//      //add the last() utility to array
  //    
//      // ## Array.last
//      // Get the last value of Array
//      // **Returns**:
//      // *{Array[]}* : Last value of Array
//      // **Example**:
//      //
//      //var last = Tab.last();
//      if(!Array.prototype.last) {
//          Array.prototype.last = function() {
//              return this[this.length - 1];
//          };
//      }
      
      
      //add to the first array parameter the contents of others arrays with no duplicates
      arrayService.merge = function(source /*, variable number of arrays */){
          for(var i = 1; i < arguments.length; i++){
              var array = arguments[i];
              for(var j = 0; j < array.length; j++){
                  if(source.indexOf(array[j]) === -1) {
                      source.push(array[j]);
                  }
              }
          }
          //return this;
      };
  //    
//      // ## Array.prototype.lazyMerge
//      // Array.prototype.lazyMerge = function(f /* variable number of arrays */)
//      // lazy merge, merge array with lazy comparator
//      // **Parameters**:
//      // *{function}* **f** The array caller param
//      // *{array}* **searchElement** the others array 
//      // **Returns**:
//      // *{array}* : return the first array
//      // **Example**:
//      //     tab.lazyMerge(function(a,b){return a == b;}, tab2, tab3);    
  //
  //
//      Array.prototype.lazyMerge = function(f /* variable number of arrays */){
//          for(var i = 1; i < arguments.length; i++){
//              var array = arguments[i];
//              for(var j = 0; j < array.length; j++){
//                  if(this.lazyIndexOf(f,array[j]) === -1) {
//                      this.push(array[j]);
//                  }
//              }
//          }
//          return this;
//      };
  //
      
      // do the substraction beetween 2 arrays with a configurable matcher
      arrayService.lazyMinus = function(sourceArray, minusArray, f){
          var result = [];
          
          for(var j = 0; j < sourceArray.length; j++){
              var po = arrayService.lazyIndexOf(minusArray, f,sourceArray[j]);
              if(po === -1) {
                  result.push(sourceArray[j]);
              }
          }
          return result;
      };
  //    
//      // ## Array.prototype.lazyUnion
//      // Array.prototype.lazyUnion = function(f /* variable number of arrays */)
//      // lazyunion : only keep elements in the original array that is in *all* params arrays
//      // **Parameters**:
//      // *{function}* **f** The array caller param
//      // *{array}* **searchElement** the others array 
//      // **Returns**:
//      // *{array}* : return the first array
//      // **Example**:
//      //     var lazyunion = Tab.lazyUnion(function(a,b){return a == b;}, Tab2, Tab3);
//          
//      Array.prototype.lazyUnion = function(f /* variable number of arrays */){
//          for(var i = 1; i < arguments.length; i++){
//              var array = arguments[i];
//              for(var j = 0; j < this.length; j++){
//                  if(array.lazyIndexOf(f,this[j]) === -1) {
//                      this.splice(j,1);
//                      j--;
//                  }
//              }
//          }
//          return this;
//      };
  //    
//      // ## Array.prototype.lazyUnionAndMerge
//      // Array.prototype.lazyUnionAndMerge = function(f /* variable number of arrays */)
//      // lazyunion + lazymerge
//      // **Parameters**:
//      // *{array}* **searchElement** the others array 
//      // **Example**:
//      //     Tab.lazyUnionAndMerge(function(a,b){return a == b;}, Tab2, Tab3);
  //
//      //TODO : test if multiple array is well passing throw
//      Array.prototype.lazyUnionAndMerge = function(f /* variable number of arrays */){
//          this.lazyUnion.apply(this, arguments);
//          this.lazyMerge.apply(this, arguments);
//      };
        
        self = arrayService;
        return arrayService;
    }
    ]);

})();