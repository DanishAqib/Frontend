import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram,BsFillTelephoneFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Navbar from "./Navbar";
export const ContactUs = () => {
    return (
        <>
          <Navbar />
          <section className="hero-section">
            <div className='AAA'>
              In case of any query, you may report us here 👇 
              <br></br>
              <br></br>
              <SiGmail ></SiGmail>   <br></br>
              bookbarber22@gmail.com
              <br></br>
              <br></br>
             <BsFillTelephoneFill></BsFillTelephoneFill> <br></br> 0317-3032526
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