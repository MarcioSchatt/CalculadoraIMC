document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const erroMsg = document.getElementById('erroMensagem');
    erroMsg.textContent = '';

    if (isNaN(peso) || peso <= 0) {
        erroMsg.textContent = "Valores inválidos para peso.";
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        erroMsg.textContent = "Valores inválidos para altura.";
        return;
    }

    const imc = peso / (altura * altura);
    const imcValor = document.getElementById('imcValor');
    const classificacao = document.getElementById('classificacao');

    imcValor.textContent = `IMC: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        classificacao.textContent = 'Classificação : Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao.textContent = 'Classificação : Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao.textContent = 'Classificação : Sobrepeso'
    } else {
        classificacao.textContent = 'Classificação : Obesidade'
    }
});