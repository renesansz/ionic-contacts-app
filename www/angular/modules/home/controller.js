(function () {

    'use strict';

    angular.module('contacts-app.modules')
           .controller('HomeController', HomeController);

    function HomeController($scope, $ionicModal, NG_PATH, IonicHelpers, HomeControllerService) {
        
        // Controller Scope Variables
        // --------------------
        var vm = this;
            vm.shouldShowReorder = false;
            vm.ReorderContacts = IonicHelpers.ReorderItem;
            vm.CloseEditModal = CloseEditModal;
            vm.OpenEditModal = OpenEditModal;
            vm.contacts = HomeControllerService.RetrieveContacts();

        // Controller Functions
        // --------------------
        /**
         * Initialize Controller.
         */
        function _Initialize() {

            // Instantiate Edit Modal
            $ionicModal.fromTemplateUrl(NG_PATH.MODULES + 'home/view.edit.html', {
                scope: $scope
            }).then(function (modal) {
                vm.editModal = modal;
            });

        }

        /**
         * Closes the edit modal
         */
        function CloseEditModal() {
            vm.editModal.hide();
        }

        /**
         * Opens the edit modal
         */
        function OpenEditModal() {
            vm.editModal.show();
        }

        _Initialize();

    }

})();