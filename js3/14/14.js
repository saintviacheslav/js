//14

// const a = prompt("enter:")
// const b = prompt("enter:")
// if (!isNaN(a) && !isNaN(b)) {
//     if (+a>+b)
//         console.log(a)
//     else if (+a<+b)
//         console.log(b)
//     else console.log("equals")
// } else {
//     console.log(false)
// }


//15
// const a = prompt("enter:")
// const b = prompt("enter:")
// if (!isNaN(a) && !isNaN(b)) {
//     if (+a%+b===0)
//         console.log("yes")
//     else console.log("no")
// } else {
//     console.log(false)
// }


//16
// const a = prompt("enter:")
// if (!isNaN(a)) {
//     if (+a >= 10 && +a <= 20)
//         console.log("yes")
//     else console.log("no")
// } else {
//     console.log(false)
// }

//17
const a = prompt("enter:")
if (isNaN(a) && a[0] == "A") {
    console.log(`строка ${a} начинается с "A"`)
} else {
    console.log(`строка ${a} не начинается с "A"`)
}