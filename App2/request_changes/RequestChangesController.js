angular.module('dreamApp.request_changes')
	.controller('RequestChangesController',RequestChangesController);

ProfileController.$inject = ['$scope'/*,'RequestChanges'*/];

function ProfileController($scope) {
        $scope.emergency_contact = {
            name: "Name",
            relationship: "Relationship",
            phone: "Phone",
            email: "Email",
            address: "Address",
            extra: "Extra Comments"
        }
        
        $scope.submit = function(){
		if(document.changesForm.contact_name.value != ""){
			$scope.mentor.firstname = $scope.newContactName;
		}
		if (document.changesForm.contact_relationship.value != ""){
			$scope.mentor.lastname = $scope.newContactRelationship;
		}
		if (document.changesForm.contact_phone.value != ""){
			$scope.mentor.email = $scope.newContactPhone;
		}
		if (document.changesForm.contact_email.value != ""){
			$scope.mentor.phone = $scope.newContactEmail;
		}
		if (document.changesForm.contact_address.value != ""){
			$scope.mentor.address = $scope.newContactAddress;
		}
        if (document.changesForm.contact_comments.value != ""){
			$scope.mentor.address = $scope.newContactComments;
		}
        
        document.changesForm.reset();
}