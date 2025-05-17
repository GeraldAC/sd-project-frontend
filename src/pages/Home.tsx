import Layout from '@/layouts/Layout'
import { Heading, VStack } from '@chakra-ui/react'
import Search from '@/components/home/Search'
import Prompt from '@/components/home/Prompt'
import ProductGrid from '@/components/home/ProductGrid'

const Home = () => {
  return (
    <Layout>
      <VStack gap="6" mt={'1'}>
        <Heading size="3xl">¿Qué productos está buscando?</Heading>
        <Search />
        <Prompt />
        <ProductGrid />
      </VStack>
    </Layout>
  )
}

export default Home
