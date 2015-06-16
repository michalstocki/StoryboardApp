'use strict';

angular.module('StoryboardApp.Storyboard')

    .controller('StoryboardCtrl', function() {
        var ctrl = this;

        ctrl.stories = [
            {
                id: 1,
                title: 'Pierwsza historyjka',
                description: 'Jakiś opis 1',
                status: 'To do',
                type: 'Spike',
                reporter: 2,
                assignee: 1,
                criteria: 'Kryteria a b i c'

            },
            {
                id: 2,
                title: 'Druga historyjka',
                description: 'Jakiś opis 2',
                status: 'In Progress',
                type: 'Enhancement',
                reporter: 2,
                assignee: 1,
                criteria: 'Kryteria a b'
            }
        ];

        ctrl.statuses = [
            { name: 'To do' },
            { name: 'In progress' },
            { name: 'Code review' },
            { name: 'QA review' },
            { name: 'Verified' }
        ];

        ctrl.selectedStory = null;
        ctrl.editedStory = null;

        ctrl.selectStory = function(story) {
            ctrl.selectedStory = story;
            ctrl.editedStory = angular.copy(ctrl.selectedStory);
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
            ctrl.currentStory = null;
            ctrl.editedStory = null;
            ctrl.detailsForm.$setPristine();
            ctrl.detailsForm.$setUntouched();
        };

    });