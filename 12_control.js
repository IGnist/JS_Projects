const age=98
if(age<5){
    console.log("CHILD");
}
else if(age<25){
    console.log("adult");
}
else{
    console.log("Old");
}
const gender="M";
if(age>=50 && gender=="M"){
    console.log("Budha");
}
if(age>=50 && gender=="F"){
    console.log("Budhi");
}
if(age<=50 && gender=="F"){
    console.log("BACHI");
}
else{
    console.log("Bacha");
}
age<50 ? console.log("lol") : console.log("Nol");