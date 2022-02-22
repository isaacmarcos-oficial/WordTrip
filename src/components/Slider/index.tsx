import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Slider() {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable:true }}
        autoplay={{ delay:4000, }}
        style={{width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h={["250px", "450px"]}
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/europe.png)"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold" >Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt="2" >O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h={["250px", "450px"]}
            align="center"
            justify="center"
            direction="column"
            bgImage="url(https://images.unsplash.com/photo-1579578460685-632f4546a378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href="/continent/america">
              <a>
                <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold" >Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt="2" >O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}