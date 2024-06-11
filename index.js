// Array para armazenar o historico de calculos
let history =[];

// Função para adicionar valor ao display
function appendToDisplay(value){
    const result = document.getElementById('result');
    result.value += value; // adiciona o valor ao campo de exibição
}


//função para limpar o display
function clearDisplay(){
    document.getElementById('result').value = ''; //Limpa o campo de exibição

}


//Função para deletar o ultimo caractere do display
function deleteLast(){
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1); //REMOVE O ULTIMO CARACTERE DO CAMPO DE EXIBIÇÃO
}

//FUNÇÃO PARA CALCULAR O RESULTADO DA EXPRESSAO
function calcularreResult(){
    const result = document.getElementById('result');
    const expression = result.value;

    // VERIFICAR SE A EXPRESSÃO É VALIDA
    if (isValidExpression(expression)) {
        const evaluatedResult = evaluateExpression
        (expression);
        addToHistory(expression, evaluatedResult);
        result.value = evaluatedResult;
    } else{
        alert('Expressão inválida');
    }
}

//Função para verificar se a expressão évalida
function isValidExpression(expression) {
    //REGEX PARA VERIFICAR SE A EXPRESSÃO É VALIDA
const regex = /^[0-9+\-*/^.()]*$/;
return regex.test(expression); 
}

//Função para validar a expressão
function evaluateExpression(expression){
    //substituir ^por **
    let formattedExpression = expression.replace(/\^/g,'**');
    //AVALIAR A EXPRESSÃO
    return Function(`"use strict"; return (${formattedExpression})`)();
}

//FUNÇÃO PARA ADICIONAR A EXPRESSÃO E O RESULTADO AO HISTÓRICO
function addToHistory(expression, result){
    history.pushState({expression,result}); //ADICIONA A EXPRESSÃO E O RESULTADO AO ARRAY DE HISTÓRICO
    updateHistory(); //ATUALIZA A EXIBIÇÃO DO HISTÓRICO
}

//FUNÇÃO PARA ATUALIZAR A EXIBIÇÃO DO HISTÓRICO
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML=''; //LIMOPA A LISTA DE HISTÓRICO
    history.forEach(entry =>{
      let li = document.createElement('li');
      li.textContent = `${entry.expression} = ${entry.result}`;
      historyList.appendChild(li); // adiciona o item a lista
        
    })
}
// Funcção para alternar entre modos basicos e cientifico
function toogleScientifcMode() {
  const sciButtons = document.getElementById
  ('scientific-buttons');
  if (sciButtons.style.display === 'none') {
    sciButtons.style.display = 'grid';
  } else {
    sciButtons.style.display = 'none';
  }
  }


