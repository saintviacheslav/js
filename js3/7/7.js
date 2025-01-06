const a = prompt("enter:")
const b = prompt("enter:")
if (!isNaN(a)&&!isNaN(b)) {
    console.log("https://"+a+'/'+b)
} else {
    console.log(`https://${a}/${b}`)
}