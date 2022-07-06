import React from 'react'
import catalogo from '../experiencias.json'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Catalogo() {
  let listaCatalogo = catalogo

  return listaCatalogo.map((exp, i) => (
    <div className="catalogo">
      <Link to={`/detalle/${exp.id}`}>
        <img width={'400px'} heigh={'600px'} className="imagenDestacados" src={exp.img} />
      </Link>
      <div className="etiquetasDetalle">
        <Button variant="secondary">{exp.eti1}</Button>
        <Button variant="secondary">{exp.eti2}</Button>
        <Button variant="secondary">{exp.eti3}</Button>
      </div>
      <div className='miniDescripcion'>
        <div>
          <p>{exp.eti1}</p>
          <p>{exp.precio}</p>
        </div>
        <Link to="/reserva" className='reserva'>Reserva ahora</Link>
      </div>
    </div>
  ))
}
export default Catalogo;