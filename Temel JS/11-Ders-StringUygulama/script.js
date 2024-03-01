let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";
let sonuc;
// 1- Url kaç karakterlidir?

sonuc = url.length;

//2-Kurs Adı kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;

//3- url https ile mi başlıyor?

sonuc = url.startsWith("https");

//4- kurs adı içerisinde Eğitimi kelimesi var mı?

sonuc = kursAdi.includes("Eğitimi");

if(kursAdi.indexOf("Eğitimi") > -1 ){
    console.log("evet var");
}else{
    console.log("hayır yok");
}

// 5- url ve kursAdı değişkenlerini kullanarak string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu


kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");

sonuc5 = `${url}/${kursAdi}`;
sonuc = sonuc5.replaceAll("ı","i").replaceAll("ş" ,"s").replaceAll("ç","c");
console.log(sonuc);
console.log(kursAdi);
console.log(sonuc5);