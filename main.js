function resRelato(e) {
    //variáveis de armazenamento dos valores dos inputs/textareas e concatenação com quebra de linhas
    let fatorR = document.getElementById('fator').innerText + ' ' + `${document.formulario.infr.value} \n\n`
    fatorR.nu
    let problem = document.getElementById('l-problem').innerText + '\n' + `${document.formulario.problem.value} \n\n`
    let negociations = document.getElementById('l-negociations').innerText + '\n' + `${document.formulario.negociations.value} \n\n`
    let conclusion = document.getElementById('l-conclusion').innerText + '\n' + `${document.formulario.conclusion.value} \n\n`
    let dispon = document.getElementById('l-dispon').innerText + '\n' + `${document.formulario.dispon.value} \n\n`
    let ref = document.getElementById('l-ref').innerText + '\n' + `${document.formulario.ref.value} \n\n`
    let infotec = document.getElementById('l-infotec').innerText + '\n' + `${document.formulario.infotec.value} \n\n`

    //transfere titulos e conteúdo digitado nos input/textarea para a caixa de relato que por padrão está em branco.
    document.getElementById("relato").innerHTML = fatorR + problem + negociations + conclusion + dispon + ref + infotec
    e.preventDefault(); 
}


document.getElementById('formulario').preventDefault()

/*
document.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {          
      e.preventDefault();        
    }
  });
*/

function copyText() {
    //cria uma variável para armazenar o conteúdo da transferência dos relatos
    let relato = document.getElementById("relato").value
    //copia o conteúdo relatado
    navigator.clipboard.writeText(relato)

    //muda o texto do botão
    document.querySelector('button').textContent = "Relato Copiado"
    //muda o estilo do botão
    document.querySelector('button').style = "background: #ededed; color: #ed1c24;"

    //apaga o conteúdo do formulário
    document.getElementById('formulario').reset()

    //recarrega o navegador depois de 8 segundos
    setInterval(function () {window.location.reload()}, 8500)
}
