import { useState } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;//centrado de forma horizpntal
  width: 90%;
  //a partir de 992px se crean las 2 columnas con el @media
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
}
`
const Imagen = styled.img`
  max-width: 400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;//las img por defecto siempre tienen un display: inlane
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align:center;
  font-weight: 700;//fuente importada desde google fonts
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '*****';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='imagen criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario />
      </div>
    </Contenedor>
  )
}

export default App
