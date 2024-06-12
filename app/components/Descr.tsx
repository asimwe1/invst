import Image from "next/image"

Image

export default function Descr() {
    return(
        <div className="flex flex-col items-center">
        <Image 
            className="rotate-180 my-24"
            src='/ring.png'
            alt=''
            width={35}
            height={160}
        />
        <div>
            <h1 className=" text-[28px] text-center justify-center">The True Measure Of A Fund Manager's Success Is The Ability To Consistently Deliver Strong Returns For Their Clients, While Also Carefully Managing Risk.</h1>
        </div>
        </div>
    )
}