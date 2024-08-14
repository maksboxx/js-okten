
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let pi =3.14;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*
function sqr(a,b) {
    return a * b;
}
console.log(sqr(10,5))*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - Через диаметр сделал.

/*
function sqrCircle(d) {
    if (d > 0){
        let r = d/2;
        let s = pi * (r*r)
        return (`r = ${r} S = ${s}`)
    }
    return ('Значение не верное!')
}
console.log(sqrCircle(10))*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*
function sqrCylinder(r,h) {
    if (r > 0 && h >0){
        let bokovayaSqr = 2*pi*r*h;
        let fullSqr = 2*pi*r*(r+h);
        return (`Bokovaya plosha: ${bokovayaSqr} Polnaya plosha: ${fullSqr}`)
    }
    return ('Значение не верное!')
}
console.log(sqrCylinder(10,30))*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*

function printArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
printArray(['a',2,true]);
let testArr = [true,'Test',1,2,4,5,false]
printArray(testArr);
*/

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

/*function createP(p) {
    document.write(`<p>${p}</p>`)
}
createP('Hello')
createP('World')*/

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

/*
function createList(contentLi) {
    document.write(`<ul>
        <li>${contentLi}</li>
        <li>${contentLi}</li>
        <li>${contentLi}</li>
    </ul>`)
}
createList('Okten')*/

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write

/*function createList(contentLi,countLi) {
    document.write(`<ul>`)
    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${contentLi}</li>`)
    }
    document.write(`</ul>`)
}
createList('Okten',31)*/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

/*
let array =['Okten',12,2,1,true,'Hello']

function printArrayToList(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arr[i]}</li>`)
    }

    document.write(`</ul>`)
}
printArrayToList(array)

*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/* let users=[
     {
         id: 1,
         name:'Maksym',
         age:22
     },
     {
         id: 2,
         name:'Petya',
         age:18
     },
     {
         id: 3,
         name:'Vasiliy',
         age:11
     },
     {
         id: 4,
         name:'Ivan',
         age:16
     },
     {
         id: 5,
         name:'Anna',
         age:10
     },
     {
         id: 6,
         name:'Jake',
         age:25
     },
     {
         id: 7,
         name:'Misha',
         age:35
     },
     {
         id: 8,
         name:'Lesya',
         age:29
     }
 ]

function printUsers(arr) {
        for (const arrUserElement of arr) {
            document.write(`<div>ID: ${arrUserElement.id} Name: ${arrUserElement.name} Age: ${arrUserElement.age}</div>`)
        }
}
printUsers(users)*/

// - створити функцію яка повертає найменьше число з масиву

/*let randomInRange=[];
function getRandomNumber(min, max,arr) {
    for (let i = 0; i < 10; i++) {
        arr[arr.length]=Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
function smallNumber(arr) {
    let num= arr[0]
    for (const arrElement of arr) {
        if (arrElement<num){
            num=arrElement;
        }
    }
    console.log(num)
}
getRandomNumber(1, 100,randomInRange);
console.log(randomInRange);
smallNumber(randomInRange)*/

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

/*let randomInRange=[];
function getRandomNumber(min, max,arr) {
    for (let i = 0; i < 3; i++) {
        arr[arr.length]=Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
getRandomNumber(1, 20,randomInRange);
console.log(randomInRange);

function sum(arr) {
    let i =0;
    for (const arrElement of arr) {
        i=arrElement+i;
    }
    return i;
}
console.log(sum(randomInRange))*/

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

/*
let randomInRange=[];
function getRandomNumber(min, max,arr) {
    for (let i = 0; i < 10; i++) {
        arr[arr.length]=Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
getRandomNumber(10, 50,randomInRange);
console.log(randomInRange);

function swap(arr,index1,index2) {
    let bof = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=bof
        console.log(arr)
}
swap(randomInRange,0,9)
*/
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

/*
let currencyValues=[
    {
        currency:'USD',
        values:25
    },
    {
        currency:'EUR',
        values:42
    }
]
function exchange(sumUAH,currencyValue,exchangeCurrency) {
    for (const currencyValuesElement of currencyValues) {
        if (currencyValuesElement.currency === exchangeCurrency){
            console.log(sumUAH / currencyValuesElement.values);
        }
    }
}
exchange(4200,currencyValues,'EUR')*/
