const mon = Math.floor(Math.random() * 3); 
const personGenerator = { //объект json с именами и фамилиями. count - свойство, максимальное значение
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Виталия",
            "id_3": "Валерия",
            "id_4": "Артемида",
            "id_5": "Диана",
            "id_6": "Ника",
            "id_7": "Мария",
            "id_8": "Дарья",
            "id_9": "Евгения",
            "id_10": "Алёна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "шахтёр",
            "id_2": "хирург",
            "id_3": "крановщик",
            "id_4": "грузчик",
            "id_5": "лесоруб",
            "id_6": "просто хороший человек",
            "id_7": "режисёр",
            "id_8": "IT-специалист",
            "id_9": "сантехник",
            "id_10": "монтажник"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "медсестра",
            "id_2": "домохозяйка",
            "id_3": "актриса",
            "id_4": "балерина",
            "id_5": "продавец",
            "id_6": "врач",
            "id_7": "модель",
            "id_8": "художница",
            "id_9": "повариха",
            "id_10": "портниха"
        }
    }`,
    

    GENDER_MALE: 'Мужчина', // переменные пола сомостоятельно добавить в случайную генерацию
    GENDER_FEMALE: 'Женщина',   
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min), // floor - окуругление, random - случ генерация

    randomGender: function() {
        return (this.randomIntNumber() == 0) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },   
    
    randomBirthDay: function() {
        return (this.randomIntNumber(1, 31));
    },  
    
    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },
    
    randomMonthFeb28: function randomMonth() { 
        let month = `февраля`
        return month;
    },

    randomBirthYear: function() {
        return (this.randomIntNumber(1980, 2015));
    },   

    randomValue: function (json) { 
        const obj = JSON.parse(json); // parse - преобразует объект json в объект js
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator, 1 - мин значение, заменяет зн по умолч, котор входит в randomIntNumber, obj.count - макс значение
        return obj.list[prop]; // результат - вызов объекта obj со свойством list и идентификатором получившимся в сл генер prop, кв скобки. Задействуется идентиф имени или фамилии
    },    
    
    randomFirstName: function() { // сделать if else по полу
        if (this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.firstNameMaleJson); //возврат объекта personGenerator, вызывается метод randomValue, в аргументах вызов муж имен 
        } else return this.randomValue(this.firstNameFemaleJson)                         
    },

     randomSurname: function() { // сделать if else по полу с прибавлением "а" для женских
        if (this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.surnameJson); // в аргументах вызов фамилий. Написать генерацию пола, используя randomIntNumber вместо randomValue добавив тернарный оператор, пол уже доступен в GENDER_MALE и GENDER_FEMALE
        } else return this.randomValue(this.surnameJson)+"a";
    },    

    rendomProfession: function() {
       if (this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.professionMaleJson); //возврат объекта personGenerator, вызывается метод randomValue, в аргументах вызов муж имен 
        } else return this.randomValue(this.professionFemaleJson)                       
    },

    randomPatronymic: function() { //Добавлена генерация закреплённого за полом отчества в отдельном объекте, полученном от кода JSON . Не должно встречаться генерации мужского отчества в женской фамилии и имени.
        let firstNameMaleJson = this.randomValue(this.firstNameMaleJson); 
        function feMalePatronymic () {
            if (firstNameMaleJson.indexOf('сандр') > -1) {
                return firstNameMaleJson.replace('сандр', 'сандровна'); //александр
            } else if (firstNameMaleJson.indexOf('ор') > -1) {
                return firstNameMaleJson.replace('ор', 'оровна'); // егор
            } else if (firstNameMaleJson.indexOf('им') > -1) {
                return firstNameMaleJson.replace('им', 'имовна'); // максим
            } else if (firstNameMaleJson.indexOf('та') > -1) {
                return firstNameMaleJson.replace('та', 'тична'); // никита
            } else if (firstNameMaleJson.indexOf('ил') > -1) {
                return firstNameMaleJson.replace('ил', 'иловна'); // михаил, даниил
            } else if (firstNameMaleJson.indexOf('ем') > -1) {
                return firstNameMaleJson.replace('ем', 'емовна'); // артем
            } else if (firstNameMaleJson.indexOf('ий') > -1) {
                return firstNameMaleJson.replace('ий', 'иевна'); // дмитрий
            } else if (firstNameMaleJson.indexOf('ей') > -1) {
                return firstNameMaleJson.replace('ей', 'евна'); // андрей
            } else return firstNameMaleJson.replace('ан', 'ановна'); // иван
        };
        function malePatronymic() {
            if (firstNameMaleJson.indexOf('сандр') > -1) {
                return firstNameMaleJson.replace('сандр', 'сандрович');
            } else if (firstNameMaleJson.indexOf('ор') > -1) {
                return firstNameMaleJson.replace('ор', 'орович');
            } else if (firstNameMaleJson.indexOf('им') > -1) {
                return firstNameMaleJson.replace('им', 'имович');
            } else if (firstNameMaleJson.indexOf('та') > -1) {
                return firstNameMaleJson.replace('та', 'тич');
            } else if (firstNameMaleJson.indexOf('ил') > -1) {
                return firstNameMaleJson.replace('ил', 'илович');
            } else if (firstNameMaleJson.indexOf('ем') > -1) {
                return firstNameMaleJson.replace('ем', 'емович');
            } else if (firstNameMaleJson.indexOf('ий') > -1) {
                return firstNameMaleJson.replace('ий', 'иевич');
            } else if (firstNameMaleJson.indexOf('ей') > -1) {
                return firstNameMaleJson.replace('ей', 'еевич');
            } else return firstNameMaleJson.replace('ан', 'анович');
        };
        if (this.person.gender == this.GENDER_MALE) {
            return malePatronymic();  
            } else return feMalePatronymic();    
      },

    getPerson: function () { // продолжает выполнение в файле init.js
        this.person = { // к personGenerator добавл объект person 
        }; 
        this.person.gender = this.randomGender(); //как именно задать ограничение м и ж фамилий
        this.person.firstName = this.randomFirstName(); // вкл свойство firstName содержащее результат свойства randomFirstName, возвращает одно мужское имя
        this.person.surName = this.randomSurname(); 
        this.person.Patronymic = this.randomPatronymic();
        this.person.day = this.randomBirthDay(); 
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28);
        }
        this.person.year = this.randomBirthYear();
        this.person.prof = this.rendomProfession();        
        return this.person; // муж имя записывается в объект person в personGenerator. Не важно муж или жен. Не должно быть одновременно муж и жен имен
    },

};



