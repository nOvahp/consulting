import { SimpleGrid } from "@chakra-ui/react";
import feature1 from "../assets/featurecard1.png";
import feature2 from "../assets/featurecard2.png";
import feature3 from "../assets/featurecard3.png";
import FeatureCard, { type cardData } from "./FeatureCard";

const feature: cardData[] = [
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    image: feature1,
  },
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    image: feature2,
  },
  {
    title: "گزارش های جامع",
    description:
      " با گزارش‌های جامع ما، به دیدگاه‌های عمیق‌تری دست یابید و تصمیمات بهتری بگیرید.",
    image: feature3,
  },
];

function Features() {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} gap={4} mx={"6%"} mb={"65px"}>
      {feature.map((item, index) => (
        <FeatureCard
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </SimpleGrid>
  );
}

export default Features;
