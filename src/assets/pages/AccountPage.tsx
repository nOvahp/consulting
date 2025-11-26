import { Box, Text } from "@chakra-ui/react";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";

const AccountPage = () => {
  return (
    <Box mx={"6%"} my={"40px"}>
      <Text
        color={colors.black}
        fontFamily={fonts.bold}
        fontSize={{ base: 20, md: 24, lg: 26 }}
        textAlign="right"
        mb={2}
      >
        حساب کاربری
      </Text>
      <Text
        color={colors.dark}
        fontFamily={fonts.body}
        fontSize={{ base: 14, md: 15 }}
        textAlign="right"
      >
        این بخش در حال توسعه است و به‌زودی اطلاعات حساب کاربری شما در این صفحه
        نمایش داده می‌شود.
      </Text>
    </Box>
  );
};

export default AccountPage;
