import { Stack, VStack, Box, Image, Text, Button } from "@chakra-ui/react";
import image from "../assets/image.png";
import { fonts } from "@/utilities/font";
import { colors } from "@/utilities/colors";

function Activation() {
  return (
    <Box mx="6%" mb={"65px"} justifyItems={"center"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        gap={{ base: 4, md: 6 }}
      >
        <Image
          src={image}
          width={{ base: "100%", md: 280 }}
          height={{ base: "auto", md: 225 }}
          maxW={{ base: "100%", md: "280px" }}
          order={{ base: 1, md: 2 }}
        />
        <VStack alignItems="flex-end" flex="1" order={{ base: 2, md: 1 }}>
          <Text
            fontFamily={fonts.bold}
            fontSize={{ base: 24, md: 32, lg: 40 }}
            color="black"
            textAlign="right"
            whiteSpace={{ base: "normal", md: "nowrap" }}
          >
            فعال سازی حالت ارسال پیام در بات بله
          </Text>
          <Button
            bg={colors.button.solid}
            color={colors.white}
            fontFamily={fonts.bold}
            fontSize={"md"}
            py={"7"}
            px={{ base: "32", md: "64" }}
            justifyContent={"center"}
            width={{ base: "100%", md: "auto" }}
          >
            برو به بله
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Activation;
