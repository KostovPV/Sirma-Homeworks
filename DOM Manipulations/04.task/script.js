function getAttributes() {
    const linkElement = document.getElementById('someId');
    console.log((linkElement.getAttribute('href')));
    console.log((linkElement.getAttribute('target')));
    console.log((linkElement.getAttribute('rel')));
    console.log((linkElement.getAttribute('hreflang')));
    console.log((linkElement.getAttribute('type')));
}