/*creacion de variables para la introduccion*/
var w = window.innerWidth;
var h = window.innerHeight;

var intro = document.getElementsByClassName("intro")[0];
var historia = document.getElementsByClassName("historia")[0];
var parrafos = document.getElementsByClassName("parrafos")[0];
var sonido = document.getElementById("sonido");

intro.style.fontSize = w / 30 + "px";
historia.style.fontSize = w / 20 + "px";
parrafos.style.height = h + "px";

window.addEventListener("resize", function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  intro.style.fontSize = w / 30 + "px";
  historia.style.fontSize = w / 20 + "px";
  parrafos.style.height = h + "px";
  /*Fondo de estrellas*/
  inicio();
  nevada();
});

function animar() {
  intro.className = 'intro texto_intro animacion_intro';
  historia.className = 'historia texto_historia animacion_historia';
  sonido.play();
}


/*Fondo de estrellas*/

var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

canvas.width = w;
canvas.height = h;

var num = 100;
var tamaño = 2;
var elementos = [];
 
inicio();
nevada();

function inicio() {
  for (var i = 0; i < num; i++) {
    elementos[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      tamaño: Math.random() * tamaño
    }
  }
}

function nevada() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < num; i++) {
    var e = elementos[i];
    ctx.beginPath();
    ctx.fillStyle = "#ff6";
    ctx.arc(e.x, e.y,e.tamaño,0,2*Math.PI);
    ctx.fill();
  }
}