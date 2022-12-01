import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import Navbar from "./Navbar";
export const HomePage = () => {
  return (
    <>
    <Navbar />
    <section className="hero-section">
    <h1 style={{marginTop: '500px'}}>Book Barber</h1>
      <p style={{textAlign:"center"}}>A platform for booking appointments from the barber by just one click.</p>
      
      
        <Link to="/LandingPage" >
        <button style={{ marginBottom:"120px", width:"200px"}}> Lets Go</button>
        </Link>

      <div style={{  marginTop:"38px"}}>
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

