/*
 *  Copyright (c) 2013 Fabien O'Carroll
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *   
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *   
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 */
;(function (win) {
    var ext, store = {}, mults = {}, args, out, name;
    if(win._ && typeof _.define == "undefined" && typeof _.require == "undefined"){ ext = _ }
    else { ext = win }
    function define(name, func, mult){
        store[name] = func
        if(mult) mults[name] = true
    }
    function require(){
        name = Array.prototype.splice.call(arguments, 0, 1)[0]
        out = store[name] && store[name].apply(null, arguments) 
        if(mults[name]) return out
        store[name] = function(){
            throw new Error("The module "+name+" has already been required")
        }
        return out
    }
    ext.define = define
    ext.require = require
}(this))
