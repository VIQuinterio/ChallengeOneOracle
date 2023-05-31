var entradaTexto = document.querySelector('textarea#txt-entrada');
var saidaTexto = document.querySelector('textarea#txt-saida');
var mensagem = document.getElementById("msg")

var btncriptografar = document.querySelector('button.btn-1');
btncriptografar.onclick = criptografar;

var btndescriptografar = document.querySelector('button.btn-2');
btndescriptografar.onclick = descriptografar;

document.getElementById('none').innerHTML = '';
entradaTexto.focus();

function criptografar() {
    
    if (entradaTexto.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        entradaTexto.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';

        var criptografar = entradaTexto.value;
        var txt =  criptografar.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        document.getElementById('txt-saida').innerHTML = `${txt}`;
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar o texto</button>';       
    }
}

function descriptografar() {
    if (entradaTexto.value.length == 0) {
        document.getElementById('none').innerHTML = ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.icone').style.display;
        entradaTexto.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('txt-entrada').innerHTML = '';

        var descriptografar = entradaTexto.value;
        var txt =  descriptografar.replace(/enter/igm, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        document.getElementById('txt-saida').innerHTML = `${txt}`;  
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copiarTexto()">Copiar o texto</button>';
    }
}

function copiarTexto() {
    var copy = document.querySelector('#txt-saida').select();
    navigator.clipboard.writeText(copy)
      .then(() => {
        mensagem.innerHTML = "O texto copiado com sucesso";
        document.querySelector("#txt-entrada").value = "";
      })
      .catch((error) => {
        console.error('Falha ao copiar o texto: ', error);
      });
}




