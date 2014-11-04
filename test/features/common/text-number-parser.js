'use strict';

describe('text number parser', function() {

    var parser, sample_data;


    beforeEach(module('kata'));

    beforeEach(inject(['TextNumberParser', function(_Parser_) {
        parser = _Parser_;
    }]));

    beforeEach(function() {
        var charArray = [];                                   
        charArray[0] = '    _  _     _  _  _  _  _ ';         
        charArray[1] = '  | _| _||_||_ |_   ||_||_|';         
        charArray[2] = '  ||_  _|  | _||_|  ||_| _|';         
        charArray[3] = '                           ';
        sample_data = charArray;
    });

    it('position 1 should return start 0 and end 3', function() {
        expect(parser.getPos(1)).toEqual({
            start: 0,
            end: 3
        });
    });

    it('position 2 should return start 3 and end 6', function() {
        expect(parser.getPos(2)).toEqual({
            start: 3,
            end: 6
        });
    });

    it('position 9 should return start 3 and end 6', function() {
        expect(parser.getPos(9)).toEqual({
            start: 24,
            end: 27
        });
    });

    it('position 1 should be the correct key sequence for the number one',
    function() {
        expect(parser.getKey(sample_data, 1))
            .toEqual('     |  |   ');
    });

    it('position 2 should be the correct key sequence for the number two',
    function() {
        expect(parser.getKey(sample_data, 2))
            .toEqual(' _  _||_    ');
    });

    it('position 9 should be the correct key sequence for the number nine',
    function() {
        expect(parser.getKey(sample_data, 9))
            .toEqual(' _ |_| _|   ');
    });

    it('generate keys',
    function() {
        expect(true).toEqual(true);
        console.log('1 = ~' + parser.getKey(sample_data, 1) + '~');
        console.log('2 = ~' + parser.getKey(sample_data, 2) + '~');
        console.log('3 = ~' + parser.getKey(sample_data, 3) + '~');
        console.log('4 = ~' + parser.getKey(sample_data, 4) + '~');
        console.log('5 = ~' + parser.getKey(sample_data, 5) + '~');
        console.log('6 = ~' + parser.getKey(sample_data, 6) + '~');
        console.log('7 = ~' + parser.getKey(sample_data, 7) + '~');
        console.log('8 = ~' + parser.getKey(sample_data, 8) + '~');
        console.log('9 = ~' + parser.getKey(sample_data, 9) + '~');
    });

    it('position 1 should equal character number 1', function() {
        expect(parser.getChar(sample_data, 1)).toEqual('1');
    });

    it('position 2 should equal character number 2', function() {
        expect(parser.getChar(sample_data, 2)).toEqual('2');
    });

    it('position 3 should equal character number 3', function() {
        expect(parser.getChar(sample_data, 3)).toEqual('3');
    });

    it('position 4 should equal character number 4', function() {
        expect(parser.getChar(sample_data, 4)).toEqual('4');
    });
    
    it('position 5 should equal character number 5', function() {
        expect(parser.getChar(sample_data, 5)).toEqual('5');
    });

    it('position 6 should equal character number 6', function() {
        expect(parser.getChar(sample_data, 6)).toEqual('6');
    });

    it('position 7 should equal character number 7', function() {
        expect(parser.getChar(sample_data, 7)).toEqual('7');
    });

    it('position 8 should equal character number 8', function() {
        expect(parser.getChar(sample_data, 8)).toEqual('8');
    });

    it('position 9 should equal character number 9', function() {
        expect(parser.getChar(sample_data, 9)).toEqual('9');
    });

    it('position 9 should equal character number 9', function() {
        expect(parser.getChar(sample_data, 9)).not.toEqual('8');
    });
    

});
