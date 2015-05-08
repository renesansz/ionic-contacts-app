(function () {

    'use strict';

    angular.module('contacts-app.factories')
           .factory('IonicHelpers', IonicHelpers);

    function IonicHelpers() {

        var factory = {};
            factory.ReorderItem = ReorderItem;

        // Function Definitions
        // ---------------------
        
        /**
         * Ionic List Reorder Functionality.
         * 
         * @param {Object} item      - The current item to be moved
         * @param {Array} itemArray  - The item list
         * @param {Number} fromIndex - Current item index
         * @param {Number} toIndex   - Target 
         */
        function ReorderItem(item, itemArray, fromIndex, toIndex) {

            itemArray.splice(fromIndex, 1);
            itemArray.splice(toIndex, 0, item);

        }
        
        return factory;

    }

})();