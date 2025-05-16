import { ReactNode } from 'react'
import { Box, Container, Separator } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Separator size="md" variant={'solid'} colorPalette={'teal'} />
      <Container flex="1" maxW="container.md" mt={'8'}>
        {children}
      </Container>
      <Separator size="md" variant={'solid'} colorPalette={'teal'} />
      <Footer />
    </Box>
  )
}

export default Layout
