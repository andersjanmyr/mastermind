'use strict';

function checkBlack(solution, entry) {
  var tmpSolution = solution.slice();
  var tmpEntry = entry.slice();
  for (var i = 3; i >= 0; i--)
    if (entry[i] === solution[i]) {
      tmpEntry.splice(i, 1);
      tmpSolution.splice(i, 1);
    }
  return { solution: tmpSolution, entry: tmpEntry, count: 4 - tmpSolution.length};
}

function checkWhite(solution, entry) {
}


function Model(solution) {
  this.rows = [];
  this.checkEntry = function(entry) {
    var resultBlack = checkBlack(solution, entry);
    var resultWhite = checkWhite(solution, entry);

  }
}

Model.prototype.addEntry = function(entry) {
  this.rows.push({entry: entry, result: this.checkEntry(entry) });
};

module.exports = Model;
