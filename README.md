defreq
======

basic require define functionality

Features:

- Modules are defined with the keyword `define`
```js
// optional parameters 'dep1', 'dep2', 'depN' are injected dependencies
// optional parameter 'multiple' (bool) allows multiple instantiations
define(id, function(dep1, dep2, depN...) {
    // The module code goes here
}, multiple);
```
- Modules are created with the keyword `require`
```js
// optional parameters 'dep1', 'dep2', 'depN' are the dependencies
var mod = require(id, dep1, dep2, depN...);
var mod = require(id);
```
- It is not a loader, so files will need to be loaded
- Modules are not singletons

Sample Code

a.js
```js
define('a', function(jq){
    function name(){
        return jq.trim('I am a');
    }

    return {
        name: name
    }
});
```
main.js
```js
var a = require('a', $);
```
