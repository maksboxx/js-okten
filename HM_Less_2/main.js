
/*
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

/*let array = [1,2,3,4,5,6,'hello','world',true,false];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);*/

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

/*let book1 ={
    title: "Harry Potter",
    pageCount: 300,
    genre: 'fantasy'
}
let book2 ={
    title: "The Art of Living Happily",
    pageCount: 450,
    genre: ' mystery'
}
let book3 ={
    title: 'The Art of Living Happily',
    pageCount: 210,
    genre: 'psychology'
}
console.log(book1,book2,book3)*/

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

/*
let slash='//';
let book1 ={
    title: "Harry Potter",
    pageCount: 300,
    genre: 'fantasy',
    authors: [
        {name:' J.K. Rowling',age:36,}
    ]
}
let book2 ={
    title: "The Mystery of the Old Castle",
    pageCount: 450,
    genre: ' mystery',
    authors: [
        {name:'Emily Brant',age:42,}
    ]
}
let book3 ={
    title: 'The Art of Living Happily',
    pageCount: 210,
    genre: 'psychology',
    authors: [
        {name:'Sophia Moore',age:51,}
    ]
}
console.log(book1,book2,book3)
console.log(book2.authors[0].name)
console.log(book2.authors[0].age)
console.log(book2.title,slash,book2.authors[0].name)
*/

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

/*let users =[
    {name: 'Oleg Olegovich', username:'Olegius', password:'Kf412f!Eda'},
    {name: 'Katetyna Kyrilovna', username:'SuperKatya', password:'Katya123'},
    {name: 'Kiril Kirilovich', username:'Kirilovka', password:'Jf4DeanHeu'},
    {name: 'Valik Valikovich', username:'Valikiv', password:'qwerty1234567'},
    {name: 'Oksana Olegovna', username:'Ksysha', password:'qwertyuiop'},
    {name: 'Yana Cist', username:'Yan04ka', password:'Yana20000112'},
    {name: 'Chelovek Pavuk', username:'SpiderMan', password:'MarvelTheBest111'},
    {name: 'Artem Artemovich', username:'Artemus', password:'HgKHGv21hhg'},
    {name: 'Vladimir Zelensky', username:'VZelensky', password:'1348923519345918'},
    {name: 'Leo Messi', username:'Messi', password:'KJGfkGJF78GU6Rr5'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);*/

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив  з 21 значенням вичключаємо одразу

/*let temperatures =[
    Monday={morning: 15, day: 27, evening: 21},
    Tuesday={morning: 16, day: 25, evening: 20},
    Wednesday={morning: 15, day: 26, evening: 21},
    Thursday={morning: 30, day: 31, evening: 22},
    Friday={morning: 12, day: 27, evening: 22},
    Saturday={morning: 13, day: 25, evening: 21},
    Sunday={morning: 14, day: 23, evening: 20},
]
console.log(temperatures)
console.log(temperatures[3].morning)*/

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*
let x = prompt();
if (x == 0){
    console.log('Невірно')
}else{
    console.log('Вірно')
}
*/

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*let time = prompt('Type number 0-59:');
if (time>=0 && time<=15){
    console.log('Перша частина')
}else if(time>15 && time<=30){
    console.log('Друга частина')
}else if(time>30 && time<=45){
    console.log('Третя частина')
}else if(time>45 && time<=59){
    console.log('Четверта частина')
}else{
    console.log('Неправильный ввод!')
}*/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

/*
let day = prompt('Type number 1-31:');
if(day>=1 && day<=10){
    console.log('1 декада');
}else if(day>=11 && day<=20){
    console.log('2 декада');
}
else if(day>=21 && day<=31){
    console.log('3 декада');
}else{
    console.log('Неправильный ввод!');
}
*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

/*let dayWeek=+prompt('Type number of week: (1-7): ')
switch (dayWeek){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Неправильное значение при вводе!');
}*/

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

/*let a = +prompt('Type first (a) number: ')
let b = +prompt('Type second (b) number: ')
if (a === b){
    console.log(a ,"=", b)
}else if (a>b){
    console.log("Bigger number is: ",a)
}else{
    console.log("Bigger number is: ",b)
}*/

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
// які приводиться до false, а це 0 null undefined і тд).

/*
let x = null;
if (x === 0 || x === null || x === 0 || x === undefined){
    x = "Default";
    console.log(x);
}else{
    console.log(x);
}
*/
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на
//     тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

//вытянул массив из файла
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log(coursesAndDurationArray[0].title,'Супер!');
}else{
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log(coursesAndDurationArray[1].title,'Супер!');
}else{
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log(coursesAndDurationArray[2].title,'Супер!');
}else{
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log(coursesAndDurationArray[3].title,'Супер!');
}else{
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log(coursesAndDurationArray[4].title,'Супер!');
}else{
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log(coursesAndDurationArray[5].title,'Супер!');
}else{
}*/




