document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("post-button");
    const postText = document.getElementById("post-text");
    const postOutput = document.getElementById("post-output");
    const loginCheck = document.getElementById("login-check"); // Checkbox

    const STORAGE_KEY = "posts";

    function loadposts() {
        const now = Date.now();
        let posts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        posts = posts.filter(post => now - post.timestamp < 86400000);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));

        postOutput.innerHTML = "";
        posts.reverse().forEach(post => {
            const postElement = document.createElement("div");
            postElement.textContent = post.text;
            postOutput.appendChild(postElement);
        });
    }

    function savePosts(text) {
        const posts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        posts.push({ text: text, timestamp: Date.now() });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }

    postButton.addEventListener("click", () => {
        const textPost = postText.value.trim();
    
        if (textPost !== "") {
            
            savePosts(textPost);
            postText.value = "";
            loadposts();
        } else {
            alert("Please enter some text before posting.");
        }
    });

    // ✅ Enable/disable textarea and button when checkbox changes
    loginCheck.addEventListener("change", () => {
        const isLoggedIn = loginCheck.checked;
        postText.disabled = !isLoggedIn;
        postButton.disabled = !isLoggedIn;
    });
    loadposts();
});


