import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import ThemeButton from "~/components/ThemeButton";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" flex={1}>
      <ThemeButton aria-label="Toggle light-dark mode" />
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="2xl" fontWeight="bold">
          NextJS 13 - Chakra UI - Typescript
        </Text>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold">
          Shirjoy Bhuban
        </Text>
    </Flex>
  );
};

export default Home;
