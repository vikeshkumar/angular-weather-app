app.service('ForecastService', ['$resource', '$q', function ($resource, $q) {
    this.city = "Bangalore";
    this.days = 2;
    this.appid = "579d165965b033d92932cb95fa749175";
    this.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK"
    }, {
        get: {method: "JSONP"}
    });
    var self = this;
    return {
        setCity: function (city) {
            self.city = city;
        },
        getCity: function () {
            return self.city;
        },
        getForecast: function (days) {
            return self.weatherAPI.get({q: self.city, cnt: days, APPID: self.appid});
        },
        getDays: function () {
            return self.days;
        },
        setDays: function (days) {
            self.days = days;
        }
    };
}]);