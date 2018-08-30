var chs;
var chs2;
var chs3;

$(function(){
  var quotes = [
    "never ever stop using sinewaves",
    "gif files are cool",
    "shoutouts to froik the frog",
    "there's a really high chance you aren't my dad JEEZ!",
    "go to bed on time some times",
    "the trick is to freak out all the time",
    "*orchestra hit sfx*",
    "AS a millenial: im doing ok dudde",
    "aaaaaaaaaaaaaaaaaaaaaaa",
    "game'rs roule",
    "slime time all time babey",
    "https://twitter.com/bwuhhh/status/974888126987386880",
    "my parents are supportive of my life choices",
    "building up speed for 12 hours brb",
    "shoot uh i forgot",
    "if u cant beat em, greet em?",
    "what",
    "https://discord.gg/Bx6T4Rm",
    "at least you aren't trapped in a computer like me",
    "when life gives you avacado toast build a house w/ it",
    "you hafta tell cops what platforms your game's for",
    "indy life doesnt choose anyone wdym??",
    "so could you venmo me like, 3 bucks?",
    "remember when bitcoin spiked, that was cool",
    "have you ever thought about where trees r from",
    "i have a move that kills everyone in one hit",
    "dont make fun of me or else bubber",
    "slimes are people 2 you know",
    "system32 is important actually",
    "press RT1 to perform a dodge roll",
    "success comes from doing things right 24/7",
    "whats earthbound",
    "top ten pro tips tic tac toe",
    "unity how to wiggly text tutorial hd 2018",
    "FRICK", "frick",
    "you cant lose what yuo cant win i think"
  ];
  document.getElementById("quote").textContent= quotes[Math.floor(Math.random()*quotes.length)];
})

$(function(){
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
})

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
