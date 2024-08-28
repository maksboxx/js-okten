// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
/*

let div =document.createElement('div');
div.classList.add('wrap','collapse','alpha','beta');
div.style.background='lightgrey';
div.style.height='150px';
div.style.margin='50px';
// Можно было через style или css и на лекции по моему говорили так лучше не делать, но я так попробовал.
document.body.appendChild(div)
let cloneDiv = div.cloneNode();
document.body.appendChild(cloneDiv)
*/

//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

/*
let array= ['Main','Products','About us','Contacts']
for (const arr of array) {
    let ul= document.createElement('ul')
    let li=document.createElement('li')
    li.innerText=arr;
    ul.append(li);
    document.body.appendChild(ul)
}*/

// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const arr of coursesAndDurationArray) {
    let div= document.createElement('div')
    let p=document.createElement('p')
    div.classList.add('wrap') // Добавил стиль что бы бордер добавить в стилях. Что бы визуально видно было
    p.innerText=`Title: ${arr.title}. Month Duration: ${arr.monthDuration}`
    div.append(p)
    document.body.appendChild(div)
}*/
// =========================
//     #Kx1xgoKy8
//     - Є масив

//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// =========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const arr of coursesAndDurationArray) {
    let div= document.createElement('div')
    let h1= document.createElement('h1')
    let p=document.createElement('p')
    div.classList.add('item')
    h1.classList.add('heading')
    p.classList.add('description')
    h1.innerText=`Title: ${arr.title}`;
    p.innerText=`Month Duration: ${arr.monthDuration}`;
    div.append(h1,p)
    document.body.appendChild(div)
}