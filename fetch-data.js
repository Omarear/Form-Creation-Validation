document.addEventListener('DOMContentLoaded', function() {
    // Define the asynchronous function to fetch user data
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the data container element
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            
            // Check if the response is ok (status code in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convert the response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> elements for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Clear the existing content and show an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    
    fetchUserData();
});
