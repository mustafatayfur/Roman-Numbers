// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const intToRoman = (num) => {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';
    
    for (key in map) {  
      const repeatCounter = Math.floor(num / map[key]);
      
      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);         
      }
      
      num %= map[key];
      
      if (num === 0) return result;
    }
    
    return result;
  };
  console.log(intToRoman("21"));


//sudo code çalışması
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4



//   Math.floor(2439 / 1000) = 2
// result += M.repeat(2) = MM
// 2439 = 2439 % 1000 = 439


// Math.floor(439 / 900) = 0
// result += CM.repeat(0) = MM
// 439 = 439 % 900 = 439

// Math.floor(439 / 500) = 0
// result += D.repeat(0) = MM
// 439 = 439 % 900 = 439

// Math.floor(439 / 400) = 1
// result += CD.repeat(1) = MMCD
// 439 = 439 % 400 = 39

// Math.floor(39 / 100) = 0
// result += C.repeat(0) = MMCD
// 39 = 39 % 100 = 39

// Math.floor(39 / 90) = 0
// result += XC.repeat(0) = MMCD
// 39 = 39 % 90 = 39

// Math.floor(39 / 50) = 0
// result += L.repeat(0) = MMCD
// 39 = 39 % 50 = 39

// Math.floor(39 / 40) = 0
// result += XL.repeat(0) = MMCD
// 39 = 39 % 40 = 39

// Math.floor(39 / 10) = 3
// result += X.repeat(3) = MMCDXXX
// 39 = 39 % 10 = 9

// Math.floor(9 / 9) = 1
// result += IX.repeat(1) = MMCDXXXIX
// 9 = 9 % 9 = 0

// Math.floor(0 / 5) = 0
// result += V.repeat(0) = MMCDXXXIX
// 0 = 0 % 5 = 0

// Math.floor(0 / 4) = 0
// result += IV.repeat(0) = MMCDXXXIX
// 0 = 0 % 4 = 0

// Math.floor(0 / 1) = 0
// result += I.repeat(0) = MMCDXXXIX
// 0 = 0 % 1 = 0
