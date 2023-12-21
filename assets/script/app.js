function botaoFechar(li){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode('\u00D7');    
    //txt.textContent = "/u00D7";

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = () => span.parentElement.style.display = 'none';
}

document.querySelectorAll('li').forEach(botaoFechar)

document.querySelector('ul').addEventListener('click', (e) => {
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked')
    }
});

function addTarefa(){
    let li = document.createElement('LI')
    let tarefa = document.form_main.task.value
    let caixatarefa = document.createTextNode(tarefa)

    
    li.appendChild(caixatarefa)//Texto foi criado e entra como lista
    document.querySelector('ul').appendChild(li)//Essa lista desordenada vai receber o elemento filho
    document.form_main.task.value = ""//Após limpa o input

    botaoFechar(li); //Chama novamente a função
}

const laele = document.querySelector('ul')

console.log(laele)