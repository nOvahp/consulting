import { colors } from "@/utilities/colors";
import { Input } from "@chakra-ui/react";

const ContentSearch = () => {
  return (
    <Input
      type="text"
      ml={"1"}
      bg={colors.background}
      borderRadius={12}
      borderWidth={2}
      borderColor={colors.dark}
      placeholder={"جستجو در عنوان مطالب و محتوا"}
      _placeholder={{ color: colors.dark, textAlign: "right" }}
      textAlign="right"
      color={colors.black}
      flex="1"
      minWidth="50%"
    />
  );
};

export default ContentSearch;
