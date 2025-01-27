// 1. Создать функцию, которая принимает массив чисел и возвращает их среднее арифметическое.
// Входные: average([1, 2, 3, 4]) → Результат: 2.5

// function average(arr){
//     const res = arr.reduce((sum,el)=>sum+=el,0)
//     const avg = res / arr.length
//     return avg
// }
// console.log(average([1, 2, 3, 4]))


// 2. Написать функцию, которая принимает строку и возвращает ее в обратном порядке.
// Входные: reverseString('hello') → Результат: 'olleh'

// function  reverseString(str){
//     console.log(str.split('').reverse().join(''))
// }
// reverseString('hello')

// 3. Написать функцию, которая принимает одно число n и с помощью цикла for находит такое число x,
// что 𝑥
// 2 = 𝑛. Если точного целого корня не существует, функция должна вернуть -1.
// Входные: findSquareRoot(16) → Результат: 4
// Входные: findSquareRoot(25) → Результат: 5
// Входные: findSquareRoot(10) → Результат: -1
// Входные: findSquareRoot(1) → Результат: 1

// function findSquareRoot(n){
//     let x = 0
//     for (let i =0;i<n;i++){
//         if (i**2==n){
//             x= i;
//             break;
//         }
//         else x=-1;
//     }
//     return  x;
// }
// console.log(findSquareRoot(10))
// 4. Написать функцию, которая принимает массив чисел и возвращает максимальную разницу между
// соседними элементами.
// Входные: maxDifference([1, 3, 6, 10]) → Результат: 4

// function maxDifference(arr){
//     let max = 0;
//     for (let i =1;i<arr.length;i++){
//         if (Math.abs(arr[i]-arr[i-1])>max)
//             max = Math.abs(arr[i]-arr[i-1])
//     }
//     return max
// }

// console.log(maxDifference([1, 3, 6, 10]));


// 5. Создать функцию, которая принимает строку и возвращает ее без дублирующихся символов.
// Входные: removeDuplicates('hello') → Результат: 'helo’

// function removeDuplicates(str){
//     let arr =''
//     for (let i = 0;i<str.length;i++){
//         if (!(arr.includes(str[i])))
//             arr+=str[i]
//     }
//     return arr
// }
// console.log(removeDuplicates('llllhello'))

// 6. Написать функцию, которая принимает массив чисел и возвращает true, если хотя бы одно из них
// делится на 3.
// Входные: hasMultipleOfThree([1, 4, 6]) → Результат: true

// function hasMultipleOfThree(arr){
//     return arr.some((el)=>el%3==0)
// }
// console.log(hasMultipleOfThree([1, 4, 7]));

// 7. Создать функцию, которая принимает массив строк и возвращает массив только тех, которые
// заканчиваются на заданный символ.
// Входные: endsWith(['hello', 'world', 'js'], 'd') → Результат: ['world’]

// function endsWith(arr,symbol){
//     return arr.filter((el)=>el.endsWith(symbol))
// }
// console.log(endsWith(['hello', 'world', 'js'], 'd'))

// 8. Написать функцию, которая принимает массив чисел и возвращает true, если числа идут в
// порядке возрастания.
// Входные: isAscending([1, 2, 3]) → Результат: true

// function isAscending(arr){
//     let flag = true
//     for ( let i =1;i<arr.length;i++){
//         if (arr[i]<arr[i-1]){
//             flag = false
//             break;
//         }
//     }
//     return flag
// }
// console.log(isAscending([1, 2, 1]));


// 9. Написать функцию, которая принимает строку и символ и возвращает новый объект с количеством
// вхождений символа и индексами, где он встречается.
// Входные: charStats('hello', 'l') → Результат: {count: 2, indices: [2, 3]}

// function charStats(str,symbol){
//     const obj = {
//         count : 0,
//         indexes : [],
//     }
//     for (let i =0;i<str.length;i++){
//         if (str[i]==symbol){
//             obj.count+=1;
//             obj.indexes.push(i)
//         }
//     }
//     console.log(obj.indexes)
//     return obj
// }
// console.log(charStats('hello', 'l'));



// 10. Написать функцию, которая принимает массив чисел и возвращает его в виде строки, где числа
// разделены тире.
// Входные: joinWithDash([1, 2, 3]) → Результат: '1-2-3’

// function joinWithDash(arr){
//     return arr.join('-')
// }
// console.log(joinWithDash([1, 2, 3]));

// 11. Создать функцию, которая принимает строку и возвращает true, если она состоит из уникальных
// символов.
// Входные: hasUniqueChars('abc') → Результат: true

// function hasUniqueChars(str){
//     let s ='';
//     let flag = true;
//     for (let i =0;i<str.length;i++){
//         if (s.includes(str[i])){
//             flag = false;
//             break;
//         }
//         else s+=str[i]
//     }
//     return flag
// }
// console.log(hasUniqueChars('abcdefa'));

// 12. Написать функцию, которая принимает массив чисел и возвращает разницу между максимальным
// и минимальным элементами.
// Входные: maxMinDifference([1, 2, 3, 4]) → Результат: 3

// function maxMinDifference(arr){
//     let min = arr[0]
//     let max = arr[0]
//     for (let i = 0;i<arr.length;i++){
//         if(arr[i]>max)
//             max = arr[i]
//         if (arr[i]<min)
//             min = arr[i]
//     }
//     const res = Math.abs(max-min)
//     return res
// }
// console.log(maxMinDifference([1, 2, 8, 4]));

// 13. Создать функцию, которая принимает строку и возвращает true, если в строке больше гласных, чем
// согласных.
// Входные: moreVowels('hello') → Результат: false

// function moreVowels(str) {
//     const ex = 'euioa'
//     let ow = 0;
//     let neow = 0;
//     for (let i =0;i<str.length;i++){
//         if (ex.includes(str[i]))
//             ow+=1
//         else neow+=1
//     }
//     return ow>neow
// }
// console.log(moreVowels('helloia'));


// 14. Написать функцию, которая принимает массив строк и возвращает самую длинную строку.
// Входные: longestString(['a', 'abcd', 'abc']) → Результат: 'abcd’

// function longestString(arr){
//     let max = ''
//     for (let i = 0;i<arr.length;i++){
//         if (arr[i].length>max.length)
//             max = arr[i]
//     }
//     return max
// }
// console.log(longestString(['a', 'abcd', 'abc']));

// 15. Написать функцию, которая принимает объект и возвращает массив всех уникальных значений.
// Входные: uniqueObjectValues({a: 1, b: 2, c: 1}) → Результат: [1, 2]

// function uniqueObjectValues(obj){
//     const arr = []
//     for (let key in obj){
//         if (!(obj[key] in arr))
//             arr.push(obj[key])
//     }
//     return arr
// }
// console.log(uniqueObjectValues({a: 1, b: 2, c: 1}));

// 16. Создать функцию, которая принимает массив чисел и возвращает true, если сумма четных чисел
// равна сумме нечетных.
// Входные: isBalanced([2, 4, 1, 5]) → Результат: true

// function isBalanced(arr){
//     let sumeven = 0;
//     let sumodd = 0;
//     for(let i = 0;i<arr.length;i++){
//         if (arr[i]%2==0)
//             sumeven+=arr[i]
//         else sumodd+=arr[i]
//     }
//     return sumeven==sumodd
// }
// console.log(isBalanced([2, 4, 1, 5]));

// 17. Создать функцию, которая принимает массив чисел и возвращает индекс самого большого
// значения.
// Входные: maxIndex([1, 3, 2]) → Результат: 1

// function maxIndex(arr){
//     let index = 0;
//     for (let i =0;i<arr.length;i++){
//         if (arr[i]>arr[index])
//             index = i
//     }
//     return index
// }
// console.log(maxIndex([1, 3, 2,22,23,14,48,15]));
