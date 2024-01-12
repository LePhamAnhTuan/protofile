'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, { ReactNode } from "react"
interface Props {
    children: React.ReactNode;
}
const IchatRight = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-start">
            <div className="flex items-center ">
                <div className="bg-green-500 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Hr</AvatarFallback>
                    </Avatar>
                </div>
                <div className="mx-2"><b>Someone</b></div>
            </div>
            <div className="inline-block h-auto max-w-28 bg-blue-500 rounded-tr-[25px] rounded-bl-[25px] p-4 ">
                {children}

            </div>
        </div>
    )
}

export default IchatRight
