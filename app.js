function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let valor;

    for (let i = 0; i < quantidade; i++) {
        valor = numeroAleatorio(de,ate);
        sorteados.push(valor);    
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    

}

function numeroAleatorio(min,max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

