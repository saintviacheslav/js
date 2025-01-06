const a = prompt("enter:")
if (isNaN(a)){
    switch (a){
        case "кошка":
            console.log("Млекопитающее");
            break;
        case "собака":
            console.log("Afternoon");
            break;
        case "попугай":
            console.log("Птица");
            break;
        case "рыба":
            console.log("Рыба");
            break;
        default:
            console.log("error")
    }
}