// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
/*

function cloneObj(obj){
    if (obj){
        let functions=[]
        for (const objKey in obj) {
           if (typeof obj[objKey]==='function'){
              let funClone= obj[objKey].bind({});
               functions.push({funClone, objKey})
           }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.objKey]=func.funClone
        }
        return cloneObj;
    }
}
cloneObj({id:1,name:'Maks',age:22,func1(){},func2(){},func3(){}})
user={
    id:1,
    name:'Maks',
    car:'BMW',
    fun22(){},
    fun55(){},
    fun10014(){}
}
console.log(user);
let user2 = cloneObj(user)
console.log(user2);
console.log(user === user2)
*/

//
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let mappedArr=coursesAndDurationArray.map((i, id) => ({...i, id: id}))
console.log(mappedArr)