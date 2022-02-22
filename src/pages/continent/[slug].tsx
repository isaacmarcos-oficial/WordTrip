import { Flex, } from "@chakra-ui/react";
import Content from "../../components/Content";
import Cities from "../../components/Cities";
import ContinentBanner from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Ccontinent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160" mx="auto" mb="18" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  )
}