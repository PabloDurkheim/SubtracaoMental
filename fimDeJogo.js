//tela de fim
function fim(fimDeJogo){
	
	if(fimDeJogo == "venceu"){
		
		clear();
		
		tela = 2;
		background(img);
		//alert("venceu");
		fill("#FFFFFF");
		textSize(45);
		text("Parabéns você venceu!", 45, 300);
		
	}
	
	if(fimDeJogo == "derrotado"){
		
		clear();
		
		tela = 2;
		background(img);
		//alert("venceu");
		fill("#FFFFFF");
		textSize(45);
		text("Que pena, você perdeu!", 40, 300);
		
	}
	
}