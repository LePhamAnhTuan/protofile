'use client'
import React from 'react'
import IchatRight from '@/components/chat/chatRight'
import IchatLeft from '@/components/chat/chatLeft'
import IchatTitle from '@/components/chat/chatTitle'
import './style.css'
import Iwelcom from '@/components/chat/welcom'
import ImyResume from '@/components/chat/myResume'
import ImySkill from '@/components/chat/mySkill'
import Iproduct from '@/components/chat/product'

const protofile = () => {

    return (
        <div className="px-[50px] max-h-screen">
            <div className="h-auto">
                <div className="text-center py-10">
                    <Iwelcom />
                </div>
                <div className="">
                    <div className="flex justify-center">
                        <IchatTitle />

                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="h-auto">
                <ImyResume />
            </div>
            <div className="h-auto py-10">
                <ImySkill />
            </div>
            <div className='h-auto flex flex-col justify-center items-center '>
                <Iproduct />
            </div>
            <div className="h-auto py-10 border-2 border-green-400 px-4 mt-5 rounded-lg">
                <IchatRight >
                    What led you to web development?
                </IchatRight>
                <IchatLeft>

                    "Web developers often find it exciting to have the ability to create dynamic and interactive online experiences. The flexibility and creative potential of web programming can spark curiosity and a desire to explore more about information technology. Additionally, web development provides a means to engage in the software development community and address real-world problems.
                </IchatLeft>
            </div>
            <div className="h-[200px] py-10 ">
                <div className="tracking-out-expand-fwd text-center text-3xl font-bold">     Thanks for reading !!!</div>

            </div>
        </div >
    )
}

export default protofile


