import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import styles from "./colaboradores.module.css";
import Colaborador from "../../components/Colaborador/Colaborador"

const Colaboradores = () => {
  const [seleccion, setSeleccion] = useState("");

  const handle = () => {
    navigate("/agregarColabs")
  }

  const ListaColabs = ({eventos, evento}) => {
    return (
      <>
        {eventos[evento].map((array) => (
          <Colaborador className={styles.colabs} nombre={array[0]} carnet={array[1]} correo={array[2]} celular={array[3]}/>
        ))}
      </>
    )
}

  const eventos = ["Noche de películas", "Noche bailable", "Rally"]
  const colabsXEvento = {
    "Noche de películas": [
      ["Marco", "2020167547", "marco@estudiantec.cr", "87659073"],
      ["Gabriela", "2021176503", "gabriela@estudiantec.cr", "67603017"]
    ],
    "Noche bailable": [
      ["Fabian", "2021167476", "fabian@estudiantec.cr", "87659073"],
      ["Alberto", "2023685547", "alberto@estudiantec.cr", "67603017"]
    ],
    "Rally": [
      ["Maria", "2019167547", "maria@estudiantec.cr", "87659073"],
      ["Jimena", "2018167547", "jimena@estudiantec.cr", "67603017"]
    ]
  }
   
  return (
    <div>
      <span className={styles.span} style={{ color: "#FFFFFF", left: "20px", top: "10px" }}>EVEN</span>
      <span className={styles.span} style={{ left: "20px", top: "10px" }}>TEC</span>

      <h1 className={styles.h1}>
        Colaboradores
      </h1>

      <p className={styles.p}>
        Consultar y editar los colaboradores de un evento
      </p>

      <Form>
        <fieldset>
          <Form.Group className={styles.select}>
            <Form.Label htmlFor="Select">Evento</Form.Label>
            <Form.Select id="Select" as="select" value={seleccion} onChange={e => setSeleccion(e.target.value)}>
              {eventos.map((nombre) => (
                <option>{nombre}</option>
              ))}
            </Form.Select>
            <Button className={styles.button} onClick={<ListaColabs eventos={colabsXEvento} evento={"Rally"}/>} type="submit">Consultar</Button>
            <Button style={{ width: "200px", position: "relative", left: "850px" }} className={styles.button} onClick={handle} type="submit">Agregar Colaborador</Button>
          </Form.Group>
        </fieldset>
      </Form>
      <ListaColabs eventos={colabsXEvento} evento={"Rally"}/>
    </div>
  )
}

export default Colaboradores