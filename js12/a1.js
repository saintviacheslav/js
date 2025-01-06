//1
// const a = 'gjsd'
// const b = 'sgksog'
// function Name(a,b){
//     return console.log(`Hello ${a} ${b}`)
// }
// Name(a,b)

//2
// function Sep(s){
//     let s1=''
//     const a = s.split(' ')
//     for (let i =0;i<a.length;i++)
//         if (i%2==0){
//             s1+=a[i].toLowerCase()
//             s1+=' '}
//         else {s1+=a[i].toUpperCase()
//               s1+=' '
//         }
//     return console.log(s1);  
// }
// const s = 'ghgu ugyug uhgyu uvy8u uyguyg'
// Sep(s)

//3
// const s = 'hhfhei eiefhfiewu weifhewiu weeijhfwei'
// function Sep(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(Sep(s))

//4
// const a = ['sdsdf', 'fdfds','sd','d','afaf','sa']
// function Fill(s){
//     const arr=s.filter(function (el){
//         if (el.length>2)
//             return true
//         else return false
//     })
//     return console.log(arr);

// }
// Fill(a)

//5
// const a =[1,2,3,3]
// function check(a){
//     const arr = a.every(function (el){
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return console.log(arr);

// }
// check(a)

//6
// function createArray(n) {
//     let arr = [];

//     for (let i = 0; i < n; i++) {
//         const element = prompt(`Введите элемент под индексом ${i}:`);
//         if (element !== null && element.trim().length > 0) {
//             arr.push(element);
//         }
//     }

//     return arr;
// }
// function countElements(arr) {
//     return arr.length;
// }
// const arraySize = parseInt(prompt("Введите размер массива:"));
// if (!isNaN(arraySize) && arraySize > 0) {
//     const myArray = createArray(arraySize);
//     console.log(`Количество элементов в массиве: ${countElements(myArray)}`);
//     console.log(`Массив:`, myArray);
// } else {
//     alert("Неверный ввод! Размер массива должен быть положительным числом.");
// }

//7
// const a = [1, 2, 3, 3]
// function check(a) {
//     const arr = a.every(function (el) {
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return console.log(arr);

// }
// function sum(a) {
//     let res = 0
//     for (let i = 0; i < a.length; i++) {
//         res += a[i]
//     }
//     return console.log(res)
// }
// check(a)
// sum(a)

//8
// const a = ['ggeg','fwfw','wfwfw','gege']
// function check(a) {
//     const arr = a.every(function (el) {
//         if (isNaN(el)) return true
//         else return false
//     })
//     return arr;

// }
// function sum(a) {
//     let res = ''
//     for (let i = 0; i < a.length; i++) {
//         res += a[i]
//     }
//     return console.log(res)
// }
// check(a)?sum(a):false

//9
// const a = [1,2,3,4,5]
// function check(a) {
//     const arr = a.every(function (el) {
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return arr;

// }
// function sum(a) {
//     const arr = a.map(el=>el*2)
//     return console.log(arr)
// }
// check(a)?sum(a):false

//10
// const a = [1,2,3,4,5,6,7,8,9,1000,12]
// function check(a) {
//     const arr = a.every(function (el) {
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return arr;

// }
// function sum(a) {
//     const arr = a.filter(function (el){
//         if (el%2==0)
//             return true
//         else return false
//     })
//     return console.log(arr)
// }
// check(a)?sum(a):false

//11
// const n = 5
// function fact(n){
//     if (n<2) return 1
//     return n*fact(n-1)
// }
// console.log(fact(n))

//12
// const s ='ratar'
// function pal(s){
//     const a = s.split('')
//     const b = a.reverse()
//     const sfin=a.join('')
//     return s==sfin
// }
// console.log(pal(s));

//13
// const s= 'aran'

//14
// const a = [1,2,3,4,5,6,7,8,9,-12,12]
// function check(a) {
//     const arr = a.every(function (el) {
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return arr;

// }
// function max(a) {
//     let maxdig=-Infinity
//     for(let i=0;i<a.length;i++){
//         if(a[i]>maxdig)
//             maxdig=a[i]
//     }
//     return maxdig
// }
// check(a)?console.log(max(a)):false

//15
// function createArray(n) {
//     let arr = [];

//     for (let i = 0; i < n; i++) {
//         const element = prompt(`Введите элемент под индексом ${i}:`);
//         if (element !== null && element.trim().length > 0) {
//             arr.push(element);
//         }
//     }

//     return arr;
// }
// function check(a) {
//     const arr = a.every(function (el) {
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return arr;
// }
// function sum(a) {
//     let res = 1
//     for (let i = 0; i < a.length; i++) {
//         res *= a[i]
//     }
//     return console.log(res)
// }
// const arraySize = parseInt(prompt("Введите размер массива:"));
// if (!isNaN(arraySize) && arraySize > 0) {
//     const myArray = createArray(arraySize);
//     check(myArray)?sum(myArray):false
// } else {
//     alert("Неверный ввод! Размер массива должен быть положительным числом.");
// }

//16
// function createArray(n) {
//     let arr = [];

//     for (let i = 0; i < n; i++) {
//         const element = prompt(`Введите элемент под индексом ${i}:`);
//         if (element !== null && element.trim().length > 0) {
//             arr.push(element);
//         }
//     }

//     return arr;
// }
// function check(a) {
//     const arr = a.every(function (el) {
//         if (!isNaN(el)) return true
//         else return false
//     })
//     return arr;
// }
// function sum(a) {
//     const arr = a.filter(function(el){
//         if (el%2==0)
//             return true
//         else return false
//     }).map(elik=>elik**2)
//     return console.log(arr)
// }
// const arraySize = parseInt(prompt("Введите размер массива:"));
// if (!isNaN(arraySize) && arraySize > 0) {
//     const myArray = createArray(arraySize);
//     check(myArray)?sum(myArray):false
// } else {
//     alert("Неверный ввод! Размер массива должен быть положительным числом.");
// }

//17
// function reg(a){
//     let fin=''
//     const arr = a.split('')
//     for (let i=0;i<arr.length;i++){
//         if (i%2!=0)
//             fin+=arr[i].toLowerCase()
//         else fin+=arr[i].toUpperCase()   
//     }
//     return console.log(fin);
    
// }
// const s ='asdasdasdasdasdasdasd'
// reg(s)

//18
function date(s){
    const arr = s.split('/')
    const arr1 = arr.reverse()
    const fin = arr1.join('-')
    return console.log(fin);
    
}
const s = '12/09/2024'
date(s)