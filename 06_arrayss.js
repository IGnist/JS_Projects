let Batsman=["Vansh","Sandeep","Sachin"]
console.log(Batsman)
let Bowler=["Aditya","Naman"]
console.log(Bowler)
let AllRounder=["Sumit","Rohit","Anand"]
console.log(AllRounder)
// let AllPlayers=Batsman.push(Bowler)
// console.log(AllPlayers)
// Batsman.push(Bowler)
// console.log(Batsman)
let AllPlayers=Batsman.concat(Bowler)
console.log(AllPlayers);
let EveryPlayer=[...Batsman,...Bowler,...AllRounder]
console.log(EveryPlayer)

let myarr=[1,2,3,[6,7,8,9],[9,0,0,[5,80]]]
let myarr2=myarr.flat(Infinity);
console.log(myarr)
console.log(myarr2)
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))
let Name="Sandeep"
console.log(Array.from(Name))
