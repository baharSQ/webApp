//function zoomIn(x) {

        //  $(x).css("background-size", "140%");

//        $(x).animate({background-size: '140%'},3000);
//}

$(document).ready(function(){
  $('.bgimg').mouseover(function(){$(this).animate({backgroundSize: '120%'},900)});
  $('.bgimg').mouseout(function(){$(this).stop().css({backgroundSize: '100%'})});

})


//function zoomOut(x) {

//          $(x).css("background-size", "100%");
//}
//$(document).ready(function(){
//  $('#a').mouseout(function(){$(this).animate({backgroundSize: '100%'})});
//})
