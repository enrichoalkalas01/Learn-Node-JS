require('./File2.js');
console.log('=======================================');
require('./File3.js');

/* 
    Nah yang dinamakan dengan shared module ialah dimana kita membuat sebuah fungsi di module 1, dan di isi nilai langsung
    dalam fungsi dari module 1 di module 2, ketika pemanggilan module 3, data secara otomatis terisi karena sudah di isi
    oleh module 2. Tetapi ketika kita mensetting value module 1 di module yang kita inginkan, maka module yang kita inginkan
    akan berubah sesuai dengan value yang akan kita isi sendiri
*/