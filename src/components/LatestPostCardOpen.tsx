import { useState } from "react";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import {
  Button,
  HStack,
  VStack,
  Text,
  Image,
  Box,
  Icon,
} from "@chakra-ui/react";
import { CloudDownload } from "lucide-react";
import { FileOutput } from "lucide-react";
import { Printer } from "lucide-react";

export interface LatestPostCardDataOpen {
  date: string;
  title: string;
  description: string;
  image: string;
  subTitle: string;
  place: string;
  shareImage: string;
  View: string;
  like: string;
}

function LatestPostCardOpen({
  date,
  title,
  description,
  image,
  subTitle,
  place,
  shareImage,
  View,
  like,
}: LatestPostCardDataOpen) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box width="100%" padding={0} height="auto" justifyContent={"flex-start"}>
      <HStack
        borderRadius={12}
        borderWidth={2}
        bg={colors.background}
        borderColor={colors.border}
        py={"1%"}
        px={"1%"}
        gap={"2%"}
        alignItems="flex-start"
        width={"100%"}
        minWidth={0}
      >
        <VStack
          alignItems="flex-end"
          flex="1"
          minWidth={0}
          width="100%"
          gap={2}
        >
          <Text
            fontFamily={fonts.body}
            fontSize={12}
            textAlign="right"
            wordBreak="break-word"
            whiteSpace="normal"
            overflowWrap="break-word"
            width="100%"
            color={colors.dark}
          >
            {date}
          </Text>
          <Text
            fontFamily={fonts.bold}
            fontSize={24}
            color="black"
            textAlign="right"
            wordBreak="break-word"
            whiteSpace="normal"
            overflowWrap="break-word"
            width="100%"
          >
            {title}
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
          >
            {description}
          </Text>
          {isExpanded && (
            <>
              <HStack
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                color={colors.dark}
              >
                <Box flex={1}>
                  <HStack gap={4}>
                    <Text
                      fontFamily={fonts.bold}
                      fontSize={12}
                      color="black"
                      textAlign="right"
                    >
                      {like}
                    </Text>
                    <Text
                      fontFamily={fonts.bold}
                      fontSize={12}
                      color="black"
                      textAlign="right"
                    >
                      {View}
                    </Text>
                    <Image
                      marginLeft="3%"
                      src={shareImage}
                      width="20px"
                      height="auto"
                      flexShrink={0}
                    />
                  </HStack>
                </Box>
                <Box>
                  <HStack gap={4}>
                    <Text
                      fontFamily={fonts.bold}
                      fontSize={12}
                      color="black"
                      textAlign="right"
                      whiteSpace="nowrap"
                    >
                      {place}
                    </Text>
                    <Text
                      fontFamily={fonts.bold}
                      fontSize={12}
                      color="black"
                      textAlign="right"
                      whiteSpace="nowrap"
                    >
                      {subTitle}
                    </Text>
                    <Image
                      marginLeft="3%"
                      src={shareImage}
                      width="20px"
                      height="auto"
                      flexShrink={0}
                    />
                  </HStack>
                </Box>
              </HStack>
              <HStack
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                color={colors.dark}
                gap={3}
              >
                <Button bg={colors.button.Thirdly} flex={1} width="100%">
                  چاپ فایل
                  <Icon as={Printer} />
                </Button>
                <Button bg={colors.button.secondory} flex={1} width="100%">
                  مشاهده فایل
                  <Icon as={FileOutput} />
                </Button>
                <Button bg={colors.button.solid} flex={1} width="100%">
                  دانلود فایل
                  <Icon as={CloudDownload} />
                </Button>
              </HStack>
            </>
          )}
        </VStack>

        <Image
          marginLeft="0%"
          src={image}
          width="70px"
          height="auto"
          flexShrink={0}
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          onClick={() => setIsExpanded((prev) => !prev)}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          }}
        />
      </HStack>
    </Box>
  );
}

export default LatestPostCardOpen;
