ngDashboard.controller('headerCtrl', ['$scope','$rootScope','$timeout','$stateParams',
    function ($scope, $rootScope,$timeout,$stateParams) {
        $scope.navigation={
            
                            'dashboard': {'title':"My DashBoard",'url':'','active':false},
                             'reports':  {'title':"Reports",'url':'','active':false}
                            
                        }
        angular.forEach($scope.navigation,function(value,key){
            if(key == $stateParams.state){
                value.active = true;
            }
            else{
                value.active = false;
            }
        })
        $timeout( function(){
            console.log($stateParams)
        })
        
    }])
    