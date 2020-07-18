/*
// Right Click Disabled
document.onmousedown = disableclick;
    status = "Right click disabled.";
        function disableclick(e)
        {
            if(event.button == 2)
                {
                    alert(status);
                    return false;
                }
        }
*/

// ===== Scroll to Top ====
$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);                                // Scroll delay time
        return false;
    });
});

/*
//Start of Tawk.to Script
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5c7540553341d22d9ce62fec/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
//End of Tawk.to Script
*/
