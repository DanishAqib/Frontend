import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Navbar from "./Navbar";
export const AboutPage = () => {
    return (
        <>
          <Navbar />
          <section className="hero-section" >
          <div className='AAAA'>
          The book barber provides a platform where barbers and their customers can connect with each other. This will result in efficient use of barber’s time as well as will save their customer’s time. The most valuable thing for human being is time. We therefore intend to save our precious time by designing a website for salon booking. The users can register themselves on the app and can select their preferred salon and service to enquire and see the current (real time) status of the barber. User will have the facility to book their appointment with their time slot from anywhere, so that they don’t have to wait there in the queue at the barber shop. The barber can confirm the appointment according to his availability.
 
          </div>
           <div style={{  marginTop:"220px"}}>
            <a  href="https://www.facebook.com/people/Book-barber/100086651361718/">  <BsFacebook style={{margin:" 0 10px 0 10px ",width:'50',height:'100px'}}/>   </a>
      <a  href="https://www.instagram.com/bookbarber_22/?next=%2F">   <BsInstagram style={{margin:" 0 10px 0 10px ",width:'50' ,height:'100px'}}/>   </a>
      <a  href="https://twitter.com/BookBarber22">  <BsTwitter style={{margin:" 0 10px 0 10px ",width:'50',height:'100px'}}/>  </a>
      </div>
        <h4 style={{ width:"100wv" , textAlign:"center", margin:"0", color:"#9C741E"}}>

        © 2022 Book Barber Inc. All rights reserved.
        <Link to="/Terms" >
        Terms and Conditions
        </Link>
        </h4>
          </section>

        </>
      );
}