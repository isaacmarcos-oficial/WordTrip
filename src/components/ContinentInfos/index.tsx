import { Button, Flex, Grid, GridItem, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi'

export default function ContinentInfos() {
  return (
    <Flex
      align="center"
      justifyContent="space-between"
    >
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
          <Heading color="yellow.500" fontWeight="600" fontSize={["2xl", "5xl"]} lineHeight="72px" >50</Heading>
          <Text fontWeight="600" fontSize={["md", "xl"]} lineHeight="36px" >países</Text>
        </Flex>
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
          <Heading color="yellow.500" fontWeight="600" fontSize={["2xl", "5xl"]} lineHeight="72px" >60</Heading>
          <Text fontWeight="600" fontSize={["md", "xl"]} lineHeight="36px" >línguas</Text>
        </Flex>
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
          <Heading color="yellow.500" fontWeight="600" fontSize={["2xl", "5xl"]} lineHeight="72px" >27</Heading>
          <Text fontWeight="600" fontSize={["md", "xl"]} lineHeight="36px" >
            cidades +100
          <Popover>
            <PopoverTrigger >
              <span>
                <Icon cursor="pointer" as={FiInfo} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400" border="none" pt="3">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="sm">Copenhague(DIN) · Estocolmo(SUE) · Zurique(SUI) · Gdańsk(POL)
              </PopoverBody>
            </PopoverContent>
          </Popover>
          </Text>
        </Flex>
    </Flex>
  )
}