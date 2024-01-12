'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, { ReactNode } from "react"
import ava from '@/assets/avatar/avatar.jpg'
import Image from "next/image";
interface Props {
    children: React.ReactNode;
}
const IchatLeft = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-end">
            <div className="flex items-center flex-row-reverse">
                <div className="bg-green-500 w-[40px] h-[40px] rounded-full justify-center items-center">
                    <Avatar>
                        <Image src={ava} alt="123" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="mx-2"><b>Me</b></div>
            </div>
            <div className="inline-block h-auto max-w-28 bg-blue-500 rounded-tl-[25px] rounded-br-[25px] p-4">
                {children}
            </div>
        </div>
    )
}

export default IchatLeft
