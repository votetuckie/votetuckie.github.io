var seed = 1;

function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function join_room() {
    var txtbox = document.getElementById('room_code');
    rm = Number(txtbox.value);
    if ( rm <= 0) {
      alert("enter a number above 0!! Use the code from your game nerd");
      return;
    }
    room = rm;
    var display = document.getElementById('current_room');
    seed = rm;
    display.innerText = "current room: " + random();
}
