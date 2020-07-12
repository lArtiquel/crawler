import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Theme from './theme'
import BackgroundImage from './assets/cool-spider.png'
import Home from './components/pages/home/Home'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#1a181a',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}))

const App = () => {
  const styles = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <div className={styles.root}>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
