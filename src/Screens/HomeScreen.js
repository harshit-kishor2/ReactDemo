import React from 'react'
import AppointmentCard from '../components/AppointmentCard'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import NewBookingCard from '../components/NewBookingCard'

const HomeScreen = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
      }}
    >
      <Header />
      <NewBookingCard />
      <AppointmentCard />
      <AppointmentCard />
      <BackButton />
    </div>
  )
}

export default HomeScreen
