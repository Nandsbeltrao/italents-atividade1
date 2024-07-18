window.onload = function() {
    document.getElementById("calculo").addEventListener("click", function(event) {
        event.preventDefault(); /* Evita o comportamento padrão de submit do botão */

        /* Captura dos valores de peso e altura do formulário */
        let peso = parseFloat(document.getElementById("peso_inp").value);
        let altura = parseFloat(document.getElementById("altura_inp").value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, informe um peso e altura válidos.");
            return;
        }

        let resultado = calcularImc(peso, altura);
        document.getElementById("resultado").innerText = resultado;
    });

    function calcularImc(peso, altura) {
        if (altura > 3) {
            // Se a altura for fornecida em centímetros, converte para metros
            altura = altura / 100;
        }

        // Calcula o IMC
        let imc = peso / (altura * altura);

        // Determina a classificação do IMC
        let classificacao;
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 25) {
            classificacao = 'Peso normal';
        } else if (imc < 30) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        // Retorna o resultado do IMC e a classificação
        return `Resultado :) 
        Seu IMC é: ${imc.toFixed(2)} e sua Classificação: ${classificacao}`;
    }

    // Exemplo de testes da função de cálculo do IMC
    console.log(calcularImc(70, 1.75)); 
    console.log(calcularImc(50, 1.60)); 
    console.log(calcularImc(80, 1.70)); 
    console.log(calcularImc(95, 1.65)); 
    console.log(calcularImc(70, 175));  
    console.log(calcularImc(50, 160));  
    console.log(calcularImc(80, 170));  
    console.log(calcularImc(95, 165));  
};
