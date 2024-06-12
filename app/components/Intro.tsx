import { jost } from "../../pages/fonts"
import Image from "next/image"

export default function Intro() {
    return(
<div className={`flex flex-col justify-center items-center ${jost.variable} mt-[4rem] text-center align-middle font-sans font-light text-[3rem]`}>
    <div>
        <p>In Your <strong className="font-bold">Investment Journey</strong>,</p>
        <p>We Are On Your Side ! </p>
    </div>
    <div className="flex space-y-[2rem] flex-col items-center mt-[1rem]">
        <p className="text-[#01529E]">No Commission Advisory</p>
        <Image 
            src='/ring.png'
            alt=''
            width={35}
            height={160}
        />
    </div>
</div>
    )
}