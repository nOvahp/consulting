import { VStack, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";

const menuItems = [
  "شیوه نامه ها",
  "پروتکل های مداخله مختصر",
  "کتابچه های ارتقایی",
  "شرح وظایف و تقویم اجرایی",
  "آئین نامه ها",
  "اسناد بالادستی",
  "پروتکل های سطحبندی",
];

interface ContentMenuProps {
  onCategoryChange?: (category: string) => void;
}

const ContentMenu = ({ onCategoryChange }: ContentMenuProps) => {
  const [selectedItem, setSelectedItem] = useState("شیوه نامه ها");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (onCategoryChange) {
      onCategoryChange(item);
    }
  };

  return (
    <VStack
      alignItems="flex-end"
      gap={4}
      width="100%"
      position={{ base: "static", lg: "sticky" }}
      top={{ lg: "20px" }}
      alignSelf="flex-start"
    >
      <Text
        color={colors.footer}
        fontSize={24}
        fontFamily={fonts.bold}
        fontWeight="700"
        lineHeight="31.20px"
        textAlign="right"
      >
        دسته بندی ها
      </Text>

      <VStack alignItems="flex-end" gap={2} width="100%">
        {menuItems.map((item) => (
          <Box
            key={item}
            width="100%"
            bg={selectedItem === item ? colors.button.secondory : "transparent"}
            px={3}
            py={2}
            borderRadius={8}
            cursor="pointer"
            onClick={() => handleItemClick(item)}
            _hover={{
              bg:
                selectedItem === item
                  ? colors.button.secondory
                  : colors.button.secondory,
            }}
            transition="background-color 0.2s"
          >
            <Text
              color={selectedItem === item ? colors.button.solid : colors.dark}
              fontSize={16}
              fontFamily={selectedItem === item ? fonts.semiBold : fonts.medium}
              fontWeight={selectedItem === item ? "600" : "500"}
              lineHeight="24px"
              textAlign="right"
            >
              {item}
            </Text>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default ContentMenu;
