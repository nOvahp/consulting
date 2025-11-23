import ContentFilter from "@/components/ContentFilter";
import ContentHero from "@/components/ContentHero";
import ContentMenu from "@/components/ContentMenu";
import ContentSearch from "@/components/ContentSearch";
import ContentSorting from "@/components/ContentSorting";
import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";

const Contents = () => {
  return (
    <>
      <Box>
        <ContentHero />
      </Box>
      <Grid
        templateAreas={`"main aside"`}
        templateColumns="1fr 200px"
        margin={"6%"}
      >
        <GridItem borderWidth={4} mb={"65px"} area="aside" hideBelow="lg">
          <ContentMenu />
        </GridItem>

        <GridItem area="main" borderWidth={4} mr={"2%"}>
          <HStack>
            <ContentSorting />
            <ContentFilter />

            <ContentSearch />
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Contents;
