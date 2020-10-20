function showTable() {
  var sudokuTable = document.getElementById('table');
  sudokuTable.innerHTML = genSudoku(3, 3);
  // addClickHandlers();
  }

function genSudoku(rows, columns) {
  var html = '';
  var count = 0;
  for (var x = 0 ; x < rows ; x++){
    html += '<tr>';
    for (var y = 0; y < columns; y++){
      html += '<td class="outerCell", contenteditable="true"><table class="cellTable">';
      for (var i= 0 ; i < rows ; i++) {
        html += '<tr>';
        for (var j = 0; j < columns; j++){
          // var content = getSquare(i, j);
          // var cell = sudokuTable.rows[i].columns[j];
          // cell.innerHTML = content; 
            if (count % 2 == 0){
              html += '<tr class="even">' + 0 + '</tr>';
            }
            else {
              html += '<td class="odd">' + 1 + '</td>';
            }

            count++;

          }

      html += '</tr>';
    }
  html += '</table></td>';
  }
html += '</tr>';
}
  return html;
}

// function addClickHandlers() {
//   var countTD = document.getElementsByTagName("td");

//   for (var i = 0; i < countTD.length; i++) {
//     countTD[i].addEventListener("click", this.innerHTML += "!")}
// }

// function cellCoords() {
//   var col = this.cellIndex;
//   var row = this.parentNode.rowIndex;
//   var cell = sudokuTable.rows[row].cells[col];
// }