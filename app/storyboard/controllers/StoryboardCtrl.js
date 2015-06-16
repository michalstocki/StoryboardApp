'use strict';

angular.module('StoryboardApp.Storyboard')

    .controller('StoryboardCtrl', function() {
        var ctrl = this;

        ctrl.stories = [
            {
                title: 'Pierwsza historyjka',
                description: 'Jakiś opis 1',
                status: 'To do',
                type: 'Spike'
            },
            {
                title: 'Druga historyjka',
                description: 'Jakiś opis 2',
                status: 'In Progress',
                type: 'Enhancement'
            }
        ];

        ctrl.statuses = [
            { name: 'To do' },
            { name: 'In progress' },
            { name: 'Code review' },
            { name: 'QA review' },
            { name: 'Verified' }
        ];

    });