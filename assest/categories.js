// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.textContent.trim().toLowerCase();
        const productDiv = product.parentElement;

        if (productName.includes(searchTerm)) {
            productDiv.style.display = 'block';
        } else {
            productDiv.style.display = 'none';
        }
    });
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Event listener for search button click
document.getElementById('searchButton').addEventListener('click', function() {
    handleSearch();
});