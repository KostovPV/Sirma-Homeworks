function insertRow() {
    const tableElement = document.getElementById('sampleTable');

    const rowCount = document.querySelectorAll('tr').length;

    const firstElement = document.createElement('td');
    firstElement.textContent = `Row${rowCount+1} cell1`
    const num = 2;
    const secondElement = document.createElement('td');
    secondElement.textContent = `Row${rowCount+1} cell2`

    const rowElement = document.createElement('tr');
    rowElement.appendChild(firstElement);
    rowElement.appendChild(secondElement)

   tableElement.appendChild(rowElement)

}