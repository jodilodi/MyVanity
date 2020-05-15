$(document).ready(function(){
	var gotoBrandMenu = [];
	$.each((window.brands), function(key, value){					
		// console.log(value[0].toUpperCase());
		if(!gotoBrandMenu.includes(value[0].toUpperCase())){
			gotoBrandMenu.push(value[0].toUpperCase());
		}
	});

	var GoToDiv = document.getElementById("GoToDiv");
	GoToDiv.innerText = "Go To: ";
	$.each((gotoBrandMenu), function(key, value){
		var gotoLink = document.createElement("a");
		gotoLink.href = "#";
		gotoLink.innerText = value;
		gotoLink.classList.add("GoToLetter");
		GoToDiv.appendChild(gotoLink);

		$(gotoLink).on('click', function(){
			var letter = this.innerText;
			var brandsDiv = document.getElementsByClassName("brand");
			$.each((brandsDiv), function(key,value){
				if(value.id[0].toUpperCase() == letter){
		 			$('html, body').animate({scrollTop: $(this).offset().top}, 'slow');
		 		return false;
				}
			});
		});
		
	});
});