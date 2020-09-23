// function urlify(str) {
//   return str.replace(/ /g, `%20`);
// }
// console.log(urlify("test string test test"));

// largerFive = (numArr) => {
//   let smlArr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] >= 5) {
//       smlArr.push(numArr[i]);
//     }
//   }
//   return smlArr;
// };
// console.log(largerFive([4, 20, 5, 8, 9, 1, 0, 3, 2]));
// const maxSum = (arr) => {
//   let sumVar = 0;
//   let maximum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumVar += arr[i];
//     maximum = Math.max(sumVar, maximum);
//   }
//   console.log(maximum);
// };
// maxSum([4, 6, -3, 5, -2, 1]);

// function removeChar(str, char) {
//     let newstr = str
//     for(let i = 0; i < char.length; i++) {
//         console.log(char[i])
//         newstr = newstr.replace(new RegExp(char[i], 'g'), '')
//         console.log(newstr)
//     }
//     return newstr
// }
// console.log(removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

function products(arr) {
    let total = [];
    for(let i = 0; i < arr.length; i++) {
        let product = 1;
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) {
                console.log(product, 'product')
                product = product * arr[j]
            }
        }
        total.push(product)
    }
    return total
}
console.log(products([1,7,5,3,4]))
