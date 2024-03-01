let sayilar = [1,3,5,7];

function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");

function yasHesapla1(dogumYılı){
   console.log(new Date().getFullYear() - dogumYılı);
}


yasHesapla1(1999);
yasHesapla1(1985);

function yasHesapla(dogumYılı){
    return new Date().getFullYear() - dogumYılı;
 }
let yasAhmet = yasHesapla(1985);
let yasDamla = yasHesapla(1999);

function emekliligeKacYilKaldi(dogumYılı, isim){
    let yas = yasHesapla(dogumYılı);
    let kalan_sene = 65 - yas;

    if(kalan_sene > 0) {
        console.log(`emekli olmanız ${kalan_sene} yıl kaldı`);
    }else{
        console.log("Emekli olmuşsunuz");
    }
}

emekliligeKacYilKaldi(1999, "Damla");
emekliligeKacYilKaldi(1980,"Ali");
emekliligeKacYilKaldi(1985,"Ayşe");