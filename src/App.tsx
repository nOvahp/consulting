import { Button, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "main main"`,
    }} >
      <GridItem area="nav" bg="coral">nav </GridItem>
      
      <GridItem area="main" bg="green">main</GridItem>

    </Grid>
  );
}

export default App;
