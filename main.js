$(document).ready(function(){

    const formulario = $("#formulario");
    
    formulario.submit(function(e){
        e.preventDefault()

        const campo = $('#tarefa')
        adicinarConteudo(campo.val())
        campo.val("")
    })

    $("#lista").on('click', 'li', function () {
        $(this).attr("style", "text-decoration: line-through;")
    })
})

function adicinarConteudo(campo){
    let lista = $('#lista')
    let item = "<li class='item'>"+campo+"</li>"
    lista.append(item)
}