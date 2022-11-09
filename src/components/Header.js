import React from 'react'
import IconButton from '@mui/material/IconButton'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import { Box, Typography } from '@mui/material'

function Header() {
  return (
    <Box
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      }}
    >
      <IconButton aria-label='back' onClick={() => {}}>
        <ArrowBackIos />
      </IconButton>
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          fontSize: '15px',
          fontFamily: 'Quicksand',
          paddingLeft: 75,
          fontWeight: 'bold',
        }}
      >
        UPCOMING APPOINMENTS
      </div>
    </Box>
  )
}

export default Header
