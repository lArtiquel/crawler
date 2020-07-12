import React from 'react'
import { List, ListSubheader, makeStyles } from '@material-ui/core'
import LinkListItem from './LinkListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 600,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function ResultList() {
  const styles = useStyles()

  const fakeData = [
    {
      url: 'https://google.com',
      isBad: false,
      termEntriesMap: {
        react: 8,
        redux: 5,
        lArtiquel: 228
      }
    },
    {
      url: 'https://goofy.com',
      isBad: true,
      termEntriesMap: {}
    },
    {
      url: 'https://oracle.com',
      isBad: false,
      termEntriesMap: {
        Java: 15,
        Collections: 5,
        lArtiquel: 15
      }
    }
  ]

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Crawling results:
        </ListSubheader>
      }
      className={styles.root}
    >
      {fakeData.map((item) => {
        return (
          <React.Fragment key={item.url}>
            <LinkListItem
              url={item.url}
              isBadLink={item.isBad}
              termEntriesObj={item.termEntriesMap}
            />
          </React.Fragment>
        )
      })}
    </List>
  )
}
