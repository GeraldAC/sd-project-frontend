import { organicProducts } from '@/services/products'
import { For, SimpleGrid } from '@chakra-ui/react'
import ProductCard from '../common/ProductCard'

const ProductGrid = () => {
  return (
    <SimpleGrid columns={2} gap="40px">
      <For each={organicProducts}>
        {(item, index) => <ProductCard key={index} product={item} />}
      </For>
    </SimpleGrid>
  )
}

export default ProductGrid
