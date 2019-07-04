// task 1

let car = {
    manufacturer: 'Audi',
    model: 'A7',
    year: 2019,
    averageSpeed: '100',
    
    display: function() {
        alert(`${this.manufacturer} ${this.model}; ${year} year of production; averageSpeed: ${this.averageSpeed}`);
    },

    wastedTimeTreveled: function(distance) {
        let hours = distance / this.averageSpeed;
        let lull = ~~(hours / 4);

        alert(hours + lull);
    },
}

// car.wastedTimeTreveled(800);

// task 2

let f1 = {
    numerator: 2,
    denominator: 3,

    add: function(f2) {
        let commonDenominator = this.denominator * f2.denominator; // общий знаменатель

        let updtDenominator1 = commonDenominator / f1.denominator; // дополнение к 1 дроби
        let updtDenominator2 = commonDenominator / f2.denominator; // дополнение к 2 дроби

        let updtNominator1 = this.numerator * updtDenominator1; // ищем новый 1 дроби числитель
        let updtNominator2 = f2.numerator * updtDenominator2; // ищем новый 2 дроби числитель


        this.numerator = updtNominator1 + updtNominator2;
        this.denominator = commonDenominator;
    },

    subtract: function(f2) {
        let commonDenominator = this.denominator * f2.denominator; // общий знаменатель

        let updtDenominator1 = commonDenominator / f1.denominator; // дополнение к 1 дроби
        let updtDenominator2 = commonDenominator / f2.denominator; // дополнение к 2 дроби

        let updtNominator1 = this.numerator * updtDenominator1; // ищем новый 1 дроби числитель
        let updtNominator2 = f2.numerator * updtDenominator2; // ищем новый 2 дроби числитель


        this.numerator = updtNominator1 - updtNominator2;
        this.denominator = commonDenominator;
    },

    multiplicate: function (f2) {
        this.numerator *= f2.numerator;
        this.denominator *= f2.denominator;
    },

    divide: function (f2) {
        this.numerator *= f2.numerator;
        this.denominator *= f2.denominator;
    }
}

let f2 = {
    numerator: 2,
    denominator: 6,
}

f1.multiplicate(f2);
alert(f1.numerator + "/" + f1.denominator);

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

//alert(`${f3.numerator} / ${f3.denominator}`);

// task 3

let time = {
    hh: 2,
    mm: 30,
    ss: 70,

    alertTime: function(){
        if(this.ss >= 60){
            this.ss -= 60;
            this.mm += 1;
        }

        if(this.mm >= 60){
            this.mm -= 60;
            this.hh += 1;
        }

        alert(`${this.hh}:${this.mm}:${this.ss}`);
    },

    timePlusHour: function(hour){
        this.hh += hh;
    },

    timePlusMin: function(mm){
        this.mm += mm; 
    },

    timePlusSec: function(sec){
        this.ss += ss;
    }
}


time.timePlusMin(70);
//time.alertTime();
