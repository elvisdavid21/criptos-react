import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import {monedas} from './data/monedas'

const InputSubmit = styled.input`
    width: 100%;
    padding: 10px;
    background-color: #9497ff;
    color: #FFF;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false)

    //Parte del hooke creado
    const [moneda, SeleccionMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [cripto, SeleccionCripto] = useSelectMonedas('Elige la Criptomoneda', criptos)

    //Consulta a la API
    useEffect( () => {
      const consultarAPI = async() => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

        const respuesta = await fetch(url);
        const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map( cripto => {
          
          return {id: cripto.CoinInfo.Name, nombre: cripto.CoinInfo.FullName}
        })
        setCriptos(arrayCriptos)

      }
      consultarAPI();
    }, [])

    const handleSubmit = e => {
      e.preventDefault();
      if([moneda, cripto].includes('')) {
        setError(true)
        return
      }
      setError(false)
      setMonedas({
        moneda,
        cripto
      })
    } 

  return (
    <>
      {error && <Error>Todos Los Campos son Obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >
          <SeleccionMonedas />
          <SeleccionCripto/>
          <InputSubmit type="submit" value='Cotizar' />
      </form>
    </>
  )
}

export default Formulario