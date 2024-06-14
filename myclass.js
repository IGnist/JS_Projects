class user{
    constructor(username,email,password){
        this.username=username  ;
        this.email=email;
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()} `
    }
}
const sandy=new user("sandeep","sandy@gmail.com","123")
console.log(sandy.encryptpassword());
console.log(sandy.changeusername());

function uses(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

}
uses.prototype.encryptpassword=function(){
    return `${this.password}abc`;
}

uses.prototype.changeusername=function(){
    return `${this.username.toUpperCase()} `;
}
 
const sandeep=new uses("sandy","ee@gmail.com","8910")
console.log(sandeep.encryptpassword());
console.log(sandeep.changeusername());

