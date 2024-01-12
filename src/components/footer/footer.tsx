import Image from 'next/image'
import React from 'react'
import teacup from '@/assets/footer/tea-cup-front-gradient.svg'
import light from '@/assets/footer/bulb-front-color.svg'
import { cn } from '@/lib/utils'
import { ArrowUpToLine } from 'lucide-react';
import { ModeToggle } from '../ui/themeToggle'
const Ifooter = () => {
    return (
        <div className={cn("w-full fixed bottom-0 h-[30px] px-[10px]",
            "backdrop:backdrop-opacity-90 backdrop-blur-sm bg-none z-10 text-white flex justify-between items-center border-t-[1px] border-[#f0f0f067] ",
            "lg:px-[20px]",
            "md:px-[10px]",
            "sm:px-[10px]",)}

        >
            <div className="h-full flex justify-around items-center">
                <ModeToggle />
            </div>
            <div className="flex justify-around items-center w-[150px]">
                <Image src={light} alt={'tea-cup'} width={25}></Image>
                <Image src={teacup} alt={'tea-cup'} width={25} ></Image>
                <ArrowUpToLine width={25} className='text-orange-400' />
            </div>
        </div>
    )
}

export default Ifooter
//   backdrop:backdrop-opacity-90 backdrop-blur-sm bg-none z-10 