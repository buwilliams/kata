'use strict';

var app = angular.module('kata');

app.factory('TextNumberParser',
function () {

    // High-level Appraoch
    // -------------------------------------------
    // In thinking through the best algorithm to
    // identify a character I realized that each
    // character sequence from left to right and
    // top to bottom is unique. This could in turn
    // be used to create an unique key string. So,
    // all that was left was to write some functions
    // which could generate that unique key from
    // an array of lines for each possible
    // character. And finally those could be put
    // in an object for easy access. This approch
    // is fast and easy to understand.

    var out = {};

    var sample_data = [];
    sample_data[0] = '    _  _     _  _  _  _  _ ';
    sample_data[1] = '  | _| _||_||_ |_   ||_||_|';
    sample_data[3] = '  ||_  _|  | _||_|  ||_| _|';
    sample_data[4] = '                           ';

    // getPos() and getKey() are used by the test framework
    // to generate the lookup keys below by doing a simple
    // console log statement which are copied and pasted 
    // here. This allows us to do a very quick lookup for
    // the value. We could use invoke these methods each
    // time someone called this parser but since the result
    // doesn't change it's best to leave it in the data.
    var lookup = {
        '     |  |   ': '1',
        ' _  _||_    ': '2',
        ' _  _| _|   ': '3',
        '   |_|  |   ': '4',
        ' _ |_  _|   ': '5',
        ' _ |_ |_|   ': '6',
        ' _   |  |   ': '7',
        ' _ |_||_|   ': '8',
        ' _ |_| _|   ': '9',
    };

    function getPos(charPos) {

        var start = (charPos * 3) - 3;
        var end = start + 3;

        return {
            start: start,
            end: end
        };
    }

    function getKey(fourLineArray, charPos) {

        var out = '';
        var pos = getPos(charPos);

        for (var i=0; i<4; i++) {
            out += fourLineArray[i].substring(pos.start, pos.end);
        }

        return out;
    }

    function getChar(fourLineArray, charPos) {
        return lookup[getKey(fourLineArray, charPos)];
    }

    function parseLine(fourLineArray) {
    }

    function parseManyLines(stringContent) {
    }

    function getArray(stringContent) {
        return stringContent.split(/\n/);
    }

    (function() {
        out.getPos = getPos;
        out.getKey = getKey;
        out.getChar = getChar;
        out.parseLine = parseLine;
        out.parseManyLines = parseManyLines;
        out.getArray = getArray;
    })();

    return out;

});
