'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc Main controller.
 * @param {Object} $scope - ng
 * @param {Object} showdown - showdown markdown converter
 * @param {Object} texts - texts constant
 * @param {Object} frenchify - frenchify
 */

module.exports = [
    '$scope',
    'showdown',
    'texts',
    'frenchify',
    function($scope, showdown, texts, frenchify) {
        $scope.txt = texts;

        var text = '#hello, markdown!';
        $scope.abc = showdown.makeHtml(text);

        $scope.def = frenchify('plop plo "bou" asdf');
    }
];
