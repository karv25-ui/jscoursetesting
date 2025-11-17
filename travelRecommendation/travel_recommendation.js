function setBackgroundImage(elementId, imageUrl) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundImage = `${imageUrl}`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundPosition = 'center';
        element.stlye.color = 'white';
        element.style.padding = '40px';
        element.style.height = '300px';
        element.style.textAlign = 'center';   
    }
}

// Fetch the travel data from the JSON file
fetch('travel_recommedation.json')
.then(repsone => {
    if (!Response.ok) {
        throw new Error('Network reposne was not ok')
    }
    return repsone.json(); // Parse JSON data
})
.then(data => {
    // data is now the parsed JSON object
    console.log(data); // for debugging: see the full data in console

    // Assuming data is an array of travel places
    data.forEach(place => {
        console.log(place.name); // Log the name of each place
        // You can also add logic here to display the names on your webpage
    });
})
.catch(error => {
    console.error('Fetch error:', error);
});

// An input field with id="searchInput" and a button with id="searchBtn"
const searchBtn = document.getElementById('searchBtn');
const recommendationInput = document.getElementById('recommendationInput');

searchBtn.addEventListener('click', () => {
    // Get user input and conver to lowercase
    const userInput = searchInput.ariaValueMax.trim().toLowerCase();

    // Check for keywords and variations
    if (userInput === 'temple' || userInput === 'temples') {
        console.log('User searched for temples');
        // Call your funciton to show temple recommendations
        showRecommendations('temples');
    } else if (userInput === 'country' || userInput === 'countries');{
    console.log('User search for countries');
    // Call your function to show country recommendations
    showRecommendations('countries');
    } {
        console.log('No matching keyword found');
        // Optionally, show a message or clear results
    }
});

// function to handle recommendations
function showRecommendations(category) {
    // Logic to fetch and display recommendations based on category
    console.log(`Display recommendations for: ${category}`);
}

const clearBtn = document.getElementById('clearBtn');
const resultsDiv = document.getElementById('results');
const searchInput = document.getElementById('searchInput'); // Your search bar input

clearBtn.addEventListener('click', () => {
    // Clear the results container
    resultsDiv.innerHTML = '';

    // Optionally, clear the search input field
    recommendationInput.value = '';

    // Optionally, set focus back to the search input
    recommendationInput.focus();

    console.log('Results and search input cleared');
});