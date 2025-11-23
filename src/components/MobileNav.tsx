import { useState } from "react";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { colors } from "../utilities/colors";
import { fonts } from "../utilities/font";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={toggleMenu}
        position="fixed"
        top="20px"
        right="6%"
        zIndex={1000}
        bg={colors.button.transparent}
        color={colors.black}
        _hover={{ bg: colors.button.secondory }}
        borderRadius="50%"
        boxShadow="0 2px 8px rgba(0, 0, 0, 0.15)"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </IconButton>

      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          width="100%"
          height="100vh"
          bg={colors.background}
          zIndex={999}
          overflowY="auto"
        >
          <Box
            p="20px"
            borderBottomWidth="1px"
            borderBottomColor={colors.border}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Link
              to="/"
              onClick={closeMenu}
              style={{
                fontFamily: fonts.black,
                fontSize: "24px",
                color: colors.black,
                textDecoration: "none",
              }}
            >
              سامانه مشاور
            </Link>
          </Box>

          <Box p="30px">
            <VStack gap={3} alignItems="stretch">
              <Link
                to="/account"
                onClick={closeMenu}
                style={{
                  fontFamily: fonts.body,
                  fontSize: "18px",
                  color: colors.white,
                  textDecoration: "none",
                  backgroundColor: colors.button.solid,
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                  display: "block",
                  transition: "all 0.2s",
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

              <VStack gap={0} alignItems="center">
                <Link
                  to="/faq"
                  onClick={closeMenu}
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "18px",
                    color: colors.black,
                    textDecoration: "none",
                    backgroundColor: colors.button.transparent,
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "right",
                    display: "block",
                    transition: "all 0.2s",
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
                  onClick={closeMenu}
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "18px",
                    color: colors.black,
                    textDecoration: "none",
                    backgroundColor: colors.button.transparent,
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "right",
                    display: "block",
                    transition: "all 0.2s",
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
                  onClick={closeMenu}
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "18px",
                    color: colors.black,
                    textDecoration: "none",
                    backgroundColor: colors.button.transparent,
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "right",
                    display: "block",
                    transition: "all 0.2s",
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
                  to="/contact"
                  onClick={closeMenu}
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "18px",
                    color: colors.black,
                    textDecoration: "none",
                    backgroundColor: colors.button.transparent,
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "right",
                    display: "block",
                    transition: "all 0.2s",
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
                  to="/guide"
                  onClick={closeMenu}
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "18px",
                    color: colors.black,
                    textDecoration: "none",
                    backgroundColor: colors.button.transparent,
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "right",
                    display: "block",
                    transition: "all 0.2s",
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
                  onClick={closeMenu}
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "18px",
                    color: colors.black,
                    textDecoration: "none",
                    backgroundColor: colors.button.transparent,
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "right",
                    display: "block",
                    transition: "all 0.2s",
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
              </VStack>
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MobileNav;
