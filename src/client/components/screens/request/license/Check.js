import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1px solid #686868',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#7d7d7d',
    },
  },
  confirmed: {
    '&:before': {
      position: 'absolute',
      top: '5px',
      left: '5px',
      content: '" "',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#d2a700',
    },
  },
  'size=middle': {
    transform: 'scaleX(0.8)',
  },
  'size=small': {
    transform: 'scaleX(0.7)',
  },
})

const Check = ({ size, confirmed, onConfirm }) => (
  <span
    className={styles({ size, confirmed })}
    onClick={onConfirm}
  />
)

export default Check
