let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.8");
sonuc = parseInt("10a");
sonuc = parseInt("a10a"); //sayı değil

sonuc = isNaN("10a"); //true
sonuc = isNaN("10"); // false

let sayi = 15.12345667;

sonuc = sayi.toPrecision(5); //yuvarlama işlemi yapar
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.3);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(4,6,8,3);
sonuc = Math.max(6,7,9,1);
sonuc = Math.random();
sonuc = Math.floor(Math.random()*10) + 1; // 1 ile 10 arasında sayı
sonuc = Math.floor(Math.random()*100) + 1; // 1 ile 100 arasında sayı






console.log(typeof sonuc);
console.log(sonuc);