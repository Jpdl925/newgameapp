// All import we need
import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { Text } from "@chakra-ui/react"

// Help us shaping our data in the form of our interfaces (type) props to pass data from parent components to child
interface Game {
    id: number
    name: string
}

interface FetchGameResponse {
    count: number
    results: Game []
}

const GameGrid = () => {


    // We need our useStates to help us render/update our UI with our games and others
    const [games, setGames] = useState<Game []>([])
    const [error, setError] = useState('')

    // Create a helper function to help us fetch our code 

    const fetchGames = () => {
        apiClient.get('/games')
        .then(response => setGames(response.data.results))
        .catch(error => {
            setError(error.message)
        })
        
    }

    // UseEffect to fetch our data
    useEffect(() => {
      
    fetchGames();
      
    }, [])
    

    // Other helper functions to add, delete, or update data 


  return (
    <>
    {/* Display our data (ul, li, grid, table - usually map it with unique key ) */}
    <ul>
    {games.map(game => 
        <li key={game.id}>{game.name}</li>
    )}
    </ul>
    {error && <Text color={'red'}>{error}</Text>}
    </>
  )
}

export default GameGrid