// const obj = {
//   property1: 5,
//   property2: 6,
//   property3: 7,
// };
// const subset = (({ property1, property2 }) => ({
//   property1,
//   property2,
// }))(obj);
// a
// console.log(subset, "::: subset");

// -----😁😁 flatten javascript obj 😁😁-------
// let obj = {
//   Company: "GeeksforGeeks",
//   Address: "Noida",
//   contact: +91 - 999999999,
//   mentor: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
//   },
// };

// function flattenObject(obj, parentKey = "", result = {}) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const newKey = parentKey ? `${parentKey}.${key}` : key;
//       if (
//         typeof obj[key] === "object" &&
//         obj[key] !== null &&
//         !Array.isArray(obj[key])
//       ) {
//         flattenObject(obj[key], newKey, result);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }

//   return result;
// }

// const flattened = flattenObject(obj);
// console.log(flattened);

// --- 😁😁 substring GREATER THAN A,B 😁😁 -------
// function countSubstrings(s, charA, charB) {
//   let count = 0;
//   const n = s.length;
//   const prefixSum = new Array(n + 1).fill(0);

//   // Calculate prefix sums of the difference between counts of charA and charB
//   for (let i = 0; i < n; i++) {
//     prefixSum[i + 1] =
//       prefixSum[i] + (s[i] === charA ? 1 : 0) - (s[i] === charB ? 1 : 0);
//   }

//   console.log("Prefix sums:", prefixSum);

//   // Use a map to count the occurrences of each prefix sum
//   const prefixMap = new Map();

//   for (let i = 0; i <= n; i++) {
//     console.log(`Iteration ${i}:`);
//     console.log(`  Current prefix sum: ${prefixSum[i]}`);

//     // If the current prefix sum is positive, it means there are more charA than charB up to index i
//     if (prefixSum[i] > 0) {
//       count++;
//       console.log(
//         `  Prefix sum ${prefixSum[i]} > 0, incrementing count to ${count}`
//       );
//     }

//     // Check how many times we have seen prefixSum[i] - 1 before
//     if (prefixMap.has(prefixSum[i] - 1)) {
//       count += prefixMap.get(prefixSum[i] - 1);
//       console.log(
//         `  Found prefix sum ${
//           prefixSum[i] - 1
//         } in map, incrementing count to ${count}`
//       );
//     }

//     // Update the map with the current prefix sum
//     if (!prefixMap.has(prefixSum[i])) {
//       prefixMap.set(prefixSum[i], 0);
//     }
//     prefixMap.set(prefixSum[i], prefixMap.get(prefixSum[i]) + 1);

//     console.log(`  Map update: ${Array.from(prefixMap.entries())}`);
//   }

//   return count;
// }

// const s = "aabab";
// const charA = "a";
// const charB = "b";
// console.log("Final Count:", countSubstrings(s, charA, charB)); // Output: 6

//-----😁😁 FLAT THE ARRAY USING FLAT 😁😁-------
// let arr = [1, [2, [3, [4, 5], 6], 7, 8], 9, 10];

// console.log("Original Array:", arr);

// let flatArrOne = arr.flat();

// console.log("Array flattened to depth of 1:" + flatArrOne);

// let flatArrTwo = arr.flat(2);

// console.log("Array flattened to depth of 2:" + flatArrTwo);

// let flatArrThree = arr.flat(Infinity);

// console.log("Array flattened completely:" + flatArrThree);

// -- 😁😁 FLAT THE ARRAY WITHOUT USING ARRAY.FLAT 😁😁 ----
// let arr = [1, [2, [3, [4, 5], 6], 7, 8], 9, 10];
// const flattenArray = (arr, depth) => {
//   if (depth < 1) {
//     return [...arr];
//   }

//   return arr.reduce((flat, item) => {
//     if (Array.isArray(item)) {
//       return flat.concat(flattenArray(item, depth - 1));
//     } else {
//       return flat.concat(item);
//     }
//   }, []);
// };

// console.log(flattenArray(arr, 1)); // [1, 2, [3, [4, [5]]], 6]
// console.log(flattenArray(arr, 2)); // [1, 2, 3, [4, [5]], 6]
// console.log(flattenArray(arr, 3)); // [1, 2, 3, 4, [5], 6]
// console.log(flattenArray(arr, 4)); // [1, 2, 3, 4, 5, 6]

// ---- 😁😁 COMPETATOR FUNCTION RETURNS TRUE 😁😁---
// const arr = [1, 2, 3, 4, -1, -2, -3];
// const returnedArr = [];
// const returnPositive = (val) => {
//   return val >= 0;
// };

// arr.forEach((ele) => {
//   if (returnPositive(ele)) {
//     returnedArr.push(ele);
//   }
// });

// console.log(returnedArr, "::: returnedArr");

// --- 😁😁 COUNT THE NUMBER OF DATA TYPES 😁😁 ---
// const arrarWithAllDataType = [
//   function () {},
//   new Object(),
//   [],
//   {},
//   NaN,
//   Infinity,
//   undefined,
//   null,
//   0,
//   true,
//   "true",
// ];

// const countDataTypes = (arr) => {
//   return arr.reduce((acc, curr) => {
//     if (acc[typeof curr]) {
//       acc[typeof curr]++;
//     } else {
//       acc[typeof curr] = 1;
//     }
//     return acc;
//   }, {});
// };

// console.log(countDataTypes(arrarWithAllDataType), ":: arrarWithAllDataType");

// --- 😁😁 DIFF BETWEEN TWO ARRAY 😁😁 ---
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [5, 6, 7, 8, 9, 10, 11, 12];

const diffArr1 = arr1.filter((ele) => !arr2.includes(ele));
const diffArr2 = arr2.filter((ele) => !arr1.includes(ele));

console.log([...diffArr1, ...diffArr2]);

// --- 😁😁 ARRAY TO STRING 😁😁 ---
console.log(["amit", "is", "good"].join(" "));
