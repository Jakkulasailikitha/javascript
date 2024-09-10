var a=require("readline-sync")
b=a.questionFloat("enter the time here:")
if (b>=8.00 && b<=12.30){
    console.log("first coding")
}
else if (b>=12.31 && b<=14.00){
    console.log("lunch break")

}
else if (b>=14.01 && b<=14.30){
    console.log("second coding")

}
else if (b>=14.31 && b<=18.00){
    console.log("exercise\ncleaning\nbreak")

}
else if (b>=18.01 && b<=20.00){
    console.log("english activity\nrecreation")

}
else if (b>=20.01 && b<=21.00){
    console.log("dinner time")

}
else if (b>=21.01 && b<=23.00){
    console.log(" night study")
}
if (b>23.00){
    console.log("go to bed")

    }

    
    ``