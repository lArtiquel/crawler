import React from 'react'
import { List } from '@material-ui/core'
import TermListItem from './TermListItem'

export default function TermList({ termEntriesArray }) {
  return (
    <List component="div" disablePadding>
      {termEntriesArray.map((termEntries) => {
        const [term, entries] = termEntries
        return (
          <React.Fragment key={`${term}-${entries}-${Math.random() * 134332}`}>
            <TermListItem term={term} entries={entries} />
          </React.Fragment>
        )
      })}
    </List>
  )
}
