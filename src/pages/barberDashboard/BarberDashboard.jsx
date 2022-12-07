import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { srGetUserInfo } from "../../service/srUser";
import { StatusDialog } from '../../components/StatusDialog';
import { srUpdateBarberTimings } from '../../service/srBarber';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from '../../components/Navbar';
import "./barberDashboard.css";

export const BarberDashboard = () => {
  const location = useLocation();
  const u_email = location.state.u_email;
  if (!u_email) {
    alert("Invalid Credentials");
    window.location.href = "/";
  }
  const [u_info, setU_info] = useState({});
  useEffect(() => {
    srGetUserInfo(u_email).then((res) => {
      if (res) {
        if(u_info.u_firstname !== res.u_firstname) {
          setU_info(res);
        }
      }
    });
  }, [u_email, u_info]);

  const [openStatusChangeDialog, setOpenStatusChangeDialog] = useState(false);
  const [openUpdateTimingsDialog, setOpenUpdateTimingsDialog] = useState(false);

  const [timingsInfo, setTimingsInfo] = useState({
    bt_start_time: '',
    bt_end_time: '',
    bt_interval: '',
  });

  const updateTimings = () => {
    if (
      !timingsInfo.bt_start_time || 
      !timingsInfo.bt_end_time ||
      !timingsInfo.bt_interval
    ) {
      toast.error('Please fill all the fields', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else {
      srUpdateBarberTimings(
        u_info.u_id, 
        timingsInfo.bt_start_time,
        timingsInfo.bt_end_time,
        timingsInfo.bt_interval
        ).then((res) => {
        if (res) {
          toast.success('Timings updated successfully', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        else {
          toast.error('Something went wrong', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
      setTimingsInfo({
        bt_start_time: '',
        bt_end_time: '',
        bt_interval: '',
      });
      setOpenUpdateTimingsDialog(false);
    }
  }

  return (
    <>
    <div className='dashboard'
      style={{ 
        opacity: openStatusChangeDialog || openUpdateTimingsDialog ? 0.5 : 1, 
        pointerEvents: openStatusChangeDialog || openUpdateTimingsDialog ? 'none' : 'auto' }}
    >
      <NavBar u_info={u_info} />
      <div className="dasboard__container">
        <div className="dashboard__container-header">
          <h1>Barber Dashboard</h1>
        </div>
        <div className="dashboard__container-body">
          <div className="card">
            <div className="card__header">
              <h3>Appointment Requests</h3>
            </div>
            <div className="card__body">
              <p>
                Click here to see appointments requested by customers to you and confirm them.
              </p>
            </div>
            <div className="card__footer">
              <Link to="/confirm-appointment" state={{ u_info: u_info }}>
                <button>Confirm an Appointment</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h3>View Current Appointment</h3>
            </div>
            <div className="card__body">
              <p>
                Click here to view your current appointment status with customers.
              </p>
            </div>
            <div className="card__footer">
              <Link to="/barber-current-appointment" state={{ u_info: u_info }}>
                <button>View Current Appointment</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h3>Update Shop Timings</h3>
            </div>
            <div className="card__body">
              <p>
              Click here to update your shop timings to let customers know when you are available.
              </p>
            </div>
            <div className="card__footer">
                <button
                  onClick={() => setOpenUpdateTimingsDialog(true)}
                >Update Timings</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h3>Update Status</h3>
            </div>
            <div className="card__body">
              <p>
                Click here to modify your profile status to let customers know if you are available or not.
              </p>
            </div>
            <div className="card__footer">
              <button
                onClick={() => setOpenStatusChangeDialog(true)}
              >Change Status</button>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h3>Settings</h3>
            </div>
            <div className="card__body">
              <p>
                Click here to modify your account settings and update your profile
              </p>
            </div>
            <div className="card__footer">
              <Link to="/settings" state={{ u_info: u_info }} >
                <button>Settings</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <h3>Appointments History</h3>
            </div>
            <div className="card__body">
              <p>
              Click here to view all of your previous appointments.
              </p>
            </div>
            <div className="card__footer">
              <Link to="/BarberHistory" state={{ u_info: u_info }}>
                <button>Appointments History</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {openStatusChangeDialog && <StatusDialog setOpenStatusChangeDialog={setOpenStatusChangeDialog} u_id={u_info.u_id} />}
    {
      openUpdateTimingsDialog && (
        <form className="status-dialog">
          <div className="status-dialog__header">
            <h3>Update Timings</h3>
          </div>
          <div className="barber__timings-dialog__body status-dialog__body">
            <div className="status-dialog__body-input">
              <label htmlFor="start-time">Start Time</label>
              <input type="time" id="start-time" className='dialog__input' required  
                value={timingsInfo.bt_start_time}
                onChange={(e) => setTimingsInfo({ ...timingsInfo, bt_start_time: e.target.value })}
              />
            </div>
            <div className="status-dialog__body-input">
              <label htmlFor="end-time">End Time</label>
              <input type="time" id="end-time" className='dialog__input' required
                value={timingsInfo.bt_end_time}
                onChange={(e) => setTimingsInfo({ ...timingsInfo, bt_end_time: e.target.value })}
              />
            </div>
            <div className="status-dialog__body-input">
              <label htmlFor="time-interval">Time Interval</label>
              <input type="number" id="time-interval" className='dialog__input' required
                min="1" max="5"
                value={timingsInfo.bt_interval}
                onChange={(e) => setTimingsInfo({ ...timingsInfo, bt_interval: e.target.value })}
              />
            </div>
          </div>
          <div className="status-dialog__footer">
            <button
              onClick={() => {
                setOpenUpdateTimingsDialog(false)
                setTimingsInfo({
                  bt_start_time: '',
                  bt_end_time: '',
                  bt_interval: ''
                })
              }}
            >Close</button>
            <button type="submit"
              style={{
                backgroundColor: !timingsInfo.bt_start_time || !timingsInfo.bt_end_time || !timingsInfo.bt_interval ? '#ccc' : '#f44336',
                pointerEvents: !timingsInfo.bt_start_time || !timingsInfo.bt_end_time || !timingsInfo.bt_interval ? 'none' : 'auto'
              }}
              onClick={() => {
                updateTimings();
              }}
            >Update</button>
          </div>
        </form>
      )
    }
    <ToastContainer />
    </>
  )
};