var aMailServices = angular.module('myapp', ['ngRoute']);

aMailServices.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ListController',
            templateUrl: 'list.html'
        })
        .when('/view/:id', {
            controller: 'DetailController',
            templateUrl: 'detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

aMailServices.controller('ListController', function($scope, MessageServices) {
    MessageServices.getMessages().success(function(data) {
        $scope.messages = data;
    });
});

aMailServices.controller('DetailController', function($scope, $routeParams, MessageServices) {
    MessageServices.getMessagesById($routeParams.id).success(function(data) {
        $scope.message = data;
    });
});