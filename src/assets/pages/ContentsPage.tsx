import ContentCards from "@/components/ContentPage/ContentCards";
import ContentFilter from "@/components/ContentPage/ContentFilter";
import ContentHero from "@/components/ContentPage/ContentHero";
import ContentMenu from "@/components/ContentPage/ContentMenu";
import ContentSearch from "@/components/ContentPage/ContentSearch";
import ContentSorting, {
  type SortOption,
} from "@/components/ContentPage/ContentSorting";
import { Grid, GridItem, Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Contents = () => {
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("شیوه نامه ها");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
        <GridItem area="aside" hideBelow="lg">
          <ContentMenu onCategoryChange={setSelectedCategory} />
        </GridItem>

        <GridItem area="main" mr={"2%"}>
          <VStack width="100%">
            <HStack width="100%">
              <ContentSorting onSortChange={setSortBy} />
              <ContentFilter />

              <ContentSearch onSearchChange={setSearchQuery} />
            </HStack>
            <ContentCards
              sortBy={sortBy}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Contents;
