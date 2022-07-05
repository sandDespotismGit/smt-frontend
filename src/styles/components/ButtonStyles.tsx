export const ButtonStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
    _focus: {
      shadow: 'none',
    },
    _hover: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      fontSize: ['xs'],
      px: [2, 3, 4, 5],
      py: 4,
    },
    sm: {
      fontSize: ['xs', 'sm'],
      px: [6, 7, 8, 9, 10, 12],
      py: 5,
    },
    md: {
      fontSize: ['sm', 'md'],
      px: [12, 14],
      py: 6,
    },
    link: {
      p: 0,
      fontSize: ['xs'],
      fontWeight: 'normal',
    },
    allIn: {
      fontSize: ['xs'],
      px: [2, 3],
      py: 4,
    },
  },
  variants: {
    'brand-blue-button': {
      color: 'brand.black',
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
        borderBottom: '5px solid #1D8FE4'
      },
    },
    'brand-dark-button': {
      color: 'brand.grayvar2',
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
      },
    },
    'brand-white': {
      color: 'brand.blue',
      bgColor: 'brand.beige',
      border: '2px',
      borderColor: '5px solid #1D8FE4',
      _hover: {
        layerStyle: 'brand-gradient-blue',
        color: 'brand.beige',
        border: '2px',
        borderColor: '5px solid #1D8FE4',
      },
    },
    'brand-blue': {
      color: 'brand.white',
      layerStyle: 'brand-gradient-blue',
      border: '2px',
      borderColor: 'brand.blue',
      _hover: {
        bg: 'transparent',
        color: 'brand.blue',
        border: '2px',
        borderColor: 'brand.blue',
      },
    },
    'brand-transparent': {
      color: 'brand.gray.umber',
      bg: 'transparent',
      _hover: {
        bg: 'brand.gray.smoky',
      },
    },
  },
    link: {
      color: 'brand.gray.umber',
    },
    defaultProps: {
      size: 'sm',
      variant: 'brand-transparent',
    },
  };
