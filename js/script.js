//   Создать объект, описывающий автомобиль (производитель,
//         модель, год выпуска, средняя скорость), и следующие функции
//         для работы с этим объектом.
//         1. Функция для вывода на экран информации об автомобиле.
//         2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//         Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let car = {
//     manafacturer: "bmw",
//     model: "x5",
//     years: 2005,
//     avgSpeed: 160,

//     displayInfo: function() {
//         alert(`manafacturer: ${this.manafacturer} ,model: ${this.model}, years:${this.years}, avgSpeed:${this.avgSpeed}`);
//     },

//     wastedTime: function(s){
//         let hours = s / this.avgSpeed;
//         let lull = ~~(hours / 4);
//         alert(hours + lull);
//     }
// }

// car.displayInfo();
// car.wastedTime(800);

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби

// task 2

let f1 = {
    numerator: 2,
    denominator: 3,
}

let f2 = {
    numerator: 2,
    denominator: 6,
}

// добавление дробей

function fractionAddition(f1, f2) {
    let commonDenominator = f1.denominator * f2.denominator; // общий знаменатель

    let updtDenominator1 = commonDenominator / f1.denominator; // дополнение к 1 дроби
    let updtDenominator2 = commonDenominator / f2.denominator; // дополнение к 2 дроби

    let updtNominator1 = f1.numerator * updtDenominator1; // ищем новый 1 дроби числитель
    let updtNominator2 = f2.numerator * updtDenominator2; // ищем новый 2 дроби числитель


    return { 
        numerator: updtNominator1 + updtNominator2,
        denominator: commonDenominator,
    }
}

// разница дробей

function fractionSubtraction(f1, f2) {
    let commonDenominator = f1.denominator * f2.denominator; 

    let updtDenominator1 = commonDenominator / f1.denominator;
    let updtDenominator2 = commonDenominator / f2.denominator;

    let updtNominator1 = f1.numerator * updtDenominator1;
    let updtNominator2 = f2.numerator * updtDenominator2;


    return { 
        numerator: updtNominator1 - updtNominator2,
        denominator: commonDenominator,
    }
}

// умножение дробей

function fractionMultiplication(f1, f2) {
    return { 
        numerator: f1.numerator * f2.numerator,
        denominator: f1.denominator * f2.denominator,
    }
}

// деление дробей

function fractionDivision(f1, f2) {
    return { 
        numerator: f1.numerator * f2.denominator,
        denominator: f1.denominator * f2.numerator,
    }
}

let f3 = fractionDivision(f1, f2);

alert(`${f3.numerator} / ${f3.denominator}`);


// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

let time = {
    hou: 2,
    min: 30,
    sec: 70,

    alertTime: function(){
        if(this.sec >= 60){
            this.sec -= 60;
            this.min += 1;
        }

        if(this.min >= 60){
            this.min -= 60;
            this.hou += 1;
        }

        alert(`${this.hou}:${this.min}:${this.sec}`);
    },

    timePlusHour: function(hour){
        this.hou += hour;
    },

    timePlusMin: function(min){
        this.min += min; 
    },

    timePlusSec: function(sec){
        this.sec += sec;
    }
}

time.AlertTime();