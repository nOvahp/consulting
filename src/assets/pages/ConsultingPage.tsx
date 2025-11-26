import ConsultingHero from "@/components/ConsultingPage/ConsultingHero";
import NewTicket from "@/components/ConsultingPage/NewTicket";
import Tickets from "@/components/ConsultingPage/tickets";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const ConsultingPage = () => {
  return (
    <>
      <ConsultingHero />

      <Tickets />

      <NewTicket />
    </>
  );
};

export default ConsultingPage;
