import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner";
import { Header } from "../components/Header";
import Separator from "../components/separator";
import Slider from "../components/Slider";
import Travels from "../components/Travels";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | Wordtrip</title>
      </Head>
      
      <Header />
      <Banner />
      <Travels />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}