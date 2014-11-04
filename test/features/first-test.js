'use strict';

describe('first-test', function() {

    // Setup the environement so that injection can work
    beforeEach(module('kata'));

    it('1 + 1 should equal 2', function() {
        expect(1 + 1).toEqual(2);
    });

});
