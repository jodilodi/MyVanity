$(document).ready(function(){
	var message = document.getElementById("site-message");
	var dt = new Date();
	if(message != null){
		if(dt.getHours() < 12 ){
			message.innerText = "Good Morning";
		}else if (dt.getHours() < 17){
			message.innerText = "Good Afternoon";
		}else{
			message.innerText = "Good Evening";
		}
	}
});