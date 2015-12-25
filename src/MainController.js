'use strict';

/**
 * @module
 * @ngdoc controller
 * @desc Main controller.
 * @param {Object} $scope - ng
 * @param {Object} $sce - ng
 * @param {Object} showdown - showdown markdown converter
 * @param {Object} texts - texts constant
 * @param {Object} frenchify - frenchify
 */

module.exports = [
    '$scope',
    '$sce',
    'showdown',
    'texts',
    'frenchify',
    function($scope, $sce, showdown, texts, frenchify) {
        $scope.txt = texts;

        function convert(from, convertMarkdown, convertFrenchify) {
            var converted = from;
            if (convertFrenchify) {
                converted = frenchify(converted);
            }
            if (convertMarkdown) {
                converted = showdown.makeHtml(converted);
            }
            return converted;
        }

        $scope.convert = function() {
            $scope.convert.html = convert($scope.convert.from, $scope.convert.markdown, $scope.convert.frenchify);
            $scope.convert.html = $sce.trustAsHtml($scope.convert.html);
        };
    }
];
