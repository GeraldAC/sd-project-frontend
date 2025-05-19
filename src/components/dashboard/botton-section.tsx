import { Box, Center, Icon, Text, VStack } from '@chakra-ui/react'
import { LuZap } from 'react-icons/lu'

export function BottomSection() {
  return (
    <Box py={3} bg={'brand.100'}>
      <Center>
        <VStack gap={'0'}>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} CuscoOrgánico. Todos los derechos
            reservados.
          </Text>
          <Text fontSize="sm">
            Hecho con
            <Icon color={'red'} mx="2" size={'md'}>
              <LuZap />
            </Icon>
            por EmprendeBro
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}
