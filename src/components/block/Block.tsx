import { HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

interface IBlockComponentProps {
    firstWord: string;
    secondWord?: string;
    icon: React.ReactElement;
}

export const Block = React.memo(({ firstWord, secondWord, icon }: IBlockComponentProps) => {
    return (
        <VStack maxW='430px' backgroundColor='rgba(57, 61, 63, 0.8)' borderTopStartRadius='50px'>
            <VStack w='full' h='150px' align='start' py='35px' px='30px' spacing='25px'>
                <HStack spacing='22px'>
                    {icon}
                    <VStack align='start'>
                        <Text color='brand.white' fontWeight='800' fontSize='18px'>{firstWord}</Text>
                        <Text color='brand.white' fontWeight='400' fontSize='14px'>{secondWord}</Text>
                    </VStack>
                </HStack>
            </VStack>
            <HStack backgroundColor='brand.beige' w='full' h='16px' />
        </VStack>
    );
});