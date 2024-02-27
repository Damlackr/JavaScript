let simdi =  new Date(); // şimdili tarih- saat

sonuc = simdi;

// GET METHODS

sonuc = simdi.getDate(); // gün
sonuc = simdi.getDay();  // 0: pazar 6: cumartesi
sonuc = simdi.getFullYear(); // yıl
sonuc = simdi.getHours(); // saat
sonuc = simdi.getTime();

// SET METHODS
simdi.setFullYear(2025); // yılı 2025 yapma/değiştirme.
simdi.setMonth(7); // 0 ocak
simdi.setDate(15);


sonuc=simdi

let dogumTarihi =  new Date(1990, 5, 15);
sonuc = simdi.getFullYear()-dogumTarihi.getFullYear();
sonuc = simdi - dogumTarihi;

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000 // saniye
let dakika = milisecond / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc =gun;

console.log(sonuc);
console.log(typeof sonuc);


