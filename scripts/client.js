$(document).ready(function() {
    console.log('jq');
    $('.resume').hide();

    $('.center-cover-element').hover(function() {
        console.log('hovering');

        $('.top-cover-element').animate({
            bottom: '100%'
        }, 'slow');
        $('.bottom-cover-element').animate({
            top: '100%'
        }, 'slow');
        $('.center-cover-element').fadeOut('slow');
        $('.resume').fadeIn('slow');
    });

    $()
});
