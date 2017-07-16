module.exports = function() {
    var messages = [
        {
            id: 1,
            sender: 'jean@somecompany.com',
            subject: 'Hi there!',
            date: 'Mar 9, 2017 09:09:09',
            recipients: ['greg@somecompany.com'],
            message: 'Hey we should get together for lunch catchs'
        },
        {
            id: 0,
            sender: 'john@somecompany.com',
            subject: 'Hi there!',
            date: 'Mar 9, 2017 09:09:09',
            recipients: ['gregp@somecompany.com'],
            message: 'Hey we should get together for lunch catchs'
        }
    ];
    return messages;
};