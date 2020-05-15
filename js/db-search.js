function findEyeshadow(name, brand){
	for(var eyeshadow in allEyeshadowDetails){
		if(allEyeshadowDetails[eyeshadow].name == name && allEyeshadowDetails[eyeshadow].brand == brand){
			return allEyeshadowDetails[eyeshadow];
		}
	}
	return -1;
}	
			
function findEyeshadows(brand, palette){
	var found = [];
	for(var eyeshadow in allEyeshadowDetails){
		if(allEyeshadowDetails[eyeshadow].brand == brand && allEyeshadowDetails[eyeshadow].palette.trim() == palette.trim() ){
			found.push(allEyeshadowDetails[eyeshadow]);
		}
	}
	return found;
}		
function findEyeshadowRGB(name, brand){
	for(var eyeshadow in window[brand]){
		
		if(eyeshadow == name){
			return window[brand][eyeshadow];
		}
	}
	return -10;
}