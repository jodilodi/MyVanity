$(document).ready(function(){
	var allBrandDiv = document.getElementById('AllBrands')
	$.each((window.brands), function(value){
		var newBrandDiv = document.createElement("a");
		newBrandDiv.href = "#";
		newBrandDiv.id = window.brands[value];
		newBrandDiv.classList.add("brand");

		var brandEyeshadowdiv = document.createElement("div")
		brandEyeshadowdiv.id = window.brands[value] + "div";
		brandEyeshadowdiv.classList.add("eyeshadow-display");
		// brandEyeshadowdiv.style.display = "none";
		brandEyeshadowdiv.style.width = "100%";


		allBrandDiv.appendChild(newBrandDiv);
		allBrandDiv.appendChild(brandEyeshadowdiv);

		//add brand title
		var title = document.createElement("h3");
		title.innerText = window.brands[value].replace( new RegExp("_", "g"), " ");
		
		var plusIcon = document.createElement("i");
		plusIcon.id = window.brands[value] + "icon";
		plusIcon.classList.add("fas");
		plusIcon.classList.add("fa-chevron-down");
		plusIcon.classList.add("brand-arrow");
		title.appendChild(plusIcon);
		
		newBrandDiv.appendChild(title);

		var brand = window.brands[value];
		$(newBrandDiv).on("click", brandToggle)
		var eyeShadows = window[brand];
		$.each((eyeShadows), function(key, value){
			//key == eyeshadowname
			//value == rgb
			var eyeshadow = document.createElement("div");
			eyeshadow.classList.add("eyeshadow");
			eyeshadow.classList.add(key.split(' ').join('_'))
			eyeshadow.classList.add(brand.split(' ').join('_'));
			
		//eyeshadow.innerText = key;
			eyeshadow.style.backgroundColor = value;
			eyeshadow.style.width = "50px";
			eyeshadow.style.height = "50px";
			eyeshadow.style.color = value;
			eyeshadow.style.overflow = "hidden";

		//check finish
			eyeshadowDetails = findEyeshadow(key, brand.split('_').join(' '));
			if(eyeshadowDetails.finish == "satin" || eyeshadowDetails.finish == "pearl"){
				var image = document.createElement("img");
				image.src = "images/satin.png";
				image.classList.add("satin_image");
				eyeshadow.appendChild(image);
			}else if (eyeshadowDetails.finish != "matte"){
				var image = document.createElement("img");
				image.src = "images/sparkle.png";
				image.classList.add("sparkle_image");
				eyeshadow.appendChild(image);
			}

			brandEyeshadowdiv.appendChild(eyeshadow);

			$(eyeshadow).on("click", showPassport);
		});
	});
});