import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        green: {
          50: { value: '#E8F5E9' },
          100: { value: '#C8E6C9' },
          200: { value: '#A5D6A7' },
          300: { value: '#81C784' },
          400: { value: '#66BB6A' },
          500: { value: '#4CAF50' },
          600: { value: '#43A047' },
          700: { value: '#388E3C' },
          800: { value: '#2E7D32' },
          900: { value: '#1B5E20' },
        },
        brown: {
          50: { value: '#f3e5d8' },
          100: { value: '#e3c8aa' },
          200: { value: '#d3ab7b' },
          300: { value: '#c38e4c' },
          400: { value: '#b3711d' },
          500: { value: '#8B4513' },
          600: { value: '#6f3610' },
          700: { value: '#52280c' },
          800: { value: '#361907' },
          900: { value: '#1b0b03' },
        },
        tomato: {
          500: { value: '#FF6347' },
        },
        orange: {
          500: { value: '#FF9800' },
        },
        yellow: {
          500: { value: '#FFEB3B' },
        },
        olive: {
          500: { value: '#6B8E23' },
        },
      },
    },

    semanticTokens: {
      colors: {
        primary: {
          solid: { value: '{colors.green.500}' },
          hover: { value: '{colors.green.600}' },
          contrast: { value: '{colors.green.50}' },
          fg: { value: '{colors.green.900}' },
          muted: { value: '{colors.green.100}' },
          subtle: { value: '{colors.green.200}' },
          emphasized: { value: '{colors.green.300}' },
          focusRing: { value: '{colors.green.500}' },
        },
        background: {
          default: { value: '{colors.brown.50}' },
          subtle: { value: '{colors.brown.100}' },
        },
        surface: {
          default: { value: '{colors.brown.100}' },
          strong: { value: '{colors.brown.300}' },
        },
        text: {
          default: { value: '{colors.brown.900}' },
          muted: { value: '{colors.brown.700}' },
        },
        accent: {
          solid: { value: '{colors.orange.500}' },
          contrast: { value: '{colors.orange.50}' },
        },
        danger: {
          solid: { value: '{colors.tomato.500}' },
        },
        warning: {
          solid: { value: '{colors.yellow.500}' },
        },
        success: {
          solid: { value: '{colors.green.400}' },
        },
        secondary: {
          solid: { value: '{colors.olive.500}' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
