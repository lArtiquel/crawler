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

export default function LinkListItem({ url, isBadLink, termEntriesObj }) {
  const [isOpen, setOpen] = useState(false)
  // contains an array of a given object's own enumerable string-keyed property [key, value] pairs
  const [termEntriesArray, setTermEntriesArray] = useState(Object.entries({}))
  // flag indicates if `termEntriesObj` is empty or not
  const [isTermsObjEmpty, setTermsObjEmpty] = useState(true)
  const styles = useStyles()

  const handleClick = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    // check if `termEntriesObj` is the type of Object
    if (termEntriesObj.constructor === Object) {
      // use ES7 feature to convert obj to array of enum properties
      setTermEntriesArray(Object.entries(termEntriesObj))
      // check if obj is empty
      if (termEntriesArray.length !== 0) {
        setTermsObjEmpty(false)
      } else {
        setTermsObjEmpty(true)
      }
    } else {
      // here if passed `termEntriesObj` is not an object
      setTermsObjEmpty(true)
      setTermEntriesArray(Object.entries({}))
    }
    // eslint-disable-next-line
  }, [termEntriesObj, termEntriesArray.length])

  return (
    <>
      <ListItem button onClick={!isTermsObjEmpty ? handleClick : () => {}}>
        <ListItemIcon>
          {isBadLink ? (
            <BadLinkIcon className={styles.red} />
          ) : (
            <GoodLinkIcon className={styles.green} />
          )}
        </ListItemIcon>
        <ListItemText secondary={url} className={styles.white} />
        {!isTermsObjEmpty && (
          <ExpandIcon open={isOpen} className={styles.white} />
        )}
      </ListItem>
      {!isTermsObjEmpty && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <TermList termEntriesArray={termEntriesArray} />
        </Collapse>
      )}
    </>
  )
}
