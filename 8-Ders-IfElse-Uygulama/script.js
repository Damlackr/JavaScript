// 1- Bir sayının 10 - 50 arasında olup olmadığını kontrol ediniz.
// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. ( else if)
// 4- 2 vize (40%) ve 1 final (60%) notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.

//! 1. SORU CEVAP

let sayi = 68;

if ( sayi > 10 && sayi < 50){
    console.log("sayi 10-50 arasındadır");
}else{
    console.log(" sayi 10-5- arasında değildir.");
}

//! 2. SORU CEVAP
let sayi1 = 33;

if ( sayi1 % 2 == 0 && sayi > 0){
    console.log("Sayı pozitif çift sayıdır.");
}else{
    console.log("sayi çift sayi değildir.");
}

//! 3. SORU CEVAP

let x = 1;
let y = 6;
let z = 9;

if ( x > y) {
    if (y>z){
        console.log(" x > y > z");
    }else if(x>z){
        console.log(" x > z > y");
    }else if(z>x){
        console.log("z > x > y");
    }
  
}else if (y > x ){
    if(z>y){
        console.log("z > y > x");
    }else if (x>z){
        console.log(" y > x > z");
    }else if (z>x){
        console.log("y > z > x");
    }
}else{
    console.log("x = y = z")
}

//? Kursun yaptığı cevap:

let a = 60, b = 60, c = 60;

if ( a > b && a > c){
    console.log("a en büyük");
} else if ( b > a  &&  b > c){
    console.log (" b en büyüktür.");
} else if ( c > a && c > b){
    console.log("c en büyüktür.");
}else{
    console.log (" sayılar eşittir.");
}
//! 4. SORU CEVAP

let vize1 = 10;
let vize2 = 0;
let final = 69;
let ortalama = (((vize1+vize2)/2)* 0.4 ) + (final * 0.6);
console.log("ortalamanız: " + ortalama);

if ( ortalama >= 50 && final >= 50){
    console.log("Geçtiniz");
}else if (ortalama <=50 && final >= 70){
    console.log("finalle geçtiniz");
}else {
    console.log("kaldınız");
}