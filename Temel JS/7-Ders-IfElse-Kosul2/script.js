// yas >=18
// mezuniyet == "Lise" ya da mezuniyet =="üniversite"

let yas = 20;
let mezuniyet = "üniversite";
if((yas >= 18) && (mezuniyet =="Lise")){
    console.log("ehliyet alabilir.")
} else {
    console.log("ehliyet şartları tutmamaktadır.")
}

// and
// true, true => true
// true, false => false
// false, false => false

if((yas >= 18) && (mezuniyet =="Lise" || mezuniyet == "üniversite")){
    console.log("ehliyet alabilir.")
} else {
    console.log("ehliyet şartları tutmamaktadır.")
}
//or
// true, true => true
// true, false => true
// false, false => false