const app = angular.module('PortfolioSite', ['ngRoute'])








// routes__________________________________________

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	})
	.when('/ux', {
		templateUrl: 'partials/ux.html',
		controller: 'UxCtrl'
	})
	.when('/photography', {
		templateUrl: 'partials/photography.html',
		controller: 'PhotographyCtrl'
	})
	.when('/graphics', {
		templateUrl: 'partials/graphics.html',
		controller: 'GraphicsCtrl'
	})
// _________________________________________________




}])
