//1
// let tut = 'prompt()'
// if (isNaN(tut.toLowerCase())) {
//     tut = '#' + tut
//     console.log(tut)
// } else
//     console.log(false)
//2
// let tut = 'mem'
// const b = tut.split('').reverse().join('')

// if (isNaN(tut)){
//     if (tut==b)
//         console.log(true)
//     else 
//     console.log(false)
// } 

//3
// На вход подается строка, содержащая символы @. Удалите все вхождения символа @ из строки.
// Включите проверку, чтобы убедиться, что ввод корректен.
// Входные: "123@1@@34" → Результат: "123134"

// const a = "123@1@@34"
// if (a.length){
//     console.log(a.replaceAll("@",''))
// } else console.log(false)

//4
// const a = "27"
// const b = Number(a)
// if ((b > 2 && b < 11) || (b >= 26 && b < 30))
//     console.log(true)
// else console.log(false)


//5
// На вход подается строка, представляющая электронную почту. Если строка содержит символ @ и
// заканчивается на .com или .ru, выведите true, иначе false.
// Входные: "user@domain.com" → Результат: true
// const a = "user@domain.com"
// if (a.includes('@')&&(a.endsWith('.com')||a.endsWith('.ru')))
//     console.log(true)
// else console.log(false)

//6
// На вход подается строка с числами, разделенными запятыми, например, "1,2,3,4,5". Преобразуйте
// строку к массиву чисел не учитывая запятые.
// Входные: "1,2,3,4,5" → Результат: [‘1’, ‘2’, ‘3’, ‘4’, ‘5’]
// const a ="1,2,3,4,5"
// console.log(a.split(','))

//7
// Пользователь вводит строку и число n. Повторите строку n раз.
// Входные: "hello", 3 → Результат: "hellohellohello"

// const a = "hello"
// console.log(a.repeat(3))

//8
// На вход подается строка, представляющая URL, например, "http://example.com". Убедитесь, что URL
// начинается с http:// или https://.
// Входные: "http://example.com" → Результат: true
// const a = "http://example.com"
// if (a.startsWith("http://")||a.startsWith("https://"))
//     console.log(true)
// else console.log(false)

//9
// Пользователь вводит строку, состоящую из слов (до 3 слов), разделенных пробелами.
// Преобразуйте каждое слово так, чтобы первая буква была строчной, а остальные — заглавными.
// Входные: "HELLO WORLD" → Результат: "hELLO wORLD"

// const a = "HELLO WORLD"
// const b = a.split(' ')
// const c= b[0][0].toLowerCase()+b[0].slice(1) + ' '+ b[1][0].toLowerCase()+b[1].slice(1)
// console.log(c)

//10
// Пользователь вводит строку и символ. Убедитесь, что данный символ не присутствует в строке.
// Если он есть, выведите его индекс, иначе выведите "Символ не найден".
// Входные: "hello", "7" → Результат: "4"

// const a = "hello"
// const b = "l"
// if (isNaN(b)) {
//     a.includes(b)?console.log(a.indexOf(b)):console.log("Символ не найден")
// } else console.log("b - число")

//11
// Создайте два “symbol” с одинаковым описанием и сравните их. Выведите результат сравнения в
// консоль.
// const tut = Symbol("ahah")
// const tam = Symbol("ahah")
// console.log(tut==tam)

//12
// Создайте символ с описанием и проверьте тип созданной переменной. Убедитесь, что она имеет
// тип "symbol".
// const tut = Symbol("ahah")
// console.log(typeof(tut))

//13
// На вход подается строка, содержащая несколько предложений. Напишите программу, которая
// подсчитывает количество предложений в строке.
// Входные: "Hello. How are you? I'm fine!" → Результат: 3
// const a = "Hello. How are you? I'm fine!"
// const b =a.split('.')
// console.log(b.length)

//14
// На вход подается строка в формате пути, например '/home/user/dir/file.txt'. Необходимо извлечь и
// вернуть имя файла, то есть подстроку после последнего символа /.
// Входные: '/home/user/dir/file.txt' → Результат: 'file.txt'
const a = '/home/user/dir/file.txt'
const b = a.split('/').reverse()
console.log(b[0])
