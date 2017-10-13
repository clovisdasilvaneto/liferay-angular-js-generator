window.appName = <%= appName %>;
window.MainApp = {};

(function (win) {
	"use strict";
	
	win.MainApp.Controllers = angular.module(appName + ".controllers", []);
	win.MainApp.Directives = angular.module(appName + ".directives", []);
	win.MainApp.Services = angular.module(appName + ".services", []);
	win.MainApp.Filters = angular.module(appName + ".filters", []);
	
	win.MainApp.Controllers
		.controller("InitialController", ['$scope', function($scope) {
			console.log('...... The angular controller is ready')
		}]);
	angular
		.module(appName, [
			appName + ".controllers",
			appName + ".directives",
			appName + ".services",
			appName + ".filters",
			'ui.router'
		]).config(['$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/');
			
			$stateProvider.state('home', {
				url: "/",
				views: {
					"myView": {
						template: "<h3>Hey! This is my angular theme view :)</h3>",
						controller: "InitialController"
					}
				}
			});
		}
	]);
}(window));

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});