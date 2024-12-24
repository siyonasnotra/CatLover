document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const catImage = document.getElementById('cat-image');

    fetchButton.addEventListener('click', () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                catImage.src = data[0].url;
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
            });
    });
});
