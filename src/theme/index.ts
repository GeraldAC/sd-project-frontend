import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#fef9f6' },
          100: { value: '#f3e9e1' },
          200: { value: '#e0cfc2' },
          300: { value: '#cca68e' },
          400: { value: '#b68560' },
          500: { value: '#9e6238' },
          600: { value: '#804c2c' },
          700: { value: '#63391f' },
          800: { value: '#4b2c18' },
          900: { value: '#2e1a0e' },
          950: { value: '#1a0f08' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.200}' },
          subtle: { value: '{colors.brand.300}' },
          emphasized: { value: '{colors.brand.400}' },
          focusRing: { value: '{colors.brand.500}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
