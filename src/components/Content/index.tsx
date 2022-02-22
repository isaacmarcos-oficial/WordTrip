import { Grid, GridItem, Text } from "@chakra-ui/react";
import ContinentInfos from "../ContinentInfos";

export default function Content() {
  return (
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]} gap ={[5, 10, 16, 20]} my={["8", "20"]}>
        <GridItem>
          <Text textAlign="justify" fontSize="24px" fontWeight="400" >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </GridItem>
        <GridItem alignItems="center" justifyItems="center">
          <ContinentInfos />
        </GridItem>
      </Grid>
  )
}