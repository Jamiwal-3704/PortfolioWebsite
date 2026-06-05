import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/Jamiwal-3704" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sahilittan" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="mailto:ittansahil@gmail.com">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/JAMIWAL/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
      <h4 className='inline-flex items-center gap-2'>Build with <span> <FaHeart/></span> by Sahil Ittan</h4>
      {/* <h4>Copyright &copy; 2023 DS</h4> */}
    </footer>
  )
}

export default Footer