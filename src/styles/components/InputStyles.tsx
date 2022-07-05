import { inputAnatomy as parts } from '@chakra-ui/anatomy';

export const InputStyles = {
  parts: parts.keys,

  sizes: {
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  variants: {
    'brand-form': {
      field: {
        borderRadius: '0px',
        fontSize: 'sm',
        placeholder: 'brand.orange',
        color: 'brand.orange',
        bg: 'brand.beige',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
  },
};
