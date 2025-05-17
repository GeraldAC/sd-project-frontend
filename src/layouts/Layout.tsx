import { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100dvh" display="flex" flexDirection="column">
      <Header />
      <Container flex="1" maxW="container.md" mt={'5'}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
