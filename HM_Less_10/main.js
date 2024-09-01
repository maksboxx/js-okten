// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let block =document.getElementById('text');
console.log(block)
block.onclick = function () {
    this.style.display ='none';
}
block.onmouseover= function () {
    this.style.cursor = 'not-allowed';
}

//
//#j693ca8
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let age = document.forms.form;

age.addEventListener('submit', function (form) {
    form.preventDefault();
    let age = this.age.value;
    if (age<18){
        block.style.backgroundColor='red'
        alert('Вам нет 18!')
    }else{
        block.style.backgroundColor='green'
        alert('Success')
    }
})

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в
// документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let user= document.forms.user;
user.addEventListener('submit',function (obj) {
    obj.preventDefault();
    let name=this.name.value;
    let surname=this.surname.value;
    let age=this.age.value;
    let div = document.createElement('div')
    let p = document.createElement('p')
    div.classList.add('userInfo')
    p.innerText=`Name: ${name}  Surname: ${surname} Age: ${age}`
    div.append(p)
    document.body.appendChild(div)
})

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counter =document.getElementById('counter');
function count() {
    let number = localStorage.getItem('counter') || 0 ;
    number++;
    localStorage.setItem('counter',number);
    counter.textContent=number;
}
count();


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування
// сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
function sessionDate(){
    const now=new Date();
    let session={
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
    }
    let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
    sessionsList.push(session);
    localStorage.setItem('sessionsList',JSON.stringify(sessionsList))
}
sessionDate();
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
let calc = document.getElementById('calc')
let resCalc = document.getElementById('resCalc')
calc.oninput=function () {
    const result = this.value * 2.2;
    resCalc.innerText= result;
}
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
//addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName,objToAdd){
    let localStorageContent = localStorage.getItem(arrayName);
    let localStorageArr = JSON.parse(localStorageContent)
    localStorageArr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(localStorageArr))
}
addToLocalStorage('sessionsList',[1,2,3,4,5])
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('tablica')
const tableCreate = document.forms['tableCreate'];

    tableCreate.onsubmit = function (i) {
        table.innerText='';
    i.preventDefault()
    let stroki = +tableCreate.stroki.value;
    let kol = +tableCreate.kol.value;
    let content = tableCreate.content.value;
        for (let j = 0; j < stroki; j++) {
           let str= document.createElement('tr')
            for (let k = 0; k < kol; k++) {
                let kol = document.createElement('td')
                kol.innerText= content;
                str.appendChild(kol)
            }
            table.appendChild(str);
        }
}
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let blockCount =document.getElementById('counter2');
function count2() {
    const now = new Date()
    let time = now.getTime()
    let counter2 = JSON.parse(localStorage.getItem('counter2')) || [time,100]; // вытаскивает с хранилища !
    let compare =time - counter2[0]                                // сравнивает время
    if (compare>10000) {
        counter2[1]= counter2[1]+10
        counter2[0]=time;
        localStorage.setItem('counter2',JSON.stringify(counter2))
    }
        counter2[0]=time;
         localStorage.setItem('counter2',JSON.stringify(counter2))

    blockCount.innerText=counter2[1]
    // На это задание ушло 350 перезагрузок ))))
    console.log(counter2)
}
count2();

// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів