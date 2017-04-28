function showNext(i) {
    setTimeout(function() {
        $('#li' + i).css({
            "left": "-4px"
        });
        if (i <= 19) {
            showNext(i + 1);
        }
    }, 100);
   
}
function hiddenNext(i) {

    setTimeout(function() {
        $('#li' + i).css({
            "left": "-64px"
        });
        if (i <= 19) {
            hiddenNext(i + 1);
        }
    }, 100);

}
window.onload = function() {



    $("#navbar-button").click(function() {
    		
        setTimeout(function() {
        	$('#navbar-menu').css({
                "z-index": "2"
            });
            $('#navbar-close-menu').css({
                "left": "0"
            });
        }, 100);

        $(window).on("orientationchange",function(){
  if(window.orientation == 0) // Portrait
  {
    setTimeout(function() {
        	$('#menu').css({
                "overflow-y": "hidden"
            });
        }, 1200);
  }
  else // Landscape
  {
    setTimeout(function() {
        	$('#menu').css({
                "overflow-y": "scroll"
            });
        }, 1200);
  }
});

        showNext(0)
    });
    $("#navbar-close-menu").click(function() {
        setTimeout(function() {
        $('#li7').css({
            "left": "-64px"
        });
        	$('#navbar-menu').css({
                "z-index": "-2"
            });
            $('#navbar-close-menu').css({
                "left": "-60px"
            });
        }, 100);

        hiddenNext(0)
    });

    $("#search-button").click(function() {
            $('#search-content').css({
                "right": "0"
            });
        
    });
    $("#search-close").click(function() {
            $('#search-content').css({
                "right": "-100%"
            });
        
    });
};




    

$(function() {
  $('li').click(function() {
    $('li').removeClass('active');
    $(this).addClass('active');
    recalculate();
  });
  recalculate();
});

$(window).resize(function () {
    $(function() {
  $('li').click(function() {
    $('li').removeClass('active');
    $(this).addClass('active');
    recalculate();
  });
  recalculate();
});
});



$( "#feeds" ).load( "index.html" );