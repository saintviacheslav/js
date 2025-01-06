const a = prompt("enter:")
if (isNaN(a) && a[a.length-1] == "!") {
    console.log(true)
} else {
    console.log(false)
}