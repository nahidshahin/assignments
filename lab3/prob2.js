"use strict";

function destructuring(obj) {
    let {name, years:age, isAdmin=false} = obj;
    console.log(name);
    console.log(age);
    console.log(isAdmin);
}

let user = { name: "John", years: 30 };
destructuring(user);
