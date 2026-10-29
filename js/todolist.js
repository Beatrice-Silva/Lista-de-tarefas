let tarefas = []

const form = document.getElementById('form')
const tituloInput = document.getElementById('titulo')
const descricaoInput = document.getElementById('descricao')
const dataIInput = document.getElementById('dataI')
const dataTInput = document.getElementById('dataT')
const lista = document.getElementById('lista')
const aviso = document.getElementById('aviso-vazio')
const erro = document.getElementById('mensagem-erro')

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


form.addEventListener('submit', (e) => {

    e.preventDefault()
    const titulo = tituloInput.value.trim()

    const descricao = descricaoInput.value.trim()

    if(!titulo || !descricao){

        erro.textContent = 'Título e descrição são obrigatórios!'
        erro.hidden = false
        return

    }

    erro.hidden = true
    tarefas.push({
        id: Date.now(),
        titulo,
        descricao,
        dataI: dataIInput.value,
        dataT: dataTInput.value
    })

    form.reset()
    tituloInput.focus()
    render()
});

lista.addEventListener('click', (e) => {

    if(e.target.classList.contains('excluir')){
        const id = Number(e.target.dataset.id)
        tarefas = tarefas.filter(t => t.id !== id)
        render();
    }
})

render()