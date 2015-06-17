'use strict';
angular.module('StoryboardApp.Common')

    .animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className === 'show-details') {
                    console.log('animation addClass');
                }
                done();
            },

            removeClass: function (element, className, done) {
                console.log(element, className, done);
                if (className === 'show-details') {
                    console.log('animation removeClass');
                }
                done();
            }
        };
    });