var socket = io();

socket.on('connect',function () {
    socket.emit('getRoomsList');
});

socket.on('newRoomsList', function (rooms){
    console.log(rooms)
    var list = jQuery('#rooms-list');
    var ul = jQuery('<ul></ul>')
    
    list.html('');
    list.append("<div class='form-field'><h3>Active Rooms</h4></div>");


    rooms.forEach(function(room) {
        ul.append(jQuery('<li class="room"></li>').text(room));
    });

    list.append(ul)
});

$( "body" ).on('click', 'li.room', function(e) {
    var value = jQuery(e.target).text();

    var input = jQuery('#room');
    input.val(value)
});
