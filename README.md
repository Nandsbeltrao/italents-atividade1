# Calculadora de IMC (Índice de Massa Corporal)

Este projeto consiste em uma implementação simples em JavaScript para calcular o Índice de Massa Corporal (IMC) e classificá-lo de acordo com os critérios padrão.

## Funcionalidades

- **script.js**: Contém toda a lógica de cálculo do IMC.
- **Função para calcular IMC**: Recebe peso (em quilogramas) e altura (em metros) como parâmetros, calcula o IMC usando a fórmula IMC = peso / (altura * altura), e determina a classificação do IMC de acordo com os seguintes critérios:
  - Abaixo do peso: IMC < 18.5
  - Peso normal: 18.5 ≤ IMC < 24.9
  - Sobrepeso: 25 ≤ IMC < 29.9
  - Obesidade: IMC ≥ 30
- **Exibição do resultado**: Retorna ou exibe o resultado do IMC e a classificação correspondente.

## Como usar

Para usar a função de cálculo de Imc:

1. Inclua o arquivo `script.js` no seu projeto.
2. Chame a função `calcularImc(peso, altura)` onde `peso` é o peso em quilogramas e `altura` é a altura em metros.
3. Exiba ou utilize o resultado retornado pela função para mostrar o IMC calculado e sua classificação.


