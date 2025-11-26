import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ChevronLeft, FileQuestionMark } from "lucide-react";
import { Link } from "react-router-dom";
import type { ConsultingCardData } from "./ticketData";


type TicketCardProps = ConsultingCardData & {
  to?: string; 
};
function TicketCard({ ticketNumber,
  title,
  description,
  date,
  responderName,
  responderPosition,
  to="/ticket-details" }: TicketCardProps) {
  return (
    <Link
     to={to}
      state={{ ticketNumber, title, description, date, responderName, responderPosition }}   
      style={{ textDecoration: "none", display: "block", width: "100%" }}
    >
      <Box
        width="100%"
        padding={0}
        height="auto"
        justifyContent="flex-start"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.01)",
        }}
      >
        <HStack
          borderRadius={12}
          borderWidth={2}
          bg={colors.background}
          borderColor={colors.border}
          py="1%"
          px="1%"
          gap="2%"
          alignItems="flex-start"
          width="100%"
          minWidth={0}
        >
          <Icon
            as={ChevronLeft}
            color={colors.dark}
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            transition="transform 0.2s ease"
          />

          <VStack
            alignItems="flex-end"
            flex="1"
            minWidth={0}
            width="100%"
            gap={2}
          >
            <Text
              fontFamily={fonts.bold}
              fontSize={{ base: 13, md: 14, lg: 15 }}
              color="black"
              textAlign="right"
              wordBreak="break-word"
              whiteSpace="normal"
              overflowWrap="break-word"
              width="100%"
            >
              {title}
            </Text>

            
          </VStack>

          <Icon
            as={FileQuestionMark}
            color={colors.dark}
            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
          />
        </HStack>
      </Box>
    </Link>
  );
}

export default TicketCard;
