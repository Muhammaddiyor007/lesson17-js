// Weakmap 1
// class ExtendedWeakMap {
//   constructor(entries) {
//     this._weakMap = new WeakMap(entries);
//   }

//   deleteMany(...keys) {
//     keys.forEach(key => {
//       if (this._weakMap.has(key)) {
//         this._weakMap.delete(key);
//       }
//     });
//     return this;
//   }
// }

// let obj = new ExtendedWeakMap([
//   [{ key: 'a' }, 1],
//   [{ key: 'b' }, 2],
//   [{ key: 'c' }, 3],
//   [{ key: 'd' }, 4]
// ]);

// obj.deleteMany({ key: 'a' }, { key: 'c' });
// console.log(obj._weakMap);

// Weakmap 2
// function mapSum(obj) {
//   let sum = 0;

//   for (let value of obj.values()) {
//     sum += value;
//   }

//   return sum;
// }

// let obj = new Map([
//   ['a', 2],
//   ['b', 5],
//   ['c', 3]
// ]);

// console.log(mapSum(obj));

// Weakmap 3
// function getMapIntersection(map1, map2) {
//   const intersectionMap = new Map();

//   for (const [key, value] of map1) {
//     if (!map2.has(key)) {
//       intersectionMap.set(key, value);
//     }
//   }

//   for (const [key, value] of map2) {
//     if (!map1.has(key)) {
//       intersectionMap.set(key, value);
//     }
//   }

//   return intersectionMap;
// }

// let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
// let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
// let result = getMapIntersection(map1, map2);

// console.log(result);

// Weakmap 4
// let obj = new WeakMap([
//   [{ id: 1 }, 'John'],
//   [{ id: 2 }, 'Jane'],
//   [{ id: 3 }, 'Alice']
// ]);

// let size = Array.from(obj).length;

// console.log(size);  


// Weakset 5
// function setUnion(set1, set2) {
//   let unionSet = new Set(set1);

//   for (let element of set2) {
//     unionSet.add(element);
//   }

//   return unionSet;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// let result = setUnion(set1, set2);

// console.log(result);


// Weakset 6
// function setIntersection(set1, set2) {
//   let intersectionSet = new Set();

//   for (let element of set1) {
//     if (set2.has(element)) {
//       intersectionSet.add(element);
//     }
//   }

//   return intersectionSet;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// let result = setIntersection(set1, set2);

// console.log(result);

// Weakset 7
// function checkSetSubset(set1, set2) {
//   for (let element of set1) {
//     if (!set2.has(element)) {
//       return false;
//     }
//   }
//   return true;
// }

// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);
// let result = checkSetSubset(set1, set2);

// console.log(result);  

//Spread oprerator 8
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let result = removeDuplicates(arr);

// console.log(result);  

//Spread oprerator 9
// function mergeArr(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];
// let result = mergeArr(arr1, arr2);

// console.log(result);  



//Spread oprerator 10
// function concatArrays(...arrays) {
//   return [].concat(...arrays);
// }

// let result = concatArrays([1, 2], [3, 4], [5, 6]);

// console.log(result);



