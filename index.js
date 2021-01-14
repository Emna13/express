const express=require("express");
var app=express()
const path=require('path');

let objToday = new Date()
console.log(objToday)
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = objToday.getDay(),
    curHour = (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),

console.log(dayOfWeek)
console.log(curHour)


function myMiddelware(req,res,next){
    if ( curHour<=17 && curHour>=9 && dayOfWeek>0 && dayOfWeek<6){ next()}     
    else {res.send('<h1 style="color:red"> We are open from Monday to Friday, from 9 am to 5 pm.</h1>')}
}
app.use(myMiddelware)
app.use(express.static(path.join(__dirname,"public")))

const PORT=process.env.PORT || 3000;
app.listen(PORT)