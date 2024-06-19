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
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={'20px'}>
    {games.map((game) =>  (
        <GameCard  game={game} key={game.id} ></GameCard>
    ))}
    </SimpleGrid>
    {error && <Text color={'red'}>{error}</Text>}
    </>
  )
}

export default GameGrid

