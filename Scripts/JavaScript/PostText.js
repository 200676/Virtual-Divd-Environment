document.addEventListener("DOMContentLoaded",() =>{
    // Initialize the page
    const postbutton = document.getElementById("post-button");
    const postText = document.getElementById("post-text");
    const postOutput = document.getElementById("post-output");

    postbutton.addEventListener("click", () => {
        const text = postText.value.trim();
        if (text) {
            const postElement = document.createElement("p");
            postElement.textContent = text;
            postOutput.appendChild(postElement);
            postText.value = ""; // Clear the input field after posting
        } else {
            alert("Please enter some text before posting.");
        }
    });
});