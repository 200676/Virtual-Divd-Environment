document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("post-button");
    const postText = document.getElementById("post-text");
    const postOutput = document.getElementById("post-output");

    const STORAGE_KEY = "posts"; // Key for local storage

    function loadposts() {
        const now = Date.now();
        let posts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; // Load posts from local storage

        posts = posts.filter(post => now - post.timestamp < 86400000); // Filter posts older than 24 hours{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); // Save filtered posts back to local storage
        
        postOutput.innerHTML = ""; // Clear the output area
        posts.reverse().forEach(post => {
            const postElement = document.createElement("div"); // Create a new div for each post
            postElement.textContent = post.text; // Set the text of the post
            postOutput.appendChild(postElement); // Append the post to the output area
        });
    };

    function savePosts(text) {
        const posts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; // Load posts from local storage
        posts.push({ text: text, timestamp: Date.now() }); // Add new post with timestamp
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));

    }
    postButton.addEventListener("click", () => {
        const text = postText.value.trim(); // Get the text from the input field

        // Check if the input is not empty
        if (text !== "") {
            savePosts(text); // Save the post to local storage
            postText.value = ""; // Clear input after posting
            loadposts();//reload to show updated posts

        } else {
            alert("Please enter some text before posting.");
        }
    });
        loadposts(); // Load posts on startup

    });

