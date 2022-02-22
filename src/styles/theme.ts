import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme ({
	colors: {
    yellow: {
      "500": "#FFBA08"
    },

    dark: {
      black: '#000000',
      text: '#47585B',
      info: '#999999'
    },
    light: {
      white: '#FFFFFF',
      text: '#F5F8FA',
      info: '#DADADA'
    }
  },

  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
})