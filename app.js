
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