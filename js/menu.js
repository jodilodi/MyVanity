// $("#show-favs").click(function(){
// 	// var values = {};
// 	var names = [];
// 	var keys = Object.keys(localStorage), i = keys.length;
// 	while(i--){
// 		if(localStorage.getItem(keys[i]) == 1){
			
// 			names.push(keys[i]);
// 		}
// 	}
// 	var allEyeshadows = document.getElementsByClassName("eyeshadow");
// 	for(var i = 0; i < allEyeshadows.length; i++){
// 		// console.log(allEyeshadows[i]);
// 		var thisbrand = allEyeshadows[i].parentElement.id.split('_').join(' ');
// 		// var thiseyeshadow = allEyeshadows[i].innerText;
// 		var thiseyeshadow = allEyeshadows[i].classList[1].split('_').join(' ');
// 		var line = thisbrand + " " + thiseyeshadow;
// 		if(names.includes(line)){
// 			allEyeshadows[i].style.display = "block";
// 		}
// 		else{
// 			allEyeshadows[i].style.display = "none";
// 		}
// 	}
// 	//check brand and see if they have any eyeshadows block display
// 	$.each((window.brands), function(value){
// 		var branddiv = document.getElementById(window.brands[value]);
// 		var count = 0;
// 		$(branddiv).children('.eyeshadow').each(function(){
// 			if($(this)[0].style.display == "block"){
// 				count++;
// 			}
// 		});
// 		if(count == 0){
// 			$(branddiv).hide(500, "swing");
// 		}
// 	});
// });
// $("#show-all").click(function(){
	
// 	var allEyeshadows = document.getElementsByClassName("eyeshadow");
// 	for(var i = 0; i < allEyeshadows.length; i++){
// 		allEyeshadows[i].style.display = "block";
		
// 	}
// 	$.each((window.brands), function(value){
// 		var branddiv = document.getElementById(window.brands[value]);
// 		$(branddiv).show(500, "swing");
// 	});
// });

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
	});

	this.style.display = "none";
});