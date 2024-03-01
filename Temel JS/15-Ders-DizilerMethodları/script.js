let ogrenciler = ["çınar", "damla","ada"];

sonuc = ogrenciler.length;

console.log(sonuc);
// array to string

sonuc = ogrenciler.toString();
console.log(sonuc);
sonuc = ogrenciler.join(" ");
console.log(sonuc);

// eleman silme

sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri döndürülür.
console.log(sonuc);
sonuc = ogrenciler.shift(); //lk eleman silinir.
console.log(sonuc);

// eleman ekleme

sonuc = ogrenciler.push("sena") // dizinin sonuna eleman eklenir.
console.log(sonuc);
console.log(ogrenciler);

sonuc = ogrenciler.unshift("sena") //ilk elemanına eklenir.
console.log(sonuc);
console.log(ogrenciler);


let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2);
//bir çok diziyi birleştirebilriz.
sonuc = markalar1.concat(markalar2, markalar3);

sonuc = markalar1.splice(0, 0, markalar3);
sonuc = markalar1.splice(0, 0, "bmw","audi");
sonuc = markalar1.splice(0, 3, "bmw","audi");
sonuc = markalar1.splice(0, 0, "bmw","audi");
sonuc = markalar1.splice(0, 3);
console.log(sonuc);
console.log(markalar1);