import { Button, Flex, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Button variant="primary">
        <Text as="span">Hello world! 👋</Text> <FaPlus />
      </Button>
    </Flex>
  );
};

export default Index;
