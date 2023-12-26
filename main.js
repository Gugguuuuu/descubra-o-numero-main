let numero = Math.floor(Math.random() * 100) + 1;;
let quantidadesDeErros = 0; // Declarando quantidadesDeErros como variável global

function reiniciarIniciar() {
    quantidadesDeErros = 0;
    console.log(numero);
}

function verificarNumero() {
    let resposta = parseInt(document.querySelector(".numberAnswer").value);
    let resultado = document.querySelector(".number");
    if (resposta < 0 || resposta > 100 || isNaN(resposta)) {
        resultado.innerHTML = "Por favor, insira um número válido de 0 a 100.";
        return;
    }

    if (resposta < numero) {
        quantidadesDeErros++;
        resultado.innerHTML = "O numero a ser encontrado é maior";
        return;
    }

    if (resposta > numero) {
        quantidadesDeErros++;
        resultado.innerHTML = "O número a ser encontrado é menor";
        return;
    }

    if (resposta === numero) {
        resultado.innerHTML = ("Você acertou! com " + quantidadesDeErros + " " + "erros.");
        reiniciarIniciar();
    }
}
