	
$(".ani--click").click(
  function() {
    $(this).toggleClass("mate");
  }
);


$(".ani--click-other").click(
  function() {
    $(".ani--click-byother").toggleClass("mate");
  }
);

