
function credito(){

		background(img);
		//alert("venceu");
		textSize(30);
		//textFont("AR DESTINE");
		textStyle(BOLD);
		stroke("#01A9DB");
		strokeWeight(5);
		text("CRÉDITOS", 230, 40);

		fill("#F7D358");
		stroke("#000000");
		strokeWeight(3);
		textSize(15);
		//textFont("Times New Roman");
		textStyle(NORMAL);
		//strokeWeight(3);
		//stroke("#000000");
		
		image(educ1, 40, 300, 100, 120);
		text("Crisliane Tomaz", 40, 440)

		text("- Crisliane Tomaz Belchior da Silva - Licenciada em Pedagogia.", 60, 130);

		image(educ2, 160, 300, 100, 120);
		text("Edilma Fernandes", 160, 440)

		text("- Edilma Fernandes da Rocha Silva - Licenciada em Pedagogia.", 60, 160);

		image(ajud1, 300, 300, 100, 120);
		text("Eduarda Lins", 300, 440);

		image(ajud2, 420, 300, 100, 120);
		text("Vanessa Maria", 420, 440);

		text("- Eduarda de Souza Lins.", 60, 230);
		text("- Vanessa Maria de Oliveira Silva.", 60, 260);

		text("Pablo Durkheim Fernandes do Nascimento.", 120, 530);

		image(eu, 420, 470, 100, 100);
		text("Pablo Durkheim", 420, 590);

		fill("#FFFFFF");
		strokeWeight(5);
		text("Educador(a):", 40, 100);
		text("Pessoas que ajudaram/opinaram na criação do design: ", 40, 200);
		text("Criado por:", 40, 530);

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