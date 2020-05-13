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
		brandEyeshadowdiv.style.display = "none";
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
		title.appendChild(plusIcon);
		
		newBrandDiv.appendChild(title);

		
		$(newBrandDiv).on("click", brandToggle)
		
	});
});

function brandToggle(){
	var brand = this.id;
	//get eyeshadow div
	var div = document.getElementById(brand + "div");

	if(div.style.display == "none"){
		showEyeshadows(this.id);
	}else{
		hideEyeshadows(this.id);
	}

	return false;//this is important to maintain scroll position

}
function hideEyeshadows(id){
	var divtohide = document.getElementById(id + "div");
	$(divtohide).hide(500, "swing");
	//change icon to chevron up
	var icon = document.getElementById(id + "icon");
	icon.classList.add("fa-chevron-down");
	icon.classList.remove("fa-chevron-up");

}

function showEyeshadows(id){
	var brand = id;
	var divtoadd = document.getElementById(brand + "div");

	//change icon to chevron up
	var icon = document.getElementById(id + "icon");
	icon.classList.remove("fa-chevron-down");
	icon.classList.add("fa-chevron-up");

	if($(divtoadd).children().length > 0){
		$(divtoadd).show(500,"swing");
		return;
	}
	var eyeShadows = window[brand];
	$.each((eyeShadows), function(key, value){
		var eyeshadow = document.createElement("div");
		eyeshadow.classList.add("eyeshadow");
		eyeshadow.classList.add(key.split(' ').join('_'))
		//eyeshadow.innerText = key;
		eyeshadow.style.backgroundColor = value;
		eyeshadow.style.width = "50px";
		eyeshadow.style.height = "50px";
		eyeshadow.style.color = value;
		eyeshadow.style.overflow = "hidden";

		//check finish
		eyeshadowDetails = findEyeshadow(key);
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
	});
	$(divtoadd).show(500, "swing");
}