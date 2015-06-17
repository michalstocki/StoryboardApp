'use strict';

angular.module('StoryboardApp.Common')

    .directive('active', function() {
        return {
            restrict : 'A',
            link: function(scope, element, attrs) {
                element.mouseenter(function() {
                    element.finish().fadeTo('normal', 0.9);
                }).mouseleave(function() {
                    element.finish().fadeTo('normal', 1);
                });
            }
        };
    });