import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

export default function TermListItem({ term, entries }) {
  const styles = useStyles()

  return (
    <ListItem button className={styles.nested}>
      <ListItemText secondary={term} />
      <ListItemIcon>{`${entries} entry(ies)`}</ListItemIcon>
    </ListItem>
  )
}
