function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var telefoneVar = ipt_telefone.value;
    var confirmacaoSenhaVar = ipt_confirmacao_senha.value;

    if (
      nomeVar == "" ||
      emailVar == "" ||
    telefoneVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == "" 
    ) {
      // cardErro.style.display = "block";
      // mensagem_erro.innerHTML =
        alert('Preencha todos os campos');

      return false;
    }else if(senhaVar.length <= 6){
      alert('Senha fraca');

      return false;


    }else if(senhaVar != confirmacaoSenhaVar){
      alert('Senhas diferentes');

      return false;

    } else {
      setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        telefoneServer: telefoneVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          // cardErro.style.display = "block";

          // mensagem_erro.innerHTML =
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
  
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

      });

    return false;
  }

  function sumirMensagem() {
    div_erro.style.display = "none";
  }



