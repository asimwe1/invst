import Image from "next/image"

export default function Solution() {
    return(
<div className="space-y-6">
    <div className="flex mt-[4rem] space-x-6">
        <div className="flex flex-col items-center justify-center bg-gray-200 h-[480px] w-[1106px]">
            <Image 
                src='/scale.png'
                alt=''
                width={100}
                height={100}
            />
            <p className="text-[3rem] font-light font-sans">Portfolio Evaluation Service</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-200 h-[480px] w-[720px]">
            <Image 
                src='/coin.png'
                alt=''
                width={100}
                height={100}
            />
            <p className="text-[3rem] font-light font-sans">Wealth Creation</p>
        </div>
    </div>
    <div>
        <div className="flex space-x-6 ">
        <div className="flex flex-col items-center justify-center bg-gray-200 h-[480px] w-[680px]">
            <Image 
                src='/tax.png'
                alt=''
                width={100}
                height={100}
            />
            <p className="text-[3rem] font-light font-sans">Tax Solution</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-200 h-[480px] w-[560px]">
            <Image 
                src='/factory.png'
                alt=''
                width={100}
                height={100}
            />
            <p className="text-[3rem] font-light font-sans">Estate Solution</p>
        </div>
        <div className="flex text-white flex-col items-center justify-center bg-blue-600 h-[480px] w-[560px]">
            <Image 
                src='/invest.png'
                alt=''
                width={100}
                height={100}
            />
            <p className="text-[3rem] font-light font-sans">Investment Solution </p>
        </div>

        </div>
    </div>
</div>
    )
}