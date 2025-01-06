const a = prompt("enter:")
const b = prompt("enter:")
const c = prompt("enter:")

if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)) {
    console.log(a+`.`+b+`.`+c)
} else {
    console.log(`${a}.${b}.${c}`)
}