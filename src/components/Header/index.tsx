import { Image, Flex, Grid, Icon, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/"

  return (
    <Flex
      as='header'
      w="100%"
      mx='auto'
      px='1rem'
      maxW='1160px'
      align='center'
      justify='center'
      h= "4em"
    >
      <Grid
        h='100%'
        w='100%'
        mx='auto'
        maxW="1160px"
        alignItems='center'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
        alignSelf='start'
      >
        
        {notHomePage && (
          <Link href='/'>
          <a>
            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
          </a>
        </Link>
        )}
        
        <Image
          src="/logo.svg"
          justifySelf="center"
          gridAutoColumns="2"
        />

      </Grid>
    </Flex>
  )
}