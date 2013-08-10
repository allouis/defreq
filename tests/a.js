/**
 * User: ejimenez
 * Date: 8/6/13
 * Time: 5:08 PM
 */

define('a', function() {
    var message = 'hello a';

    function name(){
        return 'I am a';
    }

    var obj = {
        hi: function(){
            return 'Hi from a';
        },
        message: message
    }

    return {
        name: name,
        obj: obj
    }
});
