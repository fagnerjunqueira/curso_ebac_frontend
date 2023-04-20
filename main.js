$(document).ready(function(){

    const formulario = $("#formulario")

    const cpf = $('#cpf')
    const cep = $('#cep')

    cpf.mask('000.000.000-50', {
        placeholder: "___.___.___-__"
    })
    cep.mask('00000-000', {
        placeholder: "_____-___"
    })

    formulario.submit(function(e){
        e.preventDefault()

        console.log('funcionou')
    })
})