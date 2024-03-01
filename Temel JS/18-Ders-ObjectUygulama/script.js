// 1-Sipariş bilgilerini object içerisinde saklayınız.
 
siparis_bilgileri = [
    {
        "siparis_id" : 101,
        "siparis_tarihi" : "31.12.2022",
        "odeme_sekli" : "kredi kartı",
        "kargo_adresi" : "Yahya kaptan mah. Kocaeli Izmıt",
        "Satin_alinan_urunler" : [
            {
            "urun_id" : 5,
            "urun_basligi" : "Iphone 13 Pro",
            "urun_url" : "http://asdf",
            "urun_fiyati": 22000,
        },
        {
            "urun_id" : 6,
            "urun_basligi" : "Iphone 13 Max",
            "urun_url" : "http://asdd",
            "urun_fiyati": 25000,
        }
           ],
        "musteri" : {
            "musteri_id" : 12,
        },
        "satici" : {
            "firma_id" : 34,
            "firma_adi" : "Apple Turkiye"
        }

    },
    {
        "siparis_id" : 102,
        "siparis_tarihi" : "31.12.2022",
        "odeme_sekli" : "kredi kartı",
        "kargo_adresi" : "Yahya kaptan mah. Kocaeli Izmıt",
        "Satin_alinan_urunler" : [
            {
            "urun_id" : 5,
            "urun_basligi" : "Iphone 13 Pro",
            "urun_url" : "http://asdf",
            "urun_fiyati": 22000,
        },
        {
            "urun_id" : 6,
            "urun_basligi" : "Iphone 13 Max",
            "urun_url" : "http://asdd",
            "urun_fiyati": 25000,
        }
           ],
        "musteri" : {
            "musteri_id" : 12,
        },
        "satici" : {
            "firma_id" : 34,
            "firma_adi" : "Apple Turkiye"
        }

    }

]



// 2-Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)

let kdv = 0.18;

//sipariş 1:

siparis1_urun1 = siparis_bilgileri[0].Satin_alinan_urunler[0].urun_fiyati;
console.log("Sipariş 1'deki 1.ürünün fiyatı:" + siparis1_urun1);
siparis1_urun1_kdvli = siparis1_urun1 + (siparis1_urun1 * kdv );
console.log("Sipariş 1'deki 1.ürünün kdvli fiyatı:" + siparis1_urun1_kdvli);

siparis1_urun2= siparis_bilgileri[0].Satin_alinan_urunler[1].urun_fiyati;
console.log("Sipariş 1'deki 1.ürünün fiyatı:" + siparis1_urun2);
siparis1_urun2_kdvli = siparis1_urun2 + (siparis1_urun2 * kdv );
console.log("Sipariş 1'deki 2.ürünün kdvli fiyatı:" + siparis1_urun2_kdvli);

console.log("-----------------------------------")

let siparis1_toplam_ücret = siparis1_urun1_kdvli + siparis1_urun2_kdvli;
console.log("KDV DAHİL SİPARİŞ 1 ÜCRETİ:" + siparis1_toplam_ücret);

//sipariş 2:
 console.log("-----------------------------------")

siparis2_urun1 = siparis_bilgileri[1].Satin_alinan_urunler[0].urun_fiyati;
console.log("Sipariş 2'deki 1.ürünün fiyatı:" + siparis2_urun1);
siparis2_urun1_kdvli = siparis2_urun1 + (siparis2_urun1 * kdv );
console.log("Sipariş 2'deki 1.ürünün kdvli fiyatı:" + siparis2_urun1_kdvli);

siparis2_urun2= siparis_bilgileri[1].Satin_alinan_urunler[1].urun_fiyati;
console.log("Sipariş 2'deki 2.ürünün fiyatı:" + siparis2_urun2);
siparis2_urun2_kdvli = siparis2_urun2 + (siparis2_urun2 * kdv );
console.log("Sipariş 2'deki 2.ürünün kdvli fiyatı:" + siparis2_urun2_kdvli);

console.log("-----------------------------------")

let siparis2_toplam_ücret = siparis2_urun1_kdvli + siparis2_urun2_kdvli;
console.log("KDV DAHİL SİPARİŞ 2 ÜCRETİ:" +siparis2_toplam_ücret);

console.log("-----------------------------------")
// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretlerini hesaplayınız.

let toplam_odenen_ucret = siparis1_toplam_ücret + siparis2_toplam_ücret;
console.log("TOPLAM ÜCRET" + toplam_odenen_ucret);

