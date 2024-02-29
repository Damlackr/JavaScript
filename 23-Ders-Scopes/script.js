var isim = "Damla"; // global scope

function yazdir(){
    var isin = "Ayşe" // fonction scop
    var yas = 20;
    console.log(isim);
}

yazdir();
console.log(isim);
// console.log(yas); // globalde tanımlanmamıştır hata alırız.
//geniş kapsamlara erişir fonction scopelara erişemez.

if(true){ // fonksiyonların içine yazılanlar global scopelardır.
    var isim = "Zeynep";
    console.log(isim)
}
console.log(isim); 

// fonksiyonlar keni scope alanlarına oluşturur.
// block içerisinde yeni bir scope oluşmaz ( let, count bunlarla oluşturulur.);
// tüm çabamız block gibi davranan yapılar yapılamasıdır.
// const ile tanımlanan değiştirilmesinin önüne geçer. 