function sortear() {
    //lógica do botão sortear do index.html
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate){
        alert('Impossível sortear, o número incial não pode ser maior ou igual ao final!');
        reiniciar ();
        return;
    }

    let sorteados = [];//declaração da lista (array).
    let valor;

    //loop para o user limitar a quantidade de números sorteados
    for (let i = 0; i < quantidade; i++) {
          valor = numeroAleatorio(de,ate);
          //loop para garantir que não haja repetição do número sorteado
             while (sorteados.includes(valor)) {
                 valor = numeroAleatorio(de,ate);
       }
        sorteados.push(valor);
    }

    //exibindo na tela os números sorteados.
    let resultado = document.getElementById('resultado');
    //propriedade que altera algo no html, neste caso exibir os números sorteados
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  mudarStatusBotao ();  
}

function mudarStatusBotao() {
    //declaro a variável para mudar a classlist do botão, para alternar entre habilitado e desabilitado
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');    
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');    
    }
    
}

//função para gerar o número aleatório
function numeroAleatorio(min,max) {
//o Math.floor arredonda o valor decimal do Math.random.
//era possível utilizar o parseInt para arredondar.
return Math.floor(Math.random() * (max - min + 1)) + min;    
}

function reiniciar() {
    //limpar os componentes da tela e mudar o status do botao
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    mudarStatusBotao(); 
}

