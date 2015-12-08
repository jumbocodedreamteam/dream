angular.module('dreamApp.mentee_info')
	.controller('InfoController',InfoController);

InfoController.$inject = ['$scope'/*,'ProfileService'*/];

function InfoController($scope) {

	$scope.mentee = {
		name: "id:Name",
		age: "id:Age_c",
		gender: "id:Gender_c"
	};

	$scope.personal = {
		houseLang: "id:Household_Language_c",
		address: "id:Address",
		email: "id:Email",
		birthDate: "id:Birthdate_c"
		
	};
	
	$scope.health = {
		physician: "id:Physician_Name_c",
		physPhone: "id:Physician_Phone_Number_c",
		meds: "id:Prescription_Medication_Taken_Regularly_c",
		swallowPills: "id:Able_to_Swallow_Pill_c",
		medConditions: "id:Current_Medical_Conditions_c",
		allergies: "id:Current_Allergies_c"
		
	};
	
	$scope.contacts = [
		{
			name: "John Doe",
			phone: "555-555-5555",
			relationship: "Friend"
		},
		{
			name: "Contact 2",
			phone: "555-555-5555",
			relationship: "Friend"
		}
	];
}