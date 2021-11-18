$(document).ready(function() {
    $(".bota_sidebar_toggler").addClass($.cookie("body_class")); //do this on load. if class exusts, will add value.
    $(".bota_sidebar_toggler").click(function(e) {
        e.preventDefault();
        $("body").toggleClass(function(){
        //add class and cookie
        $(this).addClass("sidebar_closed");
        $.cookie("body_class", "sidebar_closed");
        },function(){
        $(this).removeClass("sidebar_closed");
        $.cookie("body_class", "");
        });
    });
 });
 