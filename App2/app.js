var dreamApp = angular.module('dreamApp',['ui.router']);

dreamApp.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/slider');
	
	$stateProvider
	
		.state('slider',{
			url: '/slider',
			templateUrl: 'homepage/slider.html'
		
	})
	
		.state('profile',{
			url: '/profile',
			templateUrl: 'profile/profile.html'
	})
	
		.state('relationships',{
			url: '/relationships',
			templateUrl: 'relationships/relationships.html'
	})
	
		.state('mentee_info',{
			url: '/mentee_info',
			templateUrl: 'mentee_info/mentee.html'
	});
	
	
});