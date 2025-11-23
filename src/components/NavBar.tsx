import { Box, Button, HStack } from "@chakra-ui/react";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import { Link } from "react-router-dom";

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
      <HStack
        justifyContent={"space-between"}
        padding={"1%"}
        gap={2}
        flexWrap="nowrap"
      >
        <Button
          bg={colors.button.solid}
          color={"white"}
          borderRadius={10}
          px={{ base: 4, md: 5 }}
          fontSize={{ base: 12, md: 13, lg: 14}}
          whiteSpace="nowrap"
        >
          حساب کاربری
        </Button>
        <HStack gap={1} flexWrap="nowrap" justifyContent="center">
          <Button
            bg={colors.button.transparent}
            fontSize={{ base: 11, md: 12, lg: 13, xl: 15 }}
            px={{ base: 2, md: 3 }}
            whiteSpace="nowrap"
          >
            سوالات متداول
          </Button>
          <Button
            bg={colors.button.transparent}
            fontSize={{ base: 11, md: 12, lg: 13, xl: 15 }}
            px={{ base: 2, md: 3 }}
            whiteSpace="nowrap"
          >
            نظرسنجی ها
          </Button>
          <Button
            bg={colors.button.transparent}
            fontSize={{ base: 11, md: 12, lg: 13, xl: 15 }}
            px={{ base: 2, md: 3 }}
            whiteSpace="nowrap"
          >
            گزارش های جامع
          </Button>
          <Button
            bg={colors.button.transparent}
            fontSize={{ base: 11, md: 12, lg: 13, xl: 15 }}
            px={{ base: 2, md: 3 }}
            whiteSpace="nowrap"
          >
            ارتباط با مشاور
          </Button>
          <Button
            bg={colors.button.transparent}
            fontSize={{ base: 11, md: 12, lg: 13, xl: 15 }}
            px={{ base: 2, md: 3 }}
            whiteSpace="nowrap"
          >
            راهنمای هوشمند
          </Button>
          <Button
            bg={colors.button.transparent}
            fontSize={{ base: 11, md: 12, lg: 13, xl: 15 }}
            px={{ base: 2, md: 3 }}
            whiteSpace="nowrap"
          >
            مطالب آموزشی
          </Button>
        </HStack>
        <Link
          to="/"
          style={{
            fontFamily: fonts.black,
            fontSize: "clamp(14px, 1.2vw, 20px)",
            color: colors.black,
            textDecoration: "none",
            backgroundColor: colors.button.transparent,
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          سامانه مشاور
        </Link>
      </HStack>
    </Box>
  );
};

export default NavBar;
