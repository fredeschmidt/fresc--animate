
$( ".ani--hover" )
.mouseenter(function() {
	$( this ).addClass("mate");
})
.mouseleave(function() {
	$( this ).removeClass("mate");
});



$( ".ani--hover-other" )
.mouseenter(function() {
	$(".ani--hover-byother").addClass("mate");
})
.mouseleave(function() {
	$(".ani--hover-byother").removeClass("mate");
});