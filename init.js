
// window.onload = function() // при загрузке страницы запускается функция
// {
//     const initPerson = personGenerator.getPerson();
//     document.getElementById('firstNameOutput').innerText = initPerson.firstName; // в html поиск идентификатора firstNameOutput вставка из переменной initPerson
//     document.getElementById('surnameOutput').innerText = initPerson.surName;
//     document.getElementById('patronymiOutput').innerText = initPerson.Patronymic;
//     document.getElementById('genderOutput').innerText = initPerson.gender;
//     document.getElementById('birthDayOutput').innerText = initPerson.day;
//     document.getElementById('birthMonthOutput').innerText = initPerson.month;
//     document.getElementById('birthYearOutput').innerText = initPerson.year;
//     document.getElementById('professionOutput').innerText = initPerson.prof;
// };

window.onload = document.getElementById('btnRetry');

document.getElementById('btnGen').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName; // в html поиск идентификатора firstNameOutput вставка из переменной initPerson
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('patronymiOutput').innerText = initPerson.Patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('professionOutput').innerText = initPerson.prof;
});

 //кнопка новой генерации
//  document.getElementById('btnGen').addEventListener('click', function () {
//     location.reload() 
// });


// кнопка сброса данных
document.getElementById('btnRetry').addEventListener('click', function () { 
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('patronymiOutput').innerText = 'Отчество';
    document.getElementById('genderOutput').innerText = 'пол';
    document.getElementById('birthDayOutput').innerText = 'число, ';
    document.getElementById('birthMonthOutput').innerText = 'месяц, ';
    document.getElementById('birthYearOutput').innerText = 'год рождения';
    document.getElementById('professionOutput').innerText = 'профессия';
}
)