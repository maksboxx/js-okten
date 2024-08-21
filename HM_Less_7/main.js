
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

/*function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email=email;
    this.phone=phone;
}
let users=[
    new User(1,'Maks','Box','dsafaf@gmail.com','+380993426743'),
    new User(2,'Polina','Posad','posadik@ukr.net','+380995467432'),
    new User(3,'Vasya','Puplin','pupkin@gmail.com','+380994326788'),
    new User(4,'Alina','Alinkina','alino4ka@gmail.com','+380662345544'),
    new User(5,'Bogdan','Akimov','akimovbodya@gmail.com','+380991078166'),
    new User(6,'Matvey','Bublik','bublik@gmail.com','+380997862316'),
    new User(7,'Nastya','Pechenka','pe4enka@gmail.com','+380508727178'),
    new User(8,'Klim','Akim','klimakim@ukr.net','+380983085535'),
    new User(9,'Lilia','Blum','liliablum@ukr.net','+38066686805'),
    new User(10,'Karina','Rose','rose.karina@ukr.net','+380503169781')
]
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser= users.filter(User => User.id % 2 === 0);
console.log(filterUser)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser= users.sort((user1,user2)=>user2.id - user1.id);
console.log(sortUser)*/
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

/*function Client(id,name,surname,email,phone,order){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=order;
}

let clients = [
    new Client(1, 'John', 'Doe', 'john.doe@example.com', '+380991234567', ['item1', 'item2']),
    new Client(2, 'Emma', 'Stone', 'emma.stone@example.com', '+380992345678', ['item3']),
    new Client(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+380993456789', ['item4', 'item5', 'item6']),
    new Client(4, 'Olivia', 'Williams', 'olivia.williams@example.com', '+380994567890', ['item7']),
    new Client(5, 'James', 'Brown', 'james.brown@example.com', '+380995678901', ['item8', 'item9']),
    new Client(6, 'Sophia', 'Davis', 'sophia.davis@example.com', '+380996789012', ['item10', 'item11', 'item12']),
    new Client(7, 'William', 'Garcia', 'william.garcia@example.com', '+380997890123', ['item13']),
    new Client(8, 'Isabella', 'Martinez', 'isabella.martinez@example.com', '+380998901234', ['item14', 'item15']),
    new Client(9, 'Ethan', 'Miller', 'ethan.miller@example.com', '+380999012345', ['item16', 'item17']),
    new Client(10, 'Mia', 'Davis', 'mia.davis@example.com', '+380990123456', ['item18', 'item19'])
];
//Данный массив попросил создал через ChatGPT ⬆️

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients= clients.sort((client1,client2)=>client2.order.length - client1.order.length);
console.log(sortClients)*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

/*
class Car{
      constructor(model,manufacturer,year,maxSpeed,engineL) {
          this.model=model;
          this.manufacturer=manufacturer;
          this.year=year;
          this.maxSpeed=maxSpeed;
          this.engineL=engineL;
      }

      drive(){
          return 'Едем со скоростью  '+ this.maxSpeed;
      }
      info(){
              for (const index in this) {
                  console.log( index,this[index])
              }
      }
    increaseMaxSpeed (newSpeed){
           this.maxSpeed = newSpeed;
           console.log(newSpeed, '- новая скорость ')
    }
    changeYear (newValue){
          if(newValue>0){
              this.year=newValue;
              console.log(newValue, '- Новый год машины установлен')
          }else{
              console.log('Значение не верное!')
          }
    }
    addDriver (driver){
        this.driver=driver;
    }
}
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
let bmw = new Car('M3','BMW','2018',220,3);
console.log(bmw);
console.log(bmw.drive());
bmw.increaseMaxSpeed(300);
bmw.info();
bmw.changeYear(2020)
bmw.addDriver({name:'Maks',age:'22',country:'Ukraine'});
*/


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*function Car(model,manufacturer,year,maxSpeed,engineL){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engineL=engineL;
    this.drive=function (){
        console.log('Едем со скоростью  '+ this.maxSpeed)
    }
    this.info=function (){
        for (const argument in this) {
            console.log(argument, this[argument])
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0){
            this.maxSpeed = newSpeed;
            console.log(newSpeed, '- новая скорость ')
        }
    }
    this.changeYear = function (newValue) {
        if (newValue > 0){
            this.maxSpeed = newValue;
            console.log(newValue, '- новый год ')
        }
    }
    this.addDriver=function (driver){
        this.driver=driver;
    }
}
let audi = new Car('rs7','Audi',2018,2023,220,3)
console.log(audi);
audi.drive()
audi.increaseMaxSpeed(312)
audi.changeYear(2024)
audi.addDriver({name:'Maks',age:'22',phone:'2131241412'})
audi.info()*/

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

/*
class Popelushka {
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}
class Prince {
    constructor(name,age,shoes) {
        this.name=name;
        this.age=age;
        this.shoes=shoes;
    }
}
let prince=new Prince('Ivan',40,39)
console.log(prince)

let popelushki=[
    new Popelushka('Kira',21,31),
    new Popelushka('Nastya',22,32),
    new Popelushka('Oksana',22,33),
    new Popelushka('Lesya',21,34),
    new Popelushka('Vlada',23,35),
    new Popelushka('Ira',21,36),
    new Popelushka('Polya',24,37),
    new Popelushka('Katya',21,38),
    new Popelushka('Lera',25,39),
    new Popelushka('Tanya',21,40),
]

console.log(popelushki)
for (const pop of popelushki) {
    if (pop.footSize === prince.shoes){
        console.log(`Принс нашел свое Золушку и это ${pop.name}`)

    }
}
*/

// Через Array.prototype. створити власний foreach, filter, map

/*Array.prototype.forEach2=function (callback){
    const i = this;
    for (const iElement of i) {
        callback(iElement);
    }
}
let arr=[1,2,3,4,5,6]
arr.forEach2(x=>console.log(x))*/

A/*rray.prototype.filter2=function (callback) {
    let updArr=[]
    for (const i of this) {
        if (callback(i)){
            updArr.push(i)
        }
    }
    return updArr;
}
class Popelushka {
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}
let popelushki=[
    new Popelushka('Kira',21,31),
    new Popelushka('Nastya',22,32),
    new Popelushka('Oksana',22,33),
    new Popelushka('Lesya',21,34),
    new Popelushka('Vlada',23,35),
    new Popelushka('Ira',21,36),
    new Popelushka('Polya',24,37),
    new Popelushka('Katya',21,38),
    new Popelushka('Lera',25,39),
    new Popelushka('Tanya',21,40),
]
let devochki=popelushki.filter2(i=>i.age===21)
console.log(devochki)
*/
















