const app = angular.module('PortfolioSite', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	})

j
// materialize drop down selects
  $(document).ready(function() {
    $('select').material_select();
  });

}])
