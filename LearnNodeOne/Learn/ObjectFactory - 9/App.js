require('./File2.js');
console.log('=======================================');
require('./File3.js');

/* 
    Object Factory adalah sebuah cara untuk membuat setting tanpa menggunakan shared module.
    Jadi settingan per module nya harus di setting sendiri. Dan juga ketika kita mensetting module 1,
    maka module 2 tidak akan tersetting oleh module 1. Bahkan harus di setting sendiri di setiap module nya.
*/