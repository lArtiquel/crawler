import React from 'react'
import { connect } from 'react-redux'
import { List, ListSubheader, makeStyles } from '@material-ui/core'
import LinkListItem from './LinkListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'auto',
    width: '100%',
    maxHeight: 600,
    backgroundColor: theme.palette.background.paper
  }
}))

const ResultList = ({ data }) => {
  const styles = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          color="primary"
        >
          Crawling results:
        </ListSubheader>
      }
      className={styles.root}
    >
      {data.map((item) => {
        return (
          <React.Fragment key={item.url}>
            <LinkListItem
              url={item.url}
              badUrl={item.badUrl}
              termsToEntries={item.termsToEntries}
            />
          </React.Fragment>
        )
      })}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.home.response
  }
}

export default connect(mapStateToProps)(ResultList)
