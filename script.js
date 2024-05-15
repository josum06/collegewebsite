// Select all buttons with class "newpage"
const buttons = document.querySelectorAll('.newpage');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const link = button.getAttribute('data-link');
        
        // Redirect to the page specified by the button's data-link attribute
        window.location.href = link;
    });
});
