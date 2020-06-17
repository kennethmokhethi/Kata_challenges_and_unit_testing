function comp(array1, array2) {
    var comp1 = [];
    for (var j in array2) {
      comp1.push(Math.sqrt(array2[j]));
    }
    let resultsActions = array1.map(d => d);
    return comp1.every(i => resultsActions.includes(i));
  }
  
//   console.log(comp( [79, 32, 54, 34, 3, 34, 45],  [6241, 1024, 2917, 1156, 9, 1156, 2025]));

  module.exports = comp;