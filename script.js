'use strict';
//let age = 400;
//console.log(typeof age);
//age = String(age);
//console.log(typeof age);
//let value = true;
//value = String(value);
//console.log(typeof value);

/*const str = "123";
console.log(typeof str);
const num = +str;
console.log(typeof num);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Alina"));

const a = "22" / 2;
console.log(a);

//let value2 = prompt("How much old?", 25);
//console.log(value2);

//let value3 = confirm("Do you like cofee?");
//console.log(value3);

//const myAge = 22;
//if (myAge > 18 || myAge < 30) {
//console.log('Совершеннолетний');
//}
//else {
//console.log('Child');
//}

//
//if (count <= 10 && count >= 25) {
//console.log("yes");
//}
//else {
//console.log("no");
//}

//



let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

const w = [true, 5, false, "fedya", 10, "name"];
let y = 0;
while (y < 5) {
    console.log(w[y]);
    y++
}

//let arr = [2, 4, 5, 6];
//let result = 1;

//for (let q = 0; q < arr.length; q++) {
//result *= arr[q];
//}

//console.log(result);

//let arr4 = ['2', '4', '5', '6', '7', '8', '20']
//let sum = 0;


//for (let h = 0; h < arr4.length; h++) {
//sum += +arr4[h]

//}
//let midsum = sum / arr4.length;
//console.log(midsum);


let arr9 = [1, 5, "dfg", 5, false];

//arr9.push(1);
//console.log(arr9);

//arr9.pop();
//console.log(arr9);

//arr9.shift();
//console.log(arr9);

//arr9.unshift(true);
//console.log(arr9);

//arr9.splice(1, 2);
//console.log(arr9);

//let arr11 = arr.slice(1, 3);

//console.log(arr11);

//let arr10 = [1, 2];
//console.log(arr10.concat([3, 4]));

//let arr11 = ["Artem", "Alex", "Liza", "Alina"];
//let str11 = " ";
//arr11.forEach((item, index, array) => {
//let a = item + index;
//alert(`${item}, ${index}, ${array}`)
//alert(a);
//str11 += item;

//});

//console.log(str11);

// console.log(arr9.lastIndexOf(5));

// console.log(arr9.includes("dfgdfhdfgjfxj"));

// let students = [
// { id: 1, name: "Liza" },
// { id: 2, name: "Artem" },
// { id: 3, name: "Alina" },
// { id: 4, name: "Me" }
// ];

// let someStudent = students.filter(item =>
// item.id < 3);

// console.log(someStudent);

// console.log(arr9.sort());

// const elements = ["Artem", "Liza", "Pavel", "Alina", "Vladimir"]
// console.log(elements.join("-"));

// let a13 = "dgdghdsgf,fdghfdhf,hdhfsffh,dgdfddssd,euhewfwtred,qewrwetw,rueyruregbd";

// let elements13 = a13.split(",");
// console.log(elements13);

let numbers = [10, 20, 30, 40, 50]

let newArr = numbers.map(item => item + 4);
console.log(newArr);

let result15 = numbers.reduce((sum, current) => sum + current, 0);

console.log(result15);


let arrayMult = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 1, 1, 1, 1]]
//console.log(arrayMult[1][0]);

for (let i = 0; i < arrayMult.length; i++) {
    //console.log(arrayMult[i]);
    for (let g = 0; g < arrayMult[i].length; g++) {

    }
    console.log(arrayMult[i]);
}

//let numbers7 = [];
//numbers7[0] = [];
//numbers7[0][0] = [];
//console.log(numbers7);

//numbers7[0][0][0] = 5;
//console.log(numbers7);


//let person = {
//"name": "Alex",
//"age": 28,
//"bool": true,
//"admin": "yrytrth",
//}

//for (let key in person) {
//alert(key);
//alert(person[key]);
//}

//person.sayIntro();
//
//let a20 = person.hasOwnProperty('name');

//console.log("name" in person);

//console.log(Object.keys(person));
//let id = Symbol("id");
//let im = Symbol("id");

//let user = {
//name: "John",
////[id]: 12,
//}

//console.log(user);

//for (let key in user) {
//alert(key);
//alert(person[key]);
//}

//let rectangle = {
//"width": 300,
//"height": 300,
//getAria: function () {
//alert(this.width * this.height);
//}

//}

//rectangle.getAria();

//let a33 = {};
//function isEmpty(obj) {
//let array = Object.keys(obj);
//console.log(array);

//let result = array.length > 0 ? false : true
//return result;
//}


//console.log(isEmpty(a33));

//let prices = {
//"apple": 50,
//"strawberry": 100,
//"candy": 70,
// "biscuit": 120,
//"tomato": 85,
//}

//function result(obj) {
//let array = Object.values(obj);
//let sum = 0;
//console.log(array);
//for (let i = 0; i < array.length; i++) {
//sum += array[i];
//}
//return sum;
//}

//console.log(result(prices));

//let now = new Date();

//let date = new Date("2017-01-26");

//let g = new Date(24 * 3600 * 1000);
//console.log(g);

//let k = new Date(2011, 0, 1);

//console.log(k.getDay());

const url = document.URL;
console.log(url);

const domain = document.domain;
console.log(domain);

const id = document.getElementById('container');
console.log(id);

const a99 = document.querySelectorAll("div");

console.log(a99);

const a77 = document.querySelector("div");
console.log(a77);

const a33 = document.querySelector(".content");
console.log(a33);

const content = document.getElementsByClassName("content");
console.log(content);

const row = document.querySelector(".row");
console.log(row);

console.log(row.classList.remove("koooooooo"));

row.style.backgroundColor = "red";

row.getAttribute("class");
row.setAttribute("jenya", "koooooooo");
console.log(row);

try {
    utyy();
} catch (error) {
    alert(error)
} finally {
    alert(`ccfdbdfj`)
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    SayHi() {
        alert(`Hello ${this.name} ${this.age}`)
    }
}

let objPerson = new Person1("Liza", 18);
let objPerson2 = new Person1("Liza", 18)
objPerson.SayHi();
objPerson2.SayHi();
console.log(objPerson == objPerson2);

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} have speed ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stop`);
    }
}

class Phoenix extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed + 100;
        alert(`${this.name} have speed ${this.speed} strong bird`)
    }
    fly() {
        alert(`${this.name} fly`);
    }
}
let phoenix = new Phoenix("Valera");

phoenix.run(50);
phoenix.stop();
phoenix.fly();*/

const newPromise = new Promise((resolve, eject) => {
    setTimeout(() => {
        resolve('test');
    }, 300);
});

newPromise.then((value) => {
    console.log(value);
});

async function newFunc() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    });
    let result = await promise;
    alert(result);
}

newFunc();

//Fetch let response = fetch(url;[options]) для сетевых запросов на backend

//RestFull реализация методов Get, Post,Put, Delete on backend
//RestLimited Get,Post

//let result = fetch("https://test-todoist.herokuapp.com/api/categories").then(response => response.json()).then(commits => console.log(commits[0].name));


async function f33() {
    let result = await fetch("https://test-todoist.herokuapp.com/api/categories").then(response => response.json()).then(commits => commits)

    result.forEach(element => {
        console.log(`${element.name}`)
    })
};

console.log(f33());









