function getFormvalue(event) {
    event.preventDefault();
    let firstValue = document.querySelector('input[name=fname]');
    let secontValue = document.querySelector('input[name=lname]');
    console.log(firstValue.value);
    console.log(secontValue.value);
}