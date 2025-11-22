import {
  Box,
  HStack,
  Icon,
  Text,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";

function Footer() {
  return (
    <Box px={"10%"} py={"5%"} borderTopWidth={2} bg={colors.footer}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack gap={4}>
          <Icon
            as={Instagram}
            color={colors.dark}
            fontSize="20px"
            cursor="pointer"
            _hover={{ color: colors.button.solid }}
          />
          <Icon
            as={Twitter}
            color={colors.dark}
            fontSize="20px"
            cursor="pointer"
            _hover={{ color: colors.button.solid }}
          />
          <Icon
            as={Facebook}
            color={colors.dark}
            fontSize="20px"
            cursor="pointer"
            _hover={{ color: colors.button.solid }}
          />
        </HStack>
        <Text
          fontFamily={fonts.bold}
          fontSize={28}
          color={colors.white}
          textAlign="right"
        >
          مرکز مشاوره آنلاین
        </Text>
      </HStack>
      <Box
        borderBottomWidth={1}
        borderBottomColor={colors.footerBorder}
        mt="2%"
      />

      <Grid templateColumns="repeat(5, 1fr)" gap={8} mt={"2%"}>
        <GridItem>
          <VStack alignItems="flex-end" gap={3}>
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={fonts.semiBold}
              fontWeight="600"
              lineHeight="27px"
              textAlign="right"
            >
              لینک های مفید
            </Text>
            <VStack alignItems="flex-end" gap={2}>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                مرکز حقوقی
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                حریم خصوصی
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                همکاری با ما
              </Text>
            </VStack>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack alignItems="flex-end" gap={3}>
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={fonts.semiBold}
              fontWeight="600"
              lineHeight="27px"
              textAlign="right"
            >
              منابع
            </Text>
            <VStack alignItems="flex-end" gap={2}>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                دریافت کمک
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                سوالات متداول
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                محاسبه گر ROI
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                وضعیت
              </Text>
            </VStack>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack alignItems="flex-end" gap={3}>
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={fonts.semiBold}
              fontWeight="600"
              lineHeight="27px"
              textAlign="right"
            >
              شرکت
            </Text>
            <VStack alignItems="flex-end" gap={2}>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                درباره ما
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                برنامه همکاری
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                داستان ما
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                فرصت های شغلی
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                پشتیبانی مشتریان
              </Text>
            </VStack>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack alignItems="flex-end" gap={3}>
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={fonts.semiBold}
              fontWeight="600"
              lineHeight="27px"
              textAlign="right"
            >
              چرا ما
            </Text>
            <VStack alignItems="flex-end" gap={2}>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                فرایند ما
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                سازمانی
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                نمایندگی ها
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                منابع انسانی
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                عملیات
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                انطباق
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                امور مالی
              </Text>
            </VStack>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack alignItems="flex-end" gap={3}>
            <Text
              color={colors.white}
              fontSize={18}
              fontFamily={fonts.semiBold}
              fontWeight="600"
              lineHeight="27px"
              textAlign="right"
            >
              محصولات
            </Text>
            <VStack alignItems="flex-end" gap={2}>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                بررسی اجمالی محصولات
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                منبع یابی همه کاناله
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                تطابق و قرارداد
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                پرداخت ها
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                داده ها و گزارش ها
              </Text>
              <Text
                color={colors.footerText}
                fontSize={18}
                fontFamily={fonts.body}
                fontWeight="400"
                lineHeight="27px"
                cursor="pointer"
                textAlign="right"
                _hover={{ color: colors.white }}
              >
                قیمت گذاری
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Footer;
