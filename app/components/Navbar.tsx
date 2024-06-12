import { jost } from '../../pages/fonts'
import { FaPhone } from 'react-icons/fa6'

export default function Navbar () {

    return(
        <div className={` ${jost.variable} border-t-2 font-medium h-[8rem] items-center pt-[2.5rem] w-full font-sans space-x-[15rem] items-center flex `}>
        <h1 className=' ml-[5.5rem] font-light text-[3rem]'>Lo<strong className='font-bold'>go</strong></h1>
        <div className='flex text-gray-500 items-center space-x-[1rem] text-[1.4rem]'>
        <div className='flex space-x-[3rem]'>
            <p>About Us</p>
            <p>Our Solution</p>
            <p>We are Different</p>
            <p>Contact Us</p>
            <p>Complaints</p>
            <p>Client Access</p>
        </div>
        <hr className='w-[10rem] rotate-90 ' />
        <div className='flex text-[#01529E] space-x-[1rem] items-center '>
            <FaPhone className='text-[3rem]' />
            <div className=''>
                <p className='text-[1rem]'>Free Consultation</p>
                <p className='text-[1.5rem] '>+0120-4953325</p>
            </div>
        </div>


        </div>
        </div>
    )
}
