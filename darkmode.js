/* ==========================================================
   DARK MODE LOGIC FOR ALL PAGES
   ========================================================== */

   $(document).ready(function() {
    // 1. INITIAL CHECK (The Memory)
    // Check if dark mode was previously saved in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        updateToggleButton(true);
    }

    // 2. THE CLICK EVENT
    $('#darkModeToggle').on('click', function() {
        // Toggle the class on the body
        $('body').toggleClass('dark-mode');

        // Check if the body now has the class
        const isDark = $('body').hasClass('dark-mode');

        // Save the choice in localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Update the button UI
        updateToggleButton(isDark);
    });

    // 3. UI UPDATE FUNCTION
    function updateToggleButton(isDark) {
        if (isDark) {
            $('#toggleText').text('Light Mode');
            $('#darkModeToggle i').attr('class', 'fa-solid fa-sun'); // Attribute Modification
        } else {
            $('#toggleText').text('Dark Mode');
            $('#darkModeToggle i').attr('class', 'fa-solid fa-moon'); // Attribute Modification
        }
    }
});