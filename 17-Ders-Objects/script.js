let user_1 = ["DAMLA","ÇAKIR", 38];
let user_2 = ["DAMLA","ÇAKIR", 38];

// sözlük yapısı, json yapısı gibidir.

let user = {
    "ad": "Damla",
    "soyad": "Çakır",
    "yas" : 25,
    "adres" : "edirne",
    "adres2" : {
         "sehir":"istanbul",
         "ilce" : "cekmece",
    
    },
    "hobiler" : ["sinema","spor"]

}

let user1 = {
    "ad": "Deniz",
    "soyad": "Çakır",
    "yas" : 25,
    "adres" : "edirne",
    "adres2" : {
         "sehir":"istanbul",
         "ilce" : "cekmece",
    
    },
    "hobiler" : ["sinema","spor"]

}


let sonuc;

sonuc = user.ad;
sonuc = user["soyad"];
sonuc = user.adres2.sehir;
sonuc = user.hobiler[1];

let users = [user, user1]

sonuc = users[1].ad;
sonuc = users[1].adres2.ilce;

let urunler = [
    {
        "urun_adi" : "samsung s22",
        "urun_fiyat" : 13000
    },
    {
        "urun_adi" : "iphone 13",
        "urun_fiyat" : 15000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);

