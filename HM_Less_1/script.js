/*- Створити змінні. Присвоїти кожному з них значення:
 'hello','owu','com', 'ua', 1, 10, -999, 123,
  3.14, 2.7, 16, true, false.
 Вивести кожну змінну за допомогою: console.log*/

let  str1 = `Hello`;
let str2  = `owu`;
let str3  = `ua`;
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const pi = 3.14;
let num5 = 2.7;
let num6 = 16;
let bol1 = true;
let bol2 = false;

let result = `${str1} ${str2} ${str3}`;
let result2 = `${num1} ${num2} ${num3} ${num4} ${num5} ${num6}`;

console.log(result);
console.log(result2);
console.log(pi);
console.log(bol1,bol2)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за
// допомоги конкатенації)

let firstName = `Maksym `;
let middleName = `Maksymenko `;
let lastName =`Mikhailovich`;
console.log(firstName + middleName + lastName);

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
*/
let name = prompt();
let middlename = prompt();
let lastname = prompt();
let space=` `

console.log(name + space + middlename + space +lastname);














