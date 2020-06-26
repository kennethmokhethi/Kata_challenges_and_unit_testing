function narcissistic(value) {
  //SM:KMM_KC01:https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
  var tempLength = value.toString().length;
  var strValue = value.toString();
  var tempValue;
  var total = 0;

  for (var i = 0; i < tempLength; i++) {
    tempValue = 0;
    tempValue = Math.pow(parseInt(strValue.charAt(i)), tempLength);
    total += tempValue;
  }

  if (total === value) {
    return true;
  } else {
    return false;
  }
}

function comp(array1, array2) {
  //FM:KMM_KC02 https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
  var comp1 = [];
  if (
    array1 == null ||
    array2 == null ||
    array1.length === 0 ||
    array2.length === 0
  ) {
    return false;
  } else {
    for (var j in array2) {
      comp1.push(Math.sqrt(array2[j]));
    }
    let resultsActions = array1.map((d) => d);
    return comp1.every((i) => resultsActions.includes(i));
  }

  let resultsActions = array1.map((d) => d);
  return comp1.every((i) => resultsActions.includes(i));
}

const getCount = (str) => {
  //KMM:FM_KC03:https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
  return str.split("").filter((x) => x.match(/[aeiou]/g)).length;
};

function squareDigits(value) {
  var length = value.toString().length;
  var strValue = value.toString();
  var squredValue;
  var answer = [];

  for (let i = 0; i < length; i++) {
    squredValue = 0;
    squredValue = Math.pow(parseInt(strValue.charAt(i)), 2);
    answer.push(squredValue);
  }

  return answer.join("");
}

module.exports = { narcissistic, comp, getCount, squareDigits };
