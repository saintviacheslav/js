const a = prompt("enter:")
if (!isNaN(a)){
    switch (+a){
        case 1:
            console.log("Morning");
            break;
        case 2:
            console.log("Afternoon");
            break;
        case 3:
            console.log("Evening");
            break;
        case 4:
            console.log("Night");
            break;
        default:
            console.log("error")
    }
}