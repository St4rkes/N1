
const tabelaHabilidades = document.getElementById('tabela-habilidades');
const botaoAdicionarHabilidade = document.getElementById('adicionar-habilidade');

botaoAdicionarHabilidade.addEventListener('click', () => {
    const novaLinha = tabelaHabilidades.insertRow(-1);
    const novaHabilidade = novaLinha.insertCell(0);
    const novoNivel = novaLinha.insertCell(1);

    const novaHabilidadeInput = document.createElement('input');
    novaHabilidadeInput.type = 'text';
    novaHabilidade.appendChild(novaHabilidadeInput);

    const novoNivelSelect = document.createElement('select');
    const opcoesNivel = ['Iniciante', 'Intermediário', 'Avançado'];
    opcoesNivel.forEach((nivel) => {
        const opcao = document.createElement('option');
        opcao.text = nivel;
        novoNivelSelect.add(opcao);
    });
    novoNivel.appendChild(novoNivelSelect);
});

