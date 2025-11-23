import { VStack, Box } from "@chakra-ui/react";
import { useMemo } from "react";
import LatestPostCardOpen from "../LatestPostCardOpen";
import { type SortOption } from "./ContentSorting";
import { contentMockData } from "./ContentMockData";

interface ContentCardsProps {
  sortBy?: SortOption;
  selectedCategory?: string;
  searchQuery?: string;
}

const extractNumber = (text: string): number => {
  const match = text.match(/\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

const getFileType = (image: string): string => {
  if (image.includes("docx")) return "DOCX";
  if (image.includes("mov")) return "MOV";
  if (image.includes("img")) return "IMG";
  return "UNKNOWN";
};

const parsePersianDate = (date: string): number => {
  const parts = date.split(" ");
  const day = parseInt(
    parts[0].replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
  );
  const monthMap: { [key: string]: number } = {
    فروردین: 1,
    اردیبهشت: 2,
    خرداد: 3,
    تیر: 4,
    مرداد: 5,
    شهریور: 6,
    مهر: 7,
    آبان: 8,
    آذر: 9,
    دی: 10,
    بهمن: 11,
    اسفند: 12,
  };
  const month = monthMap[parts[1]] || 0;
  const year = parseInt(
    parts[2].replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
  );
  return year * 10000 + month * 100 + day;
};

function ContentCards({
  sortBy = "name",
  selectedCategory = "شیوه نامه ها",
  searchQuery = "",
}: ContentCardsProps) {
  const sortedFeature = useMemo(() => {
    const feature = contentMockData[selectedCategory] || [];

   
    let filtered = feature;
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = feature.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        return titleMatch || descriptionMatch;
      });
    }

    const sorted = [...filtered];

    switch (sortBy) {
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title, "fa"));
        break;
      case "kind":
        sorted.sort((a, b) => {
          const typeA = getFileType(a.image);
          const typeB = getFileType(b.image);
          return typeA.localeCompare(typeB);
        });
        break;
      case "date":
        sorted.sort(
          (a, b) => parsePersianDate(b.date) - parsePersianDate(a.date)
        );
        break;
      case "views":
        sorted.sort((a, b) => extractNumber(b.View) - extractNumber(a.View));
        break;
      case "likes":
        sorted.sort((a, b) => extractNumber(b.like) - extractNumber(a.like));
        break;
      case "place":
        sorted.sort((a, b) => a.place.localeCompare(b.place, "fa"));
        break;
      default:
        break;
    }

    return sorted;
  }, [sortBy, selectedCategory, searchQuery]);

  return (
    <>
      <VStack mb={"65px"} alignItems="stretch" width="100%">
        {sortedFeature.map((item, index) => (
          <Box key={`${item.title}-${index}`} width="100%">
            <LatestPostCardOpen
              date={item.date}
              title={item.title}
              description={item.description}
              image={item.image}
              subTitle={item.subTitle}
              place={item.place}
              shareImage={item.shareImage}
              View={item.View}
              like={item.like}
            />
          </Box>
        ))}
      </VStack>
    </>
  );
}

export default ContentCards;
