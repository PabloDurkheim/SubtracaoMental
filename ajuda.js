function ajuda(){
	
		background(img);
		
		textSize(30);
		textStyle(BOLD);
		//textFont("Times New Roman");
		stroke("#01A9DB");
		strokeWeight(5)
		text("AJUDA", 250, 40);

		textStyle(NORMAL);
		fill("#F7D358");
		stroke("#000000");
		strokeWeight(3);
		textSize(17);
		//textFont("Times New Roman");
		//strokeWeight(3);
		//stroke("#000000");
		text("SUBTRAÇÃO MENTAL é um jogo educacional desenvolvido para\ncrianças do 3º ano do ensino fundamental I. A cada fase você\ndeverá calcular a subtração que se pede e marcar a opção correta.\nAlém disso, existe um tempo para resolver a subtração. São 10 fases,\ntenha bastante paciência.", 40, 120)
		text("3º ano do ensino fundamental I.", 80, 260);
		text("Matemática.", 125, 300);
		text("- (EF03MA11) Compreender a ideia de igualdade para escrever\ndiferentes sentenças de adições ou de subtrações de dois números\nnaturais que resultem na mesma soma ou diferença.", 50, 380);
		text("- (EF03MA06) Resolver e elaborar problemas de adição e subtração\ncom os significados de juntar, acrescentar, separar, retirar, comparar\ne completar quantidades, utilizando diferentes estratégias de cálculo\nexato ou aproximado, incluindo cálculo mental.",50, 450);
		
		fill("#FFFFFF");
		strokeWeight(5);
		text("Ano:", 40, 260);
		text("Disciplina:", 40, 300);
		text("Habilidades:", 40, 340);

		
		if((mouseX >= 20 & mouseX <= 125) && (mouseY >= 15 && mouseY <= 60) && (tela == 3 || tela == 4)){

			fill("#FFFFFF");
			textSize(20);
			//strokeWeight(5);
			stroke("#01A9DB");
			strokeWeight(1)
			text("Voltar", 45, 45);
		
	    	strokeWeight(1);
	    	stroke("#00FFFF");
	    	line(20, 15, 20, 60); //esquerda
	    	line(125, 15, 125, 60); //direita
	    	line(20, 60, 125, 60); //baixo
	    	line(20, 15, 125, 15); //cima
			

		}else{

			fill("#FFFFFF");
			textSize(20);
			//strokeWeight(5);
			stroke("#01A9DB");
			strokeWeight(1)
			text("Voltar", 45, 45);
		
	    	strokeWeight(1);
	    	stroke("#FF8000");
	    	line(20, 15, 20, 60); //esquerda
	    	line(125, 15, 125, 60); //direita
	    	line(20, 60, 125, 60); //baixo
	    	line(20, 15, 125, 15); //cima
		

		}

		
	
}
