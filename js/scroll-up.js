$("#scrollUpDiv").on("click", function(){
	
	$('html, body').animate({scrollTop: 0}, 'slow');
});

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		$("#scrollUpDiv").show("slow", "swing");
	}else{
		$("#scrollUpDiv").hide("slow", "swing");
	}
}