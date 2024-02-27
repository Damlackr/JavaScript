let ad = "Damla";
let soyad = "Çakır";
let yas = 70;
let sehir = "Edirne";

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + "'de yaşıyorum. " + 'Emekliğe ' + (65 - yas) + ' yılım kaldı.';
console.log(mesaj);

// backtick = ``
mesaj = `Benim adım  ${ad}  ve soyadım  ${soyad}. ${sehir}'de yaşıyorum. Emekliğe ${ 65 - yas} yılım kaldı. `;
console.log(mesaj);

// ternary operators

let emeklilik = (65 - yas > 0) ? "Emekliliğe "  + (65 - yas) + " yıl kaldı." :  " Zaten emeklisiniz";
mesaj = `Benim adım  ${ad}  ve soyadım  ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik} `;
console.log(mesaj);