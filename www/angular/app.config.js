(function () {

    'use strict';

    angular.module('contacts-app').config(AppConfig);

    function AppConfig($stateProvider, $urlRouterProvider, NG_PATH) {

        /**
         * Application Route(s)
         *
         * Default format:
         * {
         *    name: '<route-name>',
         *    url: '<route-url>',
         *    controller: '<route-controller>',
         *    templateUrl: '<route-view-file>'
         * }
         */
        var routes = [

            // Base App Route
            {
                name: 'app',
                url: '/',
                controller: 'BaseController as base',
                templateUrl: NG_PATH.MODULES + 'base/view.html',
                abstract: true
            },

            // Home Route
            {
                name: 'app.home',
                url: 'home',
                views: {
                    AppContent: {
                        controller: 'HomeController as home',
                        templateUrl: NG_PATH.MODULES + 'home/view.html'
                    }
                }
            },

            // About Route
            {
                name: 'app.about',
                url: 'about',
                views: {
                    AppContent: {
                        controller: 'AboutController as about',
                        templateUrl: NG_PATH.MODULES + 'about/view.html'
                    }
                }
            }

        ];

        // Register routes to $stateProvider
        routes.forEach(function (ele) {
            $stateProvider.state(ele);
        });

        // Default Route
        $urlRouterProvider.otherwise('/home');

    }

})();