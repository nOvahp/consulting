import { HStack } from "@chakra-ui/react";
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
    <HStack mx={"6%"} mb={"30px"} >
      <FeatureCard
        title={feature[0].title}
        description={feature[0].description}
        image={feature[0].image}
      />
      <FeatureCard
        title={feature[1].title}
        description={feature[1].description}
        image={feature[1].image}
      />
      <FeatureCard
        title={feature[2].title}
        description={feature[2].description}
        image={feature[2].image}
      />
    </HStack>
  );
}

export default Features;
