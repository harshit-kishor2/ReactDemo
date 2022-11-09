import { Box, Button } from '@mui/material'
import React from 'react'
import GradientButton from 'react-linear-gradient-button'
function NewBookingCard() {
  return (
    <div
      style={{
        display: 'flex',
        height: '75px',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to right, #0037C5, #08005F)',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        paddingRight: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          color: '#FFFFFF',
          fontSize: '15px',
          fontFamily: 'Quicksand',
          fontWeight: 700,
          lineHeight: 19,
        }}
      >
        New Booking In 2 Minutes
      </div>
      <Button
        style={{
          backgroundImage:
            'linear-gradient(to right, #FF8412, #D23758,#B1008A)',
          borderRadius: 50,
          height: 35,
          textDecorationColor: 'white',
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: 'Quicksand',
          border: '1px solid white',
          textShadow: '1px 1px 0 black',
        }}
        variant='contained'
      >
        Book Now
      </Button>
    </div>
  )
}

export default NewBookingCard
