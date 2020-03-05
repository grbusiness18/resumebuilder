var app = angular.module('app', []);

app.factory('AppService', function() {
    console.log("Load controller")
    return {
        view_port_view: "",
        show_msg_load_list: true,
        current_entity: {}
    }
});



app.controller('appcontroller', function($scope, $http) {
    console.log("Load controller");    
    window.$scope = $scope;
    $http.get("data-source.json").then(function(d){
        $scope.data = d.data;
    });
    
});