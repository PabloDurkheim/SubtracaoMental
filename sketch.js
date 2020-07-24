//link do vídeo: https://youtu.be/9DxLTanWui4

let img, img2, educ1, educ2, ajud1, ajud2, eu, audio1, audio2, audio3, audio4;

function preload() {
  img = loadImage('img7.jpg');
  img2 = loadImage('coracao.png');
  educ1 = loadImage('educadora1.jpeg');
  educ2 = loadImage('educadora2.jpeg');
  ajud1 = loadImage('ajud1.jpeg');
  ajud2 = loadImage('ajud2.jpeg');
  eu = loadImage('eu.jpeg');
  
  audio1 = createAudio('music1.mp3');
  audio2 = createAudio('music2.mp3');
  audio3 = createAudio('errou.mp3');
  audio4 = createAudio('acertou.mp3');
	  
}
//horizontal
var x = 110,x2 = 110,x3 = 110, y = 100, y2 = 250, y3 = 400;

let hx = [];   
let hy = [];
var quantObj = 9;

//cor dos quadrados
let cor = "#0D586C";

//cor do background
let corDoBack = "#65A36E";

//cor dos titulo da tela 1
let titulos = "#D0FA58";

//nivel e vida do jogo
var nivel = 1;
var vida = 3;

//valores aleatórios
let valores = [];
var corVal = "#FFFFFF";
var vezes = 10;
var tamanho = 25;

//variaveis da subtração
var subt1 = parseInt(Math.random(0, 10)*vezes);
var subt2 = parseInt(Math.random(0, 10)*vezes);

//Armazena a resposta
var resposta;
var respstaCertaOuErrada = 0;
var respostaCorreta;
var respostaErrada;;

var tela = 0;

var tempoInicial = 3;
var temp1 = 20;
var temp2 = 25;
var temp3 = 30;
var temp4 = 40;
var temp5 = 50;
var temp6 = 60;
var temp7 = 70;
var temp8 = 80;
var temp9 = 90;
var temp10 = 99;

var q1 = 0, q2 = 0, q3 = 0;

//executa uma vez
function setup() {
  
  createCanvas(600, 600);

  //define a posição dos valores na tela 1
  for(var i = 0; i < quantObj; i++){
	  
	if(i<3){
	  
		hx[i] = x;
		hy[i] = y;
		
		x+= 150;
		
		
     
	}
	if(i>2 && i<6){
	  
		hx[i] = x2;
		hy[i] = y2;
		
		x2 += 150;
		
     
	}
	
	if(i>5){
	  
		hx[i] = x3;
		hy[i] = y3;
		
		x3+= 150;
		
     
	}
	  
	  
  }
  
  //gerarValoresParaOsQuadrados
  gerarValores();
  
  //gerar uma subtração com resultado positivo;
  subtracaoPositivaOuNegativa();
  
  escolheOndeFicaOResultado();
  
 
  //audio2.loop(true);
}

function draw() {
  //executa varias vezes
  //Tela do jogo
  if(tela == 1){
  
   background(img);
  textStyle(BOLD);
  //textFont('Geórgia');

  //corações (vida) do jogador 
  if(vida == 3){

  	image(img2, 240, 13, 40, 40);
    image(img2, 280, 13, 40, 40);
    image(img2, 320, 13, 40, 40);

  }
  
  if(vida == 2){

  	image(img2, 240, 13, 40, 40);
    image(img2, 280, 13, 40, 40);

  }

  if(vida == 1){

  	image(img2, 240, 13, 40, 40);

  }

  //quadrados da tela de jogo (tela = 1);
  gerarLinhasTela1();
	  
  //Cabeçalho do jogo
  textSize(30);
  fill(titulos);
  strokeWeight(4);
  stroke("#FF8000");
  text("Nivel: "+nivel, 30, 40);
  
  //Exibe os valores na tela, dentro dos quadrados
  for(var k = 0; k < 9; k++){
	  
	  noStroke();
	  fill(corVal);
	  textSize(tamanho);
	  
	  if((valores[k] >= 0 && valores[k] <= 9)){
		  
		text(valores[k], hx[k]+33, hy[k]+50);  
		  
	  }
	  
	  if((valores[k] >= 10 && valores[k] <= 99)){
		  
		text(valores[k], hx[k]+26, hy[k]+50);  
		  
		 
	  }
	  
	  if((valores[k] >= 100 && valores[k] <= 999)){
		  
		text(valores[k], hx[k]+20, hy[k]+50);  
		  
		 
	  }
	  
	  if((valores[k] >= 1000 && valores[k] <= 9999)){
		  
		text(valores[k], hx[k]+12, hy[k]+50);  
		  
		 
	  }
	  
  }
  
  gerarSubtracaoNoInicio();
  //respostaCertaOuErrada
  //respCertaOuErrada();
  

  tempo();

  }
   
  
  //tela do Menu
  if(tela == 0){
	 
	  background(img);
	  
	  if(tempoInicial > 0){

  		frameRate(1);
  		setInterval(tempoInicial--, 1000);

  	}

  	if(tempoInicial == 0){

  		audio2.loop();
  		tempoInicial = -1;
		frameRate(600);

  	}
	  
	  noStroke();
	  
	  //Inicio
	  fill(corVal);
	  textSize(30);
	  //textStyle(BOLD);
	 // textFont('Geórgia');
	  textStyle(BOLD);
	  strokeWeight(2);
	  stroke("#DF7401");
	  text("SUBTRAÇÃO MENTAL", 130, 60);
	  
	  fill("#FFFFFF");
	  textSize(18);
	  //textStyle(BOLD);
	  //strokeWeight(3);
	  //stroke("#01DFD7");
	  text("JOGAR", 270, 225);
	  text("AJUDA", 270, 325);
	  text("CRÉDITOS", 255, 425);
	  
	  //retângulos
	  strokeWeight(1);
	  stroke("#01DFD7");
	  line(230, 180, 230, 255); //esquerda
	  line(370, 180, 370, 255); //direita
	  line(230, 255, 370, 255); //baixo
	  line(230, 180, 370, 180); //cima

	  line(230, 280, 230, 355); //esquerda
	  line(370, 280, 370, 355); //direita
	  line(230, 355, 370, 355); //baixo
	  line(230, 280, 370, 280); //cima
	  
	  line(230, 380, 230, 455); //esquerda
	  line(370, 380, 370, 455); //direita
	  line(230, 455, 370, 455); //baixo
	  line(230, 380, 370, 380); //cima
  }

  //tela de ajuda
  if(tela == 3){

  	ajuda();

  }

  //tela de crédito
  if(tela == 4){

  	credito();

  }
	
}
//window.onload = function () { audio2.loop(true) }
function mouseMoved() {
  if(tela == 0){
	  
	  audio2.loop();
  }
}
