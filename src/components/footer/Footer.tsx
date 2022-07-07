import { Box, HStack, VStack, Image, Button, Text, useMediaQuery, Stack } from '@chakra-ui/react';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

import logovector from '../../assets/logovector.png';
import ulsmtlogo from '../../assets/ulsmtlogo.png';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const Footer = React.memo(() => {
  const { width } = useWindowDimensions();
  const [IsLargerThan320] = useMediaQuery('(min-width: 321px)');
  const [IsLargerThan768] = useMediaQuery('(min-width: 769px)');
  const [IsLargerThan1024] = useMediaQuery('(min-width: 1025px)');
  const [IsLargerThan620] = useMediaQuery('(min-width: 620px)');
  return (
    <VStack
      w="full"
      bgColor="brand.grayvar2"
      h={['190px', '210px', '230px', '250px', '270px']}
      justify="flex-end"
      marginBottom="0"
      margin="0"
    >
      <Stack
        pos="relative"
        top="50px"
        w={(width / 16) * 14}
        layerStyle="brand-gradient-blue"
        align="center"
        justify="space-around"
        padding={['5px', '10px', '20px', '30px', '40px']}
        direction={IsLargerThan320 ? 'row' : 'column'}
        marginBottom="20px"
      >
        <HStack>
          <Text fontSize={['14px', '16px', '18px', '20px', '36px']} fontWeight="600" color="brand.white">
            Свяжитесь с нами
          </Text>
        </HStack>
        <Stack direction={IsLargerThan768 ? 'row' : 'column'} spacing={['10px', '20px', '30px', '40px', '80px']}>
          <HStack spacing={2}>
            <HStack backgroundColor="brand.black" borderRadius="full" w="50px" h="50px" align="center" justify="center">
              <BsFillTelephoneFill color="white" />
            </HStack>
            <VStack align="start" justify="start" spacing={0}>
              <Text fontSize={['10px', '14px', '16px', '18px', '20px']} fontWeight="400" color="brand.white">
                Телефон:
              </Text>
              <Text fontSize={['14px', '16px', '18px', '20px', '24px']} fontWeight="600" color="brand.white">
                +7(999)999-99-99
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={2}>
            <HStack backgroundColor="brand.black" borderRadius="full" w="50px" h="50px" align="center" justify="center">
              <BsFillTelephoneFill color="white" />
            </HStack>
            <VStack align="start" justify="start" spacing={0}>
              <Text fontSize={['10px', '14px', '16px', '18px', '20px']} fontWeight="400" color="brand.white">
                Email:
              </Text>
              <Text fontSize={['14px', '16px', '18px', '20px', '24px']} fontWeight="600" color="brand.white">
                smtulsk@support.ru
              </Text>
            </VStack>
          </HStack>
        </Stack>
      </Stack>
      <HStack
        w="full"
        h={['200px', '210px', '215px', '220px', '230px']}
        justify="space-between"
        align="flex-end"
        paddingX="70px"
        paddingY="50px"
        layerStyle="brand-gradient-dark-blue"
        margin="20px"
        spacing="0"
      >
        <HStack justify="space-between" align="center" w="full">
          <HStack justify="space-between">
            {IsLargerThan1024 ? (
              <HStack minW="114px">
                <Box>
                  <Image
                    src={logovector}
                    alt="ULSMT"
                    loading="lazy"
                    w={['40px', '40px', '40px', '53px']}
                    h={['40px', '40px', '40px', '53px']}
                  />
                </Box>
                <Box>
                  <Image
                    src={ulsmtlogo}
                    alt="монтаж печатных плат"
                    loading="lazy"
                    w={['53px', '74px', '74px', '120px']}
                    h={['40px', '40px', '40px', '53px']}
                  />
                </Box>
              </HStack>
            ) : (
              <Box minW="40px">
                <Image
                  src={logovector}
                  alt="ULSMT"
                  loading="lazy"
                  w={['40px', '40px', '40px', '53px']}
                  h={['40px', '40px', '40px', '53px']}
                />
              </Box>
            )}
          </HStack>
          <HStack spacing={['0px', '10px', '20px', '30px', '40px']} justify="center">
            {IsLargerThan620 ? (
              <>
                <Button variant="brand-dark-button" w="100px" fontWeight='400'>
                  О компании
                </Button>
                <Button variant="brand-dark-button" w="100px" fontWeight='400'>
                  Услуги
                </Button>
                <Button variant="brand-dark-button" w="100px" fontWeight='400'>
                  Документация
                </Button>
                <Button variant="brand-dark-button" w="100px" fontWeight='400'>
                  Контакты
                </Button>
              </>
            ) : (
              <HStack></HStack>
            )}
          </HStack>
          <HStack>
            <Text fontSize="16px" fontWeight="400" color="brand.grayvar2">
              © 2022 ULSMT
            </Text>
          </HStack>
        </HStack>
      </HStack>
    </VStack>
  );
});
