var myApp = angular.module('myApp', []);

myApp.controller('APIController',['$scope', '$http', function($scope, $http){
    var apikey = "7f088175f0a1a4cf059ef9e5047a62b7d63e8ec2";
    var baseUrl = "http://www.giantbomb.com/api";

//construct url
    var gameSearchUrl = baseUrl+ '/search/?api_key='+ apikey +'&format=jasonp&limit=50';
    var query = "Aquaman";

    finalUrl = gameSearchUrl + '&query='+ encodeURI(query)+'&json_callback=JSON_CALLBACK';
    console.log(finalUrl);

    $http.jsonp(finalUrl).then(
        function(response){
            console.log(response.data);
        }
    );


//controller end
}]);