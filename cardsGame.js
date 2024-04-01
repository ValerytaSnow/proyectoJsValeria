let cartita = document.querySelectorAll('.card')

let volteos=[]
let ronda=1
let cartasvolteadas =0


document.getElementById('idronda').textContent = "Ronda: " + ronda

cartita.forEach(cartitas => {
    cartitas.addEventListener('click', voltear)
})

function voltear(event) {
        let cartitas = event.currentTarget;

    if (cartitas.classList.contains('volteada')) {
        return
    }

    cartitas.classList.add('volteada')
    volteos.push(cartitas)

    let totalCartas = volteos.length

    cartasvolteadas++

    if (volteos.length === 2) {
        let card1 = volteos[0].querySelector('.card__face--back img').getAttribute('src')
        let card2 = volteos[1].querySelector('.card__face--back img').getAttribute('src')

        if (card1 === card2) {
            alert('PAR')
        } else {
            setTimeout(() => {
                volteos.forEach(lascards => lascards.classList.remove('volteada'))
                volteos = []
            }, 1000);
        }
        ronda++
        document.getElementById('idronda').textContent = "Ronda: " + ronda    
    }

}

if (cartasvolteadas === totalCartas) {
    alert('¡Juego terminado!');
}