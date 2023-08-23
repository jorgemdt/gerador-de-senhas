// window.alert('working...')
const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');
const passwordSize = document.querySelector('#password-size');
const password = document.querySelector('#password');
const containerPassword = document.querySelector('#container-password');

const charset ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*.;'
let novaSenha;

//linkar o slider com o span do html para mostrar o numero de char's.
passwordSize.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    passwordSize.innerHTML =this.value;
}

//função para gerar senha
function generatePassword(){
    // alert('senha gerada');

    //for loop que itera o charset
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    //remove a classe hide e mostra a senha no html.
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert('senha copiada!');
    navigator.clipboard.writeText(novaSenha);
}
