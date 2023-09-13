const ROOT_URL = 'http://localhost:5000/api';

export async function crearEvento(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/crearEvento`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEventos(carne) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({carne}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/seleccionarEventos`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEventosInscritos(carne) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({carne}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/seleccionarEventosInscritos`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEventosPropios(asociacion) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(asociacion),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/crearEvento`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function crearActividad(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/crearActividad`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}