document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("post-button");
    const postText = document.getElementById("post-text");
    const postOutput = document.getElementById("post-output");

    postButton.addEventListener("click", () => {
        const text = postText.value.trim();
        if (text !== "") {
            const postElement = document.createElement("div"); // Create a new post block
            postElement.textContent = text;
            postElement.className = "post-block"; // Apply post styling
            postOutput.prepend(postElement); // <-- NEW: Add to top

            postText.value = ""; // Clear input after posting
        } else {
            alert("Please enter some text before posting.");
        }
    });
});
