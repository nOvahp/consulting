import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import DOCX from "../assets/docx.png";
import IMG from "../assets/img.png";
import MOV from "../assets/mov.png";
import LatestPostCardOpen, { type LatestPostCardDataOpen } from "./LatestPostCardOpen";

const feature: LatestPostCardDataOpen[] = [
  {
    date: "۱۹ اردیبهشت ۱۴۰۳",
    title: "دستورالعمل فعالیت های هفته بهداشت روان",
    description:
      " این راهنما شامل دستورالعمل‌ها، نکات کلیدی و توصیه‌های عملی برای شرکت فعال و موثر در برنامه‌های هفته بهداشت روان است. با مطالعه دقیق این فایل، شما می‌توانید نقش مهمی در ارتقاء آگاهی و بهبود سلامت روان جامعه ایفا کنید و از فرصت‌های ارائه شده به نحو احسن بهره‌مند شوید.",
    image: DOCX,
    subTitle : "فعالیت های هفته بهداشت روان | ",
    place :"دبیرخانه شماره یک",
    shareImage:IMG,
    View :"137 بازدید",
    like :"1.7 هزار پسند",


  },
  {
    date: "۲۱ اردیبهشت ۱۴۰۳",
    title: "کارگاه مهارت‌های ارتباطی",
    description:
      "این کارگاه تمرکز بر بهبود مهارت‌های ارتباطی فردی و گروهی دارد و به شرکت‌کنندگان ابزارهای لازم برای برقراری ارتباط موثر را آموزش می‌دهد.",
    image: MOV,
    subTitle : "فعالیت های هفته بهداشت روان | ",
    place :"دبیرخانه شماره یک",
    shareImage:IMG,
    View :"137 بازدید",
    like :"1.7 هزار پسند",
  },
  {
    date: "۲۳ اردیبهشت ۱۴۰۳",
    title: "کنفرانس سلامت جامعه",
    description:
      "این کنفرانس شامل سخنرانی‌هایی از پزشکان و متخصصان سلامت است که به بحث در مورد چالش‌های سلامت جامعه و راه‌های بهبود آن می‌پردازد.",
    image: IMG,
    subTitle : "فعالیت های هفته بهداشت روان | ",
    place :"دبیرخانه شماره یک",
    shareImage:IMG,
    View :"137 بازدید",
    like :"1.7 هزار پسند",
  },
];

function LatestPost() {
  return (
    <>
      <VStack mx={"6%"} mb={"65px"} alignItems="stretch">
        <HStack justifyContent={"space-between"} width={"100%"}>
          <Button fontFamily={fonts.body} fontSize={13} color={colors.dark}>
            مشاهده همه
          </Button>
          <Text color={colors.black} fontFamily={fonts.bold} fontSize={20}>
            آخرین مطالب
          </Text>
        </HStack>
        {feature.map((item, index) => (
        <LatestPostCardOpen
          key={`${item.title}-${index}`}
          date={item.date}
          title={item.title}
          description={item.description}
          image={item.image}
          subTitle={item.subTitle}
          place={item.place}
          shareImage={item.shareImage}
          View={item.View}
          like={item.like}
        />
      ))}
        
      </VStack>
    </>
  );
}

export default LatestPost;
