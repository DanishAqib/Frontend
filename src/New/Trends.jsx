import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Navbar from "./Navbar";
export const Trends = () => {
    return (
        <>
          <Navbar />
          <section className="hero-section" >
           <div className='Trendsss'>
              We are here to assist you further about the trending fashions and help you decide the best choice of the all.
            <h2>Haircuts</h2>
            
            1. Fade haircut<br></br>
            2. Short haircut<br></br>
            3. The undercut<br></br>
            4. Cropcut<br></br>

            <h2>Hairstyles</h2>
            1. High and tight<br></br>
            2. Alfredo <br></br>
            3. French crop<br></br>
            4. Slick back<br></br>
            
            <h2>Beardstyles</h2>

            1. The Goatee<br></br>
            2. Boxed Beard <br></br>
            3. The Van Dyke <br></br>
            4. The Balbo <br></br>

            <h2>Facials</h2>
            1. Deep cleansing<br></br>
            2. Clean pores<br></br>
            3. Men kit<br></br>
            4. Anti aging<br></br>

            <h2>Massage</h2>

            1. Soothing<br></br>
            2. Chair massage<br></br>
            3. Stress remover<br></br>
            4. Deep tissue<br></br>

            <h2>Groomstyling</h2>
            1. Luxe and fines<br></br>
            2. Tuxedos<br></br>
            3. Get groomed<br></br>
            4. Abixol<br></br>
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
