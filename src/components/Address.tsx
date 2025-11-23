import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Box, HStack, Icon, VStack, Text, Stack } from "@chakra-ui/react";
import { Phone, Mail, MapPin } from "lucide-react";

function Address() {
  return (
    <Box mx="6%" mb={"65px"}>
      <Stack direction={{ base: "column", md: "row" }} gap={0}>
        <HStack
          borderRightWidth={{ base: 0, md: 2 }}
          borderBottomWidth={{ base: 2, md: 0 }}
          borderRightColor={colors.border}
          borderBottomColor={colors.border}
          py="1%"
          px="5%"
          alignItems="center"
          width="100%"
          minWidth={0}
        >
          <VStack
            alignItems="flex-end"
            flex="1"
            minWidth={0}
            width="100%"
            gap={0}
          >
            <Text
              fontFamily={fonts.bold}
              fontSize={15}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
            >
              با ما تماس بگیرید:
            </Text>
            <Text
              fontFamily={fonts.body}
              fontSize={14}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
              lineHeight="1.8"
            >
              (98) 21 1234 5678
            </Text>
          </VStack>
          <Icon
            as={Phone}
            color={colors.dark}
            fontSize="20px"
            transition="transform 0.2s ease"
          />
        </HStack>
        <HStack
          borderRightWidth={{ base: 0, md: 2 }}
          borderBottomWidth={{ base: 2, md: 0 }}
          borderRightColor={colors.border}
          borderBottomColor={colors.border}
          py="1%"
          px="5%"
          alignItems="center"
          width="100%"
          minWidth={0}
        >
          <VStack
            alignItems="flex-end"
            flex="1"
            minWidth={0}
            width="100%"
            gap={0}
          >
            <Text
              fontFamily={fonts.bold}
              fontSize={15}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
            >
              برای ما ایمیل بفرستید:{" "}
            </Text>
            <Text
              fontFamily={fonts.body}
              fontSize={14}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
              lineHeight="1.8"
            >
              info@example.com{" "}
            </Text>
          </VStack>
          <Icon
            as={Mail}
            color={colors.dark}
            fontSize="20px"
            transition="transform 0.2s ease"
          />
        </HStack>
        <HStack py="1%" px="5%" alignItems="center" width="100%" minWidth={0}>
          <VStack
            alignItems="flex-end"
            flex="1"
            minWidth={0}
            width="100%"
            gap={0}
          >
            <Text
              fontFamily={fonts.bold}
              fontSize={15}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
            >
              آدرس حضوری:{" "}
            </Text>
            <Text
              fontFamily={fonts.body}
              fontSize={14}
              color={colors.dark}
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
              lineHeight="1.8"
            >
              خیابان بهارستان، پلاک 123، تهران{" "}
            </Text>
          </VStack>
          <Icon
            as={MapPin}
            color={colors.dark}
            fontSize="20px"
            transition="transform 0.2s ease"
          />
        </HStack>
      </Stack>
    </Box>
  );
}

export default Address;
