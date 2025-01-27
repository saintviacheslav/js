// 1.
//  Создайте объект calculator с полем result и методами add и subtract, которые принимают в
//  качестве параметров число и изменяют result соответственно. В задаче использовать
//  контекст

// let calculator = {
//     result: 0,
//     add: function (number) {
//         this.result += number
//         return this.result
//     },
//     subtract: function (number) {
//         this.result -= number
//         return this.result
//     }
// }
// console.log(calculator.add(45));
// console.log(calculator.subtract(8));


//  2. Создайте объект textAnalyzer с полем text– строка и методом getTextLength, который
//  возвращает длину текста, хранящегося вполе text. В задаче использовать контекст
// const textAnalyzer={
//     text:"tut",
//     getTextLength:function(){
//         return this.text.length
//     }
// }
// console.log(textAnalyzer.getTextLength());


// 3. Напишите функцию, которая принимает строку из чисел ‘12345’ и возвращает значение в
//  обратном порядке ‘54321’. IIFE

// (function (str) {return console.log(str.split('').reverse().join(''))})('12345')

//  4. Напишите функцию, которая принимает массив строк и находит строку с максимальной
//  длиной. Добавить проверки

// function check(arr){
//     let index = 0
//     for (let i =0;i<arr.length;i++){
//         if (arr[i].length>arr[index].length)
//             index = i;
//     }
//     return console.log(arr[index]);

// }
// check(['asd','as','dfgr',45468,'tre'])


//  5. Напишите функцию, которая принимает адрес электронной почты и возвращает объект с
//  полями email и active. Поле active должно быть true, если адрес содержит символ '@' и '.com’
//  / ‘.by', и false в противном случае.
//  {
//  email,
//  active: true / false
//  }

// function legit(str){
//     const obj={
//         email:'',
//         active:false
//     }
//     obj.email = str;
//     if  (str.includes('@')&&(str.includes('.com')||str.includes('.by')))
//         obj.active =  true
//     else obj.active = false
//     return obj
// }
// console.log(legit('kshfhsugfu'))
// console.log(legit('dfgsdfi@jhogw.com'))
// console.log(legit('osdfod@klkds.by'))


//  6. Напишите функцию, которая принимает массив чисел и находит минимальное и
//  максимальное значения в этом массиве. Добавьте проверки на ввод и выведите сообщение
//  обошибке, еслизначениямассива несоответствуют условиям задачи.

// function minim(arr) {
//     if (arr.length == 0) return console.log('error')
//     else {
//         let min = arr[0]
//         let max = arr[0]
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i]>max)
//                 max = arr[i]
//             else if (arr[i]<min)
//                     min = arr[i]
//         }
//         return [max,min]
//     }

// }
// console.log(minim([1,2,3,4,5,5,3,2,1,-6,23,123,45,-23,-34,0,0,34,5,2,65])) 

//  7. Напишитефункцию, которая принимает строку в виде пароля и проверяет, является ли этот
//  пароль надежным. Надежный пароль должен содержать хотя бы одну заглавную букву,
//  цифры, аегодлинадолжнабытьнеменее8символов.

// function checkpass(str) {
//     if (str.length < 8) return console.log('is not a good choice');
//     if (!str.split('').some(function (elem) {
//         if (elem == elem.toUpperCase()) return true;
//     })) return console.log('is not a good choice');
//     if (!str.split('').some(function (elem) {
//         if (isNaN(Number(elem))) return true;
//     })) return console.log('is not a good choice');
//     return console.log('all good');
// }
// checkpass('778775п55Р')

//  8. Реализуйте функцию, которая будет подсчитывать количество своих вызовов с
//  использованием замыкания. Каждый раз, когда функция вызывается, счетчик увеличивается
//  на1 ивозвращаеттекущее значениесчетчика

// function counting(){
//     let call = 0;
//     return ()=>{
//         call++;
//         console.log(call);
        
//     }
    
    
// }
// const wrap = counting()
// wrap()
// wrap()
// wrap()


// 9. Необходимо реализовать конкатенацию строк при каждом последующем вызове функции с
//  использованием замыкания

// function counting(){
//     let call = '';
//     return (str)=>{
//         call+=str;
//         console.log(call);
//     }
// }
// const wrap = counting()
// wrap('ya')
// wrap('lublu')
// wrap('js')

//  10. Напишите IIFE, которая принимает массив и возвращает новый массив, содержащий только
//  уникальные элементы.
//  [1, 1, 2, 2, 2, 3, 4, 5, 5, 5]–> [1, 2, 3, 4, 5].

// (function (str) {const arr=[];for (let i of str) if(!(arr.includes(i))) arr.push(i);return console.log(arr) })([1, 1, 2, 2, 2, 3, 4, 5, 5, 5])

//  11. На входе динамичный массив; число n с клавиатуры. Необходимо написать функцию,
//  возвращающую
//  элементы
//  массива,
//  которые
//  больше
//  указанного
//  числа.
//  [1, 9, 45, 11, 10], 10 -> 45, 11

// function higher(arr,n){
//     for (let i of arr){
//         if (i>n) console.log(i)
//     }
// }
// higher( [1, 9, 45, 11, 10], 10)

//  12. Напишите функцию, которая принимает два параметра: предложение из нескольких слов и
//  букву. Функция должна подсчитывать количество вхождений указанной буквы в строке. 
// Добавить проверки

// function lettercounting(str,letter){
//     let count = 0;
//     if (str.length==0) return console.log('error1');
//     if (letter.length==0||letter.length>1) return console.log('error2');
//     for (let i=0;i<str.length;i++)
//         if (str[i]==letter||str[i].toLowerCase()==letter) count++
//     return count
// }
// console.log(lettercounting('lkKjpKk','k'))


//  13. Напишите функцию, принимающую в качестве параметра статичный объект. Функция
//  возвращает новый объект, где значения– исключительно числа первоначального объекта. 
// IIFE

// (function (obj){
//     let res={}
//     for (let key in obj){
//         if (!isNaN(obj[key]))
//             res[key] = obj[key]
//     }
//     return console.log(res);
// })({
//     id:10,
//     id2:2,
//     id3:'lfdodf',
//     id4:'kldfhd',
//     id5:345,
// })


//  14. Напишите функцию, принимающую в качестве параметра статичный объект. Функция
//  возвращает количество парключ /значение. IIFE

// (function (obj){
//     let count=0;
//     for (let key in obj)
//         count++
//     return console.log(count);
    
// })({
//     id:10,
//     id2:2,
//     id3:'lfdodf',
//     id4:'kldfhd',
//     id5:345,
// })

//  15. Напишите функцию, генерирующую пароль из 8 символов с использованием замыкния.
//  (Math.random)

function generatepasssword(){
    let s = Math.floor(Math.random()*10)
    for(let i = 0;i<7;i++){
        s=s*10+(Math.floor(Math.random()*10));
    }
    return console.log(s);      
}
generatepasssword()