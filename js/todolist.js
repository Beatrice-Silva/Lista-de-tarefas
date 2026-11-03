
const formulario = document.getElementById('formulario')
const novaTarefa = document.getElementById('novaTarefa')
const dataTarefa = document.getElementById('dataTarefa')
const descricaoTarefa = document.getElementById('descricao')
const tarefas = document.getElementById('tarefas')

const lista = []


formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = novaTarefa.value.trim()
    const data = dataTarefa.value.trim()
    const descricao = descricaoTarefa.value.trim()

    if(titulo === "" || data === ""){
        
        novaTarefa.classList.add(`${titulo === "" ? "is-invalid" : ""}`)
        dataTarefa.classList.add(`${data === "" ? "is-invalid" : ""}`)
    }else{ 

        lista.push({
            titulo: titulo,
            data: data,
            descricao: descricao,
            concluida: false,
        })

        novaTarefa.value = ""
        dataTarefa.value = ""
        descricaoTarefa.value = ""
        
        atualizarLista()
    }
 
})


function atualizarLista(){


    tarefas.innerHTML = ""
    console.log(lista)

    lista.forEach((tarefa, index) => {


        const[ano, mes, dia] = tarefa.data.split("-")
        const dataFormatada = `${dia}/${mes}/${ano}` 
    
        const divTarefa = document.createElement("div")
        divTarefa.classList.add("tarefa")       

        if(tarefas.concluida){
            divTarefa.classList.add("concluida")       
        
        }

        const containerTexto = document.createElement("div")
        containerTexto.classList.add("containerTexto")

        const titulo = document.createElement("h3")
        titulo.textContent = tarefa.titulo + " - " + dataFormatada

        const descricao = document.createElement("p")
        descricao.textContent = tarefa.descricao

        containerTexto.appendChild(titulo)
        containerTexto.appendChild(descricao)

        
        const acoes = document.createElement("div")
        acoes.classList.add("acoes")

    acoes.innerHTML = tarefa.concluida
    
    ? `<button class="btn excluir" onclick="excluirTareda(${index})">Excluir</button>`
    
    : `<button class="btn concluir" onclick="concluirTarefa(${index})">Concluir</button>`
      `<button class="btn excluir" onclick="excluirTareda(${index})">Excluir</button>`


    divTarefa.appendChild(containerTexto)
    divTarefa.appendChild(acoes)

    tarefas.appendChild(divTarefa)
     
    })
}


novaTarefa.addEventListener("input", () => {
        novaTarefa.classList.remove("is-invalid")
})


novaTarefa.addEventListener("input", () => {
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
