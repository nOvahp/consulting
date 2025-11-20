import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroBox from "./components/HeroBox";
import FeatureCard from "./components/FeatureCard";
import Features from "./components/Features";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav" hideBelow="lg">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <HeroBox />
        <Features />
      </GridItem>
    </Grid>
  );
}

export default App;
