function mouseClicked() {
  
  //Tela inicial
  menu();
  
  if(tela == 1){

  		verificaOndeClicou();

  }else{

  		if(tela == 5 || tela == 6){

  			if(mouseX >= 255 && mouseX <= 355 && mouseY >= 490 && mouseY <= 580){

  				vida = 3;
  				nivel = 1;
  				vezes = 10;

  				subt1 = parseInt(Math.random(0, 10)*vezes);
				subt2 = parseInt(Math.random(0, 10)*vezes);	

				gerarValores();

				subtracaoPositivaOuNegativa();
 
				escolheOndeFicaOResultado();

				temp1 = 10;
				temp2 = 15;
				temp3 = 20;
				temp4 = 25;
				temp5 = 30;
				temp6 = 35;
				temp7 = 40;
				temp8 = 45;
				temp9 = 50;
				temp10 = 60;

  				audio5.stop();
  				audio6.stop();
  				audio2.loop();

  				tela = 0;

  				frameRate(600);

  			}
		}

  }
  
  if(tela == -1){

  	if(mouseX >= 170 && mouseX <= 425 && mouseY >= 250 && mouseY <= 320){

  				tela = 0;
  				audio2.loop();
  			

  		}

  }

}

function verificaOndeClicou(){
	
	for(var q = 0; q < quantObj; q++){
		
		//procura saber em qual dos 9 quadrados clicou
		if((mouseX >= hx[q] && mouseX <= hx[q]+80) && (mouseY >= hy[q] && mouseY <= hy[q]+80) && tela ==1){
  
 
				verificarResposta(valores[q]);
				
				gerarSubtracaoJaIniciado();
  
				subtracaoPositivaOuNegativa();
				
				gerarValores();
 
				escolheOndeFicaOResultado();
				
		}
		
		
	}
	
}

function verificarResposta(resposta){
	
	//se a resposta for certa
	if(((subt1 - subt2) == resposta) && tela == 1){
		
		//fill("#81BEF7");
		//text("Resposta correta!", 100, 500);
		
		respostaCorreta = 1;
		
		if(vezes >= 0){
		
			vezes *= 2;
			
		}//else{
			
			//vezes *= 2;
			
		//}
		
		
		
		
	}else{
		
		respostaErrada = 1;
		
		
	}
	
	respCertaOuErrada();
	
}
