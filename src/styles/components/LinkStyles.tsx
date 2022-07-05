export const LinkStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'brand.black',
    _focus: {
      shadow: 'none',
    },
    _hover: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      fontSize: 'xs',
    },
    sm: {
      fontSize: 'sm',
    },
  },
  variants: {},
  defaultProps: {
    size: 'sm',
  },
};
