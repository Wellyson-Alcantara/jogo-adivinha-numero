let numeroAleatorio = Math.floor(Math.random()* 100) + 1

let palpites = document.querySelector(".palpites")
let ultimoResultado = document.querySelector(".ultimoResultado")
let baixoOuAlto = document.querySelector(".baixoOuAlto")

let envioPalpite = document.querySelector(".envioPalpites")
let campoPalpite = document.querySelector(".campoPalpites")

let contagemPalpites = 1
let botaoReinicio

function conferirPalpites() {
    let palpiteUsuario = Number(campoPlapite.value)
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: "
    }
    palpites.textContent += palpiteUsuario + " "

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!"
        ultimoResultado.style.backgroundColor = "green"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "!!!FIM DE JOGO!!!"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = "Errado!"
        ultimoResultado.style.backgroundColor = "red"
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito baixo!"
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito alto!"
        }
    }

    contagemPalpites++
    campoPalpite.value = ""
    campoPalpite.focus()
}