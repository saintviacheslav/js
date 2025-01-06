const a = prompt("enter:")
const b = prompt("enter:")
if (isNaN(a) && !isNaN(b) && +b < a.length) {
    console.log(a[b])
} else {
    console.log(`Индекс вне диапазона`)
}