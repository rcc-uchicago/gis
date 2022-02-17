jQuery(window).load(function() {

    /* Navigation */

    jQuery('#main-menu > ul').superfish({
        delay: 500, // 0.1 second delay on mouseout 
        animation: { opacity: 'show', height: 'show' }, // fade-in and slide-down animation 
        dropShadows: true // disable drop shadows 
    });

    jQuery('#main-menu > ul').mobileMenu({
        prependTo: '.mobilenavi'
    });

    // Add minus icon for collapse element which is open by default
    jQuery(".collapse.in").each(function() {
        jQuery(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    jQuery(".collapse").on('show.bs.collapse', function() {
        jQuery(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hide.bs.collapse', function() {
        jQuery(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });

});


(function() {
    var is_webkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
        is_opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
        is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

    if ((is_webkit || is_opera || is_ie) && 'undefined' !== typeof(document.getElementById)) {
        var eventMethod = (window.addEventListener) ? 'addEventListener' : 'attachEvent';
        window[eventMethod]('hashchange', function() {
            var element = document.getElementById(location.hash.substring(1));

            if (element) {
                if (!/^(?:a | select | input | button | textarea)jQuery/i.test(element.tagName))
                    element.tabIndex = -1;

                element.focus();
            }
        }, false);
    }
})();