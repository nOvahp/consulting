import Activation from "@/components/activation";
import Address from "@/components/Address";
import ConsultingHero from "@/components/ConsultingPage/ConsultingHero";
import EndedTickets from "@/components/ConsultingPage/EndedTickets";
import NewTicket from "@/components/ConsultingPage/NewTicket";
import Tickets from "@/components/ConsultingPage/tickets";

const ConsultingPage = () => {
  return (
    <>
      <ConsultingHero />

      <Tickets />

      <NewTicket />
      <EndedTickets />
      <Activation />
      <Address />
    </>
  );
};

export default ConsultingPage;
