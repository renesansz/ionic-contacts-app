(function () {

    'use strict';

    angular.module('contacts-app.controllers')
           .controller('HomeController', HomeController);

    function HomeController(IonicHelpers) {

        var vm = this;
            vm.shouldShowReorder = false;
            vm.ReorderContacts = IonicHelpers.ReorderItem;
            vm.contacts = [
                {
                    first_name: 'Kaito',
                    last_name: 'Kid',
                    email:  'kaito@anonymous.com',
                    phone: '+63941125312',
                    profile_image: 'kaito.jpg'
                },
                {
                    first_name: 'Kotaro',
                    last_name: 'Fuma',
                    email:  'kotaro@email.com',
                    phone: '123-5135',
                    profile_image: 'kotaro.jpg'
                },
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    email:  'john@email.com',
                    phone: '531-4124',
                    profile_image: 'john.jpg'
                },
                {
                    first_name: 'Kilua',
                    last_name: 'Cluso',
                    email:  'kilua@email.com',
                    phone: '513-5135',
                    profile_image: 'kilua.jpg'
                },
                {
                    first_name: 'Fiona',
                    last_name: 'Sheele',
                    email:  'fiona@email.com',
                    phone: '412-5135',
                    profile_image: 'fiona.jpg'
                },
                {
                    first_name: 'Hillary',
                    last_name: 'Clingon',
                    email:  'hillary@email.com',
                    phone: '531-5553',
                    profile_image: 'hillary.jpg'
                },
                {
                    first_name: 'Kitara',
                    last_name: 'Meena',
                    email:  'kitara@email.com',
                    phone: '411-5155',
                    profile_image: 'kitara.jpg'
                },
                {
                    first_name: 'Mina',
                    last_name: 'Fira',
                    email:  'mina@email.com',
                    phone: '551-9935',
                    profile_image: 'mina.jpg'
                },
                {
                    first_name: 'Rylai',
                    last_name: 'Crysta',
                    email:  'rylai@email.com',
                    phone: '458-6333',
                    profile_image: 'rylai.jpg'
                },
                {
                    first_name: 'Itaro',
                    last_name: 'Poito',
                    email:  'itaro@email.com',
                    phone: '577-2135',
                    profile_image: 'itaro.jpg'
                }
            ];


        // Controller Functions
        // --------------------

    }

})();