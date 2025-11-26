import { Box, HStack } from "@chakra-ui/react";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => pathname === path;

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
        <Link
          to="/account"
          style={{
            fontFamily: fonts.body,
            fontSize: "clamp(12px, 1vw, 14px)",
            color: colors.white,
            textDecoration: "none",
            backgroundColor: isActive("/account")
              ? colors.button.secondory
              : colors.button.solid,
            padding: "8px 16px",
            borderRadius: "10px",
            whiteSpace: "nowrap",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          حساب کاربری
        </Link>
        <HStack gap={1} flexWrap="nowrap" justifyContent="center">
          <Link
            to="/faq"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.black,
              textDecoration: "none",
              backgroundColor: isActive("/faq")
                ? colors.button.secondory
                : colors.button.transparent,
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            سوالات متداول
          </Link>
          <Link
            to="/surveys"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.black,
              textDecoration: "none",
              backgroundColor: isActive("/surveys")
                ? colors.button.secondory
                : colors.button.transparent,
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            نظرسنجی ها
          </Link>
          <Link
            to="/reports"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.black,
              textDecoration: "none",
              backgroundColor: isActive("/reports")
                ? colors.button.secondory
                : colors.button.transparent,
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            گزارش های جامع
          </Link>
          <Link
            to="/Consulting"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.black,
              textDecoration: "none",
              backgroundColor: isActive("/Consulting")
                ? colors.button.secondory
                : colors.button.transparent,
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            ارتباط با مشاور
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.black,
              textDecoration: "none",
              backgroundColor:
                pathname === "/"
                  ? colors.button.secondory
                  : colors.button.transparent,
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            راهنمای هوشمند
          </Link>
          <Link
            to="/content"
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(11px, 1vw, 15px)",
              color: colors.black,
              textDecoration: "none",
              backgroundColor: isActive("/content")
                ? colors.button.secondory
                : colors.button.transparent,
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            مطالب آموزشی
          </Link>
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
