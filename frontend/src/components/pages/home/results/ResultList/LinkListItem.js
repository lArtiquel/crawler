import React, { useState, useEffect } from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  makeStyles
} from '@material-ui/core'
import {
  DoneOutlined as GoodLinkIcon,
  CloseOutlined as BadLinkIcon,
  ExpandLessOutlined as ExpandLessIcon,
  ExpandMoreOutlined as ExpandMoreIcon
} from '@material-ui/icons'
import TermList from './TermList'

export const ExpandIcon = ({ open, className }) => {
  return (
    <>
      {open ? (
        <ExpandLessIcon className={className} />
      ) : (
        <ExpandMoreIcon className={className} />
      )}
    </>
  )
}

const useStyles = makeStyles(() => ({
  red: {
    color: '#f44336'
  },
  green: {
    color: '#4caf50'
  },
  white: {
    color: '#fff'
  }
}))

export default function LinkListItem({ url, isBadURL, termsToEntries }) {
  const [isOpen, setOpen] = useState(false)
  // contains an array of a given object's own enumerable string-keyed property [key, value] pairs
  const [termsToEntriesArray, setTermsToEntriesArray] = useState(
    Object.entries({})
  )
  // flag indicates if `termEntriesObj` is empty or not
  const [isTermsToEntriesEmpty, setTermsToEntriesEmpty] = useState(true)
  const styles = useStyles()

  const handleClick = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    // check if `termsToEntries` is the type of Object
    if (termsToEntries.constructor === Object) {
      // use ES7 feature to convert obj to array of enum properties
      setTermsToEntriesArray(Object.entries(termsToEntries))
      // check if obj is empty
      if (termsToEntriesArray.length !== 0) {
        setTermsToEntriesEmpty(false)
      } else {
        setTermsToEntriesEmpty(true)
      }
    } else {
      // here if passed `termsToEntries` is not an object
      setTermsToEntriesEmpty(true)
      setTermsToEntriesArray(Object.entries({}))
    }
    // eslint-disable-next-line
  }, [termsToEntries, termsToEntriesArray.length])

  return (
    <>
      <ListItem
        button
        onClick={!isTermsToEntriesEmpty ? handleClick : () => {}}
      >
        <ListItemIcon>
          {isBadURL ? (
            <BadLinkIcon className={styles.red} />
          ) : (
            <GoodLinkIcon className={styles.green} />
          )}
        </ListItemIcon>
        <ListItemText secondary={url} />
        {!isTermsToEntriesEmpty && (
          <ExpandIcon open={isOpen} className={styles.white} />
        )}
      </ListItem>
      {!isTermsToEntriesEmpty && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <TermList termsToEntriesArray={termsToEntriesArray} />
        </Collapse>
      )}
    </>
  )
}
