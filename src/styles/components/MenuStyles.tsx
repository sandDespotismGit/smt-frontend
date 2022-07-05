import { menuAnatomy as parts } from '@chakra-ui/anatomy';

export const MenuStyles = {
  parts: parts.keys,
  baseStyle: {
    button: {
      _hover: {
        WebkitTapHighlightColor: 'transparent',
      },
    },
    list: {
      border: 'none',
      borderRadius: '0px',
      boxShadow: '-4px 5px 25px -5px #C4C4C4',
    },
    item: {
      p: 0,
      fontSize: 'sm',
      color: 'brand.gray.umber',
      _focus: {
        bg: 'transparent',
      },
      _hover: {
        bg: 'transparent',
        textDecoration: 'underline',
        WebkitTapHighlightColor: 'transparent',
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
