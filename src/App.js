import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import Normalize from 'react-normalize';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [cargando, guardarCargando] = useState(false);

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      modelo: '',
      plan: ''
    }
  });

  // Extraer datos
  const {cotizacion, datos} = resumen;

  return (
    <Fragment>
      <Normalize/>
      <Contenedor>
        <Header
          titulo = 'Cotizador de seguros'
        />
        <ContenedorFormulario>
          <Formulario
            guardarResumen = {guardarResumen}
            guardarCargando = {guardarCargando}
          />
          {cargando ? <Spinner/> : null}
          <Resumen
            datos = {datos}
          />
          {!cargando 
            ?
              <Resultado
                cotizacion = {cotizacion}
              />
            : null
          }
        </ContenedorFormulario>

      </Contenedor>
    </Fragment>
    
  );
}

export default App;
