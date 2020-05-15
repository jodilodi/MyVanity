$(document).ready(function(){
	var allBrandDiv = document.getElementById('AllBrands')
	$.each((window.brands), function(value){
		var newBrandDiv = document.createElement("a");
		newBrandDiv.href = "#";
		newBrandDiv.id = window.brands[value];
		newBrandDiv.classList.add("brand");

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
		allBrandDiv.appendChild(newBrandDiv);
		$(newBrandDiv).on("click", brandToggle)


		//WHERE EYESHADOWS GO
		var brandEyeshadowdiv = document.createElement("div")
		brandEyeshadowdiv.id = window.brands[value] + "div";
		brandEyeshadowdiv.classList.add("eyeshadow-display");
		// brandEyeshadowdiv.style.display = "none";
		brandEyeshadowdiv.style.width = "90%";
		brandEyeshadowdiv.style.margin = "auto";
		allBrandDiv.appendChild(brandEyeshadowdiv);

		

		var brand = window.brands[value];
		

		//add palette names
		var palettes = paletteNames[brand.split('_').join(' ')];
		$.each((palettes), function(key, value){
			var paletteTitle = document.createElement("h5");
			paletteTitle.innerText = value;
			paletteTitle.classList.add("palette-title")

			brandEyeshadowdiv.appendChild(paletteTitle);

			//add eyeshadow by brand, palette
			allEyeshadows = findEyeshadows(brand.split('_').join(' '), value);
			$.each((allEyeshadows), function(key, value){

				rgb = findEyeshadowRGB(value.name, value.brand.split(' ').join('_'));

				var eyeshadow = document.createElement("div");
				eyeshadow.classList.add("eyeshadow");
				eyeshadow.classList.add(value.name.split(' ').join('_'))
				eyeshadow.classList.add(value.brand.split(' ').join('_'));
			//eyeshadow.innerText = key;
				eyeshadow.style.backgroundColor = rgb;
				eyeshadow.style.width = "50px";
				eyeshadow.style.height = "50px";
				eyeshadow.style.color = rgb;
				eyeshadow.style.overflow = "hidden";

				//check finish
				eyeshadowDetails = value;
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

				brandEyeshadowdiv.append(eyeshadow);
				$(eyeshadow).on("click", showPassport);
			});
		});

	});
});