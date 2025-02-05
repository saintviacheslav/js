// 1.
//  Отобразите в строке через пробел числа от n до 10 по возрастанию используя рекурсию
//  Входные: 0 → Результат: 0 1 2 3 4 5 6 7 8 9 10
//  Входные: 2 → Результат: 2 3 4 5 6 7 8 9 10
//  Входные: 5 → Результат: 5 6 7 8 9 10
// let s=''
// function digfact(n){
    
//     if (n<11){
//     s+=`${n} `;
//     digfact(n+1)
// }   
// return s
// }
// console.log(digfact(0))

//  2. Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
//  Входные: 5 → Результат: 4 2 0
// let s =''
// function digdeslfact(n){
//     if (n>-1){
//         if (n%2==0) s+=`${n} `
//         digdeslfact(n-1)
//     }
//     return s
// }
// console.log(digdeslfact(8))

//  3. На входе число n. Вычислитесуммунатуральных чисел от 1 до n используя рекурсию
//  Входные: 5 → Результат: 15
//  Входные: 3 → Результат: 6
//  Входные: 10 → Результат: 55

// function sumfact(n){
//     if (n==1) return 1
//     else return n+sumfact(n-1)
// }
// console.log(sumfact(5));

//  4. Отобразите четные числа от 5 до 0 по убываю используя рекурсию
//  Входные: 5 → Результат: 4 2 0
// function showEvenNumbersDescending(n, result = "") {
//     if (n < 0) {
//         console.log(result.trim());
//         return;
//     }
//     if (n % 2 === 0) {
//         result += n + " ";
//     }
//     showEvenNumbersDescending(n - 1, result); 
// }
// showEvenNumbersDescending(5);

//  5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
//  Входные: 2, 5 → Результат: 32
//  Входные: 3, 4 → Результат: 81

// function powerfact(n,step){
//     if (step==0) return 1
//     if (step>0) return n*powerfact(n,step-1)
// }
// console.log(powerfact(3,4))

// 6. На входе массив array. Посчитайтеколичество элементов массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 20, 30] → Результат: 3

// function sumarrfact(arr){
//     if (arr.length==1) return 1
//     if (arr.length>1) return 1+sumarrfact(arr.slice(1))
// }
// console.log(sumarrfact([1,2,3,4]));

//  7. Вычислить факториал числа используя рекурсию
//  Входные: 4 → Результат: 24
//  Входные: 5 → Результат: 120
//  Входные: 3 → Результат: 6

// function fact(n){
//     if (n<2) return 1
//     return n*fact(n-1)
// }
// console.log(fact(5));

//  8. Вычислите сумму массива чисел статичного массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 10
//  Входные: [10, 20, 30] → Результат: 60

// function sumarrfact(arr){
//     if (arr.length==1) return arr[arr.length-1]
//     return arr[0]+sumarrfact(arr.slice(1))
// }
// console.log(sumarrfact([10,20,20]));

//  9. Реализуйтепоиск максимального числа статичного массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 5, 8] → Результат: 10

// function findmaxfact(arr){
//     if (arr.length==1) return arr[0]
//     {if (arr[0]>arr[1]) arr[1]=arr[0];else arr[1]=arr[1];}
//     return findmaxfact(arr.slice(1))
// }
// console.log(findmaxfact([10,5,8]))

// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе 
//     стороны), используя рекурсию.
//      Входные: "madam" → Результат: True
//      Входные: "hello" → Результат: False
//      Входные: "racecar" → Результат: True

// function strfact(s){
//     if (s.length>0)
//         if (s[0]==s[s.length-1]) return true
//         else return false
//     return strfact(s.slice(1,s.length-1))
// }
// console.log(strfact('mada'));

//      11.
//      На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
//      Входные: 123 → Результат: 6
//      Входные: 456 → Результат: 15
//      Входные: 987 → Результат: 24

// function sumdigfact(n){
//     if (n<10) return n
//     return n%10+sumdigfact((n-n%10)/10)
// }
// console.log(sumdigfact(987));


// 12. *На входе вложенный список, например [1, [2, [3]], 4]. Вычислите сумму всех чисел в этом списке, 
// используя рекурсию.
//  Входные: [1, [2, [3]], 4] → Результат: 10
//  Входные: [5, [6, [7, [8]]]] → Результат: 26

// function sumoflists(arr){
//     let count = 0;
//     for (let i of arr){
//         if (Array.isArray(i))
//             count+=sumoflists(i)
//         else count+=i
//     }
//     return count
// }
// console.log(sumoflists([5, [6, [7, [8]]]]));




// Задача 1: Найти факториал числа
// Тесты
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1

// function factorial(n){
//     if (n<2) return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(0));


// Задача 2: Найти сумму чисел в массиве
// Тесты
// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([10, -2, 5])); // 13
// console.log(sumArray([])); // 0

// function sumArray(arr){
//     if (arr.length==0) return 0
//     return arr[0]+sumArray(arr.slice(1))
// }
// console.log(sumArray([1, 2, 3, 4])); 


// Задача 3: Найти максимальное число в массиве
// Тесты
// console.log(findMax([1, 5, 3, 9, 2])); // 9
// console.log(findMax([-10, -5, -3])); // -3
// console.log(findMax([42])); // 42

// function findMax(arr){
//     if (arr.length==1) return arr[0]
//     if (arr[0]>arr[1]) arr[1]=arr[0]; 
//     return findMax(arr.slice(1))
// }
// console.log(findMax([42]));



// Задача 4: Посчитать количество элементов в массиве
// Тесты
// console.log(countElements([1, 2, 3])); // 3
// console.log(countElements([])); // 0
// console.log(countElements([42])); // 1


// function countElements(arr){
//     if (arr=='') return 0;
//     return 1+countElements(arr.slice(1))
// }
// console.log(countElements([]));


// Задача 5: Проверить, содержится ли элемент в массиве
// Тесты
// console.log(contains([1, 2, 3], 2)); // true
// console.log(contains([1, 2, 3], 4)); // false
// console.log(contains([], 1)); // false

// function contains(arr,elem){
//     if (arr.length==0) return false
//     if (arr[0]==elem) return true
//     return contains(arr.slice(1),elem)
// }
// console.log(contains([], 2));



// Задача 6: Проверить, является ли массив отсортированным
// Тесты
// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([1, 3, 2])); // false
// console.log(isSorted([5])); // true


// function isSorted(arr){
//     if (arr.length<3) return true
//     if ((arr[0]>arr[1]&&arr[1]<arr[2])||(arr[0]<arr[1]&&arr[1]>arr[2])) return false
//     return isSorted(arr.slice(1))
// }
// console.log(isSorted([5,4,6,1]));


// Задача 7: Преобразовать массив в строку (через запятую)
// Тесты
// console.log(arrayToString([1, 2, 3])); // "1,2,3"
// console.log(arrayToString([])); // ""
// console.log(arrayToString([42])); // "42"

// function arrayToString(arr){
//     if (arr.length==0) return ''
//     if (arr.length==1) return String(arr[0])
//     return String(arr[0])+','+arrayToString(arr.slice(1))
// }
// console.log(arrayToString([1,2,3]));

// Задача 8: Подсчитать количество гласных в строке
// Тесты
// console.log(countVowels("hello")); // 2
// console.log(countVowels("xyz")); // 0
// console.log(countVowels("aeiou")); // 5

// function countVowels(str){
//     const vow = 'euioa'
//     if(str.length==0) return 0
//     if (vow.includes(str[0]))return 1+countVowels(str.slice(1))
//         else return countVowels(str.slice(1))
// }
// console.log(countVowels("hello"));


// Задача 9: Удалить все вхождения элемента из массива
// Тесты
// console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
// console.log(removeElement([5, 5, 5], 5)); // []
// console.log(removeElement([], 1)); // []
// function removeElement(arr,elem){
//     if (arr.length === 0) {
//         return [];
//     }
//     if (arr[0] == elem) {
//         return removeElement(arr.slice(1), elem);
//     } else {
//         return [arr[0]].concat(removeElement(arr.slice(1), elem));
//     }
// }
// console.log(removeElement([5, 5, 5], 5));


// Задача 10: Найти первое четное число в массиве
// Тесты
// console.log(findFirstEven([1, 3, 5, 4])); // 4
// console.log(findFirstEven([1, 3, 5])); // null
// console.log(findFirstEven([])); // null


// function findFirstEven(arr){
//     if (arr.length==0) return null
//     if (arr[0]%2==0) return arr[0]
//     return findFirstEven(arr.slice(1))
// }
// console.log(findFirstEven([1,2, 3, 5, 4]));


// Задача 11: Подсчитать количество слов в строке
// Тесты
// console.log(countWords("hello world")); // 2
// console.log(countWords("")); // 0
// console.log(countWords("a b c")); // 3
// function countWords(str){
//     if (str.length==0) return 0
//     if (!Array.isArray(str)){const x = str.split(' ');return countWords(x)} 
//     return 1+countWords(str.slice(1))   
// }
// console.log(countWords(""));


// Задача 12: Вычислить сумму квадратов элементов массива.
// Тесты:
// console.log(sumOfSquares([1, 2, 3])); // 14
// console.log(sumOfSquares([0, 4, -2])); // 20

// function sumOfSquares(arr){
//     if (arr.length==0) return 0;
//     return arr[0]*arr[0]+sumOfSquares(arr.slice(1))
// }
// console.log(sumOfSquares([1,2,3]));


// Задача 13: Найти индекс первого отрицательного элемента в массиве. (Если отрицательного нет верните -1)
// Тесты:
// console.log(findFirstNegativeIndex([3, 5, -2, 7])); // 2
// console.log(findFirstNegativeIndex([1, 2, 3])); // -1
// let index=0
// function findFirstNegativeIndex(arr){
//     if (arr.length==0) return -1
//     if (arr[0]<0) return index
//     else index++
//     return findFirstNegativeIndex(arr.slice(1))
// }
// console.log(findFirstNegativeIndex([3, 5, -2, 7]));


// Задача 14: Преобразовать строку, заменяя пробелы на дефисы.
// Тесты:
// console.log(replaceSpaces("hello world")); // "hello-world"
// console.log(replaceSpaces("a b c")); // "a-b-c"

// let res = ''
// function replaceSpaces(str){
//     if (str.length==0) return res
//     if (str[0]!=' ') res+=str[0]
//     if (str[0]==' ') res+='-'
//     return replaceSpaces(str.slice(1))
// }
// console.log(replaceSpaces("hello world"));