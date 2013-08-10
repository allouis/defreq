defreq
======

basic require define functionality

Features:

- Modules are defined with the keyword `define`
```js
// parameters dep1, dep2 are injected dependencies and are optional
// parameter multiple (bool) allow multiple instantiations
define('id' function(dep1, dep2, ...) {

    // The module code goes here

}, multiple);
```

- Modules are created with the keyword `require`
```js
// parameters dep1, dep2 are injected dependencies
var mod = require('id', dep1, dep2, ....);
var mod = require('id');
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

var a = require('a', $);

```
