angular.module('Dashboard').controller('NotificationCtrl', ['Status', NotificationCtrl]);

function NotificationCtrl(Status) {
    var vm = this;

    function info() {
        swal({
            title: "HTML <small>Title</small>!",
            text: 'A custom <span style="color:#F8BB86">html<span> message.',
            html: true
        });
    }
    vm.info = info;
    var notifications = [ ];
    Status.get({}, function(status){
        status.hits.forEach( function(item) {
            notifications.push(item._source);
        });

    });
    vm.notifications = notifications;
}