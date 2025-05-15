import { Box, Center, Icon, Separator, Text } from '@chakra-ui/react'
import { LuZap } from 'react-icons/lu'

export function BottomSection() {
  return (
    <Box pb="2">
      <Separator my={5} />
      <Center fontSize="md" color="fg.muted" mb={5}>
        <Text>
          Con
          <Icon boxSize={4} color="pink.700" mx="1">
            <LuZap />
          </Icon>
          Emprende-bro
        </Text>
      </Center>
    </Box>
  )
}
