$("#reset").click(function(){
	//close pasport as always
	$("#passport").hide(500, "swing", function(){

		//brands then eyeshadow
		$.each((window.brands), function(value){	
			document.getElementById(window.brands[value]).style.display = "block";
		});

		//eyeshadows
		var allEyeshadows = document.getElementsByClassName("eyeshadow");
		for(var i = 0; i < allEyeshadows.length; i++){
			allEyeshadows[i].style.display = "inline-block";
		}

		//palette titles
		$.each(document.getElementsByClassName('palette-title'), function(key, value){
			this.style.display = "block";
		});
	});

	this.style.display = "none";
});