'use strict';

angular.module('StoryboardApp.Storyboard')

    .directive('story', function () {
        return {
            restrict: 'A',
            templateUrl: 'storyboard/tpl/story.html',
            scope: {
                story: '='
            },
            controller: function() {

            }
        }
    });
