(function () {

    'use strict';

    angular.module('contacts-app.modules')
           .factory('HomeControllerService', HomeControllerService);

    function HomeControllerService() {

        var service = {};
            service.RetrieveContacts = RetrieveContacts;

        /**
         * Retrieve contacts list.
         *
         * @return {Array}
         */
        function RetrieveContacts() {

            var contacts = [
                {
                    id: 1,
                    first_name: 'Kaito',
                    last_name: 'Kid',
                    email:  'kaito@anonymous.com',
                    phone: '+63941125312',
                    profile_image: 'kaito.jpg'
                },
                {
                    id: 2,
                    first_name: 'Kotaro',
                    last_name: 'Fuma',
                    email:  'kotaro@email.com',
                    phone: '123-5135',
                    profile_image: 'kotaro.jpg'
                },
                {
                    id: 3,
                    first_name: 'John',
                    last_name: 'Doe',
                    email:  'john@email.com',
                    phone: '531-4124',
                    profile_image: 'john.jpg'
                },
                {
                    id: 4,
                    first_name: 'Kilua',
                    last_name: 'Cluso',
                    email:  'kilua@email.com',
                    phone: '513-5135',
                    profile_image: 'kilua.jpg'
                },
                {
                    id: 5,
                    first_name: 'Fiona',
                    last_name: 'Sheele',
                    email:  'fiona@email.com',
                    phone: '412-5135',
                    profile_image: 'fiona.jpg'
                },
                {
                    id: 6,
                    first_name: 'Hillary',
                    last_name: 'Clingon',
                    email:  'hillary@email.com',
                    phone: '531-5553',
                    profile_image: 'hillary.jpg'
                },
                {
                    id: 7,
                    first_name: 'Kitara',
                    last_name: 'Meena',
                    email:  'kitara@email.com',
                    phone: '411-5155',
                    profile_image: 'kitara.jpg'
                },
                {
                    id: 8,
                    first_name: 'Mina',
                    last_name: 'Fira',
                    email:  'mina@email.com',
                    phone: '551-9935',
                    profile_image: 'mina.jpg'
                },
                {
                    id: 9,
                    first_name: 'Rylai',
                    last_name: 'Crysta',
                    email:  'rylai@email.com',
                    phone: '458-6333',
                    profile_image: 'rylai.jpg'
                },
                {
                    id: 10,
                    first_name: 'Itaro',
                    last_name: 'Poito',
                    email:  'itaro@email.com',
                    phone: '577-2135',
                    profile_image: 'itaro.jpg'
                }
            ];

            return contacts;

        }

        return service;

    }

})();