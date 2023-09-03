import React, { useState } from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import hero from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({setSelected,selected}) => {
   
//   if (selected) {
//     footer = <p>You picked {format(selected, 'PP')}.</p>;
//   }
  
  return (
    <div style={{
        background: `url(${bg})`
    }}>
       <div className="hero">
  <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
    <img src={hero}className="md:w-1/2  rounded-lg shadow-2xl" />
    <div className='w-1/2 flex justify-center items-center'>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
    </div>
  </div>
</div>
    </div>
  )
}

export default AppointmentBanner
