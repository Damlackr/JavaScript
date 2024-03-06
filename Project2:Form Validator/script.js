const form =  document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';

}

function succes(input){
    input.className = 'form-control is-valid';
}


function checkEmail(input){
  const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value)){
        succes(input);
   }else{
        error(input,'hatalı bir mail adresi');
   }
};

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'Telefon 10 karakterli olmalıdır')
    }else{
        succes(phone);
    }
}

function checkRequired(/*input*/ inputs){
    //console.log(input);
    inputs.forEach(function(input) { 
        if(input.value === ''){
        error(input, `${input.id} is required.`);
    }else{
        succes(input);
    }
});
}

function checkLenght(input, min,max){
    if(input.value.length < min){   
        error(input, `${input.id} en az ${min} karakter olmalıdır.`)
    }else if(input.value.length > max){
        error(input, `${input.id} en az ${max} karakter olmalıdır.`)
    }else{
        succes(input);
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault(); // var sayılan özellik kapanıyor form subbit etmiyor.consolden silinmiyor
    // // console.log(username.value);

    // if(username.value === ''){
    //     //username.className = 'form-control error_'
    //     //username.className = 'form-control is-invalid' // error ile aynı işlemi yapmaktadır
    //     error(username,'username gerekli');

    // }else{
    //     succes(username);
    //     //username.className = 'form-control is-valid'
    // }
    // //console.log(username.value );
    // if(email.value === ''){
    //     //username.className = 'form-control error'
    //     //email.className = 'form-control is-invalid' // error ile aynı işlemi yapmaktadır
    //     error(email,'email gerekli');
      

    // }else if(!validateEmail(email.value)){
    //     error(email,'düzgün bir mail adresi giriniz')
    // }else{
    //     succes(email);
    // }
    // if(password.value === ''){
    //     //username.className = 'form-control error'
    //     //password.className = 'form-control is-invalid' // error ile aynı işlemi yapmaktadır
    //     error(password,'password gerekli');
    // }else{
    //     succes(password);
    // }
    // if(repassword.value === ''){
    //     //username.className = 'form-control error'
    //     //repassword.className = 'form-control is-invalid' // error ile aynı işlemi yapmaktadır
    //     error(repassword,'repassword gerekli');
    // }else{
    //     succes(repassword);
    // }
    checkRequired([username,email,phone,password,repassword]);
    //checkRequired(email);
    //checkRequired(password);
    //checkRequired(repassword);
    checkEmail(email);
    checkLenght(username,7,15);
    checkLenght(password,7,12);
    checkLenght(repassword,7,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
});
