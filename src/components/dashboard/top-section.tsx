import {
  Box,
  Breadcrumb,
  Circle,
  Flex,
  Float,
  HStack,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Separator,
} from '@chakra-ui/react'
import { Tooltip } from '@/components/ui/tooltip'
import { LuArrowBigRightDash, LuBell } from 'react-icons/lu'
import { useSidebarContext } from './sidebar-context'
import UserMenu from '../common/UserMenu'
import logo from '../../assets/logo.jpg'

export function TopSection() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext()
  return (
    <Flex
      bg={'brand.100'}
      justify={sideBarVisible ? 'space-between' : 'space-between'}
      align="center"
      p="2"
    >
      {!sideBarVisible && (
        <Tooltip
          content="Abrir barra lateral"
          positioning={{ placement: 'bottom' }}
          showArrow
          openDelay={300}
          closeDelay={50}
          contentProps={{
            css: { '--tooltip-bg': 'colors.orange.600' },
          }}
        >
          <IconButton
            colorPalette={'brand'}
            variant={'ghost'}
            size={'lg'}
            rounded={'full'}
            onClick={toggleSidebar}
          >
            <LuArrowBigRightDash style={{ width: '30px', height: '30px' }} />
          </IconButton>
        </Tooltip>
      )}
      <HStack flex={1} justify={'space-between'}>
        <HStack>
          <Separator
            borderColor={'black'}
            orientation="vertical"
            size={'lg'}
            height={'30px'}
          />
          <Breadcrumb.Root size={'lg'}>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Panel</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Mi emprendimiento</Breadcrumb.Link>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </HStack>

        <Box
          position="fixed"
          left={!sideBarVisible ? '50%' : `calc(50% + 130px)`}
          transform="translateX(-50%)"
          transition="left 0.3s ease"
        >
          <LinkBox>
            <LinkOverlay href="/">
              <Image src={logo} alt="Logo" rounded="full" height="50px" />
            </LinkOverlay>
          </LinkBox>
        </Box>

        <HStack pr={'2'} gap={'7'}>
          <Box
            pos="relative"
            rounded={'full'}
            borderWidth={'2px'}
            borderColor={'brand.600'}
            _hover={{ transform: 'scale(0.9)' }}
          >
            <Tooltip
              content="Notificaciones"
              showArrow
              openDelay={300}
              closeDelay={50}
              contentProps={{
                css: { '--tooltip-bg': 'colors.orange.600' },
              }}
            >
              <IconButton
                bg={'brand.500'}
                variant={'solid'}
                rounded={'full'}
                size={'lg'}
              >
                <LuBell />
              </IconButton>
            </Tooltip>
            <Float placement="bottom-end" offset="1.5">
              <Circle borderWidth={'3px'} size="4" bg="red"></Circle>
            </Float>
          </Box>
          <UserMenu />
        </HStack>
      </HStack>
    </Flex>
  )
}
