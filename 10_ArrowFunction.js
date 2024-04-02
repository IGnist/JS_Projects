const Obj1={
    Name:"Sandeep",
    Age:22,
    welcome:function(Name="MYTH"){
        console.log(`${Name} , Welcome , ${this.Name}`)
        console.log(this)
    }
}
// Obj1.welcome("Ignist")
// Obj1.Name="Ramesh"
// Obj1.welcome()
// console.log(this);

// **************************************

function Aby() {
    console.log(this);
}
const abc=function(){
    console.log(this);
}
const abcd=()=>
(console.log(this))
// Aby()
// abc()
 abcd()