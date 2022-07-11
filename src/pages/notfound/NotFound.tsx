import { Stack, VStack, Button, Image, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
// import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Link as RouterLink } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import notfound from '../../assets/notfound.webp';
import { ROUTE_MAINPAGE } from '../../constants/routes';

export const NotFoundPage = React.memo(() => {
  //   const { width } = useWindowDimensions();
  //   const [IsLargerThan320] = useMediaQuery('(min-width: 321px)');
  //   const [IsLargerThan768] = useMediaQuery('(min-width: 769px)');
  const [IsLargerThan1024] = useMediaQuery('(min-width: 1025px)');
  //   const [IsLargerThan620] = useMediaQuery('(min-width: 620px)');
  return (
    <Stack direction="column" bg="brand.grayvar2" spacing="0" marginBottom="0px">
      <Header />
      <VStack
        paddingX={['10px', '20px', '40px', '60px', '100px']}
        paddingY={['40px', '50px', '60px', '70px', '80px']}
        align="left"
      >
        <VStack maxW="400px" spacing="50px" align="left">
          <Image src={notfound} loading="lazy" w="400px" h="250px" />
          <Text>Такой страницы не существует. Попробуйте снова или перейдите на главную.</Text>
          <Button
            variant="brand-blue"
            h={IsLargerThan1024 ? '57px' : '50px'}
            w={IsLargerThan1024 ? '260px' : '200px'}
            paddingX="40px"
            paddingY="15px"
            fontWeight="400"
            as={RouterLink}
            to={ROUTE_MAINPAGE}
          >
            Перейти на главную
          </Button>
        </VStack>
      </VStack>
      <Footer />
    </Stack>
  );
});
