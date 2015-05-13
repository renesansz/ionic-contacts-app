/**
 * Common Helpers
 */
(function () {

    'use strict';

    angular.module('contacts-app.factories')
           .factory('CommonHelper', CommonHelper);

    function CommonHelper() {

        var factory = {};
            factory.LookInArrayObjectByKey = LookInArrayObjectByKey;

        // Function Definitions
        // ---------------------

        /**
         * Look for a value inside an array object by its property/key and return the array index.
         * 
         * @param {Array} arrayObj   - The Haystack
         * @param {Any} valueToFind  - The Needle
         * @param {String} key       - Key/Property
         *
         * @return {Number}
         */
        function LookInArrayObjectByKey(arrayObj, valueToFind, key) {

            var result = null;

            arrayObj.forEach(function (val, idx) {
                if (val[key] === valueToFind) {
                    result = idx;

                    return; // Cancel the forEach
                }
            });

            return result;

        }

        return factory;

    }           

})();