
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


// Q9. 