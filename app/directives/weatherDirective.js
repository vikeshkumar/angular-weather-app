app.directive('weatherForecast', [function(){
    return {
        restrict: 'AE',
        templateUrl: 'templates/weatherForecast.html',
        scope:{
            forecast : "="
        }
    }
}]);