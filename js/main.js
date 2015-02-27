
(function(){

  var parallax = document.querySelectorAll(".header"),
      speed = -0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();


function cycleImages(){
      var $active = $('.cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('.cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 5s
setInterval('cycleImages()', 5000);
})

function cycleImages2(){
      var $active = $('.cycler2 .active2');
      var $next = ($active.next().length > 0) ? $active.next() : $('.cycler2 img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active2');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active2');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 5s
setInterval('cycleImages2()', 6000);
})

function cycleImages3(){
      var $active = $('.cycler3 .active3');
      var $next = ($active.next().length > 0) ? $active.next() : $('.cycler3 img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active3');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active3');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 5s
setInterval('cycleImages3()', 7000);
})
