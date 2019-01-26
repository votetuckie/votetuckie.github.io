var chs;
var chs2;
var chs3;

$(function(){
    // document.getElementById("quote").textContent= quotes[Math.floor(Math.random()*quotes.length)];
    $.get(
      "cryptidzones.gearhostpreview.com/download.php",
      {paramOne : 1, paramX : 'abc'},
      function(data) {
         alert('page content: ' + data);
      }
  );
})

function redraw_text() {
  chs = $(".wavy").blast({ delimiter: "character" });
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

function pull_text() {

}

window.setInterval(function(){
  chs.each(function(i, element) {
    var pos = Math.sin(Date.now() * 0.01 + i) * 5;
    var mos = Math.cos(Date.now() * 0.01 + i) * 3;
    $(element).css("top", pos.toString() + "px");
    $(element).css("left", mos.toString() + "px");
  });
}, 20);

window.setInterval(function(){
  chs2.each(function(i, element) {
    var pos = Math.sin(Math.random(0,10)) * 3;
    var mos = Math.cos(Math.random(0,10)) * 3;
    $(element).css("top", pos.toString() + "px");
    $(element).css("left", mos.toString() + "px");
  });
}, 60);

window.setInterval(function(){
  chs3.each(function(i, element) {
    var pos = Math.cos(Date.now() * 0.008 + i * 0.5) * 6;
    var mos = Math.sin(Date.now() * 0.004 + i * 0.5) * 5 + Math.cos(Date.now() * 0.006 + i * 3) * 1;
    $(element).css("top", pos.toString() + "px");
    $(element).css("left", mos.toString() + "px");
    $(element).css("color", rainbow(i));
  });
}, 20);

function rainbow(i) {
  var r = Math.floor(200 + Math.sin(Date.now() * 0.01 + i) * 55);
  var g = Math.floor(200 + Math.sin(Date.now() * 0.01 + i + 2*Math.PI/3) * 55);
  var b = Math.floor(200 + Math.sin(Date.now() * 0.01 + i + 4*Math.PI/3) * 55);
  return "rgb("+r+","+g+","+b+")";
}
