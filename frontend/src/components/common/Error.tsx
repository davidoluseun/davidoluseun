import { Flex, Text, Heading, Button } from "@chakra-ui/react";

type ErrorProps = {
  onTryAgain: () => void;
  text: string;
};

const Error = ({ onTryAgain, text }: ErrorProps) => {
  return (
    <Flex
      p="4"
      h="100vh"
      as="section"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading as="h1" fontSize={{ sm: "24px" }}>
        Something Went Wrong
      </Heading>
      <Text
        mb="4"
        maxW="470px"
        textAlign="center"
        fontSize={{ sm: "18px" }}
        mt={{ base: "1", sm: "2" }}
      >
        {text}
      </Text>
      <Button
        bg="primary"
        color="#fff"
        _hover={{ bg: "primary" }}
        _active={{ bg: "primary" }}
        onClick={onTryAgain}
      >
        Try Again
      </Button>
    </Flex>
  );
};

export default Error;
