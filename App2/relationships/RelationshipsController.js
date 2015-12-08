angular.module('dreamApp.relationships')
    .controller('RelationshipsController',RelationshipsController);

RelationshipsController.$inject = ['$scope'/*, 'Relationships'*/];

function RelationshipsController($scope) {
    $scope.emergency_contacts = [
        {
            name:'Ginetta Sagan', 
            relationship:'Mother', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'ginetta.sagan@tufts.edu'
        },
        {
            name:'Zach Lee', 
            relationship:'Teacher', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'zach.lee@tufts.edu'
        },
        {
            name:'Judy Li', 
            relationship:'Aunt', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'judy.li@tufts.edu'
        }
    ];
    $scope.family_contacts = [
        {
            name:'Ginetta Sagan', 
            relationship:'Mother', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'ginetta.sagan@tufts.edu'
        },
        {
            name:'Paul Sagan', 
            relationship:'Father', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'paul.sagan@tufts.edu'
        },
        {
            name:'James Sagan', 
            relationship:'Brother', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'james.sagan@tufts.edu'
        },
        {
            name:'Jane Sagan', 
            relationship:'Sister', 
            phone: '123-456-7890',
            address: 'Tufts University',
            email: 'Jane.sagan@tufts.edu'
        }
    ];
}