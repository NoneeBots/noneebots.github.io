const url_loc = 'https://abdullahzamanbabar.pythonanywhere.com/';

fetch(url_loc, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Status Code:', response.status);
    })
    .catch(error => {
        console.error('Error locating:', error.message);
    });