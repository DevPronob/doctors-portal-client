import React from 'react'
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const BookingModal = ({selected,treatment,setTreatment,refetch}) => {
    const { name: treatmentName, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const handleBooking =(event) =>{
        // console.log(slots) 
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        event.preventDefault()

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        console.log(booking)

        fetch('http://localhost:5000/api/booking/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
        })
        .then(data =>{
        setTreatment(null)
        alert('Booking Confirmed')
        console.log(data)
        })
    

    //         fetch('http://localhost:5000/api/post/', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json',
    //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                 },
    //                 body: JSON.stringify(blog)
    //             })
    //             .then(res =>{
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken');
    //                     navigate('/');
    //                 }
    //                 return res.json()
    //             })
                
    //     })
    // }

            // if (data) {
            //     setTreatment(null);
            //     // toast.success('Booking confirmed');
            //     // refetch();
            //     alert('Booking Confirmed')
            // }
            // else{
            //     // toast.error(data.message);
            //     alert(data.message)
            // }


    }
    const date = format(selected, 'PP');
  return (
    <>
    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{treatmentName}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                <input type="text" disabled value={date} className="input w-full input-bordered " />
                <select name="slot" className="select select-bordered w-full">
                    {
                        slots.map((slot, i) => <option
                            value={slot}
                            key={i}
                        >{slot}</option>)
                    }
                </select>
                <input name="name" type="text"  disabled placeholder="Your Name" defaultValue={user?.displayName} className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={user?.email}  disabled placeholder="Email Address" className="input w-full input-bordered" />
                <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <br />
                <input className='btn btn-accent w-full' type="submit" value="Submit" />
            </form>
        </div>
    </div>
</>
  )
}

export default BookingModal
