let urun1 = "iphone 12";
let urun2 = "iphone 13";
let urun3 = "iphone 13 pro"

let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold","siyah","beyaz"];

let urun_1=["iphone 12", 9000, "gold"];
let urun_2=[];
urun_2[0] = "iphone 13";
urun_2[1] = 12000;
urun_2[2] = "siyah"; //dizilere eleman eklenmesi için

let urun_3= [
    "iphone 13 pro",
    20000,
    ["siyah","beyaz","mavi"]
];

console.log(urun_3[2][1]);

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")[3]);
