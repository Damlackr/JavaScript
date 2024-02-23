/*
1- iki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        Öğrenci 1:
            İsim    : ada bilgi
            Doğum Tarihi: 2012
            matematik notları: 70, 70,80

        Öğrenci 1:
            İsim    : yiğit bilgi
            Doğum Tarihi: 2010
            matematik notları: 40, 40,70
    
2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/
//1
let ogr1_ad= "Ada" ; 
let ogr1_Soyad = "Bilgi";
let ogr1_dogumTarihi = "2012";
let ogr1_metamtik1=70;
let ogr1_metamtik2=70;
let ogr1_metamtik3=80;

let ogr2_ad= "Yiğit" ; 
let ogr2_Soyad = "Bilgi";
let ogr2_dogumTarihi = "2010";
let ogr2_metamtik1=40;
let ogr2_metamtik2=40;
let ogr2_metamtik3=70;
//2

let suankiYil =  new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
console.log(ogr1_yas);

let ogr2_yas = 2024 - Number(ogr2_dogumTarihi);
console.log(ogr2_yas);

//3

let ogr1_ortalama = (ogr1_metamtik1 + ogr1_metamtik2 + ogr1_metamtik3)/3;
console.log(parseFloat(ogr1_ortalama)); //ondalıklı kısmı yazdırmak için kullanılıyor.
console.log(typeof ogr1_ortalama);

let ogr2_ortalama = (ogr2_metamtik1 + ogr2_metamtik2 + ogr2_metamtik3)/3;
console.log(ogr2_ortalama);
console.log(typeof ogr1_ortalama);

//4

