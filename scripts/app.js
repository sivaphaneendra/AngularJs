var MetaApp = angular.module('MetaApp', [ "ui.router","MetaApp.Login" ]);
MetaApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, send to /login
	$urlRouterProvider.otherwise("login");
	$stateProvider.state('login', {
		url : 'login',
		templateUrl : 'Login.html',
		controller : 'loginctrl'
	}).state('welcome', {
		templateUrl : 'Welcome.html',
		controller : 'welcomectrl'
	}).state("otherwise", {
		url : "login",
		templateUrl : "Login.html"
	});
});
MetaApp.controller('MainCtrl', function($state) {
	$state.transitionTo('login');
});
MetaApp.directive("requiredSymbol", function() {
	return {
		restrict : "EA",
		replace : true,
		template : "<label style='color:red'>*</label>"
	};
});