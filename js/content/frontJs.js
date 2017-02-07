/**
 * Creado por Xenon .
 * Autor: xnx
 * Date: 31/07/15
 * Time: 18:44
 */

var sliders = [];

$(document).ready(function () {


    $(".eFancyGallery").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        autoSize: false,
        width: '100%',
        height: 'auto',
        helpers: {
            overlay: {
                locked: false
            }
        }

    });
    // Keep the slider in a var so other themes can customize it

    $.each($('.eSliderBx'), function (k, v) {

        sliders.push($(v).bxSlider({
            useCSS: false,
            controls: false,
            auto: true,
            autoControls: false
        }))
    });

	$('#close_cookies_notification').click(function(e){
        $('#cookies_notification').hide();
    });

});
