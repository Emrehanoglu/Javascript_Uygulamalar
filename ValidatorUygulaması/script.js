const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function success(input){
    input.className = 'form-control is-valid';
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `${input.id} alanı boş geçilemez.`);
        }else{
            success(input);
        }
    })
}

function checkLengt(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} alanı en az ${min} karakter olmalıdır.`);
    }else if(input.value.length > max){
        error(input,`${input.id} alanı en fazla ${max} karakter olmalıdır.`)
    }
}

function checkPassword(input,input2){
    if(input.value != input2.value){
        error(input2, "Şifreler birbirleriyle eşleşmemektedir.")
    }
}

function checkMail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(input.value)){
        success(input);
    }else{
        error(input, 'Hatalı format, lütfen tekrar deneyiniz.');
    }
}

function checkPhone(input){
    var exp = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!exp.test(input.value)){
        error(input, "En az 10 karakter olmalıdır.")
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkMail(email);
    checkLengt(username,7,15);
    checkPassword(password,repassword)
    checkPhone(phone);
});