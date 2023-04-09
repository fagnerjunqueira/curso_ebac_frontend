function validarNumeros(a, b){
    return b > a
}

const form = document.getElementById("form-number")

form.addEventListener('submit', function(e){
    e.preventDefault()

    const a = document.getElementById("a").value
    const b = document.getElementById("b").value

    const isValid = validarNumeros(a, b)

    const campoMsg = document.getElementById("resultado")

    if(isValid){
        campoMsg.innerHTML = "<b>Valido! B maior que A</b>"
        campoMsg.style.color = "green"
    }else{
        campoMsg.innerHTML = "<b>Invalido! B menor que A</b>"
        campoMsg.style.color = "red"
    }
})