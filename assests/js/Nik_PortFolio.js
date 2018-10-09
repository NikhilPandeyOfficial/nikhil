var arr = ['primary', 'secondary', 'info', 'dark', 'danger', 'warning', 'success']
var arr1 = ['lobster', 'Indie Flower', 'Pacifico'];








$(".fa-plus").click(function(){
	$(".forming").toggle();

});

$(".forming").on("click", ".btn-primary", function(event){
	var visiterName = $(".Name").val();
	var visiterComment = $(".Comment").val();
	if(visiterName.length >= 1 && visiterComment.length >= 1){
		var randomColor = arr[Math.floor(Math.random() * 7)];
		var textStyle = arr1[Math.floor(Math.random() * 3)];
		$(".Name").val("");
		$(".Comment").val("");
		$("ul .cardList").append("<li><div class='card text-white bg-"+ 
			randomColor +" mb-3' style='font-family: " + textStyle +" !important'><div class='card-header'>" + visiterName
			 + "</div><div class='card-body'><p class='card-text'>" + 
			 visiterComment + "</p></div></div></li>");
		// $("ul").append("<li><span>")
		event.stopPropagation();	
	}
	else{
		alert("Please fill out empty fields and then re-submit!")
	}
});