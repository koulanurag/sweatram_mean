ngDashboard.config(
    ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider
            .otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                params :{
                  state: 'dashboard'  
                },
                views: {
                    'header':{
                        controller: 'headerCtrl',
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

            })
        .state('reports', {
                url: '/reports',
                params :{
                  state: 'reports'  
                },
                views: {
                    'header':{
                        controller: 'headerCtrl',
                        templateUrl: 'views/header.html'
                    },
                    'default': {
                        templateUrl: 'views/report.html'
                    },
                    'footer':{
                        templateUrl: 'views/footer.html'
                    }
                }
                

            })
        .state('more', {
                url: '/more',
                views: {
                    'header':{
                        controller: 'headerCtrl',
                        templateUrl: 'views/header.html'
                    },
                    'default': {
                        templateUrl: 'views/more.html'
                    },
                    'footer':{
                        templateUrl: 'views/footer.html'
                    }
                }
                

            });
            
    }]);
