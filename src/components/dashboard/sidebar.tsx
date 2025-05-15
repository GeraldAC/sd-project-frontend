import {
  AbsoluteCenter,
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Tooltip } from '@/components/ui/tooltip'
import {
  LuArrowBigLeft,
  LuBadgeAlert,
  LuExpand,
  LuLogs,
  LuNewspaper,
  LuPlug,
} from 'react-icons/lu'
import { useSidebarContext } from './sidebar-context'

export function Sidebar() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext()

  return (
    <Box
      bg="bg.muted"
      w={!sideBarVisible ? '0' : '260px'}
      overflow="hidden"
      transition=" width 0.3s"
    >
      <Stack h="full" px="3" py="2">
        <Flex justify="space-between">
          <Tooltip
            content="Close sidebar"
            positioning={{ placement: 'right' }}
            showArrow
          >
            <IconButton variant="ghost" onClick={toggleSidebar}>
              <LuArrowBigLeft fontSize="2xl" color="fg.muted" />
            </IconButton>
          </Tooltip>

          <Tooltip content="Notificaciones" showArrow>
            <IconButton variant="ghost">
              <LuBadgeAlert fontSize="2xl" color="fg.muted" />
            </IconButton>
          </Tooltip>
        </Flex>

        <Stack px="2" gap="0" flex="1">
          <HStack
            position="relative"
            className="group"
            _hover={{
              layerStyle: 'fill.muted',
              textDecor: 'none',
            }}
            px="1"
            h="10"
            borderRadius="lg"
            w="100%"
            whiteSpace="nowrap"
          >
            <Link href="#" variant="plain" _hover={{ textDecor: 'none' }}>
              <Circle size="6" bg="bg" borderWidth="1px">
                <LuLogs fontSize="md" />
              </Circle>
              <Text fontSize="sm" fontWeight="md">
                Perfil
              </Text>
            </Link>
            <AbsoluteCenter
              axis="vertical"
              right="2"
              display="none"
              _groupHover={{ display: 'initial' }}
            >
              <Tooltip
                content="New chat"
                positioning={{ placement: 'right' }}
                showArrow
              >
                <Icon
                  fontSize="md"
                  color="fg.subtle"
                  _hover={{ color: 'fg.muted' }}
                >
                  <LuNewspaper />
                </Icon>
              </Tooltip>
            </AbsoluteCenter>
          </HStack>

          <HStack
            _hover={{
              layerStyle: 'fill.muted',
              textDecor: 'none',
            }}
            px="1"
            h="10"
            borderRadius="lg"
            w="100%"
            whiteSpace="nowrap"
          >
            <Link href="#" variant="plain" _hover={{ textDecor: 'none' }}>
              <Circle size="6" bg="bg" borderWidth="1px">
                <LuExpand fontSize="md" />
              </Circle>
              <Text fontSize="sm" fontWeight="md">
                Productos
              </Text>
            </Link>
          </HStack>
        </Stack>

        <Link
          href="#"
          _hover={{ textDecor: 'none', layerStyle: 'fill.muted' }}
          borderRadius="lg"
          px="1"
          py="2"
        >
          <HStack whiteSpace="nowrap">
            <Circle size="8" fontSize="lg" borderWidth="1px">
              <LuPlug />
            </Circle>
            <Stack gap="0" fontWeight="medium">
              <Text fontSize="sm">Retroalimentación</Text>
              <Text fontSize="xs" color="fg.subtle">
                Comentarios
              </Text>
            </Stack>
          </HStack>
        </Link>
      </Stack>
    </Box>
  )
}
