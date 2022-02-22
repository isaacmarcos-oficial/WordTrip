import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>

      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City image="Londres" city="Londres" flag="Reino Unido" country="Reino Unido" />
        <City image="Paris" city="Paris" flag="França" country="França" />
        <City image="Roma" city="Roma" flag="Itália" country="Itália" />
        <City image="Praga" city="Praga" flag="República Tcheca" country="República Tcheca" />
        <City image="Amsterdã" city="Amsterdã" flag="Holanda" country="Holanda" />
      </Grid>
    </>
  )
}