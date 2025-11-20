import { Grid, GridItem } from "@chakra-ui/react";
import Features from "./components/Features";
import HeroBox from "./components/HeroBox";
import NavBar from "./components/NavBar";
import  LatestPost from "./components/LatestPost";
import FAQ from "./components/FAQ";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav" hideBelow="lg">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <HeroBox />
        <Features />
        <LatestPost />
        <FAQ />
      </GridItem>
    </Grid>
  );
}

export default App;
