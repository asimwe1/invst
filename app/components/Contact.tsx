import  { poppins } from "../../pages/fonts";
import {FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa6'

export default function Contact() {
    return(
        <div className={` ${poppins.variable} font-sans text-[#01529E] my-[0.5rem] flex w-full space-x-[70%] `}>
            <div className='flex ml-[5.5rem] text-[1.1rem] items-center justify-center left-0 space-x-[1rem] '>
            <FaEnvelope />
            <p>getintouchdomaib.com</p>
            </div>
            <div className='flex space-x-[2rem] text-[1.5rem] right-0 flex-1 '>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
                {/* <p>LinkedIN</p> */}
            </div>
        </div>
    )
}

