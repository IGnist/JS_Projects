function setUserName(username){
    this.username=username;
}
function setUser(username,age,nationality){
    setUserName.call(this,username)
    this.age=age;
    this.nationality=nationality;
}

const admi=new setUser("sandeep",22,"indian");
console.log(admi);
