import { Box, Image } from "@chakra-ui/react";
import blockImage from "../assets/Block.png";

const HeroBox = () => {
  return (
    <Box mx="6%" borderWidth={5}>
      <Image
        src={blockImage}
        alt="hero"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default HeroBox;
