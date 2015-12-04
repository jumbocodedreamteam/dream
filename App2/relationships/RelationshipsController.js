angular.module('dreamApp.relationships')
    .controller('RelationshipsController', RelationshipsController);

RelationshipsController.$inject = ['$scope'/*, 'Relationships'*/];

function RelationshipsController($scope) {
    $scope.contact = [ 
    { 
        name: 'Ginetta Sagan', 
        relationship: 'Mother', 
        phone: 617-803-7132, 
    }, 
    { 
        name: 'Ginetta Sagan', 
        relationship: 'Mother', 
        phone: 617-803-7132, 
    },
    { 
        name: 'Ginetta Sagan', 
        relationship: 'Mother', 
        phone: 617-803-7132, 
    },
    { 
        name: 'Ginetta Sagan', 
        relationship: 'Mother', 
        phone: 617-803-7132, 
    }
    ]
}