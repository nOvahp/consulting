import { Box, Button, Image, Text } from "@chakra-ui/react";
import blockImage from "../assets/Block.png";
import { fonts } from "@/utilities/font";

const HeroBox = () => {
  return (
    <Box mx="6%" mb={"30px"} borderWidth={0} borderRadius={12} position="relative" overflow={'hidden'}>
      <Image
        src={blockImage}
        alt="hero"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="linear-gradient(90deg, rgba(122, 226, 207, 0) 0%, #7AE2CF 60%)"
        pointerEvents="none"
      />
      <Text
        position="absolute"
        top="25%"
        right="5%"
        left="50%"
        transform="translateY(-30%)"
        fontFamily={fonts.body}
        fontSize={14}
        color="white"
        textAlign="right"
        pointerEvents="none"
      >
        راهکار جامع
      </Text>
      <Text
        position="absolute"
        top="40%"
        right="5%"
        left="50%"
        transform="translateY(-30%)"
        fontFamily={fonts.extraBold}
        fontSize={64}
        color="white"
        textAlign="right"
        pointerEvents="none"
      >
        سامانه مشاور، ابزاری قدرتمند برای پیشرفت
      </Text>
      <Text
        position="absolute"
        top="65%"
        right="5%"
        transform="translateY(-30%)"
        fontFamily={fonts.body}
        fontSize={30}
        color="white"
        textAlign="right"
        pointerEvents="none"
      >
        توانمندسازی امروز، سلامت فردای ایران
      </Text>
      <Button
        position="absolute"
        top="80%"
        right="5%"
        padding={"2%"}
        transform="translateY(-30%)"
        fontFamily={fonts.bold}
        fontSize={15}
        color="black"
        textAlign="right"
        pointerEvents="none"
        borderRadius={12}
      >
        برو به مطالب آموزشی
      </Button>
    </Box>
  );
};

export default HeroBox;
