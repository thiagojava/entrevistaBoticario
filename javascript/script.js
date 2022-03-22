/* Função para mover o texto e a imagem */
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", function (e) {
    const backgroundHome = document.querySelector(".backgroundHome");
    const imgWomanHome = document.querySelector(".imgWomanHome");
    const textoHome = document.querySelector(".textoHome");
    backgroundHome.style.width = 100 + e.pageX / 100 + "%";
    backgroundHome.style.height = 100 + e.pageX / 100 + "%";

    imgWomanHome.style.right = 100 + e.pageX / 2 + "px";
    textoHome.style.left = 100 + e.pageX / 2.9 + "px";
  });

  const botaoForm = document.getElementById("button");
  botaoForm.addEventListener("click", (e) => {
    const regexEmail =
      /^(\w[A-Za-z0-9.-_]{1,31})@(\w[A-Za-z0-9.]{1,15})+(\.\w[a-z]{1,2})+$/;
    const textoErroForm = document.getElementById("textoErroForm");
    const textoSucessoForm = document.getElementById("textoSucessoForm");

    let messaggeErro = [];
    let itensForm = document.querySelectorAll("div.inputBox > input");

    /* caso adicione um input novo no form ele automaticamente faz as validações*/
    itensForm.forEach((element) => {
      if (element.value == "") {
        errorInput(document.getElementById(element.id));
        messaggeErro.push("Digite um " + element.id);
      } else {
        limpaErrorInput(document.getElementById(element.id));
      }
      if (element.id == "email" && element.value.length > 0) {
        let validaRegex = regexEmail.test(element.value);
        if (validaRegex == false) {
          errorInput(document.getElementById(element.id));
          messaggeErro.push("Email inválido");
        }
      }
    });
    verificaMensagemErro();

    function verificaMensagemErro() {
      /* Verifica qual mensagem apresentar*/
      if (messaggeErro.length > 0) {
        e.preventDefault();
        textoErroForm.innerText = messaggeErro.join(", ");
      }
      if (messaggeErro.length <= 0) {
        textoErroForm.innerText = "";
        textoSucessoForm.innerText = "Obrigado pelo contato, " + nome.value;
      }
    }
  });

  /* Função para manipular as cores das box's */
  function errorInput(id) {
    id.classList.add("errorInputBox");
  }
  function limpaErrorInput(id) {
    id.classList.remove("errorInputBox");
  }
});
