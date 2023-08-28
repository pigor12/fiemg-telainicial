const searchButton = document.getElementById('botao-pesquisa');
const searchInput = document.getElementById('input-pesquisa');

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.open(googleSearchUrl, '_self');
    }
}