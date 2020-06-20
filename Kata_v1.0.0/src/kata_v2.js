function comp(array1, array2) {
    var comp1 = []; 
    if( array1 == null || array2 == null || array1.length === 0 || array2.length === 0){
        return false;
    }else {
        for (var j in array2) {
            comp1.push(Math.sqrt(array2[j]));
          }
          let resultsActions = array1.map(d => d);
          return comp1.every(i => resultsActions.includes(i));
    }
    
  }
  
//   console.log(comp( [79, 32, 54, 34, 3, 34, 45],  [6241, 1024, 2917, 1156, 9, 1156, 2025]));
//   console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));



//Kuhle 
function narcissistic(value) {
  
  var tempLength = value.toString().length;
  var strValue = value.toString(); 
  var tempValue; 
  var total = 0; 
  
  for(var i = 0; i < tempLength; i++)
  {
    tempValue = 0; 
    tempValue = Math.pow(parseInt(strValue.charAt(i)), tempLength); 
    total += tempValue; 
    
  }
  
  if(total === value)
  {
    return true; 
  }else
  {
    return false; 
  }
}

  module.exports = {narcissistic, comp};