function getOptions() {
    const optionElements = document.querySelectorAll('#mySelect > option');
    console.log(optionElements);

    //convert nodelist to htmlcollection
    const optionElementsArray = Array.from(optionElements);
    console.log(optionElementsArray);
    //convert options as string
    const convertedOptionElements = optionElementsArray.map(option => option.textContent).join(', ');
    
    //Alert result
    alert(`${optionElementsArray.length} Options: ${convertedOptionElements}`)

}