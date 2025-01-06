//1
// const obj={
//     id:0,
//     count:4,
//     gty:'kfgfk'
// }
// const a = Object.values(obj)
// console.log(a)

//2
// const name = 'count'
// const obj={
//     id:0,
//     count:4,
//     gty:'kfgfk'
// }
// console.log(obj.hasOwnProperty(name))

//3
// const obj ={ product1: 10, product2: 5, product3: 8 }
// const a = Object.values(obj)
// console.log(a.reduce((acc, number) => acc + number, 0));

//4
// const obj ={ Анна: 95, Иван: 88, Мария: 92 }
// const n = 89
// console.log(Object.values(obj).filter(function (el){
//     if (el>n)
//         return true
//     else return false
// }))

//5
// const obj = { яблоко: 'красное', банан: 'желтый',
//     апельсин: 'оранжевый',апельсин222: 'оранжевый' }
// // const a = Object.entries(obj)
// console.log(Object.entries(obj));

//6
// const s = 'id2'
// const obj = {
//     id: 0,
//     count: 4,
//     gty: 'kfgfk'
// }
// Object.keys(obj).includes(s) ? console.log(true) : console.log(false)

//8
// const n = 12345
// const s = String(n)
// let result =0
// for (let i = 0;i<s.length;i++){
//     result+=Number(s[i])**i
// }
// console.log(result);

//9
// const obj1 ={
//     id:1,
//     id1:12,
//     id2:13
// }
// const obj2 ={
//     id:1,
//     id4:12,
//     id2:13,
//     id3:875
// }
// const obj={
// }
// for (key in obj1)
// {
//     if (key in obj2)
//         obj[key]='+'
// }
// console.log(obj);

//10
// const obj1 ={
//     id:1,
//     age:12
// }
// const {id,age}=obj1
// console.log(id);
// console.log(age)

// //11
// const a =[1,25,3,4,5]
// const [c,b] = a
// console.log(c+' '+b)