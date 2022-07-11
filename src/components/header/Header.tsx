import { Box, Button, HStack, Image, useMediaQuery, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';

import logovector from '../../assets/logovector.png';
import ulsmtlogo from '../../assets/ulsmtlogo.png';

export const Header = React.memo(() => {
  // const [IsLargerThan768] = useMediaQuery('(min-width: 769px)');
  const [IsLargerThan1024] = useMediaQuery('(min-width: 1025px)');
  const [IsLargerThan1100] = useMediaQuery('(min-width: 1100px)');
  // const [IsLargerThan320] = useMediaQuery('(min-width: 321px)');
  const [IsLargerThan620] = useMediaQuery('(min-width: 620px)');
  return (
    <HStack
      w="full"
      h={['80px', '90px', '100px', '110px', '145px']}
      justify="space-between"
      paddingX={['10px', '20px', '40px', '60px', '100px']}
      bg="brand.beige"
      spacing="0"
    >
      <HStack justify="space-between">
        {IsLargerThan1100 ? (
          <HStack minW="140px">
            <Box>
              <Image
                src={logovector}
                alt="ULSMT"
                loading="lazy"
                // w={['40px', '40px', '40px', '53px']}
                h={['40px', '40px', '40px', '53px']}
              />
            </Box>
            <Box>
              <Image
                src={ulsmtlogo}
                alt="монтаж печатных плат"
                loading="lazy"
                // w={['53px', '74px', '74px', '120px']}
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
              // w={['40px', '40px', '40px', '53px']}
              h={['40px', '40px', '40px', '53px']}
            />
          </Box>
        )}
      </HStack>
      <HStack spacing="10px" justify="center">
        {IsLargerThan1024 ? (
          <>
            <Button
              fontWeight="400"
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              О компании
            </Button>
            <Button
              fontWeight="400"
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              Услуги
            </Button>
            <Button
              fontWeight="400"
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              Документация
            </Button>
            <Button
              fontWeight="400"
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              Контакты
            </Button>
          </>
        ) : (
          <HStack></HStack>
        )}
      </HStack>
      <HStack spacing={['0px', '8px', '16px', '24px']}>
        {IsLargerThan1024 ? (
          <></>
        ) : (
          <Menu isLazy={true}>
            <MenuButton padding="20px">
              <HamburgerIcon color="brand.blue" w="30px" h="30px" />
            </MenuButton>
            <MenuList zIndex={3} paddingTop={0} paddingBottom={0} boxShadow={0}>
              <MenuItem
                as={Button}
                variant="brand-white-button"
                borderTop="4px"
                borderLeft="4px"
                borderRight="4px"
                fontWeight="400"
              >
                О компании
              </MenuItem>
              <MenuItem as={Button} variant="brand-white-button" fontWeight="400" borderLeft="4px" borderRight="4px">
                Услуги
              </MenuItem>
              <MenuItem as={Button} variant="brand-white-button" fontWeight="400" borderLeft="4px" borderRight="4px">
                Документация
              </MenuItem>
              <MenuItem
                as={Button}
                variant="brand-white-button"
                fontWeight="400"
                borderLeft="4px"
                borderRight="4px"
                borderBottom="4px"
              >
                Контакты
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {IsLargerThan620 ? (
          <>
            <Button
              variant="brand-white"
              paddingX={['5px', '10px', '15px', '30px']}
              paddingY="15px"
              fontWeight="400"
              h={['23px', '40px', '40px', '53px']}
              leftIcon={<BsPersonCircle size="20px" />}
            >
              Войти
            </Button>
            <Button
              variant="brand-blue"
              h={['40px', '40px', '40px', '53px']}
              paddingY="15px"
              fontWeight="400"
              paddingX={['5px', '10px', '15px', '30px']}
              leftIcon={<BsFillTelephoneFill size="20px" />}
            >
              +7(999)999-99-99
            </Button>
          </>
        ) : (
          <Button
            variant="brand-white"
            paddingX={['5px', '10px', '15px', '20px']}
            paddingY="15px"
            fontWeight="400"
            h={['40px', '40px', '40px', '53px']}
            leftIcon={<BsPersonCircle size="20px" />}
          >
            Войти
          </Button>
        )}
      </HStack>
    </HStack>
  );
});
