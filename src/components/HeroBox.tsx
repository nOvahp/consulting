import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import blockImage from "../assets/Block.png";
import { fonts } from "@/utilities/font";

const HeroBox = () => {
  return (
    <Box
      mx="6%"
      mt={{ base: "2%", lg: 0 }}
      mb={"30px"}
      borderWidth={0}
      borderRadius={12}
      position="relative"
      overflow={"hidden"}
      minH={{ base: "400px", md: "500px", lg: "600px" }}
    >
      <Image
        src={blockImage}
        alt="hero"
        width="100%"
        height="100%"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background={{
          base: "linear-gradient(0deg, rgba(122, 226, 207, 0) 0%, #7AE2CF 60%)",
          md: "linear-gradient(90deg, rgba(122, 226, 207, 0) 0%, #7AE2CF 60%)",
        }}
        pointerEvents="none"
      />
      <VStack
        position="absolute"
        top={{ base: "10%", md: "20%", lg: "25%" }}
        right={{ base: "5%", md: "5%" }}
        left={{ base: "5%", md: "50%", lg: "50%" }}
        alignItems="flex-end"
        gap={{ base: 3, md: 4, lg: 6 }}
        pointerEvents="none"
      >
        <Text
          fontFamily={fonts.body}
          fontSize={{ base: 12, md: 13, lg: 14 }}
          color="white"
          textAlign="right"
        >
          راهکار جامع
        </Text>
        <Text
          fontFamily={fonts.extraBold}
          fontSize={{ base: 24, md: 40, lg: 50, xl: 64 }}
          color="white"
          textAlign="right"
          lineHeight="1.2"
        >
          سامانه مشاور، ابزاری قدرتمند برای پیشرفت
        </Text>
        <Text
          fontFamily={fonts.body}
          fontSize={{ base: 16, md: 22, lg: 30 }}
          color="white"
          textAlign="right"
        >
          توانمندسازی امروز، سلامت فردای ایران
        </Text>
        <Button
          padding={{ base: "12px 20px", md: "15px 25px", lg: "2%" }}
          fontFamily={fonts.bold}
          fontSize={{ base: 13, md: 14, lg: 15 }}
          color="black"
          textAlign="right"
          pointerEvents="auto"
          borderRadius={12}
          mt={{ base: 2, md: 4 }}
        >
          برو به مطالب آموزشی
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroBox;
