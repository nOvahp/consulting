import { HStack, VStack, Text } from "@chakra-ui/react";
import TicketCard, { type ConsultingCardData } from "./ticketCard";
import { fonts } from "@/utilities/font";
import { colors } from "@/utilities/colors";

const feature: ConsultingCardData[] = [
  {
    title: "مشاوره فنی",
    description:
      "در صورت نیاز به راهنمایی و مشاوره فنی، می‌توانید سوالات خود را ارسال کنید و در اسرع وقت پاسخ دریافت خواهید کرد.",
  },
  {
    title: "پشتیبانی آنلاین",
    description:
      "برای دریافت پشتیبانی آنلاین و حل مشکلات احتمالی، تیکت خود را ایجاد کنید تا تیم پشتیبانی ما با شما تماس بگیرند.",
  },
  {
    title: "راهنمایی استفاده از سیستم",
    description:
      "اگر در استفاده از سیستم یا بخشی از آن مشکل دارید، می‌توانید از طریق این بخش راهنمایی دریافت کنید.",
  },
  {
    title: "گزارش مشکل",
    description:
      "در صورت بروز هرگونه مشکل یا باگ در سیستم، لطفاً آن را از طریق این بخش گزارش دهید تا در سریع‌ترین زمان ممکن برطرف شود.",
  },
  {
    title: "درخواست ویژگی جدید",
    description:
      "اگر پیشنهادی برای بهبود سیستم یا افزودن ویژگی جدید دارید، می‌توانید از طریق این بخش درخواست خود را ارسال کنید.",
  },
  {
    title: "سوالات متداول",
    description:
      "برای مشاهده پاسخ سوالات متداول و راهنمایی‌های عمومی، می‌توانید از این بخش استفاده کنید.",
  },
];

const tickets = () => {
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
            تیکت های فعال
          </Text>
        </HStack>
        {feature.map((item, index) => (
          <TicketCard
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </VStack>
    </>
  );
};

export default tickets;
