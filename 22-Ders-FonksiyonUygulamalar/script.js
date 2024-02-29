// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeDöndüren(kelime,kacKez){
    for(let i = 0; i < kacKez; i++){
            console.log(kelime);
    }
}

kelimeDöndüren("Damla",5);
kelimeDöndüren("merhaba",3);

console.log("-----------------------");
// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function dikdörtgenHesap(uzunKenar, kısaKenar){
    let dikdörtgenCevre= (uzunKenar + kısaKenar)*2;
    let dikdörtgenAlan = uzunKenar * kısaKenar; 
    return console.log(`Dikdörtgen Çevre = ${dikdörtgenCevre} , Dikdörtgen Alan = ${dikdörtgenAlan}`);

}

dikdörtgenHesap(2,4);
dikdörtgenHesap(8,9);
function dikdörtgenHesap(uzunKenar, kısaKenar){
    let dikdörtgenCevre= (uzunKenar + kısaKenar)*2;
    let dikdörtgenAlan = uzunKenar * kısaKenar; 
    return `Dikdörtgen Çevre = ${dikdörtgenCevre} , Dikdörtgen Alan = ${dikdörtgenAlan}`;

}

let sonuc = dikdörtgenHesap(2,4);
console.log(sonuc);
let sonuc1 =dikdörtgenHesap(8,9);
console.log(sonuc1);

console.log("-----------------------");
// 3- Yazı tura uygulamasını fonksiyon kullanarak yazınız.

function yazıTuraAt(){
    let random = Math.random(); // 0 -1 arasında
    console.log(random);

    if(random <0.5){
        console.log("Yazı");
    }else{
        console.log("Tura");
    }
}

yazıTuraAt();
yazıTuraAt();
yazıTuraAt();

console.log("-----------------------");
//4- Kendisine gönderilen bir sayının tam bölümlerini dizi döndüren fonksiyon yazınız

function tamBolenler(sayi){
    let sayilar = [];

    for(let i = 2; i <sayi; i++){
        if(sayi % i == 0) {
            sayilar.push(i)
        }
    }

    return sayilar;
}

console.log(tamBolenler(10));
console.log(tamBolenler(15));



console.log("-----------------------");
//5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam1(){
    console.log(arguments);
}

console.log(toplam(2,5));
console.log(toplam(2,7));

function toplam(){
    let sonuc = 0;
    for(let i = 0; i < arguments.length; i++){

        sonuc += arguments[i];
    }
    return sonuc;
}

console.log(toplam(2,3,4,5));
console.log(toplam(2,3));
console.log(toplam(2,3,4,5,5,6,7,8,334,435));
