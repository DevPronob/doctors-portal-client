import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../../../components/Loading';
import { useQuery } from 'react-query';
const AvailableAppointments = ({selected}) => {
    // const [service,setService] =useState([])
    
    // const [appointmentOptions,setAppointmentOptions] =useState([])
    const [treatment,setTreatment] =useState([])
    const [loading,setLoading] =useState(true)
   const date =format(selected,'PP')
    // useEffect(() =>{
    //     fetch(`http://localhost:5000/api/appointment?date=${date}`)
    //     .then(res =>res.json())
    //     .then(data =>{
    //       setService(data)
    //       setLoading(false)
    //     })
    // },[selected])
    const {data:service=[], isLoading,refetch} = useQuery({
      queryKey: ['appointment'],
      queryFn: () => fetch(`http://localhost:5000/api/appointment?date=${date}`)
      .then(res =>res.json())
    })
    if(isLoading){
      return <Loading></Loading>
     }
    
    console.log(typeof treatment)
  return (
    <div className='mt-16'>
       
      <h3 className='text-[22px] font-semibold text-primary text-center'>Available Appointments on {format(selected, 'PP')}</h3>
      <div className='grid pt-8  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
        {
           service && service.map(items =>{
                return <div>
                    <div className="card  w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className=" text-[20px] font-semibold text-primary">{items.name}</h2>
    <p>{items.slots?items?.slots[0]:""}</p>
    <p>{items.slots.length} SPACES AVAILABLE</p>
    <div className="card-actions justify-center">
      <label onClick={() =>setTreatment(items)} htmlFor="my-modal-6" className="btn text-white btn-primary">Book Appointment</label>
    </div>
  </div>
</div>
{
                treatment?.slots &&<BookingModal refetch={refetch} setTreatment={setTreatment} selected ={selected} treatment ={treatment}></BookingModal>
            }
                </div>
            })
        }
      </div>
     
    </div>
  )
}

export default AvailableAppointments
// && <BookingModal setTreatment={setTreatment} selected ={selected} treatment ={treatment}></BookingModal>