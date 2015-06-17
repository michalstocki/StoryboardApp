'use strict';

angular.module('StoryboardApp.Storyboard')

    .controller('StoryboardCtrl', ['$rootScope', 'StoryService', 'STORY_STATUSES', 'STORY_TYPES',
        function($rootScope, StoryService, STORY_STATUSES, STORY_TYPES) {
        var ctrl = this;

        function generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

        StoryService.get();
        $rootScope.$on('story-delete-click', function (event, story) {
            ctrl.deleteStory(story.id);
        });

        ctrl.detailsVisible = true;

        ctrl.stories = StoryService.model;

        ctrl.statuses = STORY_STATUSES;
        ctrl.types = STORY_TYPES;

        ctrl.selectedStory = null;
        ctrl.editedStory = null;

        ctrl.selectStory = function(story) {
            ctrl.selectedStory = story;
            ctrl.editedStory = angular.copy(ctrl.selectedStory);
        };

        ctrl.createStory = function() {
            var newStory = angular.copy(ctrl.editedStory);
            newStory.id = generateId();
            ctrl.stories.push(newStory);
            ctrl.resetForm();
        };

        ctrl.cancelEdit = function () {
            ctrl.resetForm();
        };

        ctrl.updateStory = function () {
            var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee'];
            fields.forEach(function (field) {
                ctrl.selectedStory[field] = ctrl.editedStory[field];
            });
            ctrl.resetForm();
        };

        ctrl.deleteStory = function(storyId) {
            for (var idx = 0; idx < ctrl.stories.length; idx++) {
                if (ctrl.stories[idx].id === storyId) {
                    ctrl.stories.splice(idx, 1);
                    break;
                }
            }
            ctrl.resetForm();
        };

        ctrl.resetForm = function () {
            ctrl.selectedStory = null;
            ctrl.editedStory = null;
            ctrl.detailsForm.$setUntouched();
            ctrl.detailsForm.$setPristine();
        };

        ctrl.finalizeDrop = function(story) {
            console.log(story);
            // update na modelu
        };

        ctrl.insertStory = function(targetStory, sourceStory, insertBefore) {
            var sourceIdx, targetIdx;

            if (targetStory === sourceStory) {
                return;
            }

            sourceIdx = ctrl.stories.indexOf(sourceStory);
            targetIdx = ctrl.stories.indexOf(targetStory);

            if (!insertBefore) {
                targetIdx++;
            }

            if (sourceIdx >=0 && targetIdx >= 0) {
                ctrl.stories.splice(sourceIdx, 1);
                if (targetIdx >= sourceIdx) {
                    targetIdx--;
                }
                ctrl.stories.splice(targetIdx, 0, sourceStory);
                sourceStory.status = targetStory.status;
            }
        };

        ctrl.changeStoryStatus = function(story, status) {
                story.status = status.name;
        };

    }]);