import {
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Tooltip } from '@/components/ui/tooltip'
import {
  LuArrowBigLeft,
  LuBriefcaseBusiness,
  LuContact,
  LuNotebookText,
  LuPlug,
} from 'react-icons/lu'
import { useSidebarContext } from './sidebar-context'
import { DarkMode } from '../ui/color-mode'

export function Sidebar() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext()

  return (
    <Box
      bg="brand.700"
      w={!sideBarVisible ? '0' : '260px'}
      overflow="hidden"
      transition=" width 0.3s"
    >
      <Stack h="full" px="3" py="3">
        <Flex justify="end">
          <Tooltip
            content="Cerrar barra lateral"
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
              variant={'solid'}
              size={'lg'}
              rounded={'full'}
              onClick={toggleSidebar}
            >
              <LuArrowBigLeft
                style={{
                  width: '30px',
                  height: '30px',
                }}
              />
            </IconButton>
          </Tooltip>
        </Flex>

        <Stack px="2" py={2} gap="3" flex="1">
          <DarkMode>
            <HStack
              asChild
              bg="brand.600"
              _hover={{
                bg: 'brand.500',
                textDecor: 'none',
              }}
              px="4"
              py={'4'}
              h="12"
              borderRadius="lg"
              w="100%"
              whiteSpace="nowrap"
            >
              <Link
                href="/dashboard/profile"
                variant="plain"
                _hover={{ textDecor: 'none' }}
              >
                <Circle size="8" borderWidth="2px" borderColor={'orange.300'}>
                  <LuContact style={{ width: '20px', height: '20px' }} />
                </Circle>
                <Text px={'5px'} fontSize="md" fontWeight={'medium'}>
                  Perfil
                </Text>
              </Link>
            </HStack>
          </DarkMode>

          <DarkMode>
            <HStack
              asChild
              bg="brand.600"
              _hover={{
                bg: 'brand.500',
                textDecor: 'none',
              }}
              px="4"
              h="12"
              borderRadius="lg"
              w="100%"
              whiteSpace="nowrap"
            >
              <Link
                href="/dashboard/emprendimientos"
                variant="plain"
                _hover={{ textDecor: 'none' }}
              >
                <Circle size="8" borderWidth="2px" borderColor={'orange.300'}>
                  <LuBriefcaseBusiness
                    style={{ width: '20px', height: '20px' }}
                  />
                </Circle>
                <Text px={'5px'} fontSize="md" fontWeight={'medium'}>
                  Emprendimientos
                </Text>
              </Link>
            </HStack>
          </DarkMode>

          <DarkMode>
            <HStack
              asChild
              bg="brand.600"
              _hover={{
                bg: 'brand.500',
                textDecor: 'none',
              }}
              px="4"
              h="12"
              borderRadius="lg"
              w="100%"
              whiteSpace="nowrap"
            >
              <Link
                href="/dashboard/valoraciones"
                variant="plain"
                _hover={{ textDecor: 'none' }}
              >
                <Circle size="8" borderWidth="2px" borderColor={'orange.300'}>
                  <LuNotebookText style={{ width: '20px', height: '20px' }} />
                </Circle>
                <Text px={'5px'} fontSize="md" fontWeight={'medium'}>
                  Valoraciones
                </Text>
              </Link>
            </HStack>
          </DarkMode>
        </Stack>

        <DarkMode>
          <Link
            href="#"
            bg="brand.600"
            _hover={{ textDecor: 'none', bg: 'brand.500' }}
            borderRadius="lg"
            px="4"
            py="2"
          >
            <HStack whiteSpace="nowrap">
              <Circle
                size="8"
                fontSize="lg"
                borderWidth="2px"
                borderColor={'orange.300'}
              >
                <LuPlug />
              </Circle>
              <Stack gap="0" fontWeight="medium">
                <Text fontSize="sm">Retroalimentación</Text>
                <Text fontSize="xs" color="orange.300">
                  Comentarios
                </Text>
              </Stack>
            </HStack>
          </Link>
        </DarkMode>
      </Stack>
    </Box>
  )
}
