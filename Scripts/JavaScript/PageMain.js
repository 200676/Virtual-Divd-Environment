document.getElementById('saveProfileButton').addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Save the updated profile information (e.g., send it to a server or store locally)
    console.log('Profile Updated:', { fullName, email, phone, address });

    alert('Profile information saved successfully!');
});



