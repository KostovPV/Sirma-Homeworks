function createTable() {
    // Get the table element
    const table = document.getElementById('myTable');
    
    // Clear any existing table content
    table.innerHTML = '';
  
    // Prompt user for number of rows and columns
    const numRows = parseInt(prompt('Enter number of rows:', 3));
    const numCols = parseInt(prompt('Enter number of columns:', 3));
  
    // Validate the input
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
      alert('Please enter valid positive numbers for rows and columns.');
      return;
    }
  
    // Create rows and cells
    for (let i = 0; i < numRows; i++) {
      // Create a table row
      const row = document.createElement('tr');
      
      for (let j = 0; j < numCols; j++) {
        // Create a table cell
        const cell = document.createElement('td');
        
        // Set the cell content
        cell.textContent = 'Row-' + i + ' Column-' + j;
        
        // Append the cell to the row
        row.appendChild(cell);
      }
      
      // Append the row to the table
      table.appendChild(row);
    }
  }