"use strict";
let student={
    name:"Martin",
    favoriteFood:"Pavlova",
    city:"Tokyo",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);