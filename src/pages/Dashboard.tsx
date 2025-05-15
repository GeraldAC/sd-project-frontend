import { Box, Flex, Stack } from '@chakra-ui/react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { TopSection } from '@/components/dashboard/top-section'
import { SidebarProvider } from '@/components/dashboard/sidebar-context'
import { MiddleSection } from '@/components/dashboard/middle-section'
import { BottomSection } from '@/components/dashboard/botton-section'

const Dashboard = () => {
  return (
    <SidebarProvider>
      <Flex minH="100dvh">
        <Sidebar />
        <Box flex="1">
          <Stack h="full">
            <TopSection />
            <MiddleSection />
            <BottomSection />
          </Stack>
        </Box>
      </Flex>
    </SidebarProvider>
  )
}

export default Dashboard
