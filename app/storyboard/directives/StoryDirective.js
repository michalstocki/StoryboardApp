'use strict';

angular.module('StoryboardApp.Storyboard')

    .directive('story', function () {
        return {
            restrict: 'A',
            templateUrl: 'storyboard/tpl/story.html',
            scope: {
                storyModel: '=story'
            },
            controller: function($scope) {
                $scope.delete = function(model) {
                    $scope.$emit('story-delete-click', model);
                }
            }
        }
    });
