'use strict';

angular.module('StoryboardApp.Common')
    .service('EndpointService', function () {
        var service = this,
            baseUri = 'http://localhost:8000/app/';
        service.getUrl = function(modelName) {
            return baseUri + modelName + '.json';
        };
        service.getUrlForId = function(modelName, id) {
            return service.getUrl(modelName) + '/' + id;
        }
    });