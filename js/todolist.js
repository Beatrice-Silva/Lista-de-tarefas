
const form = document.getElementById('form')

const tituloInput = document.getElementById('titulo')
const descricaoInput = document.getElementById('descricao')
const dataIInput = document.getElementById('dataI')
const dataTInput = document.getElementById('dataT')

const tarefas = document.getElementById('tarefas')

const aviso = document.getElementById('aviso-vazio')
const erro = document.getElementById('mensagem-erro')

let lista = []


form.addEventListener('submit', (e) => {

    e.preventDefault()
    const titulo = titulo.value.trim()

    const descricao = descricao.value.trim()

    if(titulo === "" || descricao === ""){
        
    
        erro.textContent = 'Título e descrição são obrigatórios!'
        erro.hidden = true
        return
    }else{ 
        erro.hidden = false
        tarefas.push({
            id: Date.now(),
            titulo,
            descricao,
            dataI: dataIInput.value,
            dataT: dataTInput.value
        })

    }

    form.reset()
    tituloInput.focus()
    render()
});

function atualizarLista(){
    tarefas.innerHTML = ""
    console.log(lista)

    lista.forEach((tarefa, index) => {


        const[ano, mes, dia] = tarefas.dataset.split("-")
        const dataFormatada = `${dia}/${mes}/${ano}` 
    
        const divTarefa = document.createElement("div")
        divTarefa.classList("tarefa")       

        if(tarefas.concluida){
            divTarefa.classList("concluida")       
        
        }

        const containerexro = document.createElement("div")
    

    })
    
}



lista.addEventListener('click', (e) => {

    if(e.target.classList.contains('excluir')){
        const id = Number(e.target.dataset.id)
        tarefas = tarefas.filter(t => t.id !== id)
        render();
    }
})

render()

function concluirTarefa = (index) =>({
    lista[index].concluida =true
        atualizarLista()
    
})

function concluirTarefa = (index) => ({
    lista.splice(index, 2)
        atualizarLista()
})




/*
function render(){
    lista.innerHTML = ''
    aviso.hidden = tarefas.length !== 0
    tarefas.forEach(t => {
        const li = document.createElement('li')
        li.innerHTML = `
            <div>
                <strong>
                ${t.titulo}</strong> - ${t.descricao}
                <br>

                <small>
                ${t.dataI ? 'Início: '+t.dataI : ''} 
                ${t.dataT ? '| Fim: '+t.dataT : ''}
                </small>

            </div>
            <button class="excluir" data-id="${t.id}">Excluir</button>`

        lista.appendChild(li);

    })

}

*/