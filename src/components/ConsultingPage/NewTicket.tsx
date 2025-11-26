import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
  HStack,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { colors } from "@/utilities/colors";
import { fonts } from "@/utilities/font";
import newTicket from "../../assets/newTicket.png";

const ticketSchema = z.object({
  fullName: z
    .string()
    .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد")
    .max(100, "نام و نام خانوادگی نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد"),
  phone: z
    .string()
    .min(1, "لطفاً شماره تلفن را وارد کنید")
    .regex(/^[0-9+\-\s()]+$/, "شماره تلفن معتبر نیست"),
  email: z
    .string()
    .min(1, "لطفاً ایمیل را وارد کنید")
    .email("ایمیل معتبر نیست"),
  description: z
    .string()
    .min(10, "توضیحات باید حداقل ۱۰ کاراکتر باشد")
    .max(1000, "توضیحات نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد"),
  confirmation: z.boolean().refine((val) => val === true, {
    message: "لطفاً تایید را انجام دهید",
  }),
});

type TicketFormData = z.infer<typeof ticketSchema>;

const NewTicket = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit = async (data: TicketFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box mx="6%" mb="65px">
      <HStack
        alignItems="flex-start"
        gap={{ base: 6, lg: 12 }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image
          src={newTicket}
          alt="image"
          maxW={{ base: "100%", lg: "40%" }}
          objectFit="contain"
        />
        <VStack
          alignItems="stretch"
          gap={6}
          maxW="800px"
          mx="auto"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flex={1}
        >
          <Text
            color={colors.black}
            fontFamily={fonts.bold}
            fontSize={{ base: 20, md: 24, lg: 28 }}
            textAlign="right"
            mb={2}
          >
            ایجاد تیکت جدید
          </Text>

          <Box>
            <Text
              color={colors.dark}
              fontFamily={fonts.semiBold}
              fontSize={{ base: 14, md: 16 }}
              textAlign="right"
              mb={2}
            >
              نام و نام خانوادگی
            </Text>
            <Input
              {...register("fullName")}
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              bg={colors.background}
              borderColor={errors.fullName ? "red.500" : colors.border}
              borderWidth={2}
              borderRadius={8}
              py={3}
              px={4}
              fontSize={{ base: 14, md: 16 }}
              fontFamily={fonts.body}
              textAlign="right"
              color={colors.black}
            />
            {errors.fullName && (
              <Text
                color="red.500"
                fontFamily={fonts.body}
                fontSize={12}
                textAlign="right"
                mt={1}
              >
                {errors.fullName.message}
              </Text>
            )}
          </Box>
          <HStack
            gap={4}
            alignItems="flex-start"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box flex={1} width={{ base: "100%", md: "auto" }}>
              <Text
                color={colors.dark}
                fontFamily={fonts.semiBold}
                fontSize={{ base: 14, md: 16 }}
                textAlign="right"
                mb={2}
              >
                شماره تلفن
              </Text>
              <Input
                {...register("phone")}
                type="tel"
                placeholder="شماره تلفن خود را وارد کنید"
                bg={colors.background}
                borderColor={errors.phone ? "red.500" : colors.border}
                borderWidth={2}
                borderRadius={8}
                py={3}
                px={4}
                fontSize={{ base: 14, md: 16 }}
                fontFamily={fonts.body}
                textAlign="right"
                width="100%"
                color={colors.black}
              />
              {errors.phone && (
                <Text
                  color="red.500"
                  fontFamily={fonts.body}
                  fontSize={12}
                  textAlign="right"
                  mt={1}
                >
                  {errors.phone.message}
                </Text>
              )}
            </Box>

            <Box flex={1} width={{ base: "100%", md: "auto" }}>
              <Text
                color={colors.dark}
                fontFamily={fonts.semiBold}
                fontSize={{ base: 14, md: 16 }}
                textAlign="right"
                mb={2}
              >
                ایمیل
              </Text>
              <Input
                {...register("email")}
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                bg={colors.background}
                borderColor={errors.email ? "red.500" : colors.border}
                borderWidth={2}
                borderRadius={8}
                py={3}
                px={4}
                fontSize={{ base: 14, md: 16 }}
                fontFamily={fonts.body}
                textAlign="right"
                width="100%"
                color={colors.black}
              />
              {errors.email && (
                <Text
                  color="red.500"
                  fontFamily={fonts.body}
                  fontSize={12}
                  textAlign="right"
                  mt={1}
                >
                  {errors.email.message}
                </Text>
              )}
            </Box>
          </HStack>
          <Box>
            <Text
              color={colors.dark}
              fontFamily={fonts.semiBold}
              fontSize={{ base: 14, md: 16 }}
              textAlign="right"
              mb={2}
            >
              توضیحات
            </Text>
            <Textarea
              {...register("description")}
              placeholder="توضیحات کامل تیکت خود را وارد کنید"
              bg={colors.background}
              borderColor={errors.description ? "red.500" : colors.border}
              borderWidth={2}
              borderRadius={8}
              py={3}
              px={4}
              fontSize={{ base: 14, md: 16 }}
              fontFamily={fonts.body}
              textAlign="right"
              minH="150px"
              resize="vertical"
              color={colors.black}
            />
            {errors.description && (
              <Text
                color="red.500"
                fontFamily={fonts.body}
                fontSize={12}
                textAlign="right"
                mt={1}
              >
                {errors.description.message}
              </Text>
            )}
          </Box>

          <Box width="100%">
            <Box display="flex" justifyContent="flex-end" width="100%">
              <Controller
                name="confirmation"
                control={control}
                render={({ field }) => (
                  <Checkbox.Root
                    checked={field.value || false}
                    onCheckedChange={(details) =>
                      field.onChange(details.checked)
                    }
                    colorPalette="blue"
                    size="md"
                    alignItems="flex-start"
                    gap={2}
                    flexDirection="row"
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Label>
                      <Text
                        color={colors.dark}
                        fontFamily={fonts.body}
                        fontSize={{ base: 13, md: 14 }}
                        textAlign="right"
                      >
                        من قوانین و مقررات پلتفرم و سیاست حفظ حریم خصوصی را می
                        پذیرم
                      </Text>
                    </Checkbox.Label>
                    <Checkbox.Control />
                  </Checkbox.Root>
                )}
              />
            </Box>
            {errors.confirmation && (
              <Text
                color="red.500"
                fontFamily={fonts.body}
                fontSize={12}
                textAlign="right"
                mt={1}
              >
                {errors.confirmation.message}
              </Text>
            )}
          </Box>

          <HStack gap={3} justifyContent="flex-end" width="100%">
            <Box position="relative" as="label">
              <input
                type="file"
                multiple
                style={{ display: "none" }}
                id="file-upload"
                onChange={(e) => {
                  console.log("Files selected:", e.target.files);
                }}
              />
              <Button
                as="span"
                bg={colors.background}
                color={colors.dark}
                borderWidth="2px"
                borderColor={colors.border}
                fontFamily={fonts.semiBold}
                fontSize={{ base: 14, md: 16 }}
                py={3}
                px={6}
                borderRadius={8}
                cursor="pointer"
                _hover={{
                  bg: colors.background,
                  borderColor: colors.button.solid,
                  opacity: 0.9,
                }}
                _active={{
                  bg: colors.background,
                  opacity: 0.8,
                }}
              >
                افزودن فایل
              </Button>
            </Box>
            <Button
              type="submit"
              bg={colors.button.solid}
              color={colors.white}
              fontFamily={fonts.semiBold}
              fontSize={{ base: 14, md: 16 }}
              py={3}
              px={6}
              flex={1}
              borderRadius={8}
              loading={isSubmitting}
              disabled={isSubmitting}
              _hover={{
                bg: colors.button.solid,
                opacity: 0.9,
              }}
              _active={{
                bg: colors.button.solid,
                opacity: 0.8,
              }}
            >
              {isSubmitting ? "در حال ارسال..." : "ارسال تیکت"}
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default NewTicket;
