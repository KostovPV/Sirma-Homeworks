function highlight() {
    // Get all bold elements within the content paragraph
    const boldElements = document.querySelectorAll('#content b');

    // Add the highlight class to each bold element
    boldElements.forEach(element => {
        element.classList.add('highlight');
    });
}

function removeHighlight() {
    // Get all bold elements within the content paragraph
    const boldElements = document.querySelectorAll('#content b');

    // Remove the highlight class from each bold element
    boldElements.forEach(element => {
        element.classList.remove('highlight');
    });
}
