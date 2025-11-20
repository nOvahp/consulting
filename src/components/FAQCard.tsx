import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Plus, Minus, FileQuestionMark } from "lucide-react";

export interface FAQCardData {
  title: string;
  description: string;
  
}

function FAQCard({ title, description }: FAQCardData) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      width="100%"
      padding={0}
      height="auto"
      justifyContent="flex-start"
      onClick={() => setIsExpanded((prev) => !prev)}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.01)",
      }}
    >
      <HStack
        borderRadius={12}
        borderWidth={2}
        bg={colors.background}
        borderColor={colors.border}
        py="1%"
        px="1%"
        gap="2%"
        alignItems="flex-start"
        width="100%"
        minWidth={0}
      >
        <Icon
          as={isExpanded ? Minus : Plus}
          color={colors.dark}
          fontSize="20px"
          transition="transform 0.2s ease"
        />
        <VStack
          alignItems="flex-end"
          flex="1"
          minWidth={0}
          width="100%"
          gap={2}
        >
          <Text
            fontFamily={fonts.bold}
            fontSize={15}
            color="black"
            textAlign="right"
            wordBreak="break-word"
            whiteSpace="normal"
            overflowWrap="break-word"
            width="100%"
          >
            {title}
          </Text>

          {isExpanded && (
            <Text
              fontFamily={fonts.body}
              fontSize={14}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
              lineHeight="1.8"
            >
              {description}
            </Text>
          )}
        </VStack>

        <Icon as={FileQuestionMark} color={colors.dark} fontSize="32px" />
      </HStack>
    </Box>
  );
}

export default FAQCard;
