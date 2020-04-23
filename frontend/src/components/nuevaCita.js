import React, { Fragment, useState } from 'react';
// withRouter usamos para no perder los props
import { Link, withRouter } from 'react-router-dom';

import clienteAxios from '../config/axios';

const NuevaCita = (props) => {

    // a la hora de leer datos de un formulario se recomienda
    // almacenarlos en el state, para validarlos o hacer otra operacion
    // generar state como objeto
    const [cita, guardarCita] = useState({
        nombre: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''
    });

    // leer datos del formulario
    const actualizarState = e => {
        guardarCita({
            // toma una copia actual de lo que haya en el state
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    // enviar una peticion a la API
    // esto se hace dentro del
    const crearNuevaCita = e => {
        e.preventDefault();

        // enviar la peticion por axios 
        clienteAxios.post('/pacientes', cita)
            .then(respuesta => {
                console.log(respuesta);

                props.guardarConsultar(true);

                // redireccionar
                props.history.push('/')
            })
    }
    

    return ( 
        <Fragment>
            <h1 className="my-5">Crear nueva cita</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-2 font-weigth-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                    <form 
                        onSubmit={crearNuevaCita}
                        className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Mascota</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Nombre Mascota" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="propietario">Nombre Propietario</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="propietario" 
                                name="propietario" 
                                placeholder="Nombre Propietario" 
                                onChange={actualizarState}
                                
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="fecha">Fecha Alta</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="fecha" 
                                name="fecha" 
                                onChange={actualizarState} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hora">Hora Alta</label>
                            <input 
                                type="time" 
                                className="form-control form-control-lg" 
                                id="hora" 
                                name="hora"  
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sintomas">Síntomas</label>
                            <textarea 
                                className="form-control" 
                                name="sintomas" 
                                rows="6"
                                onChange={actualizarState}
                            ></textarea>
                        </div>


                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                </form>                       
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}
 
export default withRouter(NuevaCita);