$(document).ready(function() {
    if($.cookie("sidebar_toggler") == 1)
        {
            $("body").addClass("sidebar_closed");
        }

        $(".bota_sidebar_toggler").click(function() { 
           //your previous code here
           if($("body").hasClass("sidebar_closed") == true)
           {
               //button was active, de-activate it and update cookie
               $("body").removeClass("sidebar_closed");
               $.cookie("sidebar_toggler", "0");
           }
           else
           {
               //button is not active. add active class and update cookie.
               $("body").addClass("sidebar_closed");
               $.cookie("sidebar_toggler", "1");

           }
        });
 });
 