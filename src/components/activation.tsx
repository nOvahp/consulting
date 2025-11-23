import { Stack, VStack, Box, Image, Text, Button } from "@chakra-ui/react";
import image from "../assets/image.png";
import { fonts } from "@/utilities/font";
import { colors } from "@/utilities/colors";

function Activation() {
  return (
    <Box mx="6%" mb={"65px"} justifyItems={"center"}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        gap={{ base: 4, lg: 6 }}
      >
        <Image
          src={image}
          width={{ base: "100%", lg: 280 }}
          height={{ base: "auto", lg: 225 }}
          maxW={{ base: "100%", lg: "280px" }}
          order={{ base: 1, lg: 2 }}
        />
        <VStack alignItems="flex-end" flex="1" order={{ base: 2, lg: 1 }}>
          <Text
            fontFamily={fonts.bold}
            fontSize={{ base: 24, lg: 40 }}
            color="black"
            textAlign="right"
            whiteSpace={{ base: "normal", lg: "nowrap" }}
          >
            فعال سازی حالت ارسال پیام در بات بله
          </Text>
          <Button
            bg={colors.button.solid}
            color={colors.white}
            fontFamily={fonts.bold}
            fontSize={"md"}
            py={"7"}
            px={{ base: "32", lg: "64" }}
            justifyContent={"center"}
            width={{ base: "100%", lg: "auto" }}
          >
            برو به بله
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Activation;
