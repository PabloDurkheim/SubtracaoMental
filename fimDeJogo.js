//tela de fim


function venceu(){
		
		background(img);

		fill("#CEF6F5");
		rect(40, 30, 520, 70);
		fill("#FFFFFF");
		rect(50, 40, 500, 50);
		stroke("#FFFFFF");
		strokeWeight(1);
		line(255, 490, 345, 490);
		line(255, 580, 345, 580);
		line(255, 490, 255, 580);
		line(345, 490, 345, 580);

		//alert("venceu");
		fill("#FFFFFF");
		stroke("#071418");
		textStyle(BOLD);
		strokeWeight(3);
		textSize(40);
		text("Parabéns, você venceu!", 70, 77);

		image(img3, 190, 182, 220, 200);
		image(img5, 265, 500, 70, 70);	


		audio1.stop(true);
		audio5.loop(true);


}

function perdeu(){
		
		background(img);

		fill("#CEF6F5");
		rect(40, 30, 520, 70);
		fill("#FFFFFF");
		rect(50, 40, 500, 50);
		stroke("#FFFFFF");
		strokeWeight(1);
		line(255, 490, 345, 490);
		line(255, 580, 345, 580);
		line(255, 490, 255, 580);
		line(345, 490, 345, 580);

		//alert("venceu");
		fill("#FFFFFF");
		stroke("#071418");
		textStyle(BOLD);
		strokeWeight(3);
		textSize(40);
		text("Que pena, você perdeu!", 70, 77);

		image(img4, 190, 182, 220, 200);
		image(img5, 265, 500, 70, 70);	

		audio1.stop(true);
		audio6.loop(true);

}
