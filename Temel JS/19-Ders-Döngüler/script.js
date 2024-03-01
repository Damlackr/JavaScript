for ( let i=0; i<10; i++){
    console.log(i);
}
for ( let i=0; i<10; i++){
    console.log("merhaba");
}
let toplam = 0; 
let toplam1 = 0; 
for ( let i=0; i<10; i++){
    toplam1 +=i;
    console.log(toplam1);
}
toplam2=0
for ( let i=0; i<=10; i++){
    toplam2 +=i;
}
console.log(toplam2);

for ( let i=1; i<=10; i++){
    toplam +=i;
}
console.log(toplam);

let sayilar = [ 1,4,5,8,4,3];

let toplamm=0;

for( let i = 0; i<sayilar.length; i++){
    toplamm += sayilar[i];
   //console.log(sayilar[i]);
}
console.log(toplamm);

for( let sayi in sayilar){
    console.log(sayi);
} //index numaları geliyor
for( let sayi in sayilar){
    toplamm += sayilar [sayi];
} 

console.log(toplamm);

for(let sayi of sayilar ){
    console.log(sayi); //direkt sayıları yazdrıdı
}

toplammm = 0;

for(let sayi of sayilar ){
    toplammm += sayi
}

console.log(toplammm);

let user = {
    "name" : "Damla Çakır",
    "username" : "Dropsiy",
    "password" : "1234",
    "email" : "damlacakr61@gmail.com"
}

for (let key in user){
    console.log(key);
    console.log(user[key]);
}