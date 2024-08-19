// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

/*let stringArray =['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of stringArray) {
    console.log(string.length)
}*/

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

/*let stringArray =['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of stringArray) {
    console.log(string.toUpperCase())
}*/

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

/*let stringArray =['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const string of stringArray) {
    console.log(string.toLowerCase())
}*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

/*let str = ' dirty string   '
let clearStr =str.trim();
console.log(str,str.length)
console.log(clearStr,clearStr.length) */
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

/*let str = 'Ревуть воли як ясла повні';
let strToArray =(str)=>console.log(str.split(" "));
strToArray(str)*/

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let numToStr = arr.map(num => num.toString());
// console.log(numToStr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
/*
let nums = [11,21,3];
let sortNums = (arr,direction)=>{
    if(direction === 'ascending'){
        return(arr.sort((num1, num2) => num1 - num2));
    }else if (direction === 'descending') {
        return(arr.sort((num1, num2) => num2 - num1));
    }
}
sortNums(nums,'ascending')
console.log(nums)
sortNums(nums,'descending')
console.log(nums)

*/

// - є масив
// -- відсортувати його за спаданням за monthDuration
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortByMonth = coursesAndDurationArray.sort((x,y)=> y.monthDuration - x.monthDuration);
console.log(sortByMonth)*/
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/*let filterMonth = coursesAndDurationArray.filter(month => month.monthDuration > 5);
console.log(filterMonth)*/
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
/*let mappedCourses = coursesAndDurationArray.map((course,index)=>{
    let newA={
        id: index+1,
        title: course.title,
        monthDuration: course.title
    }
    return newA;
})
console.log(mappedCourses)
let mappedCourses2 = coursesAndDurationArray.map((course,index)=>({...course,id:index+1}))
console.log( mappedCourses2)*/
//Попробовал несколько вариантов. Но по заданию подходит первый.
// =========================

//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
    /*let cards = [
        {
            cardSuit: "spade",
            value: 6,
            color: "black"
        },
        {
            cardSuit: "spade",
            value: 7,
            color: "black"
        },
        {
            cardSuit: "spade",
            value: 8,
            color: "black"
        },
        {
            cardSuit: "spade",
            value: 9,
            color: "black"
        },
        {
            cardSuit: "spade",
            value: 10,
            color: "black"
        },
        {
            cardSuit: "spade",
            value: "jack",
            color: "black"
        },
        {
            cardSuit: "spade",
            value: "queen",
            color: "black"
        },
        {
            cardSuit: "spade",
            value: "king",
            color: "black"
        },
        {
            cardSuit: "spade",
            value: "ace",
            color: "black"
        },
        {
            cardSuit: "diamond",
            value: 6,
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: 7,
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: 8,
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: 9,
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: 10,
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: "jack",
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: "queen",
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: "king",
            color: "red"
        },
        {
            cardSuit: "diamond",
            value: "ace",
            color: "red"
        },
        {
            cardSuit: "heart",
            value: 6,
            color: "red"
        },
        {
            cardSuit: "heart",
            value: 7,
            color: "red"
        },
        {
            cardSuit: "heart",
            value: 8,
            color: "red"
        },
        {
            cardSuit: "heart",
            value: 9,
            color: "red"
        },
        {
            cardSuit: "heart",
            value: 10,
            color: "red"
        },
        {
            cardSuit: "heart",
            value: "jack",
            color: "red"
        },
        {
            cardSuit: "heart",
            value: "queen",
            color: "red"
        },
        {
            cardSuit: "heart",
            value: "king",
            color: "red"
        },
        {
            cardSuit: "heart",
            value: "ace",
            color: "red"
        },
        {
            cardSuit: "clubs",
            value: 6,
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: 7,
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: 8,
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: 9,
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: 10,
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: "jack",
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: "queen",
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: "king",
            color: "black"
        },
        {
            cardSuit: "clubs",
            value: "ace",
            color: "black"
        }
    ]
        // - знайти піковий туз
console.log(cards.find(value => value.value === 'ace' || value.value === 'spade'));
// - всі шістки
console.log(cards.filter(value => value.value === 6));
// - всі червоні карти
console.log(cards.filter(value => value.color === 'red'));
// - всі буби
console.log(cards.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuit === 'clubs' && (value.value!== 6 && value.value!== 7 && value.value!== 8 && value.value!== 9)))
// Жалко что нельзя value.cardSuit === 'clubs' && value.value!<(6-9)*/
// =========================


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
/*let packageCard = cards.reduce((accum,card)=>{
    if (card.cardSuit === "spade"){
        accum.spades.push(card)
    }else if(card.cardSuit === "diamond"){
        accum.diamonds.push(card)
    }else if(card.cardSuit === "heart"){
        accum.hearts.push(card)
    }else if(card.cardSuit === "clubs"){
        accum.clubs.push(card)
    }
    return accum;
},
    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    })
console.log(packageCard) */
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
/*const courseSass = coursesArray.filter(course =>
    course.modules.find(module => module === 'sass')
);
console.log(courseSass)*/
// --написати пошук всіх об'єктів, в який в modules є docker
/*const courseDocker = coursesArray.filter(course =>
    course.modules.find(module => module === 'docker')
);
console.log(courseDocker)*/
