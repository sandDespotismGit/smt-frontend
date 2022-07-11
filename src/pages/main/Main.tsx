import {
  Stack,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  UnorderedList,
  ListItem,
  Input,
  Textarea,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { GiRobotGrab } from 'react-icons/gi';
import { FaRegHandPaper } from 'react-icons/fa';
import { BsFillTelephoneFill, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// import { Formik } from 'formik';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { SupportTicketForm } from '../../interfaces/SupportTicketForm';
import microchip from '../../assets/microchip.webp';
import vectorbgsmall from '../../assets/vectorbgsmall.svg';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import vectorbgbig from '../../assets/vectorbgbig.svg';
import microchipclean from '../../assets/microchipclean.webp';
import microchipinside from '../../assets/microchipinside.webp';
import projectmake from '../../assets/projectmake.webp';
import parts from '../../assets/parts.webp';
import chipmaking from '../../assets/chipmaking.webp';
import printer from '../../assets/printer.webp';
import autocomponents from '../../assets/autocomponents.webp';
import makechip from '../../assets/makechip.webp';
import chipwash from '../../assets/chipwash.webp';
import chip1 from '../../assets/chip1.webp';
import chip2 from '../../assets/chip2.webp';
import chip3 from '../../assets/chip3.webp';

export const Main = React.memo(() => {
  const cards = [chip1, chip2, chip3];
  const [centralCard, setCard] = useState(1);
  const [LCard, setLCard] = useState(0);
  const [RCard, setRCard] = useState(2);
  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();
  const [IsLargerThan320] = useMediaQuery('(min-width: 321px)');
  const [IsLargerThan1024] = useMediaQuery('(min-width: 1025px)');
  const [IsLargerThan768] = useMediaQuery('(min-width: 769px)');
  const [IsLargerThan620] = useMediaQuery('(min-width: 620px)');
  const [IsLargerThan420] = useMediaQuery('(min-width: 420px)');
  const FormValidation = Yup.object().shape({
    email: Yup.string().email('invalid email adress').required('required'),
    name: Yup.string().min(2, 'must be at least 2 characters').required('required'),
    message: Yup.string().min(10, 'too short for submit').required('required'),
  });

  const handleFormSubmit = useCallback((values: SupportTicketForm) => {
    // eslint-disable-next-line no-console
    console.log(values);
  }, []);

  return (
    <Stack direction="column" bg="brand.grayvar2" spacing="0" marginBottom="0px">
      <Header />
      <Stack direction={IsLargerThan768 ? 'row' : 'column'} marginTop="0px" justify="space-between" align="flex-start">
        <VStack
          paddingX={['10px', '20px', '40px', '60px', '100px']}
          paddingY={['40px', '50px', '60px', '70px', '80px']}
          align={IsLargerThan320 ? 'left' : 'space-around'}
          justify="center"
          zIndex={2}
          spacing={IsLargerThan1024 ? '25px' : '15px'}
        >
          <Text fontSize={['16px', '18px', '20px', '22px', '24px']} fontWeight="400" color="brand.gray">
            БЫСТРО И КАЧЕСТВЕННО
          </Text>
          <HStack>
            <Text fontSize={['24px', '28px', '32px', '46px', '50px']} fontWeight="700" color="brand.black">
              Автоматический монтаж{' '}
              <Text fontSize={['24px', '28px', '32px', '46px', '50px']} fontWeight="700" color="brand.blue">
                печатных плат
              </Text>
            </Text>
          </HStack>
          <VStack align={IsLargerThan320 ? 'left' : 'space-around'} spacing={IsLargerThan1024 ? '35px' : '20px'}>
            <VStack align={IsLargerThan320 ? 'left' : 'space-around'} spacing={0}>
              <Text fontSize={['16px', '18px', '20px', '22px', '24px']} fontWeight="400" color="brand.gray">
                Собственное производство.
              </Text>
              <Text fontSize={['16px', '18px', '20px', '22px', '24px']} fontWeight="400" color="brand.gray">
                Линии автоматического монтажа.
              </Text>
              <Text fontSize={['16px', '18px', '20px', '22px', '24px']} fontWeight="400" color="brand.gray">
                Доставим готовые изделия в любую точку России.
              </Text>
            </VStack>
            <Button
              variant="brand-blue"
              h={IsLargerThan1024 ? '57px' : '50px'}
              w={IsLargerThan1024 ? '260px' : '200px'}
              paddingX="40px"
              paddingY="15px"
              fontWeight="400"
            >
              Заказать монтаж
            </Button>
          </VStack>
        </VStack>
        <HStack margin="0" padding="0">
          <Image src={microchip} loading="lazy" zIndex={2} />
        </HStack>
        {IsLargerThan1024 ? (
          <Image src={vectorbgsmall} pos="absolute" zIndex={1} top={height / 3} left={width / 2 - 70} loading="lazy" />
        ) : (
          <HStack></HStack>
        )}
        {IsLargerThan320 ? (
          <Image src={vectorbgbig} pos="absolute" zIndex={1} top="1100px" right={width - 300} loading="lazy" />
        ) : (
          <HStack></HStack>
        )}
      </Stack>
      <VStack
        paddingX={['10px', '20px', '40px', '60px', '100px']}
        align="left"
        marginBottom="60px"
        paddingBottom="120px"
      >
        <HStack borderBottom="5px solid #1D8FE4" w={['220px', '240px', '270px', '320px', '420px']}>
          <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.black">
            Виды монтажа
          </Text>
        </HStack>
        <HStack>
          <Stack
            w="full"
            layerStyle="brand-gradient-dark-blue"
            paddingX={['20px', '30px', '40px', '50px', '60px']}
            marginTop="60px"
            paddingY="30px"
            align={IsLargerThan620 ? 'left' : 'center'}
            spacing={['20px', '30px', '40px', '50px', '60px']}
            justify="center"
            zIndex={2}
            direction={IsLargerThan620 ? 'row' : 'column'}
          >
            <VStack align="center" justify="center" spacing="25px" maxW={(width / 3) * 2}>
              <HStack
                backgroundColor="brand.black"
                borderRadius="full"
                w={['50px', '60px', '70px', '80px', '90px']}
                h={['50px', '60px', '70px', '80px', '90px']}
                align="center"
                justify="center"
              >
                <GiRobotGrab color="white" size="30px" />
              </HStack>
              <VStack maxW="400px">
                <Text fontSize="20px" fontWeight="700" color="brand.white" textAlign="center">
                  Автоматический поверхностный
                </Text>
                <Text fontSize="16px" fontWeight="400" color="brand.grayvar2" textAlign="center">
                  Установка компонентов различных типов на плату с использованием профессионального оборудования.Монтаж
                  может быть выполнен с обеих сторон печатной платы
                </Text>
              </VStack>
            </VStack>
            {IsLargerThan620 ? (
              <VStack
                layerStyle="brand-gradient-blue"
                bottom="60px"
                maxW={(width / 9) * 4}
                marginTop="0px"
                pos="relative"
                justify="center"
                align="center"
                paddingX={['20px', '30px', '40px', '50px', '60px']}
                paddingY="30px"
                spacing="25px"
                zIndex={2}
              >
                <HStack
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['50px', '60px', '70px', '80px', '90px']}
                  h={['50px', '60px', '70px', '80px', '90px']}
                  align="center"
                  justify="center"
                >
                  <FaRegHandPaper color="white" size="30px" />
                </HStack>
                <VStack maxW="400px">
                  <Text fontSize="20px" fontWeight="700" color="brand.white" textAlign="center">
                    Ручной поверхностный и выводной монтаж
                  </Text>
                  <Text fontSize="16px" fontWeight="400" color="brand.grayvar2" textAlign="center">
                    При необходимости можем выполнить монтаж SMD компонентов ручным способом для малой партии, кроме
                    того выполняем DIP-монтаж ручным способом (любой объем партии)
                  </Text>
                </VStack>
              </VStack>
            ) : (
              <VStack align="center" justify="center" spacing="25px" maxW={(width / 3) * 2}>
                <HStack
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['50px', '60px', '70px', '80px', '90px']}
                  h={['50px', '60px', '70px', '80px', '90px']}
                  align="center"
                  justify="center"
                >
                  <FaRegHandPaper color="white" size="30px" />
                </HStack>
                <VStack maxW="400px">
                  <Text fontSize="20px" fontWeight="700" color="brand.white" textAlign="center">
                    Ручной поверхностный и выводной монтаж
                  </Text>
                  <Text fontSize="16px" fontWeight="400" color="brand.grayvar2" textAlign="center">
                    При необходимости можем выполнить монтаж SMD компонентов ручным способом для малой партии, кроме
                    того выполняем DIP-монтаж ручным способом (любой объем партии)
                  </Text>
                </VStack>
              </VStack>
            )}
          </Stack>
        </HStack>
      </VStack>
      <VStack
        w="full"
        layerStyle="brand-gradient-dark-blue"
        align="center"
        spacing={IsLargerThan320 ? '80px' : '40px'}
        paddingY="70px"
        justify="flex-start"
        zIndex={2}
      >
        <HStack align="center" justify="center">
          <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.white">
            Дополнительные{' '}
          </Text>
          <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.blue">
            услуги
          </Text>
        </HStack>
        <HStack justify="space-between" align="flex-start">
          {IsLargerThan1024 ? (
            <>
              <VStack>
                <HStack
                  align="center"
                  justify="center"
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['165px', '170px', '180px', '180px', '200px']}
                  h={['165px', '170px', '180px', '180px', '200px']}
                >
                  <Image src={microchipclean} borderRadius="full" w="160px" h="160px" loading="lazy" />
                </HStack>
                <Text fontSize="20px" w="200px" h="50px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                  Лакировка плат
                </Text>
              </VStack>
              <VStack>
                <HStack
                  align="center"
                  justify="center"
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['165px', '170px', '180px', '180px', '200px']}
                  h={['165px', '170px', '180px', '180px', '200px']}
                >
                  <Image src={microchipinside} borderRadius="full" w="160px" h="160px" loading="lazy" />
                </HStack>
                <Text fontSize="20px" w="200px" h="50px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                  Проектирование плат
                </Text>
              </VStack>
              <VStack>
                <HStack
                  align="center"
                  justify="center"
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['165px', '170px', '180px', '180px', '200px']}
                  h={['165px', '170px', '180px', '180px', '200px']}
                >
                  <Image src={projectmake} borderRadius="full" w="160px" h="160px" loading="lazy" />
                </HStack>
                <Text fontSize="20px" w="200px" h="50px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                  3D-проектирование корпуса
                </Text>
              </VStack>
              <VStack>
                <HStack
                  align="center"
                  justify="center"
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['165px', '170px', '180px', '180px', '200px']}
                  h={['165px', '170px', '180px', '180px', '200px']}
                >
                  <Image src={parts} borderRadius="full" w="160px" h="160px" loading="lazy" />
                </HStack>
                <Text fontSize="20px" w="200px" h="54px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                  Изготовление прототипов корпуса
                </Text>
              </VStack>
              <VStack>
                <HStack
                  align="center"
                  justify="center"
                  backgroundColor="brand.black"
                  borderRadius="full"
                  w={['165px', '170px', '180px', '180px', '200px']}
                  h={['165px', '170px', '180px', '180px', '200px']}
                >
                  <Image src={chipmaking} borderRadius="full" w="160px" h="160px" loading="lazy" />
                </HStack>
                <Text fontSize="20px" w="200px" h="54px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                  Сборка готовых изделий
                </Text>
              </VStack>
            </>
          ) : IsLargerThan320 ? (
            <Stack direction={IsLargerThan768 ? 'column' : 'row'}>
              <Stack direction={IsLargerThan768 ? 'row' : 'column'} justify={IsLargerThan768 ? 'center' : ''}>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w={IsLargerThan420 ? '160px' : '130px'}
                    h={IsLargerThan420 ? '160px' : '130px'}
                  >
                    <Image
                      src={microchipclean}
                      borderRadius="full"
                      w={IsLargerThan420 ? '150px' : '120px'}
                      h={IsLargerThan420 ? '150px' : '120px'}
                      loading="lazy"
                    />
                  </HStack>
                  <Text
                    fontSize={IsLargerThan420 ? '16px' : '12px'}
                    w={IsLargerThan420 ? '200px' : '150px'}
                    h="50px"
                    textAlign="center"
                    fontWeight="600"
                    color="brand.grayvar2"
                  >
                    Лакировка плат
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w={IsLargerThan420 ? '160px' : '130px'}
                    h={IsLargerThan420 ? '160px' : '130px'}
                  >
                    <Image
                      src={microchipinside}
                      borderRadius="full"
                      w={IsLargerThan420 ? '150px' : '120px'}
                      h={IsLargerThan420 ? '150px' : '120px'}
                      loading="lazy"
                    />
                  </HStack>
                  <Text
                    fontSize={IsLargerThan420 ? '16px' : '12px'}
                    w={IsLargerThan420 ? '200px' : '150px'}
                    h="50px"
                    textAlign="center"
                    fontWeight="600"
                    color="brand.grayvar2"
                  >
                    Проектирование плат
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w={IsLargerThan420 ? '160px' : '130px'}
                    h={IsLargerThan420 ? '160px' : '130px'}
                  >
                    <Image
                      src={projectmake}
                      borderRadius="full"
                      w={IsLargerThan420 ? '150px' : '120px'}
                      h={IsLargerThan420 ? '150px' : '120px'}
                      loading="lazy"
                    />
                  </HStack>
                  <Text
                    fontSize={IsLargerThan420 ? '16px' : '12px'}
                    w={IsLargerThan420 ? '200px' : '150px'}
                    h="50px"
                    textAlign="center"
                    fontWeight="600"
                    color="brand.grayvar2"
                  >
                    3D-проектирование корпуса
                  </Text>
                </VStack>
              </Stack>
              <Stack direction={IsLargerThan768 ? 'row' : 'column'} justify={IsLargerThan768 ? 'center' : ''}>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w={IsLargerThan420 ? '160px' : '130px'}
                    h={IsLargerThan420 ? '160px' : '130px'}
                  >
                    <Image
                      src={parts}
                      borderRadius="full"
                      w={IsLargerThan420 ? '150px' : '120px'}
                      h={IsLargerThan420 ? '150px' : '120px'}
                      loading="lazy"
                    />
                  </HStack>
                  <Text
                    fontSize={IsLargerThan420 ? '16px' : '12px'}
                    w={IsLargerThan420 ? '200px' : '150px'}
                    h="54px"
                    textAlign="center"
                    fontWeight="600"
                    color="brand.grayvar2"
                  >
                    Изготовление прототипов корпуса
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w={IsLargerThan420 ? '160px' : '130px'}
                    h={IsLargerThan420 ? '160px' : '130px'}
                  >
                    <Image
                      src={chipmaking}
                      borderRadius="full"
                      w={IsLargerThan420 ? '150px' : '120px'}
                      h={IsLargerThan420 ? '150px' : '120px'}
                      loading="lazy"
                    />
                  </HStack>
                  <Text
                    fontSize={IsLargerThan420 ? '16px' : '12px'}
                    w={IsLargerThan420 ? '200px' : '150px'}
                    h="54px"
                    textAlign="center"
                    fontWeight="600"
                    color="brand.grayvar2"
                  >
                    Сборка готовых изделий
                  </Text>
                </VStack>
              </Stack>
            </Stack>
          ) : (
            <>
              <Stack direction="column" spacing="20px">
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w="130px"
                    h="130px"
                  >
                    <Image src={microchipclean} borderRadius="full" w="120px" h="120px" loading="lazy" />
                  </HStack>
                  <Text fontSize="12px" w="200px" h="50px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                    Лакировка плат
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w="130px"
                    h="130px"
                  >
                    <Image src={microchipinside} borderRadius="full" w="120px" h="120px" loading="lazy" />
                  </HStack>
                  <Text fontSize="12px" w="200px" h="50px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                    Проектирование плат
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w="130px"
                    h="130px"
                  >
                    <Image src={projectmake} borderRadius="full" w="120px" h="120px" loading="lazy" />
                  </HStack>
                  <Text fontSize="12px" w="200px" h="50px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                    3D-проектирование корпуса
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w="130px"
                    h="130px"
                  >
                    <Image src={parts} borderRadius="full" w="120px" h="120px" loading="lazy" />
                  </HStack>
                  <Text fontSize="12px" w="200px" h="54px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                    Изготовление прототипов корпуса
                  </Text>
                </VStack>
                <VStack>
                  <HStack
                    align="center"
                    justify="center"
                    backgroundColor="brand.black"
                    borderRadius="full"
                    w="130px"
                    h="130px"
                  >
                    <Image src={chipmaking} borderRadius="full" w="120px" h="120px" loading="lazy" />
                  </HStack>
                  <Text fontSize="12px" w="200px" h="54px" textAlign="center" fontWeight="600" color="brand.grayvar2">
                    Сборка готовых изделий
                  </Text>
                </VStack>
              </Stack>
            </>
          )}
        </HStack>
        <HStack justify="center" marginTop="50px">
          <Button
            variant="brand-blue"
            fontWeight="400"
            paddingX="40px"
            paddingY="15px"
            w={IsLargerThan620 ? '320px' : '256px'}
            h="57px"
            leftIcon={<BsFillTelephoneFill size="20px" />}
          >
            Узнать подробности
          </Button>
        </HStack>
      </VStack>
      <VStack spacing={IsLargerThan768 ? '100px' : '40px'} marginBottom={['20px', '30px', '40px', '50px', '60px']}>
        <VStack w="full" align="left" marginTop="70px" paddingX={['10px', '20px', '40px', '60px', '100px']}>
          <HStack borderBottom="5px solid #1D8FE4" maxW="500px">
            <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.black">
              Наше{' '}
            </Text>
            <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.blue">
              оборудование
            </Text>
          </HStack>
        </VStack>
        <Stack
          direction={IsLargerThan620 ? 'row' : 'column'}
          w="full"
          paddingX={['40px', '50px', '60px', '70px', '80px']}
          spacing={IsLargerThan768 ? '100px' : '40px'}
          justify="center"
          align={IsLargerThan620 ? 'center' : 'flex-start'}
        >
          <VStack>
            <VStack
              w={['200px', '250px', '250px', '400px', '600px']}
              h={['150px', '200px', '200px', '300px', '400px']}
              bgColor="brand.blue"
            >
              <Image
                src={printer}
                pos="relative"
                left={['10px', '20px', '30px', '40px', '50px']}
                bottom={['10px', '20px', '30px', '40px', '50px']}
                w={['200px', '250px', '250px', '400px', '600px']}
                h={['150px', '200px', '200px', '300px', '400px']}
                loading="lazy"
              />
            </VStack>
          </VStack>
          <VStack align="center" justify="center" maxW={IsLargerThan320 ? '400' : ''}>
            <Text fontWeight="600" fontSize={['22px', '24px', '26px', '28px', '30px']}>
              Полуавтоматический принтер нанесения паяльной пасты
            </Text>
            <Text fontWeight="400" fontSize={['12px', '12px', '14px', '14px', '16px']} color="brand.gray">
              Трафаретный принтер - предназначен для нанесения паяльной пасты или клея на печатные платы через трафарет
              для опытного, мелкосерийного и среднесерийного производства.
            </Text>
          </VStack>
        </Stack>
        <Stack
          direction={IsLargerThan620 ? 'row' : 'column'}
          w="full"
          paddingX={['40px', '50px', '60px', '70px', '80px']}
          spacing={IsLargerThan768 ? '100px' : '40px'}
          justify="center"
          align={IsLargerThan620 ? 'center' : 'flex-start'}
          zIndex={2}
        >
          {IsLargerThan620 ? (
            <>
              <VStack
                align={IsLargerThan620 ? 'flex-end' : 'center'}
                justify="center"
                maxW={IsLargerThan320 ? '400' : ''}
              >
                <Text
                  fontWeight="600"
                  fontSize={['22px', '24px', '26px', '28px', '30px']}
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Два автоматических установщика компонентов
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={['12px', '12px', '14px', '14px', '16px']}
                  color="brand.gray"
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Оборудование и программное обеспечение разработаны компанией ExpertElectronics при непосредственном
                  участии технических экспертов и инженеров компании СМТ технологии с учетом всех требований к
                  современному установщику компонентов и опыта эксплуатации и обслуживания установщиков ведущих мировых
                  брендов.
                </Text>
                <UnorderedList color="brand.gray">
                  <ListItem>100 питателей</ListItem>
                  <ListItem>Компоненты от 0402</ListItem>
                  <ListItem>SMD, SOT, BGA</ListItem>
                  <ListItem>20000 компонентов в час</ListItem>
                </UnorderedList>
              </VStack>
              <VStack>
                <VStack
                  w={['200px', '250px', '250px', '400px', '600px']}
                  h={['150px', '200px', '200px', '300px', '400px']}
                  bgColor="brand.blue"
                >
                  <Image
                    src={autocomponents}
                    pos="relative"
                    right={['10px', '20px', '30px', '40px', '50px']}
                    bottom={['10px', '20px', '30px', '40px', '50px']}
                    w={['200px', '250px', '250px', '400px', '600px']}
                    h={['150px', '200px', '200px', '300px', '400px']}
                    loading="lazy"
                  />
                </VStack>
              </VStack>
            </>
          ) : (
            <>
              <VStack paddingX="10px">
                <VStack
                  w={['200px', '250px', '250px', '400px', '600px']}
                  h={['150px', '200px', '200px', '300px', '400px']}
                  bgColor="brand.blue"
                >
                  <Image
                    src={autocomponents}
                    pos="relative"
                    right={['10px', '20px', '30px', '40px', '50px']}
                    bottom={['10px', '20px', '30px', '40px', '50px']}
                    w={['200px', '250px', '250px', '400px', '600px']}
                    h={['150px', '200px', '200px', '300px', '400px']}
                    loading="lazy"
                  />
                </VStack>
              </VStack>
              <VStack align="center" justify="center" maxW={IsLargerThan320 ? '400' : ''}>
                <Text
                  fontWeight="600"
                  fontSize={['22px', '24px', '26px', '28px', '30px']}
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Два автоматических установщика компонентов
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={['12px', '14px', '16px', '16px', '16px']}
                  color="brand.gray"
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Оборудование и программное обеспечение разработаны компанией ExpertElectronics при непосредственном
                  участии технических экспертов и инженеров компании СМТ технологии с учетом всех требований к
                  современному установщику компонентов и опыта эксплуатации и обслуживания установщиков ведущих мировых
                  брендов.
                </Text>
              </VStack>
            </>
          )}
        </Stack>
        <Stack
          direction={IsLargerThan620 ? 'row' : 'column'}
          w="full"
          paddingX={['40px', '50px', '60px', '70px', '80px']}
          spacing={IsLargerThan768 ? '100px' : '40px'}
          justify="center"
          align={IsLargerThan620 ? 'center' : 'flex-start'}
        >
          <VStack>
            <VStack
              w={['200px', '250px', '250px', '400px', '600px']}
              h={['150px', '200px', '200px', '300px', '400px']}
              bgColor="brand.blue"
              zIndex={2}
            >
              <Image
                src={makechip}
                pos="relative"
                left={['10px', '20px', '30px', '40px', '50px']}
                bottom={['10px', '20px', '30px', '40px', '50px']}
                w={['200px', '250px', '250px', '400px', '600px']}
                h={['150px', '200px', '200px', '300px', '400px']}
                loading="lazy"
                zIndex={2}
              />
            </VStack>
          </VStack>
          <VStack align="center" justify="center" maxW={IsLargerThan320 ? '400' : ''} zIndex={2}>
            <Text fontWeight="600" fontSize={['22px', '24px', '26px', '28px', '30px']}>
              Конвекционная печь с шестью зонами нагрева
            </Text>
            <Text fontWeight="400" fontSize={['12px', '12px', '14px', '14px', '16px']} color="brand.gray">
              Конвекционная духовка для оплавления припоя печатных плат KAYO-RF630 включает в себя 6 полных зон
              конвекционного нагрева горячим воздухом, каждая с независимым верхним и нижним контролем температуры,
              сетку ленточного конвейера из нержавеющей стали, три входа термопары и компьютерный контроллер для точного
              профилирования температуры.
            </Text>
          </VStack>
        </Stack>
        {IsLargerThan1024 ? (
          <>
            <Image src={vectorbgbig} loading="lazy" pos="absolute" top="3000px" left="0px" zIndex={1} />
            <Image src={vectorbgsmall} loading="lazy" pos="absolute" top="1900px" right="0px" zIndex={1} />
          </>
        ) : (
          <></>
        )}
        <Stack
          direction={IsLargerThan620 ? 'row' : 'column'}
          w="full"
          paddingX={['40px', '50px', '60px', '70px', '80px']}
          spacing={IsLargerThan768 ? '100px' : '40px'}
          justify="center"
          align={IsLargerThan620 ? 'center' : 'flex-start'}
        >
          {IsLargerThan620 ? (
            <>
              <VStack align="center" justify="center" maxW={IsLargerThan320 ? '400' : ''} zIndex={2}>
                <Text
                  fontWeight="600"
                  fontSize={['22px', '24px', '26px', '28px', '30px']}
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Ультразвуковые ванны для отмывки плат
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={['12px', '12px', '14px', '14px', '16px']}
                  color="brand.gray"
                  textAlign={IsLargerThan320 ? 'right' : 'left'}
                >
                  Ультразвуковые отмывочные ванны предназначены для ультразвуковой очистки твердых тел от загрязнения с
                  помощью специальных моющих средств, заполняемых в резервуар ванны до уровня, совместимого с габаритами
                  погружаемых изделий.
                </Text>
              </VStack>
              <VStack>
                <VStack
                  w={['200px', '250px', '250px', '400px', '600px']}
                  h={['150px', '200px', '200px', '300px', '400px']}
                  bgColor="brand.blue"
                >
                  <Image
                    src={chipwash}
                    pos="relative"
                    right={['10px', '20px', '30px', '40px', '50px']}
                    bottom={['10px', '20px', '30px', '40px', '50px']}
                    w={['200px', '250px', '250px', '400px', '600px']}
                    h={['150px', '200px', '200px', '300px', '400px']}
                    loading="lazy"
                  />
                </VStack>
              </VStack>
            </>
          ) : (
            <>
              <VStack paddingX="10px">
                <VStack
                  w={['200px', '250px', '250px', '400px', '600px']}
                  h={['150px', '200px', '200px', '300px', '400px']}
                  bgColor="brand.blue"
                >
                  <Image
                    src={chipwash}
                    pos="relative"
                    right={['10px', '20px', '30px', '40px', '50px']}
                    bottom={['10px', '20px', '30px', '40px', '50px']}
                    w={['200px', '250px', '250px', '400px', '600px']}
                    h={['150px', '200px', '200px', '300px', '400px']}
                    loading="lazy"
                  />
                </VStack>
              </VStack>
              <VStack align="center" justify="center" maxW={IsLargerThan320 ? '400' : ''}>
                <Text
                  fontWeight="600"
                  fontSize={['22px', '24px', '26px', '28px', '30px']}
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Ультразвуковые ванны для отмывки плат
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={['12px', '14px', '16px', '16px', '16px']}
                  color="brand.gray"
                  textAlign={IsLargerThan620 ? 'right' : 'left'}
                >
                  Ультразвуковые отмывочные ванны предназначены для ультразвуковой очистки твердых тел от загрязнения с
                  помощью специальных моющих средств, заполняемых в резервуар ванны до уровня, совместимого с габаритами
                  погружаемых изделий.
                </Text>
              </VStack>
            </>
          )}
        </Stack>
      </VStack>
      <VStack marginBottom="80px">
        <VStack
          bgColor="brand.lightgray"
          w="full"
          paddingY="40px"
          spacing={['20px', '20px', '30px', '40px', '40px']}
          marginTop="80px"
          align="space-between"
        >
          <HStack
            justify={IsLargerThan620 ? 'space-between' : 'center'}
            paddingX={['10px', '20px', '40px', '60px', '100px']}
          >
            <HStack>
              <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.blue">
                Примеры{' '}
              </Text>
              <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.black">
                наших работ
              </Text>
            </HStack>
            {IsLargerThan620 ? (
              <HStack>
                <Button
                  onClick={() => {
                    if (LCard === 0) {
                      setLCard(cards.length - 1);
                    } else {
                      setLCard(LCard - 1);
                    }
                    if (centralCard === 0) {
                      setCard(cards.length - 1);
                    } else {
                      setCard(centralCard - 1);
                    }
                    if (RCard === 0) {
                      setRCard(cards.length - 1);
                    } else {
                      setRCard(RCard - 1);
                    }
                  }}
                  variant="brand-blue"
                  borderRadius="full"
                  w="20px"
                  leftIcon={<BsArrowLeft size={20} />}
                ></Button>
                <Button
                  onClick={() => {
                    if (LCard === cards.length - 1) {
                      setLCard(0);
                    } else {
                      setLCard(LCard + 1);
                    }
                    if (centralCard === cards.length - 1) {
                      setCard(0);
                    } else {
                      setCard(centralCard + 1);
                    }
                    if (RCard === cards.length - 1) {
                      setRCard(0);
                    } else {
                      setRCard(RCard + 1);
                    }
                  }}
                  variant="brand-blue"
                  borderRadius="full"
                  w="20px"
                  leftIcon={<BsArrowRight size={20} />}
                ></Button>
              </HStack>
            ) : (
              <></>
            )}
          </HStack>
          <Stack
            spacing={['5px', '10px', '10px', '20px', '30px']}
            direction={IsLargerThan620 ? 'row' : 'column'}
            align="center"
            justify="center"
          >
            <HStack
              layerStyle="brand-gradient-blue"
              w={['240px', '180px', '180px', '220px', '370px']}
              h={['240px', '180px', '180px', '220px', '370px']}
              align="center"
              justify="center"
            >
              <Image
                src={cards[LCard]}
                loading="lazy"
                w={['220px', '170px', '170px', '200px', '350px']}
                h={['220px', '170px', '170px', '200px', '350px']}
              />
            </HStack>
            <HStack
              layerStyle="brand-gradient-blue"
              w={['240px', '180px', '180px', '220px', '370px']}
              h={['240px', '180px', '180px', '220px', '370px']}
              align="center"
              justify="center"
            >
              <Image
                src={cards[centralCard]}
                loading="lazy"
                w={['220px', '170px', '170px', '200px', '350px']}
                h={['220px', '170px', '170px', '200px', '350px']}
              />
            </HStack>
            <HStack
              layerStyle="brand-gradient-blue"
              w={['240px', '180px', '180px', '220px', '370px']}
              h={['240px', '180px', '180px', '220px', '370px']}
              align="center"
              justify="center"
            >
              <Image
                src={cards[RCard]}
                loading="lazy"
                w={['220px', '170px', '170px', '200px', '350px']}
                h={['220px', '170px', '170px', '200px', '350px']}
              />
            </HStack>
          </Stack>
        </VStack>
      </VStack>
      <VStack
        w="full"
        align="center"
        justify="center"
        paddingBottom="120px"
        paddingTop={['40px', '40px', '60px', '80px', '100px']}
        paddingX="20px"
      >
        <Stack align="center" justify="space-around" direction={IsLargerThan768 ? 'row' : 'column'}>
          <VStack align={IsLargerThan768 ? 'left' : 'center'} justify="center" maxW="450px" padding="20px" spacing={0}>
            <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.black">
              Хотите обсудить{' '}
            </Text>
            <Text fontSize={['24px', '28px', '32px', '36px', '48px']} fontWeight="600" color="brand.blue">
              свой проект?
            </Text>
            <Text
              fontSize={['12px', '14px', '16px', '18px', '20px']}
              fontWeight="400"
              color="brand.black"
              textAlign={IsLargerThan768 ? 'left' : 'center'}
            >
              Заполните форму и мы ответим Вам в течении дня
            </Text>
          </VStack>
          <VStack align="center">
            <Formik
              initialValues={
                {
                  email: '',
                  name: '',
                  message: '',
                } as SupportTicketForm
              }
              onSubmit={handleFormSubmit}
              validationSchema={FormValidation}
            >
              <Form>
                <VStack spacing="15px" align="center">
                  <VStack align="left">
                    <Text fontSize="14px" fontWeight="400" color="brand.gray" textAlign="left">
                      {' '}
                      Ваш email
                    </Text>
                    <Field
                      as={Input}
                      id="email"
                      w={['300px', '400px', '250px', '300px', '350px']}
                      h="45px"
                      borderColor="brand.gray"
                      borderRadius="0px"
                      name="email"
                      type="email"
                      color="brand.black"
                    ></Field>
                  </VStack>
                  <VStack align="left">
                    <Text fontSize="14px" fontWeight="400" color="brand.gray" textAlign="left">
                      {' '}
                      Ваше имя
                    </Text>
                    <Field
                      as={Input}
                      id="name"
                      w={['300px', '400px', '250px', '300px', '350px']}
                      h="45px"
                      borderColor="brand.gray"
                      borderRadius="0px"
                      name="name"
                      type="name"
                      color="brand.black"
                    ></Field>
                  </VStack>
                  <VStack align="left">
                    <Text fontSize="14px" fontWeight="400" color="brand.gray" textAlign="left">
                      {' '}
                      Ваше сообщение
                    </Text>
                    <Field
                      as={Textarea}
                      id="message"
                      w={['300px', '400px', '250px', '300px', '350px']}
                      h="150px"
                      borderColor="brand.gray"
                      borderRadius="0px"
                      name="message"
                      type="message"
                      color="brand.black"
                      resize="none"
                    ></Field>
                  </VStack>
                  <VStack align="center">
                    <Button
                      type="submit"
                      variant="brand-blue"
                      h="57px"
                      w="250"
                      paddingX="40px"
                      paddingY="15px"
                      fontWeight="400"
                    >
                      Оставить заявку
                    </Button>
                  </VStack>
                </VStack>
              </Form>
            </Formik>
          </VStack>
        </Stack>
      </VStack>
      <Footer />
    </Stack>
  );
});
