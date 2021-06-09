// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
var ketiga = pertama.substr(0,5); // saya
var ketiga1 = pertama.substring(12,18); // senang
var keempat = kedua.substring(0,8); //belajar
var keempat1 = kedua.substring(8,18); //javascript
var kelima = keempat1.toUpperCase();
var keenam = ketiga.concat("", ketiga1, " ", keempat, "",kelima);
console.log(keenam);

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var strInt1 = parseInt(kataPertama);
var strInt2 = parseInt(kataKedua);
var strInt3 = parseInt(kataKetiga);
var strInt4 = parseInt(kataKeempat);

console.log((10 + 6)+(4 * 2))

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(3,14);
var kataKetiga = kalimat.substring(14,18);
var kataKeempat = kalimat.substring(18,24)  
var kataKelima = kalimat.substring(24)

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);