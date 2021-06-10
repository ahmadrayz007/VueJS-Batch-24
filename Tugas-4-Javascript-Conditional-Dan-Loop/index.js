// Soal 1
var nilai;


// Soal 2
var tanggal = 17;
var bulan = 10;
var tahun = 1998;

switch(bulan) {
    case bulan: {console.log(tanggal + ' Oktober ' + tahun); break; }
};

//Soal 3
function segitiga1(panjang) {
  var hasil = '';
  for (var i = 0; i < panjang; i++) {
      for (var j = 0; j <= i; j++) {
          hasil += '* ';
      }
      hasil += '\n';
  }
  return hasil;
}
console.log(segitiga1(3));
console.log(segitiga1(7));