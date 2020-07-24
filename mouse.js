function mouseClicked() {
  
  //Tela inicial
  menu();
  
  verificaOndeClicou();
  
  
 
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