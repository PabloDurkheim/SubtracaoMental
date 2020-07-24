//tela inicial
function menu(){
	
	//inicia o jogo
	if((mouseX >= 230 && mouseX <= 370) && (mouseY >= 180 && mouseY <= 245) && tela == 0){
		
		clear();
		tela = 1;
		
		audio2.stop();
		audio1.loop(true);
		
	}
	
	//vai para a tela de ajuda
	if((mouseX >= 230 && mouseX <= 370) && (mouseY >= 280 && mouseY <= 355) && tela == 0){
		
		tela = 3;
				
	}
	
	//vai para a tela de Créditos
	if((mouseX >= 230 && mouseX <= 370) && (mouseY >= 380 && mouseY <= 455) && tela == 0){
		
		tela = 4;		
		
	}
	
	//volta para menu
	if((mouseX >= 20 & mouseX <= 125) && (mouseY >= 15 && mouseY <= 60) && (tela == 3 || tela == 4)){
			
			clear();
			tela = 0;
			
	}
		
	
}

