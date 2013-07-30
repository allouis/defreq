;(function (win) {
    var ext, store = {}, mults = {}, args, out;
    if(win._ && typeof _.define == "undefined" && typeof _.require == "undefined"){ ext = _ }
    else { ext = win }
    function define(name, func, mult){
        store[name] = func
        if(mult) mults[name] = true
    }
    function require(name){
        args = Array.prototype.slice.call(arguments, 1)
        out = store[name] && store[name].apply(null, args) 
        if(mults[name]) return out
        store[name] = function(){
            throw new Error("The module "+name+" has already been required")
        }
        return out
    }
    ext.define = define
    ext.require = require
}(this))
