function getData($param) {
    let data = $param ;

    return data;
}
function JsonData() {
    let jsonData = [
        {
            Name: "Enricho Alkalas",
            Age: 21,
        },
        {
            Name: "Alka",
            Age: 17,
        }
    ]

    return jsonData;
}


// ===== / =====


// Handling Request
// Mengatur Banyaknya Request Dari User Ke Database
function Order(id_order, timeOut) {
    console.log('ID Order : ' + id_order);

    ProcessOrder(id_order, timeOut);
}

function ProcessOrder(data, timeOut) {
    setTimeout(function() {
        console.log('Id Order : ' + data + ' Processed');
    }, timeOut);
}

// Order(1028, 1000);
// Order(1029, 5000);
// Order(1030, 2000);


// ===== / =====


// Object References
// Object data references adalah mengubah suatu nilai object dengan object yang kita inginkan
// Contoh seperti dibawah, salah satu nilai object induk ( pertama ) yang ada dibawah nilai nya dirubah oleh object yang kedua atau lainnya.
let dataObject = {
    name: "Enricho Alkalas",
    age: 21,
}

let secondDataObject = dataObject;
secondDataObject.age = 17;

// console.log(dataObject);


// ===== / =====


// Object This atau This Object
let objectData = {
    name: "Enricho Alkalas",
    age: 21,
    print: function() {
        console.log(this.name + ' is ' + this.age + ' years old ');
    }
}

// objectData.print();


// ===== / =====


// Module
var module1 = require('./Module/Modul1.js');
var module2 = require('./Module/Modul2.js');
// console.log(module2.data);
// console.log(module1);
