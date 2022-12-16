// 1.toUpperCase()

// Method ini digunakan untuk mengubah semua karakter string menjadi huruf kapital.
// Contoh:

let word = "selamat datang di JavaScript";
console.log(word.toUpperCase()); // Hasil: "SELAMAT DATANG DI JAVASCRIPT"

// 2.toLowerCase()

// Method ini digunakan untuk mengubah semua karakter string menjadi huruf kecil.
// Contoh:

let kijang = "SELAMAT DATANG DI JAVASCRIPT";
console.log(kijang.toLowerCase()); // Hasil: "selamat datang di javascript"

// 3.replace()

// Method ini digunakan untuk mengganti suatu karakter atau string pada sebuah string dengan karakter atau string yang baru.
// Contoh:

let kurcaci = "SELAMAT DATANG DI JAVASCRIPT";
console.log(kurcaci.replace("JAVASCRIPT", "JavaScript"));

// Hasil: "SELAMAT DATANG DI JavaScript"

// 4.parseInt() - Method ini digunakan untuk mengubah string menjadi integer. 
// Contoh:

let angka = "5";
console.log(parseInt(angka));

// hasilnya akan menampilkan angka 5 (bukan string "5")

// 5.slice() - Method ini digunakan untuk memotong string sesuai dengan index yang ditentukan.
//  Contoh:

let kambing = "Selamat pagi, dunia!";
console.log(kambing.slice(0, 7)); // hasilnya akan menampilkan "Selamat"

// 6.split() - Method ini digunakan untuk memisahkan string menjadi array berdasarkan karakter yang ditentukan.
//  Contoh:

let kalimat = "Selamat pagi, dunia!";
console.log(kalimat.split(",")); // hasilnya akan menampilkan ["Selamat pagi", " dunia!"]

// 7.toString()
// Method ini digunakan untuk mengubah sebuah value menjadi string.
//  Contoh:
 
let number = 100;
console.log(number.toString()); //output: "100"

// 8. Date() - digunakan untuk mengambil tanggal dan waktu saat ini.
//  Contoh:

var date = new Date();
console.log(date); // hasilnya "Sat Aug 15 2020 13:08:14 GMT+0700 (Western Indonesia Time)"

// 9.Math.max() - digunakan untuk mencari nilai tertinggi dari sekumpulan angka. Contoh:

var a = 5;
var b = 10;
var c = 15;
console.log(Math.max(a, b, c)); // hasilnya 15

// 10.isNaN() - digunakan untuk mengecek apakah suatu nilai adalah NaN atau tidak. 
// contoh:

var x = "Hello";
var y = 123;
console.log(isNaN(x)); // hasilnya true
console.log(isNaN(y)); // hasilnya false