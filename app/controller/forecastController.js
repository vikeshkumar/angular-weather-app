app.controller('ForecastController', ['$scope', '$routeParams', 'ForecastService', function ($scope, $routeParams, ForecastService) {
        $scope.city = ForecastService.getCity();
        $scope.days = $routeParams.days || 5;
        ForecastService.getForecast($scope.days).$promise.then(function (data) {
            $scope.weatherResult = data.list;
            console.log($scope.weatherResult);
        });
    }]);