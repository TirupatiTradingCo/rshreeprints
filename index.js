document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        fetch('https://rshreeprints.vercel.app/contact', {  // Update with your Heroku server URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObject)
        }).then(response => {
            if (response.ok) {
                alert('Thank you for contacting us!');
                this.reset();
            } else {
                response.text().then(text => {
                    alert(`There was an error submitting the form: ${text}`);
                });
            }
        }).catch(error => {
            alert('There was an error submitting the form.');
            console.error('Error:', error);
        });
    });
});
