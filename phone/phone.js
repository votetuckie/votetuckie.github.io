var room;
room = 0;

var scrolled = false;
function updateScroll(){
    if(!scrolled){
        var element = document.getElementById("messages");
        element.scrollTop = element.scrollHeight;
    }
}

$("#messages").on('scroll', function(){
    scrolled=true;
});

function setroom() {
    var txtbox = document.getElementById('room_code');
    rm = Number(txtbox.value);
    if ( rm <= 0) {
      alert("enter a number above 0!! Use the code from your game nerd");
      return;
    }
    room = rm;
}

function send_message() {
  if (room == 0) {
    return;
  }
    var txtbox = document.getElementById("write_text");
    var msg = txtbox.value;

    var params = "?" + "room=" + room + "&message=" + msg + "&from_net=1";
    $.ajax({
      url: "http://cors.io/?http://cryptidzones.gearhostpreview.com/send_msg.php" + params
      }).done(function(data){});

}

window.setInterval(function(){
  show_room();
  if(room != 0) {
    pull_text();
  }
}, 600);

function show_room() {
  var txtbox = document.getElementById('room');
  if (room == 0) {
    txtbox.innerHTML = "not connected. enter room code";
    return;
  }
  txtbox.innerHTML = "current room: " + room;
}

var dat;
var count = 0;

function pull_text() {
  var params = "?" + "room=" + room;

  var url = "http://cors.io/?http://cryptidzones.gearhostpreview.com/phone_pull.php" + params;
  var msgs = document.getElementById('messages');
  $.get(url, function(data, status){
    dat = data;
  });
  if(dat.length <= count) {
    return;
  }
  count = dat.length;
  msgs.innerHTML = "";

  dat.forEach(
    function(item) {
      if(item.from_net == 1) {
        msgs.innerHTML += '<div class="msg_container">' + '<div class="msg">' + '<div class="wavy">' + item.message + '</div>' + '</div>' + '</div>';
      } else {
        msgs.innerHTML += '<div class="msg_container">' + '<div class="msg_other">' + '<div class="wavy">' + item.message + '</div>' + '</div>' + '</div>';
      }

    }

  );
    updateScroll();
    redraw_text();
  }
