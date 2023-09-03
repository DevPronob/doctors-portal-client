import React from 'react'
import Appointment from '../Appointment/Appointments'
import Banner from '../Banner/Banner'
import ContactUs from '../ContactUs/ContactUs'
import Info from '../Info/Info'
import MakeApp from '../MakeApp/MakeApp'
import Service from '../Services/Service'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div className='px-5'>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <MakeApp></MakeApp>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
