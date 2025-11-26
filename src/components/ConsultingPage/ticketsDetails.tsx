import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Box, HStack, Icon, Text, VStack, Button } from "@chakra-ui/react";
import { FileQuestionMark, ThumbsUp, ThumbsDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { moveTicketToEnded } from "./ticketData";

interface TicketDetailsState {
  ticketNumber?: string;
  title?: string;
  description?: string;
  date?: string;
  responderName?: string;
  responderPosition?: string;
}

function TicketDetails() {
  const location = useLocation();
  const state = location.state as TicketDetailsState | null;

  const ticketNumber = state?.ticketNumber ?? "نامشخص";
  const title = state?.title ?? "بدون عنوان";
  const description =
    state?.description ?? "توضیحاتی برای این تیکت ثبت نشده است.";
  const date = state?.date ?? "تاریخ ثبت نشده است";
  const responderName = state?.responderName ?? "نامشخص";
  const responderPosition = state?.responderPosition ?? "";

  return (
    <Box mx={"6%"} my={"40px"}>
      <VStack alignItems="stretch" gap={4} width="100%">
        {/* شماره تیکت */}
        <Text
          color={colors.dark}
          fontFamily={fonts.semiBold}
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="right"
        >
          {ticketNumber}: شماره تیکت
        </Text>

        {/* باکس عنوان + تاریخ */}
        <Box
          width="100%"
          padding={4}
          borderRadius={12}
          borderWidth={2}
          bg={colors.background}
          borderColor={colors.border}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/* تاریخ */}
            <Text
              fontFamily={fonts.body}
              fontSize={{ base: 12, md: 13 }}
              color={colors.dark}
              textAlign="left"
            >
              {date}
            </Text>

            {/* عنوان + آیکن */}
            <HStack alignItems="center">
              <Text
                fontFamily={fonts.bold}
                fontSize={{ base: 16, md: 18, lg: 20 }}
                color="black"
                textAlign="right"
                wordBreak="break-word"
              >
                {title}
              </Text>

              <Icon
                as={FileQuestionMark}
                color={colors.dark}
                fontSize={{ base: "24px", md: "28px", lg: "32px" }}
              />
            </HStack>
          </HStack>
        </Box>

        {/* توضیحات تیکت */}
        <Box
          width="100%"
          padding={4}
          borderRadius={12}
          borderWidth={2}
          bg={colors.background}
          borderColor={colors.border}
        >
          <Text
            fontFamily={fonts.body}
            fontSize={{ base: 14, md: 15, lg: 16 }}
            color={colors.dark}
            textAlign="right"
            lineHeight="2"
          >
            {description}
          </Text>

          {/* پاسخ‌دهنده */}
          <Text
            mt={3}
            fontFamily={fonts.bold}
            fontSize={{ base: 12, md: 13 }}
            color={colors.black}
            textAlign="right"
          >
            پاسخ‌دهنده: {responderName}
            {responderPosition ? ` (${responderPosition})` : ""}
          </Text>

          <HStack justifyContent="center" mt={5}>
            <Button
              bg={colors.alert}
              border="1px solid"
              borderColor={colors.border}
              _hover={{ bg: colors.border }}
              fontFamily={fonts.body}
              fontSize={{ base: 13, md: 14 }}
              flex={1}
            >
              <HStack>
                <Icon as={ThumbsDown} />
                <Text>دوست نداشتم</Text>
              </HStack>
            </Button>

            <Button
              bg={colors.button.Thirdly}
              border="1px solid"
              borderColor={colors.border}
              _hover={{ bg: colors.border }}
              fontFamily={fonts.body}
              fontSize={{ base: 13, md: 14 }}
              flex={1}
            >
              <HStack>
                <Icon as={ThumbsUp} />
                <Text>مفید بود</Text>
              </HStack>
            </Button>
          </HStack>
        </Box>
        <Button
          mt={2}
          bg={colors.black}
          color={colors.white}
          _hover={{ bg: colors.dark }}
          fontFamily={fonts.bold}
          fontSize={{ base: 14, md: 24 }}
          padding={"2%"}
          onClick={() => {
            if (ticketNumber !== "نامشخص") {
              moveTicketToEnded(ticketNumber);
            }
          }}
        >
          پایان تیکت
        </Button>
      </VStack>
    </Box>
  );
}

export default TicketDetails;
