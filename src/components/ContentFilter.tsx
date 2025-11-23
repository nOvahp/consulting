import { colors } from "@/utilities/colors";
import { Button, Icon } from "@chakra-ui/react";
import { Filter } from "lucide-react";
import React from "react";

const ContentFilter = () => {
  return (
    <Button
    color={colors.dark}
      bg={colors.background}
      borderRadius={10}
      borderWidth={2}
      borderColor={colors.border}
    >
        
      فیلتر
      <Icon as={Filter} color={colors.dark} size={"md"} alignItems={"center"} />
    </Button>
  );
};

export default ContentFilter;
