let {
  comp,
  getCount,
  narcissistic,
  squareDigits,
  reverseArray,
  boxSeq,
  redundant,
  string_check,
} = require("../src/kata_v2");

describe("Narcissistic Function.   KMM_KC01", () => {
  //url:https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
  it("should find small numbers are all narcissistic.", () => {
    expect(narcissistic(7)).toBe(true, "7 is narcissistic");
    expect(narcissistic(5)).toBe(true, "5 is narcissistic");
    expect(narcissistic(1)).toBe(true, "1 is narcissistic");
  });

  it("should find these numbers are narcissistic", () => {
    expect(narcissistic(371)).toBe(true, "371 is narcissistic");
    expect(narcissistic(370)).toBe(true, "370 is narcissistic");
    expect(narcissistic(153)).toBe(true, "153 is narcissistic");
    expect(narcissistic(1634)).toBe(true, "1634 is narcissistic");
  });

  it("should find these numbers are not narcissistic", () => {
    expect(narcissistic(48342)).toBe(false, "48342 is narcissistic");
    expect(narcissistic(36543)).toBe(false, "36543 is narcissistic");
    expect(narcissistic(21845)).toBe(false, "21845 is narcissistic");
    expect(narcissistic(37750)).toBe(false, "37750 is narcissistic");
    expect(narcissistic(33005)).toBe(false, "33005 is narcissistic");
    expect(narcissistic(27603)).toBe(false, "27603 is narcissistic");
    expect(narcissistic(49959)).toBe(false, "49959 is narcissistic");
  });

  it("should find these numbers some are  narcissistic", () => {
    expect(narcissistic(10445500)).toBe(false, "10445500 is narcissistic");
    expect(narcissistic(1741725)).toBe(true, "1741725 is narcissistic");
    expect(narcissistic(1741725)).toBe(true, "1741725 is narcissistic");
    expect(narcissistic(11278784)).toBe(false, "11278784 is narcissistic");
    expect(narcissistic(4210818)).toBe(true, "4210818 is narcissistic");
    expect(narcissistic(54748)).toBe(true, "54748 is narcissistic");
    expect(narcissistic(10685690)).toBe(false, "10685690 is narcissistic");
  });
});

describe("Are they the 'same'? KMM_KC02 ", () => {
  //url:https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
  it("Either one is null or empty", () => {
    let a1,
      a2 = [81],
      b1 = [9],
      b2,
      c1 = [],
      c2 = [64],
      d1 = [91],
      d2 = [];
    expect(comp(a1, a2)).toBe(false, "Testing null and [81]");
    expect(comp(b1, b2)).toBe(false, "Testing [9] and null");
    expect(comp(c1, c2)).toBe(false, "Testing empty and [64]");
    expect(comp(d1, d2)).toBe(false, "Testing [91] and empty");
  });

  it("They are the same", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11],
      a2 = [
        11 * 11,
        121 * 121,
        144 * 144,
        19 * 19,
        161 * 161,
        19 * 19,
        144 * 144,
        19 * 19,
      ],
      b1 = [9, 59, 50, 48, 93, 79],
      b2 = [81, 3481, 2500, 2304, 8649, 6241],
      c1 = [6, 3, 30, 94, 4, 47],
      c2 = [36, 9, 900, 8836, 16, 2209],
      d1 = [91],
      d2 = [8281],
      e1 = [50],
      e2 = [2500];

    expect(comp(a1, a2)).toBe(
      true,
      "Testing [121, 144, 19, 161, 19, 144, 19, 11] and [11 * 11,121 * 121,144 * 144,19 * 19,161 * 161,19 * 19,144 * 144,]"
    );
    expect(comp(b1, b2)).toBe(
      true,
      "Testing [9, 59, 50, 48, 93, 79] and [81, 3481, 2500, 2304, 8649, 6241]"
    );
    expect(comp(c1, c2)).toBe(
      true,
      "Testing [6, 3, 30, 94, 4, 47] and [36, 9, 900, 8836, 16, 2209]"
    );
    expect(comp(d1, d2)).toBe(true, "Testing [91] and [8281]");
    expect(comp(e1, e2)).toBe(true, "Testing [50] and [2500]");
  });

  it("They are not the same ", () => {
    let a1 = [83, 63, 19, 78, 1, 13],
      a2 = [6890, 3969, 361, 6084, 1, 169],
      b1 = [74, 69],
      b2 = [5477, 4761],
      c1 = [54, 63, 50, 83],
      c2 = [2916, 3969, 2500, 6890],
      d1 = [82],
      d2 = [6725],
      e1 = [40],
      e2 = [1601];
    expect(comp(a1, a2)).toBe(
      false,
      "Testing [83, 63, 19, 78, 1, 13] and [6890, 3969, 361, 6084, 1, 169]"
    );
    expect(comp(b1, b2)).toBe(false, "Testing [74, 69] and [5477, 4761]");
    expect(comp(c1, c2)).toBe(
      false,
      "Testing [54, 63, 50, 83] and [2916, 3969, 2500, 6890]"
    );
    expect(comp(d1, d2)).toBe(false, "Testing [82] and [6725]");
    expect(comp(e1, e2)).toBe(false, "Testing [40] and [1601");
  });
});

describe("Count vowels:FM_KC03", () => {
  //url:https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
  it("should be difined", () => {
    expect(getCount("abracadabra")).toBe(
      5,
      "should return 5 for 'abracadabra'"
    );
    expect(getCount("pear tree")).toBe(4, "should return 4 for 'pear tree'");
    expect(getCount("o a kak ushakov lil vo kashu kakao")).toBe(
      13,
      "should return 13 for 'o a kak ushakov lil vo kashu kakao'"
    );
    expect(getCount("my pyx")).toBe(0, "should return 0 for 'my pyx'");
  });
});

describe("Square Every Digit :KMM_KC04", () => {
  //url:https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p
  it("Returns the square of each digit", () => {
    expect(squareDigits(9119)).toBe(811181, "should return 811181 for 9119");
    expect(squareDigits(2483)).toBe(416649, "should return 416649 for 2483");
    expect(squareDigits(3212)).toBe(9414, "should return 9414 for 3212");
  });

  it("Testing the datatype of the final answer", () => {
    expect(squareDigits(9119)).toBeInstanceOf(Number, "9119 is a Number");
  });
});

describe("string_check Function.  SM_KC05", () => {
  it("Should check if the string contains a 'Py'", () => {
    expect(string_check("Python")).toBe(true, "Python Containes a Py");
    expect(string_check("Pyridoxal")).toBe(true, "Pyridoxal Containes a Py");
    expect(string_check("Pyelogram")).toBe(true, "Pyelogram Containes a Py");
  });

  it("should it not find 'Py' in the string it should retur false", () => {
    expect(string_check("Faith")).toBe(false, "Faith Does not contain Py");
    expect(string_check("Kenneth")).toBe(false, "Kenneth Does not contain Py");
    expect(string_check("Kuhle")).toBe(false, "Kuhle Does not contain Py");
  });

  it("Either null or empty", () => {
    expect(string_check(" ")).toBe(false, "Testing empty");
    expect(string_check("!")).toBe(false, "Testing null");
  });
});

describe("reverse an array function SM_KC06", () => {
  it("should reverse an array of numbers", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("should reverse an array of strings", () => {
    expect(reverseArray(["one", "two", "three"])).toEqual([
      "three",
      "two",
      "one",
    ]);
  });
});

describe("Redundant function FM_KC07", () => {
  //edabit.com/challenge/hzxN9bAebBPNqdQto
  https: it("should return a function containing a string", () => {
    const f1 = redundant("apple");
    expect(f1()).toBe("apple");
  });
  it("should return a function containing an empty string", () => {
    const f2 = redundant("");
    expect(f2()).toBe("");
  });
});

describe("Box sequence,KM_KC08", () => {
  it("Return the number of boxes in the sequence", () => {
    expect(boxSeq(5)).toBe(7, "There are 7 boxes in step 5");
    expect(boxSeq(0)).toBe(0, "There are 0 boxes in step 0");
    expect(boxSeq(6)).toBe(6, "There are 6 boxes in step 6");
    expect(boxSeq(99)).toBe(101, "There are 101 boxes in step 99");
    expect(boxSeq(2)).toBe(2, "There are 2 boxes in step 2");
    expect(boxSeq(1)).toBe(3, "There are 3 boxes in step 1");
  });
});
