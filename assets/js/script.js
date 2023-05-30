const crearFunciones = () => {
    let boton = document.getElementsByClassName('btn')[0]
    boton.addEventListener('click',funcionalidad)
}

const calcular = () =>{
    let pago = document.getElementById('pago').value
    let interes = document.getElementById('interes').value
    let nCuota = document.getElementById('nCuota').value

    pago = parseInt(pago)
    interes = parseInt(interes)
    nCuota = parseInt(nCuota)

    let valorCuota = pago * (1 + interes/100 ) / nCuota

    return valorCuota
}

const formatear = (x) => {
    let txt = String(x)
    let newTxt = ''
    let array =[]
    let contador = 0

    for(i of txt.split('').reverse()) {
        array.push(i)
        contador += 1
        if (contador%3 == 0) {
            array.push('.')
        }
    }

    newTxt = '$' + array.reverse().join('')
    return newTxt
    
}

const funcionalidad = () => {
    let texto = document.getElementsByClassName('resultado')[0]
    let pago = document.getElementById('pago').value
    let interes = document.getElementById('interes').value
    let nCuota = document.getElementById('nCuota').value
    let cuota = formatear(calcular())

    texto.style.display = 'block'

    if (pago == '' || interes == '' || nCuota == '') { 
        texto.innerHTML = `¡Ingrese todos los valores para calcular!`
    } else {
        texto.innerHTML = `¡No te preocupes! Puedes pagarlo en ${nCuota} cuotas de ${cuota}`
    }

}