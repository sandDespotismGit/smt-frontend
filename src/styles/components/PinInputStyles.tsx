export const PinInputStyles = {
  baseStyle: {},
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  variants: {
    'brand-auth': {
      borderRadius: '0px',
      color: 'brand.gray.dark',
      bg: 'brand.gray.smoky',
      _focus: {
        shadow: 'none',
      },
    },
  },
  defaultProps: { size: 'sm' },
};
