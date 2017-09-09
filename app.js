var app = angular.module("app", ["ngMaterial"]);

app.controller("indexCtrl", ["$scope", function($scope) {
    console.log("Index Controller");

    let SERVER_URL = "http://192.168.0.104:3010"

    // the last received msg
    $scope.msg = {
        "title": "Hello Message"
    };


    // let sseSocreUrl = `/score`;
    let sseSocreUrl = `${SERVER_URL}/score`;
    var source = new EventSource(sseSocreUrl);

    source.onmessage = function(event) {
        console.log(event.data);
        $scope.$apply(function() {
            $scope.msg = JSON.parse(event.data)
            console.log($scope.msg);
        });
    };

    source.onerror = function(e) {
        console.log("EventSource failed.");
    };


}]);