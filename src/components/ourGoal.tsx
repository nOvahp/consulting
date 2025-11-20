import { colors } from '@/utilities/colors'
import { fonts } from '@/utilities/font'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function OurGoal() {
  return (
    <Box mx="6%" mb={"65px"}>
        <Text fontFamily={fonts.bold}
                    fontSize={16}
                    color={colors.dark}
                    textAlign="right"
                    >
هدف اصلی ما ایجاد یک اکوسیستم حمایتی و هوشمند برای ارتقای مستمر کیفیت خدمات سلامت روان در کشور است. ما عمیقاً درک می‌کنیم که حرفه روان‌درمانی تا چه حد می‌تواند پیچیده و پرفشار باشد؛ درمانگران روزانه با چالش‌های عاطفی عمیق، نیاز به تصمیم‌گیری‌های حساس و لزوم به‌روزرسانی مداوم دانش خود مواجه هستند. این اکوسیستم برای آن طراحی شده که به عنوان یک شبکه ایمن و توانمندساز عمل کند و فضایی را برای رشد، یادگیری و دریافت پشتیبانی حرفه‌ای فراهم آورد تا هیچ درمانگری در این مسیر چالش‌برانگیز احساس تنهایی نکند.
        </Text>
    </Box>
  )
}

export default OurGoal