import { Box, HStack, Icon } from '@chakra-ui/react'
import { Twitter, Instagram, Facebook } from 'lucide-react';
import React from 'react'

function footer() {
  return (
    <Box>
        <HStack>
            <text>مرکز مشاوره آنلاین</text>
            <HStack>
                <Icon as={Twitter} />
                <Icon as={Instagram} />
                <Icon as={Facebook} />
            </HStack>
        </HStack>
    </Box>
  )
}

export default footer