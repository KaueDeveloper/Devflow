//Função para ir para próximo formulário
function nextStep() {
    let setp1 = document.getElementById("step1");
    let step2 = document.getElementById("step2");

    setp1.classList.remove('form-active');
    setp1.classList.add('form-not-active');
    step2.classList.remove('form-not-active');
    step2.classList.add('form-active');
}

//Função para vizualizar e ocultar senha
function viewPassword() {
    const password = document.getElementById('password');
    const btnViewPassword = document.getElementById('btn-view-password');
    const btnOcultPassword = document.getElementById('btn-ocult-password');

    password.type = "text";
    btnOcultPassword.style.display = "block";
    btnViewPassword.style.display = "none";
}

function ocultPassword() {
    const password = document.getElementById('password');
    const btnViewPassword = document.getElementById('btn-view-password');
    const btnOcultPassword = document.getElementById('btn-ocult-password');

    password.type = "password";
    btnOcultPassword.style.display = "none";
    btnViewPassword.style.display = "block";
}

//Função para vizualizar e ocultar confirmação de senha
function viewConfirmPassword() {
    const confirmPassword = document.getElementById('confirm-password');
    const btnViewConfirmPassword = document.getElementById('btn-view-confirm-password');
    const btnOcultConfirmPassword = document.getElementById('btn-ocult-confirm-password');

    confirmPassword.type = "text";
    btnOcultConfirmPassword.style.display = "block";
    btnViewConfirmPassword.style.display = "none";
}

function ocultConfirmPassword() {
    const confirmPassword = document.getElementById('confirm-password');
    const btnViewConfirmPassword = document.getElementById('btn-view-confirm-password');
    const btnOcultConfirmPassword = document.getElementById('btn-ocult-confirm-password');

    confirmPassword.type = "password";
    btnOcultConfirmPassword.style.display = "none";
    btnViewConfirmPassword.style.display = "block";
}