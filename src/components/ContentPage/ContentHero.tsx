import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import contentHero from "../../assets/contentHero.png";

const ContentHero = () => {
  return (
    <Box
      mx="6%"
      mt={{ base: "2%", lg: 0 }}
      mb={"65px"}
      borderWidth={0}
      borderRadius={12}
      position="relative"
      overflow={"hidden"}
      minH={{ base: "180px", md: "250px", lg: "280px", xl: "300px" }}
    >
      <Image
        src={contentHero}
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
          base: "linear-gradient(180deg, rgba(122, 226, 207, 0) 0%, #7AE2CF 20%)",
          md: "linear-gradient(90deg, rgba(122, 226, 207, 0) 0%, #7AE2CF 45%)",
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
          fontFamily={fonts.extraBold}
          fontSize={{ base: 20, md: 25, lg: 30, xl: 40 }}
          color={colors.black}
          textAlign="right"
        >
          محتوا های ارائه شده برای مشاوران
        </Text>
        <Text
          fontFamily={fonts.body}
          fontSize={{ base: 15, md: 18, lg: 20, xl: 22 }}
          color={colors.black}
          textAlign="right"
          lineHeight="1.2"
        >
          این راهنما شامل دستورالعمل‌ها، نکات کلیدی و توصیه‌های عملی برای شرکت
          فعال و موثر در برنامه‌های هفته
        </Text>
      </VStack>
    </Box>
  );
};

export default ContentHero;
