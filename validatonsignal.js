$(document).ready(function() {
    $('#email-input').on('input', function() {
        const val = $(this).val();
        const hasAtSymbol = val.includes('@');
        const isFullValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        const $tick = $('#tick-icon');
        const $cross = $('#cross-icon');

        if (val === "") {
            $('.validation-icon').fadeOut(100);
            $(this).css('border-color', '#ced4da');
        } 
        else if (isFullValid) {
            // SUCCESS: Green Tick
            $cross.hide();
            // We use fadeIn for the smooth entrance
            $tick.fadeIn(300).css('color', '#28a745'); 
            $(this).css('border-color', '#28a745');
        } 
        else if (!hasAtSymbol) {
            // ERROR: Red Cross (Forced Color)
            $tick.hide();
            // Using .attr to force the Red color over the "ash" gray
            $cross.fadeIn(300).attr('style', 'color: #dc3545 !important; display: inline-block;');
            $(this).css('border-color', '#dc3545');
        } 
        else {
            // NEUTRAL/INCOMPLETE: Yellow warning
            $tick.hide();
            $cross.fadeIn(300).attr('style', 'color: #ffc107 !important; display: inline-block;');
            $(this).css('border-color', '#ffc107');
        }
    });
});




// the button logic to display the popups //



$(document).ready(function() {
    
    // 1. Validation Logic (Icons)
    $('#email-input').on('input', function() {
        const val = $(this).val();
        const hasAtSymbol = val.includes('@');
        const isFullValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        const $tick = $('#tick-icon');
        const $cross = $('#cross-icon');

        if (val === "") {
            $('.validation-icon').hide();
            $(this).css('border-color', '#ced4da');
        } else if (isFullValid) {
            $cross.hide();
            $tick.fadeIn(200).css('color', '#28a745'); 
            $(this).css('border-color', '#28a745');
        } else {
            $tick.hide();
            // Force red color to override any "ash" gray styles
            $cross.fadeIn(200).attr('style', 'color: #dc3545 !important; display: inline-block;');
            $(this).css('border-color', '#dc3545');
        }
    });

    // 2. Submit Button Logic (The Popups)
    $('#submit-btn').on('click', function(e) {
        // This is the CRITICAL line that stops the page from refreshing 
        e.preventDefault(); 
        
        const emailValue = $('#email-input').val().trim();

        if (emailValue !== "") {
            // Show the blurred background overlay
            $('#modal-container').css('display', 'flex').hide().fadeIn(300);

            if ($('#tick-icon').is(':visible')) {
                $('#success-box').show();
                $('#error-box').hide();
            } else {
                $('#error-box').show();
                $('#success-box').hide();
            }
        }
    });

    // 3. Close Logic
    $('.close-btn').on('click', function() {
        $('#modal-container').fadeOut(300);
    });
});