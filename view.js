  var sudokuTable = document.getElementById('table');
  sudokuTable.innerHTML = gen(3, 3);


function gen(rows, cols) {
  for (var r = 0; r <  rows; r++) {
    for (var c = 0; c < cols; c++ ) {
      var content = getSquare(r, c);
      if (content == 0) {
        // MAKE AN IMAGE TAG FOR VALUE OF 0
        console.log("row: " + r + " col: " + c + " image: " + "");
      } else {
        // MAKE AN IMAGE TAG FOR VALUES OTHER THAN 0
        console.log("row: " + r + " col: " + c + " image: " + content);
      }
    }
  }
}
