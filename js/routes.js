angular.module('dreamApp')
	.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/slider');
	
	$stateProvider
	
		.state('slider',{
			url: '/slider',
			templateUrl: 'homepage/slider.html',
	 		controller: 'HomepageController'
		
	})
	
		.state('profile',{
			url: '/profile',
			templateUrl: 'profile/profile.html',
			controller: 'ProfileController'
	})

		.state('journal',{
			url: '/journal',
			templateUrl: 'journal/journals.html',
			controller: 'JournalController'
	})
   
		.state('attendance',{
			url: '/attendance',
			templateUrl: 'attendance/attendance.html',
			controller: 'AttendanceController'
		
	})
		.state('mentees_info',{
			url: '/mentees_info',
			templateUrl: 'mentees_info/mentees_info.html',
			controller: 'MenteesInfoController'
	});
	
	
});