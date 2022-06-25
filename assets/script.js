let input = document.querySelector('#input_texto_tarefa');
let btnadd = document.querySelector('#btnInput');
let main = document.querySelector('.arealista');
let btndel = document.querySelector('#btnDelete');
let index = 0;

function addTarefa(){
    // pega o texto do input
    let valueInput = input.value;

    // verifica se o valor do campo input não é nulo, vazio ou undefined
    if ((valueInput !== "") && (valueInput !== null) && (valueInput !== undefined)){

        // incluindo o elemento HTML em uma variável
        let novaTarefa = `<div id="${index}" class="itemTarefa">
        <div onclick="taskcompleted(${index})" class="icone">
            <i id="icon_${index}" class="mdi mdi-checkbox-blank-circle-outline"></i>
        </div>
        <div onclick="taskcompleted(${index})" class="texto_item_tarefa">
            <p id="textTarefa">${valueInput}</p>
        </div>
        <div class="buttonDelete">
            <button onclick="delTarefa(${index})" id="btnDelete"><i class="mdi mdi-trash-can-outline"></i>Deletar</button>
        </div>
        </div>`;
        
        // incluindo a variavel no elemento "PAI"
        // Lembrando que ele precisa pegar o conteúdo antigo e acrescentar o novo
        main.innerHTML += novaTarefa; 
        
        // Limpando o input
        input.value = '';

        // Focando no campo inpput novamente
        input.focus();
        
        //  o indice
        ++index;
    }
};

function delTarefa(id){
    var tarefa = document.getElementById(id);
   
    // remove a tarefa com o id informado
    tarefa.remove();
};

function taskcompleted(id){
    var item = document.getElementById(id);

    // pega a classe do elemento "PAI"
    var classe = item.getAttribute('class');

    if(classe == "itemTarefa"){

        // adiciona a classe que inclui o "risco na tarefa"
        item.classList.add('itemTarefaCompleta');

        // Realiza a alteração do icone em branco para completo
        var icon = document.getElementById('icon_'+id);
        // remove o icone em branco
        icon.classList.remove('mdi-checkbox-blank-circle-outline');
        // inclui o icone marked
        icon.classList.add('mdi-checkbox-marked-circle');

        // coloca o item ao final da lista
        item.parentNode.appendChild(item);

    }else{

         // exclui a classe que remove o "risco na tarefa"
         item.classList.remove('itemTarefaCompleta');
         // retorna a clase anterior
         item.classList.add('itemTarefa');

         // Realiza a alteração do icone
         var icon = document.getElementById('icon_'+id);
         // remove o icone anterior
         icon.classList.remove('mdi-checkbox-marked-circle');
         // inclui o icone em branco
         icon.classList.add('mdi-checkbox-blank-circle-outline');
    }
};

// Identifica a tecla enter no campo para incluir a tarefa
input.addEventListener("keyup", function(event){
    // code da telca enter -> 13
    if(event.keyCode ===13){
        // remove qualquer evento que a tecla enter poderia fazer no campo de texto
        event.preventDefault();
        // evento de click da tecla
        btnadd.click();
    }
});