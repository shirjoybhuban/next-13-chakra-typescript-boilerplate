import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <Flex flexDir="column" flex={1}>
      <Text
      >
        404
      </Text>
      <Text
      >
        Page not found
      </Text>
    </Flex>
  );
};

export default NotFound;
