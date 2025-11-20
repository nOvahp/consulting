import { HStack, VStack, Box, Image, Text, Button } from "@chakra-ui/react";
import image from "../assets/image.png";
import { fonts } from "@/utilities/font";
import { colors } from "@/utilities/colors";

function Activation() {
  return (
    <Box mx="6%" mb={"65px"} justifyItems={"center"}>
      <HStack>
        <VStack>
          <Text
            fontFamily={fonts.bold}
            fontSize={40}
            color="black"
            textAlign="right"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            فعال سازی حالت ارسال پیام در بات بله
          </Text>
          <Button
            bg={colors.button.solid}
            color={colors.white}
            fontFamily={fonts.bold}
            fontSize={"md"}
            py={"7"}
            px={"64"}
            justifyContent={"center"}
          >
            برو به بله
          </Button>
        </VStack>
        <Image src={image} width={280} height={225} mx={"4%"} />
      </HStack>
    </Box>
  );
}

export default Activation;
