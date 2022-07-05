import { extendTheme } from '@chakra-ui/react';

import { TextStyles as Text } from './components/TextStyles';
import { HeadingStyles as Heading } from './components/HeadingStyles';
import { LinkStyles as Link } from './components/LinkStyles';
import { ButtonStyles as Button } from './components/ButtonStyles';
import { ImageStyles as Image } from './components/ImageStyles';
import { PopoverStyles as Popover } from './components/PopoverStyles';
import { ModalStyles as Modal } from './components/ModalStyles';
import { FormStyles as Form } from './components/FormStyles';
import { FormLabelStyles as FormLabel } from './components/FormLabelStyles';
import { FormErrorStyles as FormError } from './components/FormErrorStyles';
import { InputStyles as Input } from './components/InputStyles';
import { NumberInputStyles as NumberInput } from './components/NumberInputStyles';
import { PinInputStyles as PinInput } from './components/PinInputStyles';
import { TextareaStyles as Textarea } from './components/TextareaStyles';
import { SelectStyles as Select } from './components/SelectStyles';
import { TooltipStyles as Tooltip } from './components/TooltipStyles';
import { TagStyles as Tag } from './components/TagStyles';
import { MenuStyles as Menu } from './components/MenuStyles';
import { SkeletonStyles as Skeleton } from './components/SkeletonStyles';
import { TableStyles as Table } from './components/TableStyles';

export const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  colors: {
    brand: {
      white: '#FDFDFF',
      lightgray: '#CFDEEC',
      black: '#181720',
      gray: '#848995',
      grayvar2: '#E5E8EE',
      beige: '#ECF0F4',
      blue: '#1D8FE4',
      // black80: 'rgba(57, 61, 63, 0.8)',
      // black50: 'rgba(57, 61, 63, 0.5)'
    },
  },
  styles: {
    global: {
      body: {
        color: 'white',
        'font-feature-settings': "'pnum' on, 'lnum' on;",
      },
    },
  },
  layerStyles: {
    'brand-gradient-blue': {
      bgGradient: 'linear(135deg, #1D8FE4 0%, #106BE0 100%)',
    },
    'brand-gradient-dark-blue': {
      bgGradient: 'linear(180deg, #474D64 0%, #303349 100%)',
    },
  },
  components: {
    Text,
    Heading,
    Link,
    Button,
    Image,
    Popover,
    Modal,
    Form,
    FormLabel,
    FormError,
    Input,
    NumberInput,
    PinInput,
    Textarea,
    Select,
    Tooltip,
    Tag,
    Menu,
    Skeleton,
    Table,
  },
});
