var chs;
var chs2;
var chs3;

$(function(){
    // document.getElementById("quote").textContent= quotes[Math.floor(Math.random()*quotes.length)];

})

function redraw_text() {
  chs = [];
  chs = $(".wavy").blast({ delimiter: "word" });
  chs.each(function(i, element) {
    $(element).css("display", "inline-block");
    $(element).css("position", "relative");
  });
  chs2 = $(".shaky").blast({ delimiter: "character" });
  chs2.each(function(i, element) {
    $(element).css("display", "inline-block");
    $(element).css("position", "relative");
  });
  chs3 = $(".rainbow").blast({ delimiter: "character" });
  chs3.each(function(i, element) {
    $(element).css("display", "inline-block");
    $(element).css("position", "relative");
  });
}

window.setInterval(function(){
  chs.each(function(i, element) {
    var pos = Math.sin(Date.now() * 0.005 + i) * 5;
    var mos = Math.cos(Date.now() * 0.01 + i) * 3;
    $(element).css("top", pos.toString() + "px");
    //$(element).css("left", mos.toString() + "px");
  });
}, 20);

function rainbow(i) {
  var r = Math.floor(200 + Math.sin(Date.now() * 0.01 + i) * 55);
  var g = Math.floor(200 + Math.sin(Date.now() * 0.01 + i + 2*Math.PI/3) * 55);
  var b = Math.floor(200 + Math.sin(Date.now() * 0.01 + i + 4*Math.PI/3) * 55);
  return "rgb("+r+","+g+","+b+")";
}
