const descriptor=Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descriptor);

const lamhe={
    Name:"sandeep",
    rollNo:9844
}
console.log(Object.getOwnPropertyDescriptor(lamhe,'Name'));
// Object.defineProperty(lamhe,'Name',{

//     value: 'ignist',
//     writable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(lamhe,'Name'));
