import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";

export interface cardData {
  title: string;
  description: string;
  image: string;
}

function FeatureCard({ title, description, image }: cardData) {
  return (
    <HStack
      borderRadius={12}
      borderWidth={2}
      bg={colors.background}
      borderColor={colors.border}
      padding={"1%"}
      alignItems="center"
    >
      <VStack alignItems="flex-end" flex="1">
        <Text
          fontFamily={fonts.bold}
          fontSize={{ base: 16, md: 20, lg: 20, xl: 24 }}
          color="black"
          textAlign="right"
        >
          {title}
        </Text>
        <Text
          fontFamily={fonts.body}
          fontSize={{ base: 12, md: 14, lg: 15, xl: 16 }}
          color="black"
          textAlign="right"
        >
          {description}
        </Text>
      </VStack>
      <Image
        marginLeft="3%"
        src={image}
        width={{ base: "40px", md: "45px", lg: "47px", xl: "50px" }}
        height="auto"
      />
    </HStack>
  );
}

export default FeatureCard;
