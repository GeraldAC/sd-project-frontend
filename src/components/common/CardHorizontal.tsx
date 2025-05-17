import { Badge, Box, Button, Card, HStack, Image } from '@chakra-ui/react'
import cafe from '../../assets/cafe-peru.jpg'

const CardHorizontal = () => {
  return (
    <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
      <Image objectFit="cover" maxW="200px" src={cafe} alt="Producto" />
      <Box>
        <Card.Body>
          <Card.Title mb="2">Café</Card.Title>
          <Card.Description>
            El café de Chanchamayo, Junín destaca por su acidez brillante,
            cuerpo medio y notas afrutadas. Cultivado entre 800 y 2000 m s. n.
            m., es reconocido por su calidad y producción sostenible.
          </Card.Description>
          <HStack mt="4">
            <Badge>Hot</Badge>
            <Badge>Caffeine</Badge>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button colorPalette={'orange'}>Comprar cafe</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}

export default CardHorizontal
