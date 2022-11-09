import React from 'react'

import Button from '@mui/material/Button'
import { RemoveRedEye, RemoveRedEyeOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'

function AppointmentCard() {
  return (
    <div
      style={{
        height: 270,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
        backgroundColor: '#F6F6F6',
      }}
    >
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          flex: 1,
          width: '95%',
          justifyContent: 'space-between',
        }}
      >
        <CustomButton
          lable={'Clinic'}
          gradient={'linear-gradient(to right, #FF8412, #FF8412,#B1008A)'}
        />
        <CustomButton lable={'Test'} />
        <CustomButton lable={'Surgery'} />
        <CustomButton lable={'Medicine'} />
      </div>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          flex: 2,
          width: '95%',
        }}
      >
        {/* <div
          style={{
            height: 90,
            width: 90,
            borderRadius: 45,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        ></div> */}
        <Avatar
          style={{
            height: 90,
            width: 90,
            border: '4px solid rgba(255, 132, 18, 0.4)',
          }}
          alt='Harshit'
          src={require('../assets/doctor.png')}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 20,
          }}
        >
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'Quicksand',
              fontWeight: '500',
              paddingTop: 10,
            }}
          >
            17 September 2021, 9.30 PM
          </div>
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'Quicksand',
              fontWeight: '500',
              color: '#E97000',
              paddingTop: 10,
            }}
          >
            Appointment With Doctor Arun
          </div>
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'Quicksand',
              fontWeight: '500',
              paddingTop: 10,
            }}
          >
            Doctor World Clinic
          </div>
        </div>
      </div>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          flex: 1,
          width: '95%',
          justifyContent: 'space-between',
        }}
      >
        <CustomButton
          lable={'Reschedule'}
          width={'100px'}
          gradient={'linear-gradient(to right, #B1008A, #060D67)'}
        />
        <CustomButton width={'100px'} lable={'Cancel'} />
        <CustomButton
          width={'100px'}
          lable={'View'}
          startIcon={<RemoveRedEyeOutlined />}
        />
      </div>
    </div>
  )
}

export default AppointmentCard

const CustomButton = ({ lable, gradient, width, startIcon }) => {
  return (
    <Button
      variant='contained'
      style={{
        height: '35px',
        width: width ?? '70px',
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: '#EDEDED',
        color: gradient ? 'white' : 'black',
        fontFamily: 'Quicksand',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundImage: gradient,
      }}
      startIcon={startIcon}
    >
      {lable}
    </Button>
  )
}
