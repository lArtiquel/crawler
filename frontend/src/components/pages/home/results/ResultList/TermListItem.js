import React from 'react'
import { ListItem, ListItemText, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  textRight: {
    textAlign: 'right'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

export default function TermListItem({ term, entries }) {
  const styles = useStyles()

  return (
    <ListItem button className={styles.nested}>
      <ListItemText secondary={term} />
      <ListItemText
        secondary={`${entries} entry(ies)`}
        className={styles.textRight}
      />
    </ListItem>
  )
}
