let heroes=["spiderman","thor","ironman"]

let herospower={
    spiderman:"web",
    thor:"Lightning",
    ironman:"billioniare",
    getspiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sandeep=function(){
    console.log("i am here");
}
// herospower.sandeep();
heroes.sandeep()
Array.prototype.sandy=function(){
    console.log("apun bhagwan hai");
}
heroes.sandy();
// herospower.sandy();
