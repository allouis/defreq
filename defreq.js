;(function (win) {
    var ext, store = {}, mults = {}, type, out;
    if(_ && typeof _.define == "undefined" && typeof _.require == "undefined"){ ext = _ }
    else { ext = win }
    function define(name, func, mult){
        store[name] = func
        if(mult) mults[name] = true
    }
    function require(name){
        type = name
        [].splice.call(arguments, 0, 1)
        out = store[type](param) 
        if(mults[type]) return out
        store[type] = function(){
            throw new Error("The module "+type+" has already been required")
        }
        return out
    }
    ext.define = define
    ext.require = require
}(this))
