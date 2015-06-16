'use strict';

angular.module('StoryboardApp.Common')
    .service('StoryService', ['$log', '$http', 'EndpointService', function ($log, $http, EndpointService) {
        var service = this,
            modelName = 'stories';

        function handleResponse(promise, methodName) {
            return promise.error(function (reason) {
                    $log.debug(methodName, reason);
                });
        }

        service.create = function (story) {
            return handleResponse(EndpointService.getUrl(modelName), story, 'create');
        };

        service.getAll = function () {
            return handleResponse($http.get(EndpointService.getUrl(modelName)), 'getAll');
        };

        service.getById = function (storyId) {
            return handleResponse($http.get(EndpointService.getUrlForId(modelName, storyId)), 'getById');
        };

        service.update = function (story) {
            return handleResponse($http.put(EndpointService.getUrlForId(modelName, story.id), story), 'update');
        };

        service.delete = function (storyId) {
            return handleResponse($http.delete(EndpointService.getUrlForId(modelName, storyId), story), 'delete');
        };

    }]);
