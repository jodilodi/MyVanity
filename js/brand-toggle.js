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
	icon.classList.remove("fa-chevron-down");
	icon.classList.add("fa-chevron-up");

}

function showEyeshadows(id){
	var brand = id; 
	var divtoadd = document.getElementById(brand + "div");

	//change icon to chevron up
	var icon = document.getElementById(id + "icon");
	icon.classList.add("fa-chevron-down");
	icon.classList.remove("fa-chevron-up");

	$(divtoadd).show(500,"swing");
}