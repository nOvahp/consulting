import ContentCards from "@/components/ContentCards";
import ContentFilter from "@/components/ContentFilter";
import ContentHero from "@/components/ContentHero";
import ContentMenu from "@/components/ContentMenu";
import ContentSearch from "@/components/ContentSearch";
import ContentSorting, { type SortOption } from "@/components/ContentSorting";
import { Grid, GridItem, Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Contents = () => {
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("شیوه نامه ها");

  return (
    <>
      <Box>
        <ContentHero />
      </Box>
      <Grid
        templateAreas={`"main aside"`}
        templateColumns="1fr 200px"
        mx={"6%"}
        mb={"6%"}
      >
        <GridItem borderWidth={4} area="aside" hideBelow="lg">
          <ContentMenu onCategoryChange={setSelectedCategory} />
        </GridItem>

        <GridItem area="main" borderWidth={4} mr={"2%"}>
          <VStack width="100%">
            <HStack width="100%">
              <ContentSorting onSortChange={setSortBy} />
              <ContentFilter />

              <ContentSearch />
            </HStack>
            <ContentCards sortBy={sortBy} selectedCategory={selectedCategory} />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Contents;
