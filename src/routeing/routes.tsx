import ConsultingPage from "@/assets/pages/ConsultingPage";
import Contents from "@/assets/pages/ContentsPage";
import EndedTicketReview from "@/assets/pages/EndedTicketReview";
import FAQPage from "@/assets/pages/FAQPage";
import HomePage from "@/assets/pages/HomePage";
import Layout from "@/assets/pages/Layout";
import TicketReview from "@/assets/pages/TicketReview";
import ErrorPage from "@/assets/pages/ٍErrorPage";
import AccountPage from "@/assets/pages/AccountPage";
import SurveysPage from "@/assets/pages/SurveysPage";
import ReportsPage from "@/assets/pages/ReportsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "content",
        element: <Contents />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "surveys",
        element: <SurveysPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "Consulting",
        element: <ConsultingPage />,
      },
      {
        path: "ticket-details",
        element: <TicketReview />,
      },
      {
        path: "/ended-ticket-details",
        element: <EndedTicketReview />,
      },
    ],
  },
]);

export default router;
