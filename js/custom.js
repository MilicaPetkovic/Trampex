// sidr menu

$(document).ready(function() {
	$('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '#navigation',
      displace: false,
      side: 'right'
    });
    $('html').click(function(){
 		$.sidr('close', 'sidr-main');
    });
    $('#sidr-main').click(function(e){
		e.stopPropagation();
    });
});

	// show and hide navbar

    var nav = $('.top-header');
    var headerScroll = function() {

        var st = $(window).scrollTop();
        //console.log(st);
        if (st > 155) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
	};
    (function() {
        headerScroll();
        $(window).scroll(function () {
            headerScroll();
        });
    })();



