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
        templateAreas={{ base: `"main"`, lg: `"main aside"` }}
        templateColumns={{ base: "1fr", lg: "1fr 200px" }}
        mx={"6%"}
        mb={"6%"}
      >
        <GridItem area="aside" hideBelow="lg">
          <ContentMenu onCategoryChange={setSelectedCategory} />
        </GridItem>

        <GridItem area="main" mr={{ base: 0, lg: "2%" }}>
          <VStack width="100%" gap={4}>
            <Box hideFrom="lg" width="100%">
              <ContentMenu onCategoryChange={setSelectedCategory} />
            </Box>

            <HStack
              width="100%"
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "stretch", md: "center" }}
            >
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
