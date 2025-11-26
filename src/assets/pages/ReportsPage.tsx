import { Box, Text } from "@chakra-ui/react";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";

const ReportsPage = () => {
  return (
    <Box mx={"6%"} my={"40px"}>
      <Text
        color={colors.black}
        fontFamily={fonts.bold}
        fontSize={{ base: 20, md: 24, lg: 26 }}
        textAlign="right"
        mb={2}
      >
        گزارش های جامع
      </Text>
      <Text
        color={colors.dark}
        fontFamily={fonts.body}
        fontSize={{ base: 14, md: 15 }}
        textAlign="right"
      >
        این بخش برای نمایش گزارش‌های جامع طراحی شده است و در حال حاضر در دست
        توسعه است. به‌زودی گزارش‌های تحلیلی در این صفحه قابل مشاهده خواهند بود.
      </Text>
    </Box>
  );
};

export default ReportsPage;
