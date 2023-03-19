import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Pokemon = () => {

    const endPoint = 'https://pokeapi.co/api/v2/pokemon'
    const navigate = useNavigate()

    const [resultPokemon, setResultPokemon] = useState([])
    const [selected, setSelected] = useState('')

    const irAPokemon = () => {
        navigate(`/pokemon/${selected}`)
    }

    useEffect(() => {
        fetch(endPoint).then(resp => resp.json())
            .then(data => {
                setResultPokemon(data.results.map(resultPokemon => resultPokemon.name))
                console.log(data.results)
            })
    }, [])

    return (
        <div>
            <h1>Seleciona un Pokemon</h1>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value='' > Seleciona tu Pokemon</option>
                {
                    resultPokemon.map(name => {
                        return <option key={name} value={name}>{name}</option>
                    })
                }
            </select>
            <button onClick={irAPokemon}>Ver Detalle</button>
            {/* {result} */}
        </div>
    )
}

export default Pokemon;