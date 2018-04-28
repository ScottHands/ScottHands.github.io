
$(document).ready(function() {
	var height = $(window).height();

    $('#header').css('height', height);
	   

    //Scrollspy plugin
    $('body').scrollspy({ target: '.navbar-spy'});


});