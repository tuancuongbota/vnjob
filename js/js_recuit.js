$(document).ready(function() {
    var body_class = $.cookie('body_class');
    if(body_class) {
        $('body').addClass(body_class);
    }else {
        // We already know this cookie doesn't exists at this point, so instead of trying to remove it,
        // this is where you want to SET it.
        $.cookie('body_class', "sidebar_closed");
    }
    $(".bota_sidebar_toggler").click(function() {
        $("body").toggleClass("sidebar_closed");
        $.cookie('body_class', "sidebar_closed");
    });
 });