import { Box, Icon, Text } from '@chakra-ui/react'
import { LuZap } from 'react-icons/lu'

const Footer = () => {
  return (
    <Box py={4} bg={'brand.200'} textAlign="center">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} CuscoOrgánico. Todos los derechos
        reservados.
      </Text>
      <Text fontSize="sm">
        Hecho con
        <Icon boxSize={4} color={'red'} mx="2">
          <LuZap />
        </Icon>
        por EmprendeBro
      </Text>
    </Box>
  )
}

export default Footer
