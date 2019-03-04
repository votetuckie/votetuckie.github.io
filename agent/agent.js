var seed = 1;
var room = 0;
var joined = false;
var round = new Game();

function random(max) {
    var x = Math.sin(seed++) * 10000;
    return Math.round((x - Math.floor(x)) * max);
}

function join_room() {
    var txtbox = document.getElementById('room_code');
    rm = Number(txtbox.value);
    if ( rm <= 0 || isNaN(rm)) {
      alert("enter a number above 0!! Use the code from your game nerd");
      return;
    }
    room = rm;
    var display = document.getElementById('current_room');
    seed = rm;
    joined = true;
    display.innerText = "current room: " + room;
    round.start();
}

function Player (color) {
  this.color = color;

  this.x = 0;
  this.y = 0;

  this.actions = [];
  this.moves = [];
  this.intel = 0;
  this.benny = false;

  if(this.color == "red") {
    this.x = 2;
    this.y = 4;
  }
  if(this.color == "blue") {
    this.x = 5;
    this.y = 4;
  }
  if(this.color == "green") {
    this.x = 2;
    this.y = 3;
  }
  if(this.color == "yellow") {
    this.x = 5;
    this.y = 3;
  }

  this.check_if_case = function() {
    if (this.x == 0 && this.y == 0) {
      this.intel += 1;
    }
    if (this.x == 1 && this.y == 6) {
      this.intel += 1;
    }
    if (this.x == 2 && this.y == 1) {
      this.intel += 1;
    }
    if (this.x == 5 && this.y == 6) {
      this.intel += 1;
    }
    if (this.x == 6 && this.y == 1) {
      this.intel += 1;
    }
    if (this.x == 7 && this.y == 7) {
      this.intel += 1;
    }
  }

  this.move = function(dir) {
    var new_x = 0;
    var new_y = 0;
    if(dir == 0) {
      new_x = this.x;
      new_y = this.y + 1;
      dir = "North";
    } else if (dir == 1) {
      new_x = this.x + 1;
      new_y = this.y;
      dir = "East";
    } else if (dir == 2) {
      new_x = this.x;
      new_y = this.y - 1;
      dir = "South";
    } else if (dir == 3) {
      new_x = this.x - 1;
      new_y = this.y;
      dir = "West";
    }
    //blocked spaces
    if(new_x == 0 && new_y == 2) {
      return false;
    } else if (new_x == 3 && new_y == 6) {
      return false;
    } else if (new_x == 4 && new_y == 1) {
      return false;
    } else if (new_x == 7 && new_y == 5) {
      return false;
    }
    //out of bounds
    if(new_x > 7 || new_x < 0 || new_y > 7 || new_y < 0) {
      return false;
    }
    //warp points
    if(new_x == 0 && new_y == 1) {
      new_x == 7;
      new_y == 3;
    } else if (new_x == 7 && new_y == 6) {
      new_x == 0;
      new_y == 4;
    }

    this.x = new_x;
    this.y = new_y;
    this.check_if_case();
    this.moves.push(dir);
    return true;
  }

  this.action = function() {
    if(this.x < 4 && this.y < 4) {
      return "SW";
    }
    if(this.x >= 4 && this.y < 4) {
      return "SE";
    }
    if(this.x >= 4 && this.y >= 4) {
      return "NE";
    }
    if(this.x < 4 && this.y >= 4) {
      return "NW";
    }
  }

}

function Game() {
  this.p1 = new Player();
  this.p2 = new Player();
  this.p3 = new Player();

  this.start = function() {
    var free_agent = random(3);
    console.log(free_agent);
    if(free_agent == 0) {
      this.p1 = new Player("green");
      this.p2 = new Player("blue");
      this.p3 = new Player("yellow");
    }
    if(free_agent == 1) {
      this.p1 = new Player("red");
      this.p2 = new Player("blue");
      this.p3 = new Player("yellow");
    }
    if(free_agent == 2) {
      this.p1 = new Player("red");
      this.p2 = new Player("green");
      this.p3 = new Player("yellow");
    }
    if(free_agent == 3) {
      this.p1 = new Player("red");
      this.p2 = new Player("green");
      this.p3 = new Player("blue");
    }
    this.game_loop();
  }

  this.try_move = function(player) {
    var dir = random(3);
    if(!player.move(dir)) {
      this.try_move(player);
    }
  }

  this.game_loop = function() {
    if(this.is_done()) {

    } else {
      this.try_move(this.p1);
      this.take_action(this.p1);
      if(this.is_done()) {
        this.p1.benny = true;
        console.log(this.p1);
        return;
      }
      this.try_move(this.p2);
      this.take_action(this.p2);
      if(this.is_done()) {
        this.p2.benny = true;
        console.log(this.p2);
        return;
      }
      this.try_move(this.p3);
      this.take_action(this.p3);
      if(this.is_done()) {
        this.p3.benny = true;
        console.log(this.p3);
        return;
      } else {
        this.game_loop();
      }
    }
  }

  this.is_done = function() {
    if (this.p1.intel > 5) {
      return true;
    }
    if (this.p2.intel > 5) {
      return true;
    }
    if (this.p3.intel > 5) {
      return true;
    }
    return false;
  }

  this.take_action = function(player) {
    if(random(2) != 2) {
      player.actions.push("");
      return;
    }
    player.actions.push("Take Action");

    var action = player.action();
    if(action == "NW") {
      this.p1.intel += 1;
      this.p2.intel += 1;
      this.p3.intel += 1;
      player.intel -= 1;
    }
    if(action == "NE") {
      var total = 0;
      if(this.p1.action() == "NE") {total++;}
      if(this.p2.action() == "NE") {total++;}
      if(this.p3.action() == "NE") {total++;}
      player.intel += total;
    }
    if(action == "SE") {
      if(this.p1.action() == "NW") {this.p1.intel += 1;}
      if(this.p2.action() == "NW") {this.p2.intel += 1;}
      if(this.p3.action() == "NW") {this.p3.intel += 1;}
    }
    if(action == "SW") {
      var max = 0;
      max = Math.max(this.p1.intel, this.p2.intel);
      max = Math.max(max, this.p3.intel);
      if(player.intel != max) {
        player.intel += 1;
      }
    }
  }

}
