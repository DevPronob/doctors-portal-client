import React from 'react'
import appointment from '../../../assets/images/appointment.png'
const ContactUs = () => {
  return (
   <section 
   style={{
    background: `url(${appointment})`
   }}
   className='max-h-full'
   >
<div className='pt-6 pb-5'>
<h5 className='text-center text-primary font-bold text-[20px]'>Contact Us</h5>
      <p className='text-center text-white text-[34px]'>Stay connected with us</p>
    <div className='pt-5 flex justify-center items-center'>
    <div className="card flex-shrink-0 w-full md:w-1/3 ">
      <div className="card-body">
        <div className="form-control">
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg" ></textarea>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
   </section>
  )
}

export default ContactUs

// style={{
//     background: `url(${appointment})`
// }}
