var puzzleFinished = false;
var moves = 13;
var timer = 300;
var grid = [[4, 3, 5, 2, 6, 9, 7, 8, 1],
            [6, 8, 2, 5, 7, 1, 4, 9, 3],
            [1, 9, 0, 0, 3, 4, 5, 6, 2],
            [8, 2, 0, 1, 0, 0, 0, 4, 0],
            [0, 0, 4, 6, 0, 2, 9, 0, 0],
            [0, 5, 0, 0, 0, 3, 0, 2, 8],
            [0, 0, 9, 3, 0, 0, 0, 7, 4],
            [0, 4, 0, 0, 5, 0, 0, 3, 6],
            [7, 0, 3, 0, 1, 8, 0, 0, 0]];

function numCheck(row, col){
  for (var x = 0; x < 9; x++){
    if (grid[row][col] === 0) {
      return "User Number";
    } else {
      return "Given Number";
    }
  }
}

function getSquare(row, col) {
  return grid[row][col];
}
