import { HStack, VStack, Text } from "@chakra-ui/react";
import TicketCard from "./ticketCard";
import { fonts } from "@/utilities/font";
import { colors } from "@/utilities/colors";
import { endedTicketsData } from "./ticketData";

const EndedTickets = () => {
  return (
    <>
      <VStack mx={"6%"} mb={"65px"} alignItems="stretch">
        <HStack justifyContent={"flex-end"} width={"100%"} mb="1%">
          <Text
            color={colors.black}
            fontFamily={fonts.bold}
            fontSize={{ base: 16, md: 18, lg: 20 }}
            textAlign="right"
          >
         تیکت های خاتمه یافته
          </Text>
        </HStack>
        {endedTicketsData.map((item, index) => (
          <TicketCard
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
            date={item.date}
            responderName={item.responderName}
            responderPosition={item.responderPosition}
            ticketNumber={item.ticketNumber}
            to="/ended-ticket-details"
          />
        ))}
      </VStack>
    </>
  );
};

export default EndedTickets;
