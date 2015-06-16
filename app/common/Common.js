'use strict';

angular.module('StoryboardApp.Common', [])

    .constant('STORY_STATUSES', [
        { name: 'To do' },
        { name: 'In progress' },
        { name: 'Code review' },
        { name: 'QA review' },
        { name: 'Verified' }
    ])

    .value('STORY_TYPES', [
        { name: 'Feature' },
        { name: 'Enhancement' },
        { name: 'Bug' },
        { name: 'Spike' },
        { name: 'Task' }
    ]);