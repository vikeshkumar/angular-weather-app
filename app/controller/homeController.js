app.controller('HomeController', ['$scope', '$routeParams', 'ForecastService', function ($scope, $routeParams, ForecastService) {
        $scope.city = ForecastService.getCity();
        $scope.days = ForecastService.getDays();
        $scope.$watch('city', function (newValue, oldValue) {
            ForecastService.setCity(newValue);
        });
        $scope.$watch('days', function (newValue, oldValue) {
            ForecastService.setDays(newValue);
        });

    }]);