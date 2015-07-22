ngDashboard.controller('dashboardCtrl', ['$scope','$rootScope','$timeout',
    function ($scope, $rootScope,$timeout) {
        
        $scope.showServiceView = false;
        $scope.selectedService={};
        $scope.showService = function(service){
            $scope.showServiceView = true;
            $scope.selectedService = service;
        }
        
        
        $scope.alerts =["Alert Message 1","Alert Message 2","Alert Message 3"];
        $scope.timePeriod=['Quaterly','Annual']
        $scope.servicePortifolioData = [{'title':'EMA','description':'Enterprise Architechiture Modeling Systems','value':'138$','increase':true},
                                        {'title':'ESPM','description':'Enterprise Service Performance Management', 'value':'0.7%','increase':false},
                                        {'title':'SIR','description':'Strategic Invoation And Research','value':'25%','increase':false}]
        
        $scope.maximize = function(id_of_box){
            $( '#'+ id_of_box ).addClass( "pop-up");
        }    
        $scope.close = function(id_of_box){
            $( '#'+ id_of_box ).removeClass( "pop-up"); 
            $( '#'+ id_of_box ).css( 'left','');
            $( '#'+ id_of_box ).css( 'top','');
        }                                
        $timeout(function(){
            $('.carousel').carousel({
                interval: 2000 //changes the speed
            })
            $('.draggable').draggable({
                cursor: "crosshair",        
                handle: ".panel-heading",   //to allow dragging only from header
                distance: 5 ,//to avoid unwanted dragging
            })
        });

    }]);