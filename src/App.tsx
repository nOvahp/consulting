import { Grid, GridItem } from "@chakra-ui/react";
import Activation from "./components/activation";
import Address from "./components/Address";
import FAQ from "./components/FAQ";
import Features from "./components/Features";

import HeroBox from "./components/HeroBox";
import LatestPost from "./components/LatestPost";
import NavBar from "./components/NavBar";
import OurGoal from "./components/ourGoal";
import Footer from "./components/Footer";


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
        <Activation />
        <Address />
        <OurGoal />
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
