function exibirResultado(idElemento, conteudoHTML) {
    const div = document.getElementById(idElemento);
    div.style.display = 'block';
    div.innerHTML = conteudoHTML;
}

function calcularAtv1() {
    let n1 = parseFloat(document.getElementById('n1_atv1').value);
    let n2 = parseFloat(document.getElementById('n2_atv1').value);
    if (isNaN(n1) || isNaN(n2)) { alert("Insira os dois números."); return; }
    let html = `<p><strong>Média:</strong> ${(n1 + n2) / 2}</p>
                <p><strong>Soma:</strong> ${n1 + n2}</p>
                <p><strong>Produto:</strong> ${n1 * n2}</p>
                <p><strong>Maior número:</strong> ${Math.max(n1, n2)}</p>
                <p><strong>Menor número:</strong> ${Math.min(n1, n2)}</p>`;
    exibirResultado('res_atv1', html);
}

function calcularAtv2() {
    let n1 = parseFloat(document.getElementById('n1_atv2').value);
    let n2 = parseFloat(document.getElementById('n2_atv2').value);
    let n3 = parseFloat(document.getElementById('n3_atv2').value);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) { alert("Insira as três notas."); return; }
    let media = (n1 + n2 + n3) / 3;
    let situacao = media < 7 ? "Reprovado" : "Aprovado";
    exibirResultado('res_atv2', `<p><strong>Média:</strong> ${media.toFixed(2)}</p><p><strong>Situação:</strong> ${situacao}</p>`);
}

function verificarVotoAtv3() {
    let idade = parseInt(document.getElementById('idade_atv3').value);
    if (isNaN(idade)) { alert("Insira a idade."); return; }
    let mensagem = idade < 16 ? "Não pode votar." : ((idade >= 16 && idade < 18) || idade > 65) ? "Voto opcional." : "Voto obrigatório.";
    exibirResultado('res_atv3', `<p><strong>Situação eleitoral:</strong> ${mensagem}</p>`);
}

function calcularMacasAtv4() {
    let qtd = parseInt(document.getElementById('qtd_atv4').value);
    if (isNaN(qtd) || qtd < 0) { alert("Insira uma quantidade válida."); return; }
    let preco = qtd < 12 ? 1.30 : 1.00;
    exibirResultado('res_atv4', `<p><strong>Valor total:</strong> R$ ${(qtd * preco).toFixed(2).replace('.', ',')}</p>`);
}

function verificarAposentadoriaAtv5() {
    let mat = document.getElementById('mat_atv5').value;
    let anoNasc = parseInt(document.getElementById('ano_atv5').value);
    let tempo = parseInt(document.getElementById('tempo_atv5').value);
    if (!mat || isNaN(anoNasc) || isNaN(tempo)) { alert("Preencha tudo."); return; }
    let idade = new Date().getFullYear() - anoNasc;
    let situacao = (idade >= 65 || tempo >= 30) ? "Requerer aposentadoria" : "Não requerer aposentadoria";
    exibirResultado('res_atv5', `<p><strong>Matrícula:</strong> ${mat}</p><p><strong>Idade:</strong> ${idade}</p><p><strong>Tempo:</strong> ${tempo}</p><p><strong>Status:</strong> ${situacao}</p>`);
}

function validarNota(elemento) {
    if (elemento.value !== "") {
        let valor = parseFloat(elemento.value);
        if (valor < 0 || valor > 10) {
            alert("Nota deve ser entre 0 e 10.");
            elemento.value = ""; elemento.focus();
        }
    }
}

function calcularAtv6() {
    let n1 = parseFloat(document.getElementById('n1_atv6').value);
    let n2 = parseFloat(document.getElementById('n2_atv6').value);
    let n3 = parseFloat(document.getElementById('n3_atv6').value);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) { alert("Preencha as 3 notas."); return; }
    let media = (n1 + n2 + n3) / 3;
    let situacao = media >= 7 ? "Aprovado" : media >= 5 ? "Em recuperação" : "Reprovado";
    exibirResultado('res_atv6', `<p><strong>Média:</strong> ${media.toFixed(2)}</p><p><strong>Situação:</strong> ${situacao}</p>`);
}