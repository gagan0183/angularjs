app.factory('Pass', function() {
    var items = {};
    items.pass = function() {
        var items = [
            {title: 'Paint Pots', quantity: 9, price: 9},
            {title: 'Pots', quantity: 90, price: 90},
            {title: 'Potsp', quantity: 900, price: 900}
        ];
        return items;
    };
    return items;
});