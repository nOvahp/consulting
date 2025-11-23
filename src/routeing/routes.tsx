import Contents from "@/assets/pages/Contents";
import FAQPage from "@/assets/pages/FAQPage";
import HomePage from "@/assets/pages/HomePage";
import Layout from "@/assets/pages/Layout";
import ErrorPage from "@/assets/pages/ٍErrorPage";
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
        path: "faq",
        element: <FAQPage />
      }
    ],
  },
]);

export default router;
