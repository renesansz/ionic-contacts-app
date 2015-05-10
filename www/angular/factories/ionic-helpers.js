/**
 * Ionic Helper Methods
 */
(function () {

    'use strict';

    angular.module('contacts-app.factories')
           .factory('IonicHelpers', IonicHelpers);

    function IonicHelpers($ionicModal) {

        var factory = {};
            factory.InitializeModal = InitializeModal;
            factory.ReorderItem = ReorderItem;

        // Function Definitions
        // ---------------------
        
        /**
         * Ionic List Reorder Functionality.
         *
         * @doc http://ionicframework.com/docs/api/directive/ionList/
         * 
         * @param {Object} item      - The current item to be moved
         * @param {Array} itemArray  - The item list
         * @param {Number} fromIndex - Current item index
         * @param {Number} toIndex   - Target
         *
         * @return {Array} - The new ordered array
         */
        function ReorderItem(item, itemArray, fromIndex, toIndex) {

            itemArray.splice(fromIndex, 1);
            itemArray.splice(toIndex, 0, item);

            return itemArray;

        }

        /**
         * Ionic Initialize Modal
         *
         * @doc http://ionicframework.com/docs/api/service/$ionicModal/
         * 
         * @param {Object} params - Modal Params refer to @doc
         */
        function InitializeModal(params) {

            $ionicModal.fromTemplateUrl(params.view, params.options).then(params.callback);

        }
        
        return factory;

    }

})();