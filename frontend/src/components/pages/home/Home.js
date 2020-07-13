import React from 'react'
import { connect } from 'react-redux'
import { Container, Box } from '@material-ui/core'
import Form from './form/Form'
import ProcessingIndicator from './processing/ProcessingIndicator'
import ResultForm from './results/ResultForm'
import { HomeFrames } from '../../../constants/frames'
import ErrorDialog from './dialog/ErrorDialog'

const Home = ({ frame }) => {
  const resolveBody = () => {
    switch (frame) {
      case HomeFrames.FORM:
        return <Form />
      case HomeFrames.PROCESSING:
        return <ProcessingIndicator />
      case HomeFrames.RESULTS:
        return <ResultForm />
      default:
        return <div>No such Frame...</div>
    }
  }

  return (
    <Container maxWidth="sm">
      <Box my={2}>{resolveBody()}</Box>
      <ErrorDialog />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    frame: state.home.frame
  }
}

export default connect(mapStateToProps)(Home)
