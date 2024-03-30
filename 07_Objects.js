const mysym=Symbol("key1")
const LenoUser={
    Name:"Sandeep",
    Age:22,
    Email:"sandeepkushwaha0776@gail.com",
    [mysym]:"key2",
    "CLG UID":9844

}
console.log(LenoUser)
console.log(LenoUser.Name)
console.log(LenoUser.Email)
console.log(LenoUser["CLG UID"])
console.log(LenoUser["Age"])
console.log(LenoUser[mysym])
console.log(mysym)
//Object.freeze(LenoUser)
LenoUser.Age=25
console.log(LenoUser)
LenoUser.Welcome=function () {
console.log(`welcome , ${this.Name}`)    
}
console.log(LenoUser.Welcome())


