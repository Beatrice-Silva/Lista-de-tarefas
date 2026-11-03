
const form = document.getElementById('form')

const tituloInput = document.getElementById('titulo')
const descricaoInput = document.getElementById('descricao')
const dataIInput = document.getElementById('dataI')
const dataTInput = document.getElementById('dataT')

const tarefas = document.getElementById('tarefas')

const aviso = document.getElementById('aviso-vazio')
const erro = document.getElementById('mensagem-erro')

letlista = []


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = novaTarefa.value.trim()
    //const data = dataTarefa.value.trim()

    const descricao = descricao.value.trim()

    if(titulo === "" || descricao === ""){
        
    
        erro.textContent = 'Título e descrição são obrigatórios!'
        erro.hidden = true
        return
    }else{ 
        
        erro.hidden = false

        tarefas.push({

            titulo: titulo,
            descricao: descricao,
            data: data,
            dataI: dataIInput,
            dataT: dataTInput,
            concluida: false,
        })

        form.reset()
        tituloInput.focus()
        render()
    }

   atualizarLista()
})




function atualizarLista(){


    tarefas.innerHTML = ""
    console.log(lista)

    lista.forEach((tarefa, index) => {


        const[ano, mes, dia] = tarefas.dataset.split("-")
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
