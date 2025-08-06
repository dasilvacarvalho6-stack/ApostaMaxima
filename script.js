function gerarCodigo() {
    const usuario = document.getElementById('usuario').value.trim();
    const valor = document.getElementById('valor').value.trim();
    const jogos = document.getElementById('jogos').value.trim().split('\n').join(' + ');

    if (!usuario || !valor || !jogos) {
        document.getElementById('resultado').innerText = "Preencha todos os campos para gerar o código.";
        return;
    }

    const codigo = `${usuario}|R$${valor}|${jogos}`;
    document.getElementById('resultado').innerText = `Código gerado:\n${codigo}\n\nEnvie este código para o administrador.`;
}

function apostarPix() {
    const usuario = document.getElementById('usuario').value.trim();
    const valor = document.getElementById('valor').value.trim();
    const jogos = document.getElementById('jogos').value.trim().split('\n').join(' + ');

    if (!usuario || !valor || !jogos) {
        document.getElementById('resultado').innerText = "Preencha todos os campos para apostar com Pix.";
        return;
    }

    document.getElementById('resultado').innerText = `Aposta confirmada com PIX!\nUsuário: ${usuario}\nValor: R$${valor}\nJogos: ${jogos}`;
}
