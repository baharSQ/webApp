//function zoomIn(x) {

        //  $(x).css("background-size", "140%");

//        $(x).animate({background-size: '140%'},3000);
//}

$(document).ready(function(){
  $('#a').mouseenter(function(){$(this).animate({backgroundSize: '120%'},1000)});
  $('#a').mouseout(function(){$(this).stop().css({backgroundSize: '100%'})});

})

//function zoomOut(x) {

//          $(x).css("background-size", "100%");
//}
//$(document).ready(function(){
//  $('#a').mouseout(function(){$(this).animate({backgroundSize: '100%'})});
//})
