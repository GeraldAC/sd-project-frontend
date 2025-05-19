import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { TopSection } from '@/components/dashboard/top-section'
import { SidebarProvider } from '@/components/dashboard/sidebar-context'
import { BottomSection } from '@/components/dashboard/botton-section'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <SidebarProvider>
      <Flex h="100dvh" overflow="hidden">
        <Sidebar />

        <Box flex="1" display="flex" flexDirection="column">
          <TopSection />

          {/* Scrollable area */}
          <Box flex="1" overflowY="auto">
            <Flex direction="column" minH="100%">
              <Box px={5} py={4}>
                <Outlet />
              </Box>
              <Spacer />{' '}
              {/* Este empuja el BottomSection hacia abajo si hay poco contenido */}
              <BottomSection />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </SidebarProvider>
  )
}

export default Dashboard
