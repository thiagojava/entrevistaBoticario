    /* Função para mover o texto e a imagem */
document.addEventListener("mousemove", function(e)
{
    const bg = document.querySelector('.bg');
    const woman = document.querySelector('.woman');
    const content = document.querySelector('.content');

    bg.style.width = 100 + e.pageX/100 + '%';
    bg.style.height = 100 + e.pageX/100 + '%';
    woman.style.right = 100 + e.pageX/2 + 'px';
    content.style.left = 100 + e.pageX/2.9 + 'px';
})

// Validação Formulário
    const btt = document.getElementById('button');
    btt.addEventListener('click',(e) =>{
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const textoMsg = document.getElementById('erro');
    const nome = document.getElementById('nome');
    const succes = document.getElementById('sucess');
    let messaggeErro = [];


    if(nome.value == ''){
        errorInput(nome);
        messaggeErro.push('Digite um nome');
    }else{
        limpaErrorInput(nome);
    }    
    if(mensagem.value == ''){
        errorInput(mensagem);
        messaggeErro.push('Digite uma mensagem');
    }else{
        limpaErrorInput(mensagem)
    }
    if(email.value == ''){
        errorInput(email);
        messaggeErro.push('Digite seu email');
    }
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        errorInput(email);
        messaggeErro.push('Email inválido');
    }else{
        limpaErrorInput(email);
        validationEmail(email);
    }

    if(messaggeErro.length > 0){
        e.preventDefault();
        textoMsg.innerText = messaggeErro.join(',');
    }
    if(messaggeErro <= 0){
        textoMsg.innerText = '';
        succes.innerText = 'Obrigado pelo contato, '+ nome.value;
    }
    /* Capturando antes do @ e depois do @ */
    function validationEmail(email){
        let usuario = email.value.substring(0, email.value.indexOf("@"));
        let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
        if(usuario.length > 32){
            errorInput(email);
            messaggeErro.push('Usuário ultrapassou limite de caracteres');
        }
        if(dominio.length > 16){
            errorInput(email);
            messaggeErro.push('Domínio ultrapassou limite de caracteres');
        }
        var reg = /[a-zA-Z\[0-9]\u00FF ]+/i;

    }
    /* Função para manipular a cor das box */
    function errorInput(id){
        id.classList.add("errorInput");
    }
    function limpaErrorInput(id){
        id.classList.remove("errorInput");
        }

});



