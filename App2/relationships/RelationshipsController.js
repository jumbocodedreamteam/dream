angular.module('dreamApp.relationships')
    .controller('RelationshipsController', RelationshipsController);

RelationshipsController.$inject = ['$scope'/*, 'Relationships'*/];

function RelationshipsController($scope) {
    /*$scope.contact = { 
        name: 'Name', 
        relationship: 'Relationship', 
        phone: "Phone",
        address: "Address",
        email: "Email"
    };*/

    $scope.emergency = [
        {
            name: 'Ginetta Sagan', 
            relationship: 'Mother', 
            phone: "123-456-7890",
            address: "Tufts University",
            email: "ginetta.sagan@tufts.edu"
        },
        {
            name: 'Paul Sagan', 
            relationship: 'Father', 
            phone: "123-456-7890",
            address: "Tufts University",
            email: "paul.sagan@tufts.edu"
        },
        {
            name: 'James Sagan', 
            relationship: 'Brother', 
            phone: "123-456-7890",
            address: "Tufts University",
            email: "james.sagan@tufts.edu"
        },
        {
            name: 'Jerome Sagan', 
            relationship: 'Uncle', 
            phone: "123-456-7890",
            address: "Tufts University",
            email: "jerome.sagan@tufts.edu"
        }
    ]
}