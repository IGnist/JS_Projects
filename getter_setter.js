class pritam{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username=value;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value;
    }
}
const u1=new pritam("madhav","apoip")
console.log(`${u1.password}`);
console.log(`${u1.username}`);