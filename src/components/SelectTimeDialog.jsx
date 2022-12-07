import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { srGetBarberTimings } from "../service/srBarber";
import { calcAMPM, convert12HourTime } from "../shared/utils";

export const SelectTimeDialog = ({
  appointmentTime,
  setAppointmentTime,
  setSelectTimeDialog,
  selectTimeDialog,
  u_info,
  selectedBarber,
  setSelectedBarber
}) => {
  const navigate = useNavigate()
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    srGetBarberTimings(selectedBarber.b_id).then((res) => {
      if(res.status === 400) {
        return;
      }
      calculateTimeSlots(res.bt_start_time, res.bt_end_time, res.bt_interval);
    });
  }, [selectedBarber]);

  const calculateTimeSlots = (start, end, interval) => {
    let startTime = start.split(":");
    let endTime = end.split(":");
    let startHour = parseInt(startTime[0]);
    let endHour = parseInt(endTime[0]);
    let timeSlots = [];
    let time = "";
    let ampm = "";
    for (let i = startHour; i <= endHour; i+= parseInt(interval)) {
      time = i;
      ampm = calcAMPM(parseInt(time));
      timeSlots.push(convert12HourTime(time) + ":00 " + ampm);
    }
    setAvailableTimeSlots(timeSlots);
  }

  return (
    <div className="make-appointment-page__select-time-dialog">
      <h3 className="make-appointment-page__select-time-dialog__title">Select Time</h3>
      <div className="make-appointment-page__select-time-dialog__time-list">
      {
        availableTimeSlots.length > 0 ? 
        availableTimeSlots.map((time) => {
          return (
            <div className="make-appointment-page__select-time-dialog__time-list__item"
            key={time}
            >
              <input type="radio"
                name="time"
                id={time}
                value={time}
                onChange={(e) => {
                  setAppointmentTime(e.target.value);
                }}
                />
              <label htmlFor={time}>{time}</label>
            </div>
          )
        }
        ) : (
          <div className="barber-time__error_msg">
            <p>Barber time slots not available</p>
          </div>
        )
      }
      </div>
      <div className="make-appointment-page__select-time-dialog__button">
        <button type="button" className={`${appointmentTime ? "" : "disable-btn"}`}
          onClick={() => {
            if (appointmentTime) {
              setSelectTimeDialog(!selectTimeDialog);
              navigate('/select-services', { state: {u_info: u_info, appointmentTime: appointmentTime, selectedBarber: selectedBarber} });
            }
          }}
        >Continue</button>
        <button type="button" style={{background: "red"}}
          onClick={() => {
            setSelectTimeDialog(!selectTimeDialog);
            setAppointmentTime('');
            setSelectedBarber({});
          }}
        >Cancel</button>
      </div>
    </div>
  )
};
