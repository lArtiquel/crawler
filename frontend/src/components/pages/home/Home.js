import React from 'react'
import { Container, Box } from '@material-ui/core'
import ResultForm from './results/ResultForm'

const Home = () => {
  // <Form />
  // <ProcessingIndicator />
  return (
    <Container maxWidth="sm">
      <Box my={2}>
        <ResultForm />
      </Box>
    </Container>
  )
}

export default Home
