// Var - Let - Const

/*

SCOPE (KAPSAM)
---> Global Scope : sen buna her yerden erişebilirsin
kıvırcık parantezin içinde olmamalı
---> Function Scope: kıvırcık parantez içinde erişilir. {}
---> Block Scope:

*/

// var degiskenIsmı = 10;

// console.log(degiskenIsmı);

//! Global Scope
// var a = 5;


// while(a>3){

//     // var b = 5;

// }

// if(true){
//  console.log(a);
// }

//! Function Method


// function method1(){
//     console.log(a);
// }
// method1();

// function method1(){
//     var sayi= 10;
// }


// method1();

//! Block Scople

// function method1(){

//     if(trues){
//         var b = 3 //* block scope
//     }
//     while(true){

//     }
//     for(let i=0, i <=10, i++){

//     }
// }

// Değişken nedir ?

/* 

int, string, double, float, boolean yok.



int degiskenİsmi =  deger;
int yas = 23;

*/

/*

var/let/const degiskenIsmi = degiskenDegeri;

let sayi = 10;

*/

// var: function scope -- raö bellekte cok fazla yer kaplar. vardan aynı değişken isimden 2 tane oluşturulabilir
// let/ const : block scope özelliğine sahip. { } içinde erişilir. aynı değişken isiminden oluşamaz.
// ---------------------------
// function selamVer(){
//     var selam ="Herkese selam"; //functioom scople
//     if(true){
//         var b = 10;
//         const b = 10;
//         let c = 20;
//     }
//     consolelog(bl)  // blok içinde
//     console.log(selam);

// }

// selamVer()
// --------------------------

// const (constant) : sabit değiştirilemez.

const user = {
    username : "damla",
    password: "123"
}
user={} //const olarak tanımlandığı için değiştirelemez hata verir.

user.username="damlacakir" // bunu yapabilirsin. içerisindeki değişken değiştirelemez
console.log(user)