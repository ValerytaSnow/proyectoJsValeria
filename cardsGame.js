let cartas = document.querySelectorAll('.card')


let volteadas = []
let cartasVolteadas = 0
let totalPares = cartas.length / 2
let puntos = 0
let temporizador

document.getElementById('idronda').textContent = "Ronda: " + puntos

cartas.forEach(carta => {
    carta.addEventListener('click', voltear)
})



function voltear(event) {
    let carta = event.currentTarget

    if (carta.classList.contains('volteada')) {
        return
    }

    carta.classList.add('volteada') 
    volteadas.push(carta)

    if (volteadas.length === 2) {
        let card1 = volteadas[0].getAttribute('data-type')
        let card2 = volteadas[1].getAttribute('data-type')

        if (card1 === card2) {
            puntos++
            document.getElementById('idronda').textContent = "Ronda: " + puntos
            volteadas = []
            cartasVolteadas += 2
        } else {
            setTimeout(() => {
                volteadas.forEach(carta => {
                    carta.classList.remove('volteada')
                })
                volteadas = []
            }, 1000)
        }
        aumentarRonda()
    }

    if (cartasVolteadas === totalPares * 2) {
        terminarJuego(true)
    }
}




function aumentarRonda() {
    puntos++
    document.getElementById('idronda').textContent = "Ronda: " + puntos
}




function terminarJuego(ganador) {
    clearInterval(temporizador)
    if (ganador) {
        alert('¡GANADOR! Puntos: ' + puntos , )
    } else {
        alert('¡PERDISTE! Puntos: ' + puntos)
    }
}




temporizador = setTimeout(() => {
    terminarJuego(false)
}, 20000)