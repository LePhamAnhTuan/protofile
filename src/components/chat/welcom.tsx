import React from 'react'
import "./style.css"
import Image from 'next/image'
import wavehand from '@/assets/header/waving-hand-svgrepo-com.svg'
const Iwelcom = () => {
    return (
        <div className="typewriter inline-block" >
            <h1 className="text-xl font-dancing py-2 px-4 lg:text-3xl md:text-2xl sm:text-xl">Welcome my page! I am a Front-end Developer <Image src={wavehand} alt="hand" className='inline-block' /></h1>
        </div>
    )
}

export default Iwelcom