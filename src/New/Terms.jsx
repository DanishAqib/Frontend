import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Navbar from "./Navbar";
export  const Terms =()=> {
  return (
    <>
      <Navbar />
      <section className="hero-section" >
       <div className='oil'>
       <div>
    <h3>1. Acceptance of terms</h3>
    Any user who disagree with any part of the terms of use should not access the services.This is an agreement between both the parties that they have agreed to our conditions with their consent.
    Your consent to use our service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the service.
    
    <h3>2. Copyright policy</h3>
    We at book barber admire the intellectual property rights of others and demand the same for others as well. We recognize the intellectual property rights of others. It's far our coverage to respond to any claim that content material posted at the website infringes the copyright or other intellectual property infringement of any individual.
    In case you are a copyright owner, or legal on behalf of anyone and also you consider that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking region through the provider, you should submit your notice in writing to the eye of "Copyright Infringement" of bookbarber22@gmail.com and encompass in your notice an in depth description of the alleged Infringement.
    You may be held answerable for damages (along with costs and legal professionals costs) for misrepresenting any wrong information.
    
    <h3>3. Intellectual property</h3>
    All the images, texts, creativity and website logo is the asset of book barber and by the law, these assets are protected too. 
    This right helps to prevent third parties from using your brand, improvements, and assets. A legal action will be taken in case of any voilation of our intellectual property rights.
    
    <h3>4. Account information</h3>
    When you create an account, you must provide us with accurate and complete information always. Failure to accomplish constitutes a breach of the contract, which may result in instantaneous termination of your account on our provider.
    
    <h3>5. Termination of account</h3>
    We may additionally terminate or droop your account immediately without prior note if you are allowed in any unethical activity and breach the terms.
    Upon termination, your all service will straight away ceased. If you wish to terminate your account, you can definitely stop the usage of the provider. 
    
    <h3>6. Changes made</h3>
    We reserve the right, at our exclusive desire to modify or replace any object at any time. If a revision is to be made, we can try and provide at least 30 days note prior to any new change taking effect.
    </div>
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
