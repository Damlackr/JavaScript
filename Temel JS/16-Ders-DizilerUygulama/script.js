// 1-"Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma","Armut","Muz","Çilek"];
console.log(meyveler);

// 2- Dizi kaç elemanlıdır? 

sonuc = meyveler.length;
console.log(sonuc);
 
// 3- Dizinin ilk ve son elamanı nedir?

ilkEleman = meyveler[0];
console.log(ilkEleman);
sonEleman = meyveler[3];
console.log(sonEleman);
console.log(meyveler[meyveler.length - 1]);

// 4-Elma dizinin bir elemanı mıdır?

console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

meyveler[meyveler.length] = "Kiraz";
console.log(meyveler);

meyveler.push("Kiraz");

// 6- Dizinin son iki elemanını siliniz.

meyveler.pop();
meyveler.pop();
console.log(meyveler);

// meyveler.splice(meyveler.length -2,2)

// 7- Aşağıdaki bilgileri dizi içerisine saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/* 
    Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
    Öğrenci 2: Ada Bilgi 2012 (80,80,90)
    Öğrenci 3: Ahmet Bilgi 2009 (60,60,70) */


let ogrenci1=["Yiğit Bilgi", 2010, [70,60,80]];
let ogrenci2=["Ada Bilgi", 2012, [80,80,90]];
let ogrenci3=["Ahmet Bilgi", 2009, [60,60,70]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

let ogr1_yas = new Date().getFullYear() - ogrenci1[1];
console.log(ogr1_yas);
let ogr2_yas = new Date().getFullYear() - ogrenci2[1];
console.log(ogr2_yas);
let ogr3_yas = new Date().getFullYear() - ogrenci3[1];
console.log(ogr3_yas);

let ogr1_ort = (ogrenci1[2][0] + ogrenci1[2][1] + ogrenci1[2][2]) / 3 ;
console.log(ogr1_ort);
let ogr2_ort = (ogrenci2[2][0] + ogrenci2[2][1] + ogrenci2[2][2]) / 3 ;
console.log(ogr2_ort);
let ogr3_ort = (ogrenci3[2][0] + ogrenci3[2][1] + ogrenci3[2][2]) / 3 ;
console.log(ogr3_ort);