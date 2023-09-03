import React from 'react'
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../components/PrimaryButton'
const Appointments = () => {
  return (
   
      <section className='mt-32'
      style={{
        background: `url(${appointment})`
    }}
      
      >
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg" />
    <div className='text-white'>
      <h1 className="text-[20px] text-primary font-bold">Appointment</h1>
      <p className="py-6 text-[16px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>GET STARTED</PrimaryButton>
    </div>
  </div>
</div>

      </section>
  )
}

export default Appointments
