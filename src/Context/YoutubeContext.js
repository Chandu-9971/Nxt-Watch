import React from 'react'

const YoutubeContext = React.createContext({
  cartList: [],
  isTheme: false,
  ThemeClicked: () => {},
  addSaveItems: () => {},
})
export default YoutubeContext
