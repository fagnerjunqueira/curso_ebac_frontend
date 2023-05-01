$(document).ready(function(){

    const formulario = $("#formulario")

    const cpf = $('#cpf')
    const cep = $('#cep')
    const telefone = $('#telefone')

    cpf.mask('000.000.000-50', {
        placeholder: "___.___.___-__"
    })
    cep.mask('00000-000', {
        placeholder: "_____-___"
    })
    telefone.mask('(00) 00000-0000', {
        placeholder: "(__) _____-____"
    })

    formulario.submit(function(e){
        e.preventDefault()

        console.log('funcionou')
    })
})