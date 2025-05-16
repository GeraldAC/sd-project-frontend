import { useNavigate } from 'react-router-dom'
import { Card, createListCollection, Portal, Select } from '@chakra-ui/react'

const pages = createListCollection({
  items: [
    { label: 'Inicio', value: '/home' },
    { label: 'Login', value: '/login' },
    { label: 'Registro', value: '/register' },
    { label: 'Dashboard', value: '/dashboard' },
  ],
})

const Selector = () => {
  const navigate = useNavigate()

  return (
    <>
      <Card.Root
        padding={2}
        maxW="700px"
        mx="auto"
        mt={'20'}
        colorPalette={'teal'}
        size={'lg'}
        variant={'elevated'}
      >
        <Card.Body>
          <Select.Root
            collection={pages}
            onValueChange={(details) => {
              console.log(details)
              navigate(details.value[0])
            }}
            size={'lg'}
            variant={'subtle'}
            color={'teal'}
          >
            <Select.HiddenSelect />
            <Select.Label fontSize={'4xl'} mb={10}>
              Páginas
            </Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Selecciona una página" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {pages.items.map((page) => (
                    <Select.Item key={page.value} item={page}>
                      {page.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Card.Body>
      </Card.Root>
    </>
  )
}

export default Selector
