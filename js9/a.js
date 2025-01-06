//1
// const c = [] 
// let news = []
// if (c.length==0)
//     console.log('empty')
// for (let i of c){

//     if (!isNaN(i))
//         news.push(i)
// }
// console.log(news);


//2
// const c = [2, 3, 4, 5, 6, 4, 5]
// const a = c[c.length - 1]
// const b = c[c.length - 2]
// const result = c.filter(function (el) {
//     if (el != a && el != b){
//         return true
//     }
//     else return false
// })
// console.log(result);

//3
// const c = [2,2,2,2,2,2]
// let news = []
// c.forEach(function(el){
//     if(!news.includes(el))
//         news.push(el)
// })
// console.log(news);


//4
// const c = [2, 3, 4, 5] 
// let res = 1
// c.forEach(function(el){
//     res*=el
// })
// console.log(res);


//5
// const c = ['a', 2, 'c', 'd'] 
// const res = c.some(function(el){
//     if (!isNaN(el))
//         return true
//     else return false
// })
// console.log(res);

//6
// const c = [1, 2, 3, 4] 
// const res = c.every(function(el){
//     if (!isNaN(el))
//         return true
//     else return false
// })
// console.log(res);


//7
// const c = [2, 3, 4, 5] 
// let res = 0
// c.forEach(function(el){
//     res+=el
// })
// console.log(res);

//8
// const c =[1, 2, 3, 4, 5, 6] 
// const res = c.map(function(el){
//     if (el%2==0)
//         return 'чет'
//     else return 'нечет'
// })
// console.log(res);


//9
// const c =  ["apple", "banana", "harvest", "grape"]
// const res = c.filter(function(el,i,arr){
//     if (el.startsWith('a')||el.startsWith('h'))
//         return true
//     else return false
// })
// console.log(res);
// 10
// const a = ["I love javascript", "coding", "javascript is fun", "python"] 
// let b = []
// a.forEach(function(el){
//     if(el.includes('javascript'))
//         b.push(el)
// })
// console.log(b)

// 11
// const a = ["hschool", "company"]
// const result = a.map(function(el){
//     return '#' + el
// })
// console.log(result)

// 12
// const a = ["apple", 10, "banana", 20, 30, "cherry"] 
// let b = []
// let c = []
// a.forEach(function(el){
//     if(!isNaN(el))
//         c.push(el)
//     else b.push(el)
// })
// console.log(b)
// console.log(c)


// 13
// const a = [2, 3, 4]
// const result = a.map(function(el){
//     return el ** 2
// })
// console.log(result)

// 14
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// let result = [...a, ...b]
// console.log(result)

// 15
// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3));
// console.log(sum(4, 5, 6, 7));


// 16
// const a = [2, 3, 4]
// const b = 1
// let result = [...[b], ...a]
// console.log(result)

// 17
// function toUpperCase(...args){
//     let uppercased = [];
//     for (let arg of args) {
//         uppercased.push(arg.toUpperCase());
//     }
//     console.log(uppercased);
// }
// toUpperCase('apple', 'banana', 'cherry')

// 18
// const a = [2, 3, 4]
// const result = a.reduce(function (proiz, elem){
//     return proiz * elem
// }, 1)
// console.log(result)

// 19
// const a = [1, 'a', 3, 'b', 5]
// const result = a.reduce(function (count, elem){
//     if(!isNaN(elem))
//         return count + 1
//     return count
// }, 0)
// console.log(result)

// 20
// const a = ["apple", "banana", "cherry"]
// const result = a.reduce(function (str, elem){
//     return str + elem + ','
// }, '')
// console.log(result.slice(0, -1))

// 21
// const a = [3, 7, 2, 5]
// const result = a.reduce(function(max, elem){
//     if(elem > max)
//         max = elem
//     return max
// }, a[0])
// console.log(result)

// 22
// const a = [1, 2, 3, 4] 
// const result = a.map(function(elem, index){
//     return elem * index
// })
// console.log(result)

// 23
// const a = [2, 4, 6, 9]
// const result = a.every(function(elem){
//     if (elem % 2 === 0) return true
//     else return false
// })
// console.log(result)

// 24
// const a = [1, -2, -3, -4]
// const result = a.some(function(elem){
//     if (elem > 0) return true
//     else return false
// })
// console.log(result)

// 25
// const a = ["apple", "banana", "cherry"]
// const result = a.map(function(elem){
//     return elem.length
// })
// console.log(result)

// 26
// const a = ["apple", "banana", "cherry"]
// const result = a.every(function(elem){
//     if (elem.length > 3) return true
//     else return false
// })
// console.log(result)

// 27
// const a = ["apple", "banana", "cat"]
// const result = a.filter(function(elem){
//     if (elem.length < 5) return true
//     else return false
// })
// console.log(result)


// 28
// const a = ["apple", "banana", "cherry"]
// const result = a.map(function(elem){
//     return elem.toUpperCase()
// })
// console.log(result)

// 29
// const a = [-10, 20, 30]
// const result = a.filter(function(elem){
//     if (elem > 0) return true
//     else return false
// })
// console.log(result)

// 30
// const a = [10, 3, 5, 7]
// const result = a.reduce(function(min, elem){
//     if(elem < min)
//         min = elem
//     return min
// }, a[0])
// console.log(result)