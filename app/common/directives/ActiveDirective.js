'use strict';

angular.module('StoryboardApp.Common')

    .directive('active', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.mouseenter(function() {
                    element.finish().fadeTo('slow', 0.7);
                }).mouseleave(function() {
                    element.finish().css('slow', 1);
                });
            }
        }
    });