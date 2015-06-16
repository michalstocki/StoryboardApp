'use strict';

angular.module('StoryboardApp', [
    'ngRoute',
    'StoryboardApp.Common',
    'StoryboardApp.Storyboard'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
