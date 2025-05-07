import { Button } from '@/components/ui/button'
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@/components/ui/menu'
import { Switch } from '@/components/ui/switch'
import { Box, Circle, HStack, Stack, Text } from '@chakra-ui/react'
import {
  LuChartArea,
  LuChartBarStacked,
  LuCheck,
  LuMenu,
  LuTimerOff,
} from 'react-icons/lu'

interface MenuItemDetailProps {
  icon: React.ReactElement
  title: string
  description?: string
  element: React.ReactElement
}

function MenuItemDetail(props: MenuItemDetailProps) {
  const { icon, title, description, element, ...rest } = props
  return (
    <HStack w="100%" {...rest}>
      <Circle size="8" bg="bg.muted">
        {icon}
      </Circle>
      <Stack gap="0" flex="1">
        <Text>{title}</Text>
        <Text fontSize="xs" color="fg.muted">
          {description}
        </Text>
      </Stack>
      <Box>{element}</Box>
    </HStack>
  )
}

export const Menu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="ghost"
          fontSize="lg"
          fontWeight="bold"
          color="fg.muted"
        >
          Asociaciones <LuMenu />
        </Button>
      </MenuTrigger>
      <MenuContent minW="320px" borderRadius="2xl">
        <MenuItem value="independiente" py="2">
          <MenuItemDetail
            title="Independientes"
            icon={<LuChartArea />}
            description="Sin mediadores"
            element={
              <Button variant="outline" size="xs" borderRadius="full">
                Preferido
              </Button>
            }
          />
        </MenuItem>

        <MenuItem value="mayoristas" py="2">
          <MenuItemDetail
            title="Mayoristas"
            icon={<LuChartBarStacked />}
            description="Venta al por mayor"
            element={<LuCheck fontSize="lg" />}
          />
        </MenuItem>

        <MenuSeparator />
        <MenuItem value="minoristas" py="2">
          <MenuItemDetail
            title="Minoristas"
            icon={<LuTimerOff />}
            element={<Switch />}
          />
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}
