var eyeshadowinfo;
function showPassport(e){
	eyeshadowDetails = findEyeshadow(this.classList[1].split('_').join(' '));
		passport = document.getElementById("passport");
		eyeshadowinfo = this;
	passport_sparkle_image = document.getElementById("passport_image_sparkle");
					
					//get local storage
	var brand = eyeshadowDetails.brand;
	var name = eyeshadowinfo.classList[1].split('_').join(' ');
	var line = "fav_" + brand + "_" + name;
	var result = 0;
	if(localStorage[line]){
		result = localStorage[line];
	}

	var likeicon = document.getElementById("passport-like-icon");
	if(result == 1){
	likeicon.classList.remove("far");
	likeicon.classList.add("fas");
	}else{
		likeicon.classList.remove("fas");
		likeicon.classList.add("far");
	}


	if(passport.style.display == "block"){
		$(passport).hide(500, "swing", populatePassport);
	}else{
		populatePassport();
	}
}
function populatePassport(){
	passport.style.position = "absolute";
	passport.style.left = (eyeshadowinfo.getBoundingClientRect().left - 15) + "px";
	passport.style.top = (eyeshadowinfo.getBoundingClientRect().top - 65 + window.scrollY) + "px";

		// document.getElementById("passport-eyeshadow-name").innerText = eyeshadowinfo.innerText;
	document.getElementById("passport-eyeshadow-name").innerText = eyeshadowinfo.classList[1].split('_').join(' ');
	document.getElementById("passport-eyeshadow-color").style.backgroundColor = eyeshadowinfo.style.backgroundColor;
	document.getElementById("passport-palette-name").innerText = eyeshadowDetails.palette;
	document.getElementById("passport-brand-name").innerText = eyeshadowDetails.brand;
	document.getElementById("passport-finish-name").innerText = eyeshadowDetails.finish.charAt(0).toUpperCase() + eyeshadowDetails.finish.slice(1) + " Finish";

	if(eyeshadowDetails.finish == "satin" || eyeshadowDetails.finish == "pearl"){
		passport_sparkle_image.src = "images/satin.png";
		passport_sparkle_image.style.visibility = "visible";
	}else if (eyeshadowDetails.finish != "matte"){
		passport_sparkle_image.src = "images/sparkle.png";
		passport_sparkle_image.style.visibility = "visible";
	}else{
		passport_sparkle_image.style.visibility = "hidden";
	}
	$("#passport").show(500, "swing");
}

$("#passport-close-icon").click(function(e){
	$("#passport").hide(500, "swing");
});

$("#passport-like-icon").click(function(){
	//get brand and eyeshadow name
	var brand = document.getElementById("passport-brand-name").innerText;
	var name = document.getElementById("passport-eyeshadow-name").innerText;
	var line = "fav_" + brand + "_" + name;
	// localStorage.setItem();
	//toggle the value here
	//fas is solid
	//far is outline

	if (this.classList.contains("fas")){
		//go to 0
		localStorage.setItem(line, 0);
		//switch to far
		this.classList.remove("fas");
		this.classList.add("far");
	}
	else{
		//go to 1
		localStorage.setItem(line, 1);
		//switch to fas
		this.classList.remove("far");
		this.classList.add("fas");
	}
});

$("#passport-palette-icon").click(function(){
	document.getElementById("reset").style.display = "inline-block";

	//close the passport
	$("#passport").hide(500, "swing", function(){
	//get the palette and brand
		var palette = document.getElementById("passport-palette-name").innerText;
		var brand = document.getElementById("passport-brand-name").innerText;

		var allEyeshadows = document.getElementsByClassName("eyeshadow");
		for(var i = 0; i < allEyeshadows.length; i++){
			var thiseyeshadow = allEyeshadows[i].classList[1].split('_').join(' ');
			//find the palette
			var eyeshadowDetails = findEyeshadow(thiseyeshadow);
			console.log(eyeshadowDetails.palette);


			if(eyeshadowDetails.palette == palette && eyeshadowDetails.brand == brand){
				allEyeshadows[i].style.display = "inline-block";
			}else{
				allEyeshadows[i].style.display = "none";
			}
		}
		//check brand and see if they have any eyeshadows block display
		//well if brand is not the same as eyeshadow brand then hide
		$.each((window.brands), function(value){
			var branddiv = document.getElementById(window.brands[value]);
			// var count = 0;
			// console.log(window.brands[value]);
			if(window.brands[value] != brand){
				document.getElementById(window.brands[value]).style.display = "none";
			}
		});
	});//end of passport swing	
});