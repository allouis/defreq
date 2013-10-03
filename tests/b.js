/**
 * User: ejimenez
 * Date: 8/6/13
 * Time: 5:08 PM
 */

define('b', function(jq){

    function name(){
        return 'I am b';
    }

    function trim(data){
        return jq.trim(data);
    }

    return {
        name: name,
        trim: trim
    }
});
