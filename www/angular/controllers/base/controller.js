(function () {

    'use strict';

    angular.module('contacts-app.controllers')
           .controller('BaseController', BaseController);

    function BaseController() {

        var vm = this;
            vm.menus = [
                { title: 'Home', state: 'app.home' },
                { title: 'About', state: 'app.about' }
            ];

    }

})();