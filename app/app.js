'use strict';

angular.module('StoryboardApp', [
    'ngRoute'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'storyboard'});
    }]);
