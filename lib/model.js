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
  return { count: 0};
}


function Model(solution) {
  this.rows = [];
  this.checkEntry = function(entry) {
    var resultBlack = checkBlack(solution, entry);
    var resultWhite = checkWhite(resultBlack.solution, resultBlack.entry);

    return {black: resultBlack.count, white: resultWhite.count };
  };
}

Model.prototype.addEntry = function(entry) {
  var result = this.checkEntry(entry);
  this.rows.push({entry: entry, result: result });
  return result;l
};

module.exports = Model;
