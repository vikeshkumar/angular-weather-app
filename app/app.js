var app = angular.module('weather', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/", {
                    templateUrl: "pages/home.html",
                    controller: "HomeController"
                })
                .when("/weather", {
                    templateUrl: "pages/forecast.html",
                    controller: "ForecastController"
                })
                .when("/:city/weather", {
                    templateUrl: "pages/forecast.html",
                    controller: "ForecastController"
                })
                .when("/:city/weather/:days", {
                    templateUrl: "pages/forecast.html",
                    controller: "ForecastController"
                })
                .when("/weather/:days", {
                    templateUrl: "pages/forecast.html",
                    controller: "ForecastController"
                });
    }]);