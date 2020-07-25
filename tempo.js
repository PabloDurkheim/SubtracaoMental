function tempo(){

	frameRate(1);

	strokeWeight(3);
    stroke("#086A87");
	textSize(60);
	fill("#FFFFFF");
	//textFont("Geórgia");

	if (nivel == 1 && temp1 >= 0) {
		
		if(temp1 < 10){
			
			text("0"+temp1, 267, 570);
			
		}else{

			text(temp1, 267, 570);

		}


		setInterval(temp1--, 1000)

		if(temp1 == -1){

			tela = 6;

		}

		
	}
	
	if (nivel == 2) {

		if(temp2 < 10){
			
			text("0"+temp2, 267, 570);
			
		}else{

			text(temp2, 267, 570);

		}

		setInterval(temp2--, 1000)

		if(temp2 == -1){

			tela = 6;
		}


	}

	if (nivel == 3) {
		
		if(temp3 < 10){
			
			text("0"+temp3, 267, 570);
			
		}else{

			text(temp3, 267, 570);

		}


		setInterval(temp3--, 1000)

		if(temp3 == -1){

			tela = 6;

		}
		
	}
	
	if (nivel == 4) {

		if(temp4 < 10){
			
			text("0"+temp4, 267, 570);
			
		}else{

			text(temp4, 267, 570);

		}

		setInterval(temp4--, 1000)

		if(temp4 == -1){

			tela = 6;

		}

	}

	if (nivel == 5) {
		
		if(temp5 < 10){
			
			text("0"+temp5, 267, 570);
			
		}else{

			text(temp5, 267, 570);

		}

		setInterval(temp5--, 1000)

		if(temp5 == -1){

			tela = 6;

		}
		
	}
	
	if (nivel == 6) {

		if(temp6 < 10){
			
			text("0"+temp6, 267, 570);
			
		}else{

			text(temp6, 267, 570);

		}

		setInterval(temp6--, 1000)

		if(temp6 == -1){

			tela = 6;

		}

	}

	if (nivel == 7) {
		
		if(temp7 < 10){
			
			text("0"+temp7, 267, 570);
			
		}else{

			text(temp7, 267, 570);

		}

		setInterval(temp7--, 1000)

		if(temp7 == -1){

			tela = 6;

		}
		
	}
	
	if (nivel == 8) {

		if(temp8 < 10){
			
			text("0"+temp8, 267, 570);
			
		}else{

			text(temp8, 267, 570);

		}

		setInterval(temp8--, 1000)

		if(temp8 == -1){

			tela = 6;

		}

	}

	if (nivel == 9) {
		
		if(temp9 < 10){
			
			text("0"+temp9, 267, 570);
			
		}else{

			text(temp9, 267, 570);

		}

		setInterval(temp9--, 1000)

		if(temp9 == -1){

			tela = 6;

		}
		
	}
	
	if (nivel == 10) {

		if(temp10 < 10){
			
			text("0"+temp10, 267, 570);
			
		}else{

			text(temp10, 267, 570);

		}

		setInterval(temp10--, 1000)

		if(temp10 == -1){

			tela = 6;

		}

	}

}

