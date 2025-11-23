import { useState } from "react";
import { Box, Button, IconButton, VStack } from "@chakra-ui/react";
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
      <Box
        position="sticky"
        top="20px"
        display="flex"
        justifyContent="flex-end"
        mr="6%"
        mt="20px"
        mb="20px"
        zIndex={1000}
      >
        <IconButton
          aria-label="Open menu"
          onClick={toggleMenu}
          bg={colors.button.transparent}
          color={colors.black}
          _hover={{ bg: colors.button.secondory }}
          borderRadius="50%"
          boxShadow="0 2px 8px rgba(0, 0, 0, 0.15)"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </IconButton>
      </Box>

      {/* Full Screen Menu */}
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
            justifyContent="space-between"
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
            <IconButton
              aria-label="Close menu"
              onClick={closeMenu}
              bg={colors.button.transparent}
              size="md"
            >
              <X size={24} />
            </IconButton>
          </Box>

          <Box p="30px">
            <VStack gap={6} alignItems="stretch">
              <Button
                bg={colors.button.solid}
                color={colors.white}
                fontFamily={fonts.body}
                fontSize="18px"
                py="30px"
                borderRadius={10}
                onClick={closeMenu}
              >
                حساب کاربری
              </Button>

              <VStack gap={3} alignItems="stretch">
                <Button
                  bg={colors.button.transparent}
                  fontFamily={fonts.body}
                  fontSize="18px"
                  py="25px"
                  textAlign="right"
                  onClick={closeMenu}
                >
                  سوالات متداول
                </Button>
                <Button
                  bg={colors.button.transparent}
                  fontFamily={fonts.body}
                  fontSize="18px"
                  py="25px"
                  textAlign="right"
                  onClick={closeMenu}
                >
                  نظرسنجی ها
                </Button>
                <Button
                  bg={colors.button.transparent}
                  fontFamily={fonts.body}
                  fontSize="18px"
                  py="25px"
                  textAlign="right"
                  onClick={closeMenu}
                >
                  گزارش های جامع
                </Button>
                <Button
                  bg={colors.button.transparent}
                  fontFamily={fonts.body}
                  fontSize="18px"
                  py="25px"
                  textAlign="right"
                  onClick={closeMenu}
                >
                  ارتباط با مشاور
                </Button>
                <Button
                  bg={colors.button.transparent}
                  fontFamily={fonts.body}
                  fontSize="18px"
                  py="25px"
                  textAlign="right"
                  onClick={closeMenu}
                >
                  راهنمای هوشمند
                </Button>
                <Button
                  bg={colors.button.transparent}
                  fontFamily={fonts.body}
                  fontSize="18px"
                  py="25px"
                  textAlign="right"
                  onClick={closeMenu}
                >
                  مطالب آموزشی
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MobileNav;
