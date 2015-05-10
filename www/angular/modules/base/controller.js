(function () {

    'use strict';

    angular.module('contacts-app.modules')
           .controller('BaseController', BaseController);

    function BaseController() {

        // Controller Scope Variables
        // --------------------
        var vm = this;
            vm.menus = [
                { title: 'Home', state: 'app.home' },
                { title: 'About', state: 'app.about' }
            ];

    }

})();