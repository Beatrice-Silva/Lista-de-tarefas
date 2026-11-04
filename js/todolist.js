const formulario = document.getElementById('formulario')
const novaTarefa = document.getElementById('novaTarefa')
const dataTarefa = document.getElementById('dataTarefa')
const descricaoTarefa = document.getElementById('descricao')
const tarefas = document.getElementById('tarefas')
const lista = []

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const titulo = novaTarefa.value.trim()
    const data = dataTarefa.value
    const descricao = descricaoTarefa.value.trim()

    if(titulo === "" || data === ""){
        if(titulo === "") novaTarefa.classList.add("is-invalid")
        if(data === "") dataTarefa.classList.add("is-invalid")
        return
    }

    lista.push({ titulo, data, descricao, concluida: false })

    novaTarefa.value = ""
    dataTarefa.value = ""
    descricaoTarefa.value = ""
    atualizarLista()
})

function atualizarLista(){
    tarefas.innerHTML = ""
    console.log(lista)

    if(lista.length === 0){
        tarefas.innerHTML = "<p>Nenhuma tarefa adicionada!</p>"
        return
    }

    lista.forEach((tarefa, index) => {
        let dataFormatada = "Sem data"
        if(tarefa.data){
            const[ano, mes, dia] = tarefa.data.split("-")
            dataFormatada = `${dia}/${mes}/${ano}` 
        }
    
        const divTarefa = document.createElement("div")
        divTarefa.classList.add("tarefa")       
        if(tarefa.concluida){
            divTarefa.classList.add("concluida")       
        }

        const containerTexto = document.createElement("div")
        containerTexto.classList.add("containerTexto")

        const tituloEl = document.createElement("h3")
        tituloEl.textContent = tarefa.titulo + " - " + dataFormatada
        const descricaoEl = document.createElement("p")
        descricaoEl.textContent = tarefa.descricao
        containerTexto.appendChild(tituloEl)
        containerTexto.appendChild(descricaoEl)
        
        const acoes = document.createElement("div")
        acoes.classList.add("acoes")

        acoes.innerHTML = tarefa.concluida
        ? `<button class="btn excluir" onclick="excluirTarefa(${index})"><i class="fa-solid fa-trash-can"></i></button>`
        : `<button class="btn concluir" onclick="concluirTarefa(${index})"><i class="fa-solid fa-circle-check"></i></button>
           <button class="btn excluir" onclick="excluirTarefa(${index})"><i class="fa-solid fa-trash-can"></i></button>`

        divTarefa.appendChild(containerTexto)
        divTarefa.appendChild(acoes)
        tarefas.appendChild(divTarefa)
    })
}

novaTarefa.addEventListener("input", () => {
    novaTarefa.classList.remove("is-invalid")
})
dataTarefa.addEventListener("input", () => {
    dataTarefa.classList.remove("is-invalid")
})

const concluirTarefa = (index) => {
    lista[index].concluida = true
    atualizarLista()
}
const excluirTarefa = (index) => {
    lista.splice(index, 1)
    atualizarLista()
}