'use strict';

angular.module('StoryboardApp', [
    'ngRoute',
    'ngAnimate',
    'StoryboardApp.Common',
    'StoryboardApp.Storyboard'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
