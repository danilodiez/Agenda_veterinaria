// si consuimos una API, react nos da useEffect y useState
import React, { useEffect, useState } from 'react';
// importamos el routing
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Route nos permite ir de una pagina a otra

// importamos el cliente de axios 
import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/pacientes';
import NuevaCita from './components/nuevaCita';
import Cita from './components/cita';


function App() {

  // state de la aplicacion
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);


  // donde vamos a consumir la API externa
  useEffect( () => {
      if(consultar){
        const consultarAPI = () => {
          clienteAxios.get('/pacientes')
            .then(respuesta => {
              // colocar en el stateel resultado
              guardarCitas(respuesta.data);

              // deshabilitar la consulta 
              guardarConsultar(false);
            })
            .catch(error => {
              console.log(error)
            })
        }
        consultarAPI();
      }
  }, [consultar]) 
  // ponemos consultar como una "dependencia" 
  // entonces cada vez que cambie consultar, se ejecuta de nuevo 

  return (
    <Router>
        <Switch>
            <Route
              exact path = "/"
              component={() => <Pacientes citas={citas}/>}
            />
            <Route
              exact path = "/nueva"
              component={() => <NuevaCita guardarConsultar={guardarConsultar}/> }
            />
            <Route
              exact path = "/cita/:id"
              render={(props) => {
                // console.log(props.match.params.id);
                const cita = citas.filter(cita => cita._id === props.match.params.id);
                
                return(
                  <Cita 
                  cita={cita[0]}
                  guardarConsultar={guardarConsultar}
                  />
                )
              }}
            />
        </Switch>
    </Router>
  );
}

export default App;