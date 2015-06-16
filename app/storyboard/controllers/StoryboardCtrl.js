'use strict';

angular.module('StoryboardApp.Storyboard')

    .controller('StoryboardCtrl', ['StoryService', 'STORY_STATUSES', 'STORY_TYPES',
        function(StoryService, STORY_STATUSES, STORY_TYPES) {
        var ctrl = this;

        function generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

        StoryService.get();

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

    }]);