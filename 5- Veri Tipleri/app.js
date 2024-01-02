/*

? Veri Tipleri

1- string
2-number
3- boolean
4-null
5-undefined
6-object
7-function



*/
// ? String: 

// let isim = "Damla Çakır 24 yaşındadır";
// console.log(isim);
// console.log(typeof isim);

// ? Number:

// let sayi1 = 10;
// let sayi2= 5.2;

// //console.log(sayi1);
// console.log(typeof sayi1);
// console.log(sayi1+sayi2);

// //Not:

// let a = "5";
// let b= "2";
// console.log(a+b);

// stringleri toplarsak birleştirir, string numberı da birleştirir.

//? Boolean : true ve false ' dan oluşur.

// console.log(5>2)

// let a = 3;
// let b = 12;

// let sonuc = a + b;
// console.log(sonuc!=15);

//? Null: boş, herhangi bir değer ataması atılmamıştır.



// a=27;
// let a = null;
// console.log(a);

//? undefined: tanımlanmamış değişken

// let a;

// console.log(typeof a);

// ? object : referans tipindedir. primitive  tiplerden gelişmiştir. öncekiler primitivedir.

// let insan = {
//     isim : "damla çakır",
//     soyisim : "damla çakır",
//     yas : 24
// }

// console.log(insan);

// console.log(typeof insan);

// let rakamlar =[1,2,3,4,5,];
// console.log(typeof rakamlar);

// dizilerde object tipindedir.

// ? function tipinde veri tipi:

let func = function(){
    console.log("merhaba");
}

func();
console.log(typeof func);