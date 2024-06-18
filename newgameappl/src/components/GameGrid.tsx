// All import we need

import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";


const GameGrid = () => {


  
    const {games,error} = useGames();
    // Other helper functions to add, delete, or update data 


  return (
    <>
    {/* Display our data (ul, li, grid, table - usually map it with unique key ) */}
    <SimpleGrid>
    {games.map((game) =>  (
        <GameCard key={game.id} game={game}>{game.name}</GameCard>
    ))}
    </SimpleGrid>
    {error && <Text color={'red'}>{error}</Text>}
    </>
  )
}

export default GameGrid

