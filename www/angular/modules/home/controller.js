(function () {

    'use strict';

    angular.module('contacts-app.modules')
           .controller('HomeController', HomeController);

    function HomeController($scope, NG_PATH, IonicHelpers, HomeControllerService) {
        
        // Controller Scope Variables
        // --------------------
        var vm = this;
            vm.shouldShowReorder = false;
            vm.ReorderContacts = IonicHelpers.ReorderItem;
            vm.CloseFormModal = CloseFormModal;
            vm.OpenFormModal = OpenFormModal;
            vm.searchQuery = '';
            vm.contacts = HomeControllerService.RetrieveContacts();

        // Controller Functions
        // --------------------
        /**
         * Initialize Controller.
         */
        function _Initialize() {

            // Instantiate Edit Modal
            IonicHelpers.InitializeModal({
                view: NG_PATH.MODULES + 'home/view.form.html',
                options: {
                    scope: $scope
                },
                callback: function (modal) {
                    vm.formModal = modal;
                }
            });

        }

        /**
         * Closes the edit modal
         */
        function CloseFormModal() {
            vm.formModal.hide();
        }

        /**
         * Opens the edit modal
         */
        function OpenFormModal() {
            vm.formModal.show();
        }

        _Initialize();

    }

})();