import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  image: string;
  city: string;
  flag: string;
  country: string;
}

export default function City({image, city, flag, country}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/Citys/${image}.png`} h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500" >{city}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500" >{country}</Text>
        </Flex>
        <Image src={`/Flags/${flag}.svg`} w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  )
}

// import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react"

// interface TravelProps {
//   icon: string;
//   text: string;
// }

// export default function Travel({icon, text}:TravelProps ) {
//   const isMobile = useBreakpointValue({
//     base: false,
//     sm: true
//   })

//   return (
//     <Flex
//       direction={["row", "column"]}
//       align="center"
//       justify="center"
//     >
//       {isMobile ? <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" /> : <Text color="yellow.400" fontSize="4xl" mr="2" >•</Text>}
//       <Text fontWeight="600" color="dark.text" fontSize={["md", "xl", "2xl"]} >{text}</Text>
//     </Flex>
//   )
// }