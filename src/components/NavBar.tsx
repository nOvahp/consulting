import { Box, Button, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";

const NavBar = () => {
  return (
    <Box
      bg={colors.background}
      mx={"6%"}
      mt={"50px"}
      mb={"30px"}
      border="2px solid"
      borderColor={colors.border}
      borderRadius={15}
      fontFamily={fonts.body}
    >
      <HStack justifyContent={"space-between"} padding={"1%"}>
        <Button
          bg={colors.button.solid}
          color={"white"}
          borderRadius={10}
          px="5"
        >
          حساب کاربری
        </Button>
        <Box justifyContent={"space-between"}>
          <Button bg={colors.button.transparent}>سوالات متداول</Button>
          <Button bg={colors.button.transparent}>نظرسنجی ها</Button>
          <Button bg={colors.button.transparent}>گزارش های جامع</Button>
          <Button bg={colors.button.transparent}>ارتباط با مشاور</Button>
          <Button bg={colors.button.transparent}>راهنمای هوشمند</Button>
          <Button bg={colors.button.transparent}>مطالب آموزشی</Button>
        </Box>
        <Button
          bg={colors.button.transparent}
          fontFamily={fonts.black}
          fontSize="20px"
        >
          سامانه مشاور
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;
