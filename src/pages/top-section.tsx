import { Flex, IconButton } from '@chakra-ui/react'
import { Menu } from './menu'
import { useSidebarContext } from './sidebar-context'
import { Tooltip } from '@/components/ui/tooltip'
import { LuBadgeAlert, LuArrowBigRightDash } from 'react-icons/lu'
import { Avatar } from '@/components/ui/avatar'

export function TopSection() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext()
  return (
    <Flex justify="space-between" align="center" p="2">
      {!sideBarVisible && (
        <Flex>
          <Tooltip
            content="Close sidebar"
            positioning={{ placement: 'right' }}
            showArrow
          >
            <IconButton variant="ghost" onClick={toggleSidebar}>
              <LuArrowBigRightDash fontSize="2xl" color="fg.muted" />
            </IconButton>
          </Tooltip>

          <Tooltip content="Notificaciones" showArrow>
            <IconButton variant="ghost">
              <LuBadgeAlert fontSize="2xl" color="fg.muted" />
            </IconButton>
          </Tooltip>
          <Menu />
        </Flex>
      )}
      {sideBarVisible && <Menu />}

      <Avatar
        name="Esther"
        size="sm"
        colorPalette="teal"
        variant="solid"
        mr="3"
      />
    </Flex>
  )
}
