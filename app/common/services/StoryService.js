'use strict';

angular.module('StoryboardApp.Common')
    .service('StoryService', ['$log', '$http', 'EndpointService', function ($log, $http, EndpointService) {
        var service = this,
            modelName = 'stories'

        function handleResponse(promise, methodName) {
            return promise.error(function (reason) {
                $log.debug(methodName, reason);
            });
        }

        service.model = [];

        service.create = function (story) {
            return handleResponse(EndpointService.getUrl(modelName), story, 'create');
        };

        service.get = function () {
            return handleResponse($http.get(EndpointService.getUrl(modelName)), 'get')
                .success(function(data) {
                    service.model.length = 0;
                    Array.prototype.push.apply(service.model, data.stories);
                });
        };

        service.update = function (story) {
            return handleResponse($http.put(EndpointService.getUrlForId(modelName, story.id), story), 'update');
        };

        service.delete = function (storyId) {
            return handleResponse($http.delete(EndpointService.getUrlForId(modelName, storyId), story), 'delete');
        };

    }]);
