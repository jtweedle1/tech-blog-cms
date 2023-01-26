console.log("js connected")
$(window).scroll(function(){
    $("#div").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
  });

  $(window).scroll(function(){
    $("#divv").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
  });