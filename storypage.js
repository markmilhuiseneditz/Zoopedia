$(document).ready(function() {

    // BLOCK: MODULAR NARRATION SYSTEM (7 PARTS)//

    
    // 1. Play/Pause Toggle btn
    
    $('.btn-play-pause').on('click', function() {
        // DOM Traversal: Find the closest card and the audio inside it
        const $card = $(this).closest('.animal-fact-card');
        const audio = $card.find('.narration-audio')[0];
        const $icon = $(this).find('i');

        // Stop all OTHER audios before playing this one (Optional but recommended)
        $('audio').not(audio).each(function() {
            this.pause();
            this.currentTime = 0;
            $(this).closest('.animal-fact-card').removeClass('playing-active');
            $(this).closest('.animal-fact-card').find('.btn-play-pause i').removeClass('fa-stop').addClass('fa-play');
        });

        if (audio.paused) {
            // JavaScript Effect: Play Audio
            audio.play();
            $icon.removeClass('fa-play').addClass('fa-stop'); // Change to the Square Box icon
            $card.addClass('playing-active'); // CSS Manipulation: Highlight box
        } else {
            // JavaScript Effect: Pause Audio
            audio.pause();
            $icon.removeClass('fa-stop').addClass('fa-play');
            $card.removeClass('playing-active');
        }

        // Reset icon when audio naturally ends
        audio.onended = function() {
            $icon.removeClass('fa-stop').addClass('fa-play');
            $card.removeClass('playing-active');
        };
    });

    // 2. Replay Function
    $('.btn-replay').on('click', function() {
        const $card = $(this).closest('.animal-fact-card');
        const audio = $card.find('.narration-audio')[0];
        
        // Reset and Play
        audio.currentTime = 0;
        $card.find('.btn-play-pause').click(); // Trigger the play logic above
        
        // JavaScript Effect: Visual flash to show restart
        $card.css('background', '#333').animate({backgroundColor: '#1a1a1a'}, 500);
    });
});