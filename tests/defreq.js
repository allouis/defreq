/**
 * User: ejimenez
 * Date: 8/9/13
 * Time: 11:22 PM
 */

describe('test defreq', function() {
    var a, b, c, d, e;

    before(function () {
        a = require('a');		    // simple
        b = require('b', $);		// depends on a third party lib jquery
        c = require('c', b, a);	    // depends on b, a
        d = require('d');			// internally depends on b
        e = require('e');           // allows multiples instances
    });

    describe('When use define with no dependencies', function() {
        it('Should get a valid instance', function() {
            expect(a.name()).to.be('I am a');
            expect(a.obj.hi()).to.be('Hi from a');
            expect(a.obj.message).to.be('hello a');
            expect(a.message).to.not.be.ok();
        });
    });

    describe('When use define with not allowing multiples and requesting another instance', function() {
        it('Should throw an error', function() {
            expect(function () {
                require('a');
            }).to.throwException(/The module a has already been required/);
        });
    });

    describe('When use define with allowing multiples and requiring another instance', function() {
        it('Should create a new instance', function() {
            var x = require('m');
            expect(e).to.not.be(x);
        });
    });

    describe('When use define with a third party (jQuery) dependency', function() {
        it('Should get a valid instance', function() {
            expect(b.name()).to.be('I am b');
            expect(b.trim('  bbb  ')).to.be('bbb');
        });
    });

    describe('When use define with dependencies on other modules', function() {
        it('Should get a valid instance', function() {
            expect(c.name()).to.be('I am c');
            expect(c.trim('  bbb  ')).to.be('bbb');
            expect(c.a.name()).to.be('I am a');
        });
    });

    describe('When use define with dependencies inside the module', function() {
        it('Should get a valid instance', function() {
            expect(d.name()).to.be('I am d');
            expect(d.e.name()).to.be('I am e');
        });
    });
});

