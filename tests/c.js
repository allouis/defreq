/**
 * User: ejimenez
 * Date: 8/6/13
 * Time: 5:08 PM
 */

define('c', function(bb, aa){

    function name(){
        return 'I am c';
    }

    function trim(data){
        return bb.trim(data)
    }

    return {
        name: name,
        trim: trim,
        a: aa
    }
});