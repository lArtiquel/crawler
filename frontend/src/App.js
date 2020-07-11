import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './theme'
import BackgroundImage from './assets/cool-spider.png'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#1a181a',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    display: 'flex',
    width: '100%',
    height: '100%'
  }
}))

const App = () => {
  const styles = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <div className={styles.root}>Hi there!</div>
    </ThemeProvider>
  )
}

export default App
