import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.config';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MyAppointment = () => {

    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/api/booking?email=${user?.email}`;

    const {data:bookings=[], isLoading,refetch} = useQuery({
        queryKey: ['appointment'],
        queryFn: () => fetch(url)
        .then(res =>res.json())
      })

  return (
    <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient?booking.patient:"Unknown Name"}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default MyAppointment
