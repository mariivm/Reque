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

export async function fetchEventosInscritos(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

export async function fetchEventosPropios(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/select/eventos/propios`, requestOptions)
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
        let res = await fetch(`${ROOT_URL}/insert/actividad`, requestOptions)
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
        let res = await fetch(`${ROOT_URL}/insert/propuestas`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchPropuestas(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

export async function crearInscripcion(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    try {
        let res = await fetch(`${ROOT_URL}/insert/inscripcion`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchEstadisticas({eventoid}) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({eventoid}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/select/eventos/estadisticas`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchFeedbacks({eventoid}) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({eventoid}),
      };
    try {
        let res = await fetch(`${ROOT_URL}/select/encuesta`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function fetchAllEventosPropios(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/select/eventos/all`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}

export async function crearFeedback(payload) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/insert/encuesta`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}