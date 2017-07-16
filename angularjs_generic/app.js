var app = angular.module('myapp', []);

app.controller('RestaurantTableController', function($scope) {
    $scope.directory = [
        {name: 'Restaurant 1', cus : 'p'},
        {name: 'Restaurant 2', cus: 'salads'},
        {name: 'Restaurant 3', cus: 's'}
    ];
    $scope.selectRestaurants = function(row) {
        $scope.selects = row;
    };
});

app.controller('CartsController', function($scope, Pass) {
    $scope.pass = {};
    
    $scope.items = Pass.pass();

    $scope.pass.totalCart = function() {
        var total = 0;
        for(var i = 0; i < $scope.items.length; i++) {
            total += $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.pass.total = total;
        $scope.pass.discount = (total > 100) ? 10 : 0;
        $scope.pass.subtotal = total - $scope.pass.discount;
    };

    $scope.$watch('items', $scope.pass.totalCart, true);
});