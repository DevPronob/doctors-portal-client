import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.config';
import useAdmin from '../components/hooks/useAdmin';

const DashboardLayout = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isAdmin] =useAdmin(user?.email)
    console.log(isAdmin)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">menu</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li><Link to='/Dashboard'>My Appointments</Link></li>
      {/* <li><Link to='/Dashboard/AllUsers'>All Users</Link></li> */}
      {
                            isAdmin && <>
                                <li><Link to="/Dashboard/AllUsers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }

    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashboardLayout
