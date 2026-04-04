/* ==========================================================
   DARK MODE LOGIC FOR BB8 TOGGLE (jQuery)
   ========================================================== */

$(document).ready(function() {
    const $body = $('body');
    const $checkbox = $('.bb8-toggle__checkbox');

    // 1. INITIAL LOAD
    if (localStorage.getItem('theme') === 'dark') {
        $body.addClass('dark-mode');
        $checkbox.prop('checked', true); // Moves droid to right & shows stars
    }

    // 2. TOGGLE EVENT
    $checkbox.on('change', function() {
        if ($(this).is(':checked')) {
            $body.addClass('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            $body.removeClass('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});