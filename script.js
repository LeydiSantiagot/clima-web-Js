let api_key= 'b3b5080a4685a8940a292d1de9a211af'

let urlBase= 'https://api.openweathermap.org/data/2.5/history/weather'

document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    //tomamos el valor de entrada
    const ciudad = document.getElementById('ciudadEntrada').value
    //si hay una ciudad se hace el fetch
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&units=metric`)
    .then(data=> data.json())
    .then(data=> mostrarDatosClima(data))
}

function mostrarDatosClima(){
    const divDatosClima= document.getElementById('datosClima')
    //limpiar el marco de datos
    divDatosClima.innerHTML= ''
    const ciudadNombre= data.name
    const temperatura = data.main.temp
    const descripcion= data.weather[0].description
    const icono= data.weather[0].icon

    //crear elementos sobre el div
    const ciudadTitutlo= document.createElement('h2')
    ciudadTitutlo.textContent= ciudadNombre

    const ciudadIcono= documen.createElement('img')
    ciudadIcono= src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const ciudadTemp = document.createElement('h4')
    ciudadTemp.textContent= `La temperatura es ${temperatura}°C`

    const ciudadDesc= document.createElement('p')
    ciudadDesc.textContent= descripcion

    //añadir los elementos creados al div
    divDatosClima.appendChild(ciudadTitutlo)
    divDatosClima.appendChild(ciudadTemp)
    divDatosClima.appendChild(ciudadIcono)
    divDatosClima.appendChild(ciudadDesc)
}
