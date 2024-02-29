let sayilar = [1,5,7,15,3,25];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.


for( let i of sayilar ){

    sayilarin_karesi = i*i;
    console.log(sayilarin_karesi);
}

for( let i in sayilar ){

    sayilarinKaresi = sayilar[i]*sayilar[i];
    console.log(sayilarinKaresi);
} 



console.log("------------------------------")
// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

for ( let i of sayilar){
    if(i %5 == 0){
        console.log(i)
    }else{
        console.log(i + " = 5'in katı değildir.")
    }
}

console.log("------------------------------")

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

var toplam = 0;

for ( let i of sayilar){
    if( i %2 == 0 ){
        toplam += i;
    } else {
        console.log( i + " =çift sayı değildir.")
    }
}
console.log(toplam);


console.log("------------------------------")

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"];

for(let urun in urunler){

    console.log(urunler[urun].toUpperCase());
}
console.log(".....")
for(let urun of urunler){

    console.log(urun.toUpperCase());
}

console.log("------------------------------")
// 5- urunler listesindeli içinde samsung geçen kaç ürün vardır?
toplam = 0;
for(let i in urunler){
    sonuc = urunler[i].includes("samsung");
    console.log(sonuc);
    if(sonuc == true){
        toplam += 1; // toplam++;
    }
}
console.log(toplam);

console.log("------------------------------")
// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumunu yazdırınız.

let ogrenciler = [
    {"ad":"yiğit" , "soyad":"bilgi", "notlar" :[60,70,60]},
    {"ad":"ad" , "soyad":"bilgi", "notlar" :[80,70,80]},
    {"ad":"çınar" , "soyad":"bilgi", "notlar" :[70,70,60]},
];

for (let i of ogrenciler){
    ortalama = (i.notlar[0] + i.notlar[1] + i.notlar[2])/3;
    { if(ortalama >= 50){
        console.log(`ogrenci ${i.ad}'nin notu : ${ortalama} BAŞARILI`);
    }else{
        console.log(`ogrenci ${i.ad}'nin notu : ${ortalama} BAŞARISIZ`);
    }};
};

console.log("------------------------------")
// 7- tüm öğrencilerin not ortalaması kaçtır?

toplam_ortalama = 0;

for (let i of ogrenciler) {
    ortalama = (i.notlar[0] + i.notlar[1] + i.notlar[2])/3;
    toplam_ortalama += ortalama;
}
console.log(`Toplam ortalama : ${ortalama}`);