'use strict';

angular.module('StoryboardApp.Storyboard', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/storyboard', {
            templateUrl: 'storyboard/tpl/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard'
        });
        $httpProvider.interceptors.push('LoadingInterceptor');
    }])

    .factory('LoadingInterceptor', ['$rootScope', function($rootScope) {
        return {
            request: function(request) {
                $rootScope.loadingView = true;
                return request;
            },
            response: function(response) {
                $rootScope.loadingView = false;
                return response;
            }
        };
    }]);