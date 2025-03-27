
// Q1. Falsy or Truthy?
function filterOutFalsy (truthyOrFalsy1, truthyOrFalsy2) {
  return !truthyOrFalsy1 ? truthyOrFalsy1 : truthyOrFalsy2;
}
console.log(filterOutFalsy(0, 500));


// Q2. Return the Length of Any Given Array
function returnArrLength (arr1) {
  return arr1.length;
}
console.log(returnArrLength([1, 2, 3]));


// Q3. Get the Last Element in an Array
function getLastElem(arr2) {
  return arr2[arr2.length - 1];
}
console.log(getLastElem([1, 2, 3, 4]));


// Q4. Find the Sum of an Array
function sumOfArray(arr3) {
  let arraySum1 = 0;
  // This is how you loop through every element in an array
  for (let i = 0; i < arr3.length; ++i) {
    console.log(arr3[i]);
    // This is how you calculate the sum of each element
    // (start at 0; see 'Let' above)
    arraySum1 = arraySum1 + arr3[i];
  }
  return arraySum1;
}
console.log(sumOfArray([2, 2, 2, 4]));


// Q5. Add preceding integers including given number (<= includes last number)
function progessiveSum(num1) {
  let arraySum2 = 0;
  for (let i = 0; i <= num1; ++i) {
    console.log([i])
    arraySum2 = arraySum2 + i;
  }
  return arraySum2;
}
console.log(progessiveSum(5));


// Q6. Reformat Given Seconds Into MM:SS Time Notation.
function calcTime(seconds1){
  let inputMinutes = Math.floor(seconds1 / 60);
  let inputSeconds = seconds1 % 60;
  if (inputMinutes.toString().length === 1) {
    inputMinutes = `0` + inputMinutes;
  }
  return inputMinutes + `:` + inputSeconds;
}
console.log(calcTime(70));


// Q7. Find the Largest Number in an Array
function getArrayMax(arr4) {
  let arrayMax1 = arr4[0];
  for (let i = 1; i < arr4.length; ++i) {
    if (arr4[i] > arrayMax1) {
      arrayMax1 = arr4[i];
    }
  }
  return arrayMax1;
}
console.log(getArrayMax([-100, -200, -300]));


// Q8. Reverse a Given String
function reverseGivenString(str1) {
  let reverseString1 = ``;
  for (let i = 0; i < str1.length; ++i) { // incrementing For loop
    reverseString1 = str1[i] + reverseString1;
  }
  return reverseString1;
}
console.log(reverseGivenString(`abc`));

// Similar function with decrementing For loop
function reverseGivenString2(str2) {
  let reverseString2 = ``;
  for (let i = str2.length - 1; i >= 0; --i) { // decrementing For loop
    reverseString2 = reverseString2 + str2[i];
  }
  return reverseString2;
}
console.log(reverseGivenString2(`Jason`));

// Similar function with the string.split, 
// array .reverse,
// and array .join properties
function reverseGivenString3(str3) {
  return str3.split(``).reverse().join(``);
}
console.log(reverseGivenString3(`This is cool`));


// Q9. Turn Every Element in an Array Into 0
function convertAllToZeros(arr5) {
  for (let i = 0; i < arr5.length; ++i) { // Using a For loop
    arr5[i] = 0;
  }
  return arr5;
}
console.log(convertAllToZeros([5, 100, 0]));

function convertAllToZeros2(arr6) {
  return new Array(arr6.length).fill(0); // Using .fill with a 'new Array'
}
console.log(convertAllToZeros2([12]));

function convertAllToZeros3(arr7) {
  return arr7.map(elem => 0);
  // Using .map (don't forget to 'return' when using {} after ())
}
console.log(convertAllToZeros3([1, 2, 3, 4, 5]))


// Q10. Filter Out All the "Apples"
function filterAllApples(arr8) {
  for (let i = 0; i < arr8.length; ++i) { // Using a For loop
    if (arr8[i] !== `Apple`) {
      console.log(arr8[i]); // Part 1 of 2
    }
  }
}
console.log(filterAllApples([`Banana`, `Apple`, `Orange`, `Apple`]));

function filterAllApples2(arr9) {
  let newArr9 = [];
  for (let i = 0; i < arr9.length; ++i) {
    if (arr9[i] !== `Apple`) {
      newArr9.push(arr9[i]); // Add an element to an array using .push
    }
  }
  return newArr9; // Part 1 & 2 of 2 (Using a For loop and .push)
}
console.log(filterAllApples2([`Tomato`, `Orange`, `Banana`, `Apple`]));

function filterAllApples3(arr10) {
  return arr10.filter(elem => elem !== `Apple`);
  // Using .filter (don't forget to 'return' when using {} after ())
}
console.log(filterAllApples3([`Banana`, `Orange`, `Apple`]));


// Q11. Filter Out All the Falsy Values
function filterAllFalsyValues(arr11) {
  let newArr11 = [];
  for (let i = 0; i < arr11.length; ++i) {
    if (!!arr11[i] === true) {
      newArr11.push(arr11[i]);
    }
  }
  return newArr11;
}
console.log(filterAllFalsyValues(["", [], 0, null, undefined, "0"]));

function filterAllFalsyValues2(arr12) {
  return arr12.filter(elem => !!elem === true);
}
console.log(filterAllFalsyValues2([`Tomato`, `Orange`, `Banana`, false]));


// Q12. Truthy to True, Falsy to False
function trueOrFalse(arr13) {
  let booleanArr13 = [];
  for (let i = 0; i < arr13.length; ++i) {
    if (!!arr13[i] === true) {
      booleanArr13.push(!!arr13[i]);
    }
    else if (!!arr13[i] === false) {
      booleanArr13.push(!!arr13[i]);
    }  
  }
  return booleanArr13;
}
console.log(trueOrFalse([500, 0, `David`, "", []]));

function trueOrFalse2(arr14) {
  return arr14.map(elem => !!elem);
}
console.log(trueOrFalse2([500, 0, `David`, "", []]));

