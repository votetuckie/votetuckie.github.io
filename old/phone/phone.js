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
    var url = "http://cryptidzones.gear.host/reset_room.php?room=" + room;
    $.ajax({
      url: url
      }).done(function(data){});
}

function send_message() {
  if (room == 0) {
    return;
  }
    var txtbox = document.getElementById("write_text");
    var msg = txtbox.value;

    var params = "?" + "room=" + room + "&message=" + msg;
    $.ajax({
      url: "https://cryptidzones.gear.host/send_msg.php" + params
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

  var url = "https://cryptidzones.gear.host/phone_pull.php" + params;
  var msgs = document.getElementById('messages');
  $.get(url, function(data, status){
    dat = data;
  });

  if (typeof dat !== 'undefined') {

    if(dat.length <= count) {
      return;
    }
    count = dat.length;
    msgs.innerHTML = "";

    dat.forEach(
      function(item) {
        if(item.from_net == 1) {
          var div = document.createElement('div');
          div.className = "msg_container";

          var msgg = document.createElement('div');
          msgg.className = "msg";

          var wavy = document.createElement('div');
          wavy.className = "wavy";

          wavy.innerText = item.message;

          msgg.appendChild(wavy);
          div.appendChild(msgg);

          msgs.appendChild(div);

        } else {
          msgs.innerHTML += '<div class="msg_container">' + '<div class="msg_other">' + '<div class="wavy">' + item.message + '</div>' + '</div>' + '</div>';
        }
      }
    );

  }
  updateScroll();
  redraw_text();
}
