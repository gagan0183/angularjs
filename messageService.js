aMailServices.service('MessageServices', function($http) {
    this.getMessages = function() {
        return $http.get('/messages');
    };

    this.getMessagesById = function(id) {
        return $http.get('/messages/' + id);
    };
});