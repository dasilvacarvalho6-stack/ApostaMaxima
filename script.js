let apostasSelecionadas = [];
let totalOdds = 1;

fetch('jogos.json')
  .then(response => response.json())
  .then(jogos => {
    const dias = {};

    jogos.forEach(jogo => {
      if (!dias[jogo.dia]) dias[jogo.dia] = [];
      dias[jogo.dia].push(jogo);
    });

    const container = document.getElementById("jogos-container");

    for (let dia in dias) {
      const sec = document.createElement("section");
      const h2 = document.createElement("h2");
      h2.textContent = dia;
      sec.appendChild(h2);

      dias[dia].forEach(jogo => {
        const agora = new Date();
        const horarioJogo = new Date(`${jogo.data}T${jogo.hora}:00`);
        if (horarioJogo < agora) return;

        const div = document.createElement("div");
        div.className = "jogo";
        div.innerHTML = `
          <p>${jogo.hora} - ${jogo.time1} x ${jogo.time2}</p>
          <button onclick="selecionar('${jogo.time1}', ${jogo.odd1})">${jogo.time1} (${jogo.odd1})</button>
          <button onclick="selecionar('Empate', ${jogo.oddX})">Empate (${jogo.oddX})</button>
          <button onclick="selecionar('${jogo.time2}', ${jogo.odd2})">${jogo.time2} (${jogo.odd2})</button>
        `;
        sec.appendChild(div);
      });

      container.appendChild(sec);
    }
  });

function selecionar(time, odd) {
  if (apostasSelecionadas.length >= 20) {
    alert("Limite de 20 apostas alcançado.");
    return;
  }

  apostasSelecionadas.push({ time, odd });
  totalOdds *= odd;

  atualizarResumo();
}

function atualizarResumo() {
  const lista = document.getElementById("lista-apostas");
  lista.innerHTML = "";

  apostasSelecionadas.forEach(ap => {
    const li = document.createElement("li");
    li.textContent = `${ap.time} - Odd: ${ap.odd}`;
    lista.appendChild(li);
  });

  const valor = parseFloat(document.getElementById("valor-aposta").value || 0);
  document.getElementById("total-odds").textContent = totalOdds.toFixed(2);
  document.getElementById("retorno").textContent = (valor * totalOdds).toFixed(2);
}

function irParaPagamento() {
  const valor = parseFloat(document.getElementById("valor-aposta").value || 0);
  if (valor <= 0 || apostasSelecionadas.length === 0) {
    alert("Informe o valor da aposta e selecione pelo menos um jogo.");
    return;
  }

  window.location.href = `pagamento.html?valor=${valor}&odds=${totalOdds.toFixed(2)}`;
}


