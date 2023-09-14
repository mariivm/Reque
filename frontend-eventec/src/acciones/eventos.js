const ROOT_URL = 'http://localhost:5000/api';

export async function crearEvento(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/insert/evento`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEventos(carnet) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({carnet}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/select/evento`, requestOptions)
        let data = (await res.json())
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
        let res = await fetch(`${ROOT_URL}/select/eventoinscrito`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEventosPropios(asociacionid) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(asociacionid),
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

export async function crearPropuesta(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/crearPropuesta`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchPropuestas(asociacionid) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({asociacionid}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/select/propuestas`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEventosPasados(asociacion) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({asociacion}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/select/eventopasado`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}