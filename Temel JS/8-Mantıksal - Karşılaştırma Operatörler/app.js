//! Mantıksal Operatörler

/*
&& : ve 
|| : veya
! : değil 
*/

// Yaşınız 18'den büyükse VE  3000 TL para olması

let yas = 20;
let para = 3500;
let saglikliMi= false;
let hakSayisi = 3;

console.log(yas>18 && para > 3000 && saglikliMi==true);

console.log(5>3 || 2<3);

console.log(!(5>3)); // !: bir şeyin tersini alır. Değilini alır.

console.log((para>3000 && hakSayisi>1) || (yas>18 && salikliMi));

// ! KARIŞILAŞTIRM OPERATÖRLERİ

/*
!= : eşit değil mi
> : büyük mü
< : küçük mü
>= büyük eşit mi
<= küçük eşit mi 
== eşit alamı
*/

console.log(5==3);
console.log(5!=3);
console.log(15>12);
console.log(15<12);

console.log(12<=13); //12==12 || 13>12 bu koşullara bakıyor
console.log(13>=15);
