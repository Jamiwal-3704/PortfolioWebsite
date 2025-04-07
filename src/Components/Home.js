import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/resume 2.jpg';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";
import {CiCoffeeCup} from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  function PauseOnHover() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
  }
  
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SAHIL ITTAN</b></h1>
          <Typed/>
          <div className='links'>
              <div className='HeaderLinks'>
              {/* <h4>Connect with me</h4> */}
                <a href="https://github.com/Jamiwal-3704" target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/sahilittan" target='_blank'><FaLinkedin/></a>
                <a href="mailto:ittansahil@gmail.com">
                  <GrMail />
                </a>
                <a href="https://leetcode.com/u/JAMIWAL/" target="_blank"><SiLeetcode/></a>
              </div>
          </div>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>INTRO</b></h1>
          <ul>
            <li>I specialize in crafting dynamic and responsive websites using modern technologies like <b>React</b>, <b>MongoDB</b>,<b>Express.Js</b> and <b>Tailwind CSS</b></li>
            <li>With a strong foundation in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, I create seamless user experiences.<br /></li>
            <li>I also have solid programming skills in <b>C++</b>, <b>Java</b>, and some experience with <b>Python</b>, allowing me to tackle both <b>front-end</b> and <b>back-end</b> challenges. </li>
            <li><span className=''>Explore my portfolio to see the projects I've brought to life!</span></li>
          
          <br></br>
          <br></br>
          
          
          <br></br>
          
           
             
          </ul>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home