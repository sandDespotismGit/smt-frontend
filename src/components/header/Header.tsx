import { Box, Button, HStack, Image, useMediaQuery, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';

import logovector from '../../assets/logovector.png';
import ulsmtlogo from '../../assets/ulsmtlogo.png';

export const Header = React.memo(() => {
  const [IsLargerThan768] = useMediaQuery('(min-width: 769px)');
  const [IsLargerThan1024] = useMediaQuery('(min-width: 1025px)');
  const [IsLargerThan320] = useMediaQuery('(min-width: 321px)');
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
      <HStack spacing={['0px', '10px', '20px', '30px']} justify="center">
        {IsLargerThan768 ? (
          <>
            <Button
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              О компании
            </Button>
            <Button
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              Услуги
            </Button>
            <Button
              variant="brand-blue-button"
              w={['40px', '60px', '80px', '100px']}
              h={['23px', '40px', '40px', '53px']}
            >
              Документация
            </Button>
            <Button
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
        {IsLargerThan768 ? (
          <HStack></HStack>
        ) : (
          <Menu>
            <MenuButton
              as={Button}
              variant="brand-blue"
              h={['23px', '40px', '40px', '53px']}
              align="center"
              justify="center"
            >
              <HamburgerIcon color="white" />
            </MenuButton>
            <MenuList zIndex={3}>
              <MenuItem color="brand.gray">О компании</MenuItem>
              <MenuItem color="brand.gray">Услуги</MenuItem>
              <MenuItem color="brand.gray">Документация</MenuItem>
              <MenuItem color="brand.gray">Контакты</MenuItem>
            </MenuList>
          </Menu>
        )}
        {IsLargerThan320 ? (
          <>
            <Button
              variant="brand-white"
              paddingX={['5px', '10px', '15px', '20px']}
              paddingY="20px"
              h={['23px', '40px', '40px', '53px']}
              leftIcon={<BsPersonCircle size="20px" />}
            >
              Войти
            </Button>
            <Button
              variant="brand-blue"
              h={['40px', '40px', '40px', '53px']}
              paddingY="20px"
              paddingX={['5px', '10px', '15px', '20px']}
              leftIcon={<BsFillTelephoneFill size="20px" />}
            >
              +7(999)999-99-99
            </Button>
          </>
        ) : (
          <Button
            variant="brand-white"
            paddingX={['5px', '10px', '15px', '20px']}
            paddingY="20px"
            h={['23px', '40px', '40px', '53px']}
            leftIcon={<BsPersonCircle size="20px" />}
          >
            Войти
          </Button>
        )}
      </HStack>
    </HStack>
  );
});
