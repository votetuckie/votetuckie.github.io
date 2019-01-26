var room;

function setroom(id) {
    var txtbox = document.getElementById(id);
    room = int(txtbox.value);
}

function send_message(id) {
    var txtbox = document.getElementById(id);
    var msg = int(txtbox.value);

    var params = "?" + "room=" + "1" + "&message=" + msg + "&from_net=1";

    $.get(
      "http://cryptidzones.gearhostpreview.com/send_msg.php" + params,
      {},
      function(data) {
      }
    );

}

window.setInterval(function(){
  pull_text();
}, 600);

function pull_text() {


  $.get(
    "http://cryptidzones.gearhostpreview.com/phone_pull.php",
    {room : 1,},
    function(data) {
       alert('page content: ' + data);
    }
  );
}
