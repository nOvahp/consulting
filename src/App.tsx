import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav"  hideBelow="lg">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="green">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
