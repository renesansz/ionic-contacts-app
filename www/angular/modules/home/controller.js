(function () {

    'use strict';

    angular.module('contacts-app.modules')
           .controller('HomeController', HomeController);

    function HomeController($scope, NG_PATH, IonicHelpers, CommonHelper, HomeControllerService) {
        
        // Private Variables
        // ------------------
        var GetIndex = CommonHelper.LookInArrayObjectByKey;

        // Controller Scope Variables
        // ---------------------------
        var vm = this;
            vm.shouldShowReorder = false;
            vm.currentContact = null;
            vm.searchQuery = '';
            vm.contacts = null;

        // Controller Functions
        // -------------------- 
        vm.ReorderContacts = IonicHelpers.ReorderItem;
        vm.CloseFormModal = CloseFormModal;
        vm.OpenFormModal = OpenFormModal;
        vm.EditContact = EditContact;
        vm.SaveContact = SaveContact;

        /**
         * Initialize Controller.
         */
        function _Initialize() {
            
            vm.contacts = HomeControllerService.RetrieveContacts();

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

            vm.currentContact = null; // Clear Value
            vm.formModal.hide();

        }

        /**
         * Opens the edit modal
         */
        function OpenFormModal() {
            
            vm.formModal.show();

        }

        /**
         * Edit contact by its id.
         * 
         * @param {Number} id - The contact ID
         */
        function EditContact(id) {

            vm.currentContact = vm.contacts[GetIndex(vm.contacts, id, 'id')];

            OpenFormModal();

        }

        /**
         * Save Contact.
         */
        function SaveContact() {

            vm.contacts[GetIndex(vm.contacts, vm.currentContact.id, 'id')] = vm.currentContact;

            CloseFormModal();

        }

        _Initialize();

    }

})();