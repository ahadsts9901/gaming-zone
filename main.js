document.addEventListener('DOMContentLoaded', function() {
    // Find the search form element
    let searchForm = document.getElementById('searchForm');
    let noResultsMessage = document.querySelector('.no-result');

    // Add event listener to the form's submit event
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve the value from the search input
        let searchInput = document.getElementById('searchInput');
        let searchTerm = searchInput.value.trim().toLowerCase();

        // Perform the search operation
        let foundResults = false;
        if (searchTerm !== '') {
            let gameLinks = document.querySelectorAll('.container a');
            gameLinks.forEach(link => {
                let gameName = link.querySelector('p').innerText.toLowerCase();
                if (gameName.includes(searchTerm)) {
                    link.style.display = 'flex';
                    foundResults = true;
                } else {
                    link.style.display = 'none';
                }
            });
        } else {
            // If search term is empty, show all game links
            let gameLinks = document.querySelectorAll('.container a');
            gameLinks.forEach(link => {
                link.style.display = 'flex';
            });
        }

        // Show/hide the message based on search results
        if (foundResults || searchInput.value === "") {
            noResultsMessage.style.display = 'none';
            noResultsMessage.style.opacity = '0';
        } else {
            noResultsMessage.style.display = 'block';
            noResultsMessage.style.opacity = '1';
        }
    });

    // Add event listener to the search input field
    let searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        // Trigger the form submission event to perform real-time search
        let submitEvent = new Event('submit');
        searchForm.dispatchEvent(submitEvent);
    });
});