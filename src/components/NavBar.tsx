import { Button, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Button>حساب کاربری</Button>
      <Button>سوالات متداول</Button>
      <Button>نظرسنجی ها</Button>
      <Button>گزارش های جامع</Button>
      <Button>ارتباط با مشاور</Button>
      <Button>راهنمای هوشمند</Button>
      <Button>مطالب آموزشی</Button>
      <Button>سامانه مشاور</Button>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
