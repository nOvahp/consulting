import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Button, HStack, VStack, Text, Image } from "@chakra-ui/react";

export interface LatestPostCardData {
  date: string;
  title: string;
  description: string;
  image: string;
}

function LatestPostCard({
  date,
  title,
  description,
  image,
}: LatestPostCardData) {
  return (
    <Button
      width="100%"
      padding={0}
      height="auto"
      justifyContent={"flex-start"}
    >
      <HStack
        borderRadius={12}
        borderWidth={2}
        bg={colors.background}
        borderColor={colors.border}
        padding={"1%"}
        alignItems="flex-start"
        width={"100%"}
        minWidth={0}
      >
        <VStack alignItems="flex-end" flex="1" minWidth={0} width="100%">
          <Text
            fontFamily={fonts.body}
            fontSize={12}
            
            textAlign="right"
            wordBreak="break-word"
            whiteSpace="normal"
            overflowWrap="break-word"
            width="100%"
            color={colors.dark}
          >
            {date}
          </Text>
          <Text
            fontFamily={fonts.bold}
            fontSize={24}
            color="black"
            textAlign="right"
            wordBreak="break-word"
            whiteSpace="normal"
            overflowWrap="break-word"
            width="100%"
          >
            {title}
          </Text>
          <Text
            fontFamily={fonts.body}
            fontSize={14}
            color={colors.dark}
            textAlign="right"
            wordBreak="break-word"
            whiteSpace="normal"
            overflowWrap="break-word"
            width="100%"
          >
            {description}
          </Text>
        </VStack>
        <Image
          marginLeft="3%"
          src={image}
          width="70px"
          height="auto"
          flexShrink={0}
        />
      </HStack>
    </Button>
  );
}

export default LatestPostCard;
