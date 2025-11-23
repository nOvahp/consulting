import { colors } from "@/utilities/colors";
import { Input } from "@chakra-ui/react";
import { useState } from "react";

interface ContentSearchProps {
  onSearchChange?: (searchQuery: string) => void;
}

const ContentSearch = ({ onSearchChange }: ContentSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <Input
      type="text"
      ml={"1"}
      bg={colors.background}
      borderRadius={12}
      borderWidth={2}
      borderColor={colors.border}
      placeholder={"جستجو در عنوان مطالب و محتوا"}
      _placeholder={{ color: colors.dark, textAlign: "right" }}
      textAlign="right"
      color={colors.black}
      flex="1"
      minWidth="50%"
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default ContentSearch;
