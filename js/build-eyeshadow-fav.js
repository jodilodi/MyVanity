$(document).ready(function(){
	var names = [];
	var keys = Object.keys(localStorage), i = keys.length;
	while(i--){
		if(localStorage.getItem(keys[i]) == 1 && keys[i].split('_')[0] == "fav"){
			
			names.push(keys[i]);
		}
	}
	//go through the favorite arrays
	for(i = 0; i < names.length; i++){
		var brand = names[i].split("_")[1];
		var eyeshadowname = names[i].split("_")[2];
		//create brand or if it exists use
		if(document.getElementById(brand) == null){
			//create element
			var allBrandDiv = document.getElementById('AllBrands');
			var newBrandDiv = document.createElement("div");
			newBrandDiv.id = brand;
			newBrandDiv.classList.add("brand");

			var brandEyeshadowdiv = document.createElement("div")
			brandEyeshadowdiv.id = brand + "div";
			brandEyeshadowdiv.classList.add("eyeshadow-display");
			//brandEyeshadowdiv.style.display = "none";
			brandEyeshadowdiv.style.width = "100%";

			allBrandDiv.appendChild(newBrandDiv);
			allBrandDiv.appendChild(brandEyeshadowdiv);

			//add brand title
			var title = document.createElement("h3");
			title.innerText = brand;// window.brands[value].replace( new RegExp("_", "g"), " ");
			
			newBrandDiv.appendChild(title);
		}//end of create brand div

		var divtoadd = document.getElementById(brand + "div");

		var eyeshadow = document.createElement("div");
		eyeshadow.classList.add("eyeshadow");
		eyeshadow.classList.add(eyeshadowname.split(' ').join('_'))
		eyeshadow.classList.add(brand.split(' ').join('_'));

		eyeshadow.style.backgroundColor = window[brand.split(' ').join('_')][eyeshadowname];
		eyeshadow.style.width = "50px";
		eyeshadow.style.height = "50px";
		eyeshadow.style.color = window[brand.split(' ').join('_')][eyeshadowname];
		eyeshadow.style.overflow = "hidden";

		//check finish
		eyeshadowDetails = findEyeshadow(eyeshadowname, brand);
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

		divtoadd.appendChild(eyeshadow);

		$(eyeshadow).on("click", showPassport);

	}//end of for loop
});