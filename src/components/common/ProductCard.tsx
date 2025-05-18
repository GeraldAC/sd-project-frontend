import {
  Image,
  Text,
  HStack,
  RatingGroup,
  Card,
  Box,
  Badge,
  Button,
  Link,
} from '@chakra-ui/react'

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    category: string
    ratingAvg?: number
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="xl"
      variant={'elevated'}
      size={'lg'}
    >
      <Image
        objectFit="cover"
        maxW="250px"
        src={product.imageUrl}
        alt={product.name}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2" color={'brand.800'}>
            {product.name}
          </Card.Title>
          <Card.Description lineClamp={'3'}>
            {product.description}
          </Card.Description>
          <HStack mt="4">
            <Badge colorPalette={'green'}>{product.category}</Badge>
          </HStack>
          <HStack mt="4" justifyContent={'space-between'}>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight">
              S/. {product.price.toFixed(2)}
            </Text>
            <RatingGroup.Root
              readOnly
              count={5}
              value={product.ratingAvg}
              size="lg"
              colorPalette={'orange'}
            >
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>
          </HStack>
        </Card.Body>
        <Card.Footer justifyContent={'end'}>
          <Button asChild colorPalette={'orange'}>
            <Link href={`/product/${product.id}`}>Ver Detalles</Link>
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}

export default ProductCard
