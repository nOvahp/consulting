import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={colors.background}
      mx="6%"
      py="10%"
    >
      <VStack gap={6} alignItems="center" textAlign="center">
        <Text
          fontFamily={fonts.extraBold}
          fontSize="120px"
          color={colors.button.solid}
          lineHeight="1"
        >
          ۴۰۴
        </Text>

        <VStack gap={4} alignItems="center">
          <Text
            fontFamily={fonts.bold}
            fontSize="32px"
            color={colors.black}
            textAlign="center"
          >
            صفحه مورد نظر یافت نشد
          </Text>

          <Text
            fontFamily={fonts.body}
            fontSize="18px"
            color={colors.dark}
            textAlign="center"
            maxW="600px"
            lineHeight="1.8"
          >
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری
            منتقل شده است.
          </Text>
        </VStack>

        <Button
          bg={colors.button.solid}
          color={colors.white}
          fontFamily={fonts.semiBold}
          fontSize="16px"
          px="40px"
          py="25px"
          borderRadius="10px"
          _hover={{
            bg: colors.button.solid,
            opacity: 0.9,
            transform: "translateY(-2px)",
          }}
          transition="all 0.3s"
          onClick={() => navigate("/")}
        >
          بازگشت به صفحه اصلی
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
