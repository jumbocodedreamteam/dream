angular.module('dreamApp.profile')
	.controller('ProfileController',ProfileController);

ProfileController.$inject = ['$scope'/*,'ProfileService'*/];

function ProfileController($scope) {
	$scope.mentee = {
		name: "id:Name",
		dob: "Date of Birth"
	};
	
	$scope.mentor = {
		firstname: "First Name",
		lastname: "Last Name",
		email: "Email",
		phone: "Phone",
		address: "Address"
	};
	
	$scope.contacts = [
		{
			name: "Name",
			relationship: "Choose One",
			email: "Email"
		},
		{
			name: "Name",
			relationship: "Choose One",
			email: "Email"
		}
		
	];
	
	$scope.newName = {};
	$scope.emergEmail = {};
	
	$scope.submit = function(){
		if(document.profileForm.mentorFirst.value != ""){
			$scope.mentor.firstname = $scope.newFirst;
		}
		if (document.profileForm.mentorLast.value != ""){
			$scope.mentor.lastname = $scope.newLast;
		}
		if (document.profileForm.mentorEmail.value != ""){
			$scope.mentor.email = $scope.newEmail;
		}
		if (document.profileForm.mentorPhone.value != ""){
			$scope.mentor.phone = $scope.newPhone;
		}
		if (document.profileForm.mentorAddress.value != ""){
			$scope.mentor.address = $scope.newAddress;
		}
		document.profileForm.reset();
	}
	
}