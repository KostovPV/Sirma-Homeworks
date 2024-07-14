function getWidthAndHeight() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dimensionsDiv = document.getElementById('dimensions');
    dimensionsDiv.innerHTML = `Current window width is ${width} and height is ${height}`;
}

// Add event listener for window resize
window.addEventListener('resize', getWidthAndHeight);

// Initial call to display dimensions on page load
getWidthAndHeight();
