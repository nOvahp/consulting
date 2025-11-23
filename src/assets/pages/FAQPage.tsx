import FAQHero from "@/components/FAQPage/FAQHero";
import FAQPage from "@/components/FAQPage/FAQPage";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Contents = () => {
  return (
    <>
      <Box>
        <FAQHero />
      </Box>
      <Grid templateAreas={`"main"`}>
        <GridItem area="main" mr={"2%"}>
          <FAQPage />
        </GridItem>
      </Grid>
    </>
  );
};

export default Contents;
