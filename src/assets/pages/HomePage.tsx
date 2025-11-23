import Activation from '@/components/activation'
import Address from '@/components/Address'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import HeroBox from '@/components/HeroBox'
import LatestPost from '@/components/LatestPost'
import OurGoal from '@/components/ourGoal'
import { Grid, GridItem } from '@chakra-ui/react'


const HomePage = () => {
  return (
    <Grid templateAreas={` "main"`}>
      <GridItem area="nav" hideBelow="lg">
        
      </GridItem>

      <GridItem area="main">
        <HeroBox />
        <Features />
        <LatestPost />
        <FAQ />
        <Activation />
        <Address />
        <OurGoal />
        
      </GridItem>
    </Grid>
  )
}

export default HomePage