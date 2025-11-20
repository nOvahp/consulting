import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import feature1 from "../assets/featurecard1.png";
import { fonts } from "@/utilities/font";
import { colors } from "@/utilities/colors";

export interface cardData  {
  
  title: string,
  description: string,
  image: string
}

function FeatureCard({ title, description, image}: cardData) {
  return (
    <HStack borderRadius={12} borderWidth={2} bg={colors.background} borderColor={colors.border} padding={"1%"} alignItems="center">
      <VStack  alignItems="flex-end" flex="1">
        <Text
          
          fontFamily={fonts.bold}
          fontSize={24}
          color="black"
          textAlign="right"
        >
          {title}
        </Text>
        <Text
          
          fontFamily={fonts.body}
          fontSize={16}
          color="black"
          textAlign="right"
        >
          {description}
        </Text>
      </VStack>
      <Image marginLeft="3%" src={image} width="50px" height="auto" />
    </HStack>
  );
}

export default FeatureCard;
