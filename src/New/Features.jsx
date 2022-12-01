import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Navbar from "./Navbar";
export  const Features = () => {
    return (
        <>
          <Navbar />
          <section className="hero-section">
           <div className='Feat'>
            <h3>Ease of appointment</h3>
            Are you looking for user friendly barber appointment system for hairstyling, haircutting, shaving and many more things?
            Then you are at the right place i.e, Book barber where we provide services that can be booked easily to find the barbers for our customers within seconds.
            No more calls and wait, just make an appointment from anywhere.
            <h3>Book the best</h3>
            Have a look at different barbers operating in your town and choose it on the basis of their services and reviews.
            Choose the barber's profile that matches your vibe and give them a chance to prove themselves.
            <h3>Easy and free</h3>
            Book barber is an online booking system that is totally free of cost and you don't have to pay any fees for the registration.
            Just register yourself and avail the services at one click, saving the precious time of both customer and barber.
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
