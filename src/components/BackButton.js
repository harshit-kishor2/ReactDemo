import React from 'react'
import Button from '@mui/material/Button'

function BackButton() {
  return (
    <div style={{ marginRight: 10, marginLeft: 10 }}>
      <Button
        variant='contained'
        style={{
          width: '100%',
          height: '50px',
          borderRadius: 50,
          backgroundColor: '#EDEDED',
          color: 'black',
          fontFamily: 'Quicksand',
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        Back
      </Button>
    </div>
  )
}

export default BackButton
