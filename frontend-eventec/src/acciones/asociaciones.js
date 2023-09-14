const ROOT_URL = 'http://localhost:5000/api';

export async function fetchAsociaciones(){
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      };
    

    try {
        let res = await fetch(`${ROOT_URL}/select/asocias`, requestOptions)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e)
        return;
    }
}