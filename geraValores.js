function gerarSubtracaoNoInicio(){
	
	strokeWeight(3);
    stroke("#FF8000");
	fill(titulos);
	textSize(25);
	
	//if(nivel < 6){

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
			
			fim("venceu");
			
		}
	}
	
	if(respostaErrada == 1){
		
		temp1 = 20;
		temp2 = 25;
		temp3 = 30;
		temp4 = 40;
		temp5 = 50;
		temp6 = 60;
		temp7 = 70;
		temp8 = 80;
		temp9 = 90;
		temp10 = 99;

		vida--;
		//text("Resposta errada!", 100, 550);

		respostaErrada = 0;
		
		audio3.play(true);
		
		if(vida == 0){
			
			fim("derrotado");
			
		}
		
	}
	
}