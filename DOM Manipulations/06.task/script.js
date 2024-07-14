function changeContent(row, col, content) {
    // Get the table element
    var table = document.getElementById('myTable');
    
    // Check if the row and column indices are valid
    if (table.rows[row-1] && table.rows[row-1].cells[col-1]) {
      // Set the content of the specified cell
      table.rows[row-1].cells[col-1].innerHTML = content;
    } else {
      console.error('Invalid row or column index');
    }
  }
  

  changeContent(2, 0 ,'New Content');