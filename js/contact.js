const url = 'https://abdullahzamanbabar.pythonanywhere.com/corporateapp/contact';

function contact(fullname, email, message) {

    console.log(fullname)
    console.log(email)
    console.log(message)
    
    const formData = new URLSearchParams();
    formData.append('fullname', fullname);
    formData.append('emailaddress', email);
    formData.append('message', message);

    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Form submitted successfully');
        console.log('Status Code:', response.status);
    })
    .catch(error => {
        console.error('Error submitting form:', error.message);
    });

}