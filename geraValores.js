function gerarSubtracaoNoInicio(){
	
	strokeWeight(3);
    stroke("#FF8000");
	fill(titulos);
	textSize(25);
	
	//if(nivel < 6){
	if(subt1 > 9999 || subt2 > 9999){

		textSize(23)
		text("= "+subt1+" - "+subt2, 395, 40);

	}else{

		if(subt1 > 999 || subt2 > 999){

				//textSize(20);
				text("= "+subt1+" - "+subt2, 420, 40);

			}else{

				if((subt1 >= 100 && subt1 <= 999) || (subt1 >= 100 && subt1 <= 999)){

					text("= "+subt1+" - "+subt2, 460, 40);		

				}else{

						text("= "+subt1+" - "+subt2, 440, 40);

				}

		}

	}
		
}
	


	

function gerarSubtracaoJaIniciado(){

	frameRate(900);
	strokeWeight(3);
    stroke("#FF8000");
	fill(titulos);

	if(tela == 1){
	
	//if(nivel < 6){

		subt1 = parseInt(Math.random(0, 10)*vezes);
		subt2 = parseInt(Math.random(0, 10)*vezes);	

	//}else{

	//	subt1 = parseInt(Math.random(0, 10)*vezes*(-1));
	//	subt2 = parseInt(Math.random(0, 10)*vezes*(-1));

		//alert(subt1+" "+subt2);
	//}
		
		
	}
	
	
}

function subtracaoPositivaOuNegativa(){
	
	//gerar uma subtração com resultado positivo;
  while((subt2 > subt1)){
	  
	  subt1 += vezes;
	  
  }
  
  //while((subt2 < subt1) && nivel > 5){
	  
	  //alert(subt2+" "+subt1);
	  //subt2 -= -vezes;
	  
  //}
	
}

//armazena valores no vetor
function gerarValores(){

	//if(nivel < 6){


		for(var i = 0; i < 9; i++ ){
	  
			valores[i] = parseInt(Math.random(0, 20)*vezes);
    
		}

	//}else{

	//	for(var i = 0; i < 9; i++ ){
	  
	//		valores[i] = parseInt(Math.random(0, 20)*vezes*(-1));
    
	//	}

		//alert("teste")

	//}

}


function escolheOndeFicaOResultado(){
	
	var escolha = parseInt(Math.random(0, 8)*10)
		
		if(escolha == 9){
			escolha--;
		}
		
		valores[escolha] = subt1 - subt2;
		
		//alert("Posição: "+escolha+" valor: "+valores[escolha]);
}

function respCertaOuErrada(){
	
	if(respostaCorreta == 1){
		
		//fill("#81BEF7");
		//text("Resposta correta!", 100, 550);
		
		nivel++;
		respostaCorreta = 0;
		
		audio4.play(true);
		
		if(nivel == 11){
			
			tela = 5;
			
		}
	}
	
	if(respostaErrada == 1){
		
		temp1 = 10;
		temp2 = 11;
		temp3 = 12;
		temp4 = 13;
		temp5 = 14;
		temp6 = 15;
		temp7 = 16;
		temp8 = 17;
		temp9 = 18;
		temp10 = 20;

		vida--;
		//text("Resposta errada!", 100, 550);

		respostaErrada = 0;
		
		audio3.play(true);
		
		if(vida == 0){
			
			tela = 6;
			
		}
		
	}
	
}
