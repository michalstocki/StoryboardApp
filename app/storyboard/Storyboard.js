'use strict';

angular.module('StoryboardApp.Storyboard', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/storyboard', {
            templateUrl: 'storyboard/tpl/storyboard.html'
        });
    }]);