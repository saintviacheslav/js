// 1.
//  На вход подается строка в виде числа. Необходимо написать регулярное 
// выражение. Если строка состоит только из чисел, то вывести булевое true, в 
// противном случае бросить исключение и обработать


// const str = '98762875'
// function cheksstr(str){
//     try {
//         if (!/^[0-9]$/g.test(str))
//             throw new Error("not only digits")
//         return true
//     }
//     catch (error){
//         return error.message
//     }
// }
// console.log(cheksstr(str));

//  2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать 
// регулярное выражение для данной строки. Если же строка подходит под 
// регулярное выражение, то вывести булевое true, в противном случае бросить 
// исключение и обработать



// const str = 'Name-Name Surname 35'
// function cheksstr(str){
//     try {
//         if (!/^[A-Za-z-]+ [A-Za-z]+ [0-9]+$/g.test(str))
//             throw new Error("not good type")
//         return true
//     }
//     catch (error){
//         return error.message
//     }
// }
// console.log(cheksstr(str));
//  3. На вход подается строка из 2 и более слов. Необходимо все символы пробела
//  заменить на пустую строку. 


// const str = 'Name Surname 35'
// function cheksstr(str){
//     const regex = /\ +/g
//     console.log(str);
//     console.log(str.replace(regex,''))
// }
// (cheksstr(str));

// 4. На вход подается строка в виде электронной почты пользователя. Необходимо 
// написать регулярное выражение для данной строки. Если же строка подходит под 
// регулярное выражение, то вывести булевое true, в противном случае бросить 
// исключение и обработать

// const str = 'slaturchik@gmail.com'

// function checkemail(email){
//     try{
//         if (!/^[A-Za-z0-9_]+@[a-z]+\.[a-z]{1,3}$/.test(email))
//             throw new Error('incorrect email')
//         return true
//     }
//     catch (error){
//         return error.message
//     }
// }
// console.log(checkemail(str));


//  5. На вход подается строка в виде url. Необходимо написать регулярное выражение 
// для данной строки. Если же строка подходит под регулярное выражение, то 
// вывести булевое true, в противном случае бросить исключение и обработать

// const str = 'https://www.reg.ru'

// function checkurl(url){
//     try{
//         if (!/^http[s]{0,1}:\/\/www\.[a-z0-9_-]+\.[a-z]{1,3}$/.test(url))
//             throw new Error('incorrect url')
//         return true
//     }
//     catch (error){
//         return error.message
//     }
// }
// console.log(checkurl(str));

// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное 
// выражение для данной строки. Если же строка подходит под регулярное 
// выражение, то вывести булевое true, в противном случае бросить исключение и 
// обработать
//  C:\Users\Admin\Desktop\test.txt -> true
//  C:/Users/Admin/Desktop/test.txt -> true
// const str = 'C:/Users';

// function checkPath(path) {
//     try {
//         // Проверяем путь на соответствие формату Windows
//         if (!/^[A-Z]:(\\[^<>:"/\|?*\x00-\x1F]+)+$/.test(path)) {
//             throw new Error('Некорректный путь');
//         }
//         return true;
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(checkPath(str));


//  7. На вход подается строка в виде пароля. Необходимо написать регулярное 
// • Буквы в UPPER регистре
//  • Буквы в LOWER регистре
//  • Числа
//  выражение для данной строки. Если же строка подходит под регулярное 
// выражение, то вывести булевое true, в противном случае бросить исключение и 
// обработать.
//  Пароль должен содержать:
//  • Специальные символы 
// • Длина не менее 8 символов


// const str = '2qW$2222';

// function checkPassword(password) {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#$%&])[A-Za-z\d#$%&]{8,}$/;
    
//     if (!passwordRegex.test(password)) {
//         return 'Некорректный пароль';
//     }
//     return true;
// }

// console.log(checkPassword(str)); // Вернёт true

//  8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо 
// оставить в строке только буквенные символы используя регулярные выражения. 
// Если же длина исходной строки изменилась, вывести true, в противном случае 
// бросить исключение и обработать

// const str = "sdgduicjgdvisd"
// const regex=/[0-9@#$%&]+/
// const fin= str.replace(regex,'');
// console.log(str)
// console.log(fin)
// try{
//    if (fin.length!=str.length)
//     throw new Error('not equal lengthes')
//    else console.log(true)
// }
// catch(error){
//     console.log(error.message) 
// }
// console.log((fin.length==str.length));

// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не 
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать 
// регулярное выражение для данной строки. Если же строка подходит под 
// регулярное выражение, то вывести булевое true, в противном случае бросить 
// исключение и обработать
//  "1234“ -> true 
// "12345“ -> false 
// "a234“ -> false

// const str = '3974'
// function checkPIN(str){
//     try{
//         if (!/^\d{4}$|^\d{6}$/.test(str))
//             throw new Error('incorrect PIN')
//         return true
//     }
//     catch(error){
//         return error.message
//     }
// }
// console.log(checkPIN(str));


//  10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не 
// оценил использование комментариев в ветке development и попросил их убрать. 
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать 
// регулярное выражение, которое вырежет все комментарии из html разметки
//  <!---->
let htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- This is a comment -->
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
    <!-- Another comment -->
    <p>This is a paragraph.</p>
</body>
</html>
`;
const regex = /<!--[\s\S]*?-->/g;

let cleanedHtml = htmlCode.replace(regex, '');

console.log(cleanedHtml);