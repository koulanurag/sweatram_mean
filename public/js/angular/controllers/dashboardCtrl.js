ngDashboard.controller('dashboardCtrl', ['$scope','$rootScope','$timeout',
    function ($scope, $rootScope,$timeout) {
        $scope.alerts =["Alert Message 1","Alert Message 2","Alert Message 3"]
        $scope.servicePortifolioData = [{'title':'EMA','description':'Enterprise Architechiture Modeling Systems','value':'138$','increase':true},
                                        {'title':'ESPM','description':'Enterprise Service Performance Management', 'value':'0.7%','increase':false},
                                        {'title':'SIR','description':'Strategic Invoation And Research','value':'25%','increase':false}]
        $timeout(function(){
            $('.carousel').carousel({
                interval: 2000 //changes the speed
            })
        });

    }]);