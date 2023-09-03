import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner'
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const AppointmentSection = () => {
  const today = new Date();
    const [selected, setSelected] = useState(today);
    console.log(selected)
  return (
    <div>
      <AppointmentBanner selected ={selected} setSelected ={setSelected}></AppointmentBanner>
      <AvailableAppointments selected ={selected} ></AvailableAppointments>
    </div>
  )
}

export default AppointmentSection
