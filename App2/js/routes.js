angular.module('dreamApp')
	.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/slider');
	
	$stateProvider
	
		.state('slider',{
			url: '/slider',
			templateUrl: 'homepage/slider.html'
	//		controller: 'HomepageController'
		
	})
	
		.state('profile',{
			url: '/profile',
			templateUrl: 'profile/profile.html',
			controller: 'ProfileController'
	})
	
		.state('relationships',{
			url: '/relationships',
			templateUrl: 'relationships/relationships.html',
			controller: 'RelationshipController'
	})
	
		.state('journal',{
			url: '/journal',
			templateUrl: 'journal/journals.html',
			controller: 'JournalController'
	})
    
	    .state('request_changes',{
			url: '/request_changes',
			templateUrl: 'request_changes/request_changes.html'
	//		controller: 'RequestChangesController'
		
	})
    
		.state('mentee_info',{
			url: '/mentee_info',
			templateUrl: 'mentee_info/mentee_info.html'
	//		controller: 'MenteeController'
	});
	
	
});