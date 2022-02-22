import { Grid, GridItem } from "@chakra-ui/react";
import Travel from "./Travel";

export default function Travels() {  
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", ]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      <GridItem>
        <Travel icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Travel icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Travel icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Travel icon="museum" text="clássico" />
      </GridItem>
      <GridItem>
        <Travel icon="earth" text="e mais" />
      </GridItem>
    </Grid>
  )
}