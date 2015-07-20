ngDashboard.config(
    ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('default', {
                url: '/',
                views: {
                    'header':{
                        templateUrl: 'views/header.html'
                    },
                    'default': {
                        controller: 'dashboardCtrl',
                        templateUrl: 'views/dashboard.html'
                    },
                    'footer':{
                        templateUrl: 'views/footer.html'
                    }
                }

            });
            
    }]);
