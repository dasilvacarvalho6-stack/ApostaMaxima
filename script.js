document.getElementById('apostaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const valor = document.getElementById('valor').value;
    const jogos = document.getElementById('jogos').value;

    alert(`Aposta registrada!\nUsuário: ${usuario}\nValor: R$${valor}\nJogos:\n${jogos}`);
});

function gerarCodigo() {
    const codigo = Math.floor(100000 + Math.random() * 900000);
    alert(`Código gerado: ${codigo}\nEntregue esse código ao entregador.`);
}

}

