let data1 = "This is Data 1";
let data2 = "This Is Data 2";

function testerFunction() {
    console.log('This is function from module 2');
}

// Agar Beberapa data bisa di akses di luar file, cara yang digunakan yaitu dengan mengeksport masing" data
// Pemanggilan 1 - 1
module.exports.data = data1;
module.exports.function = testerFunction(); 