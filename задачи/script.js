// функции
//9.2
// function fun (name = "Ivan", age = 20) {  // function declaration аргументы по умолчанию
//     document.write(name + age);    
//     }    
//     fun ("Aleksei"); // -> Aleksei20


// function fun(name) {
//     return 'Hello ' + name;  
//   }  
//   alert(fun("Aleksei")); // возвращает, но не записывает HA. Еесли не добавить return со значением должен вернуть undefined


//   function fun(name) {
//     document.write('Hello ' + name);  
//   }  
//   alert(fun("Aleksei")); // возвращает undefined И записывает HA


//   function fun(name) {
//     return 'Hello ' + name;  
//   }  
//   alert(fun("Aleksei"));  
//   document.write(fun("Aleksei")); // ПРАВИЛЬНО возвращает и записывает HA


// function generate(a){ // return передает данные для др функций
//     return a * 100;
// }
// function init(b) {
//     return  b + generate(2);
// }
// alert(init(25)); // 25+2*100 ->225

// function greeting () { // присвоить return переменную когда происходит вызов функции
//     return 'Hello ';
//   }  
//   let result = greeting();  //даёт возможность использовать greeting как строку и добавлять к ней новый текст
//   document.write(result + "customer!"); // Hello customer!


// let message = "текст"; //функция внутр функции
// function vne(){
//     function vnutri(){        
//         alert(message);
//     }    
//     vnutri();
// }
// vne();


// function discaunt (discaunt = 10) { // if else в функции
//     if (discaunt > 30) {
//         return 30;
//     }
//     return discaunt;
// }
// let firstOrder = discaunt(20);
// alert (firstOrder); // -> 20
// let secondOrder = discaunt(50);
// alert (secondOrder); // -> 30
// let thirdOrder = discaunt();
// alert (thirdOrder) // -> 10


// var color = function() { // function expression
//     return 'orange';
//   };      // после фигурных скобок применяется точка с запятой
//   color();

// 9.2.1 какой цвет возвращает код функции
// function toDo(color) {
//     if (color !== 'red' || color !== 'blue') { // при достижении первого true возвращает black
//         color = 'black';
//     }
//     return color;}
// console.log (toDo('blue')); // -> black

// function toDo(color) {
//     if (color !== 'red' && color !== 'blue') { // ? 
//         color = 'black';
//     }
//     return color;}
// console.log (toDo('blue')); // -> blue

// 9.2.2 Напишите базовую структуру кода function declaration и function expression.
// function название (аргументы) {
// действия
// }
// название (аргументы);

// let per = function (аргументы) {
// действие
// };
// Per (аргументы);

//9.2.3 найдите 7 ошибок
// function ToDo(atr);{ // 1.название с большой буквы, 2. не должно быть ;
//     var any = 'value'; // 6. оператор ИЛИ вернёт true так как всегда value - нет смсла в if
//     if (any || number > 1 ){ // 5. ранее  number  не объявлялся, не может использоваться
//         number =  -1; // 7/ для возврата значения нужно указать return
//     }
//     return // 3.на разных строках
//     atr;
// }
// document.write(toDo(alr)); // 4. alr должно быть в ''
// правильно:
// function toDo(atr){
//     var number = 1;
//     if (number > 1 ){
//         return number = -1;
//     }
//     return atr;
// }
// document.write(toDo("alr")); // -> -1 если number=1, то alr

// 9.2.4 Объявите переменную hello. Назначьте функцию, которая при вызове вернёт 'Hello world!'
// let hello = function () {
//     return 'Hello word!';
// };
// document.write(hello());

// 9.2.5 на писать функции на 4 арифм операции, учесть деление на ноль, использовать if else
/*     Функция складывает переданные параметры.     */
    //  function sum(a, b) {
    //     return a + b;
    // }

    // /*     Функция из параметра "а" вычитает параметр "b".     */
    // function subtraction(a, b) {
    //     return a - b;
    // }

    // /*      Функция делит параметр "a" на параметр "b".    */
    // function division(a, b) {
    //     if (b!=0){
    //         return a / b;
    //     } else {
    //         return "На ноль нельзя делить!";
    //           }
    // }
    // /*      Функция умножает параметры.     */
    // function multiplication(a, b) {
    //     return a * b;
    // }
    // console.log(sum(3, 5));
    // console.log(subtraction(3, 5));
    // console.log(division(3, 0));
    // console.log(multiplication(3, 5));
    

    // 9.2.6  Создайте функцию, которая принимает аргументом число от 1 до 7, возвращая день недели на русском языке. Сделайте вызов функции в браузер.
    // function getDate (day) {
    //     if(day>5 && day<8){
    //         return "Выходной день!";
    //     }    
    //     else if(day >=1 && day<6){
    //         return "Рабочий день!";
    //     }    
    //     else{
    //         return "Ошибка ввода!";
    //     }    
    // }
    // alert(getDate(3));


    // 9.3 объекты
    // определить в объекте свойство цвета color
    // вызвать весь объект целиком (car, color red, year 1980)
    // вызвать отдельное свойство color и не существующее свойство brand объекта car через точку и кв скобки (car, color red, year 1980) 
    // обратиться к свойству, имя которого результат выражения let ask = prompt('ввведите параметр цвета авто', 'color')
    // создать вычисляемое свойство ask
    // создать вложенные объекты в качестве свойств brand объекта car (name Ford, color blue)
    // перезаписать свойство color объекта car и добавить новое свойство model со значением Focus,  с выводом в консоль и без
    // удалить свойство model, проверить вызовом в консоль
    // присвоить метод в объекте car И вызвать через консоль
    // присвоить метод на глобальном уровне. (car, brand Ford, model Focus, method fun)
    // создать две переменных car и car2, присвоить метод если двигатель не запущен, то запкстить, вызвать в консоль. (name Audio, Mersedes, engineStartid false, snsrt startEngine, alert(авто ...запущен!))

    //9.3.4 Напишите программу для удаления одного любого свойства из представленного в задании объекта. Также вызовите одно и то же свойство до и после его удаления
//     let student = {
//         name: "Ivan Petrov",
//         course: "javascript",
//         group: 5
//     };
//    console.log(student.name);
//    delete student.name;
//    console.log(student.name);


// 9.3.5 Создайте объект в котором задан объём чашки и через метод реализуйте вывод сообщения, в случае если объём наливаемой воды превышает объём чашки.
// let cup = {
//     value: 100,
//     maxValue: water
// };
// function water (wa) {
// if (wa > 100) {
//     console.log('перебор');
// } else console.log('доливай')
// }
// console.log(cup.maxValue(50));


//9.3.6 
//Напишите глобальную функцию вложенную в объект как метод
//проводящую поиск в объекте какого-либо одного свойства 
// выводом сообщения об успешном поиске в консоль
//Если свойство не будет найдено, выведите сообщение об ошибке поиска
// let cup = {
//     value: '100 ml',
//     method: fun
// };
// function fun () {
//     if ('value' in cup) {
//     console.log(`свойство есть в объекте`);
//     } else console.log(`свойства нет в объекте`)
// }
// console.log(cup.method());

//JSON
// 9.4.5 Найдите 8 ошибок в коде JSON
// { //1.все свойства и объекты должны быть в ""
//     name: 'Petr', //4. свойства должны быть в двойных кавычках 
//     'yearOfBirth':  '1995', //3. числа пишут без кавыяек
//     'admin': 'true',      // выдать права администратора 2. комментарии не допускаются
//     technologies: ["javascript", "JSON"] , , // 6. запятая
//    'gradePointAverage': calc // 5. не вызывает функции
// },
// {
//     name: 'Maria', // 7.Объекты могут вкладываться только в один родительский объект файла. этот нужно удалить
//     'yearofbirth':  '2000', // 8. каждое второе слово с большой буквы
// }
// function calc () { 
// }


// 9.4.6 создайте и переведите объект JavaScript в JSON формат, а затем обратно в объект. Выведите в консоль JSON-вариант объекта и JS-объект после соответствующих преобразований.
// let user = {
//     name: 'Alex'
//     };    
//     let jsonUser = JSON.stringify(user);     
//     console.log(jsonUser);
//     let newJsObject = JSON.parse(jsonUser);   
//     console.log(newJsObject);


// 9.4.7 Вызовите в консоль код JSON только одного свойства name из следующего объекта:
// let user = {
//     city: 'Saint-Petersburg',
//     name: 'Petr',
//      age: 25,
//     };
//     let jsonUser = JSON.stringify(user, ['name']); 
//     console.log(jsonUser);


// 9.6 замыкание
// function vne (counter=0) {
//     return function vnu(){ //у vnu нет своего аргумента использует из vne
//         console.log(counter++);
//     }
// }
// let test = vne(5);
// test();
// test();
// test();




// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
//   };  
//   let d = randomDate(new Date(2012, 1, 1), new Date());
//   let f = d.getFullYear();
//   console.log(f);

// const text = 'И ушёл колобок от бабушки';
// console.log(text.replace('и', 'е'))

// let fePatronymic = "Александр";
// if (fePatronymic == "Александр") {
//     console.log(fePatronymic.replace('др', 'дровна')); 
// } else console.log('следующий');

// let your_string = 'Александр';
// if (your_string.indexOf('др') > -1)
// {
//   console.log("нашел");
//   console.log(your_string.replace('др', 'дровна'));
// }

// let ff = 1;
// let gg = (ff == 0) ? (0) : (1);
// console.log(gg)


// let ffff = {
//    GENDER_MALE: 'red',
//    GENDER_FEMALE: 'ford',
//    randomIntNumber: function(a=0, b = 3) {
//     return a + b ;
//    },

//     randomGender: function() {
//         return (this.randomIntNumber() == 2) ? this.GENDER_MALE : this.GENDER_FEMALE;
       
//         //    if (this.randomIntNumber() == 0) {
//         //    return this.GENDER_MALE;
//         //    } else return this.GENDER_FEMALE
        
//        }, 

// } ;
// console.log(ffff.randomGender());
// console.log(ffff.randomIntNumber())

