'use client'
import React from "react"
import avatar from "@/assets/avatar/avatar.jpg"
import avatar1 from "@/assets/avatar/avatarReal.jpg"
import Image from 'next/image'
import zalo from '@/assets/logo/zalo-logo-inkythuatso.png'
import fb from '@/assets/logo/fb.png'
import skype from '@/assets/logo/skype.png'
import { badgeVariants } from "@/components/ui/badge"
import Link from 'next/link'




const IchatTitle = () => {
    const [ava, setAva] = React.useState(avatar)
    return (
        <div className="flex flex-col justify-center items-center sm:flex md:flex-row lg:flex-row ">
            <div className="flex flex-col justify-center items-center p-4"
                onMouseEnter={() => {
                    setAva(avatar1)
                }}
                onMouseLeave={() => {
                    setAva(avatar)
                }}
            >
                <div id="avatar" className="w-[150px] h-[150px] overflow-hidden rounded-3xl">
                    <Image src={ava} alt="avatar" className="object-cover" width={150} height={150}></Image>
                </div>
                <div className="text-center">
                    <Link
                        className={badgeVariants({ variant: "red" })}
                        href={"/files/le-pham-anh-tuan.pdf"}
                        target="_blank"
                        download="le-pham-anh-tuan-cv.pdf"
                    >Download my cv</Link>

                </div>
            </div>

            <div className='lg:pl-10 md:pl-10 '>
                <div className="bg-white shadow-2xl rounded-2xl p-4 border border-blue-500">
                    <ul className='font-dancing'>
                        <li className="font-bold">About me</li>
                        <li >My name: Lê Phạm Anh Tuấn</li>
                        <li >Address: Phú Nhuận, TP.Hồ Chí Minh, Việt Nam</li>
                        <li >Birthday: 02/11/1998</li>
                    </ul>
                </div>

                <div className="bg-white shadow-2xl rounded-2xl p-4 border border-red-500 my-2">
                    <ul className='font-dancing'>
                        <li className="font-bold" >Contact me</li>
                        <li className="flex items-center">Facebook:
                            <Link className={badgeVariants({ variant: "blue" })} href={"https://www.facebook.com/anhtuan.021198/"} target="_blank">
                                <Image src={fb} alt='zalo' width={25} height={25} /><p className='text-white pl-2'>  Le Pham Anh Tuan</p>
                            </Link>
                        </li>
                        <li className="py-2 flex items-center">Skype:
                            <Link className={badgeVariants({ variant: "blue" })} href={"https://join.skype.com/invite/qFlCIbd6rI1b"} target="_blank">
                                <Image src={skype} alt='zalo' width={25} height={25} /><p className='text-white pl-2'>  Tuấn Lê</p>
                            </Link>
                        </li>
                        <li className="flex items-center">Phone:
                            <Link
                                href="https://zalo.me/0906744142"
                                className={badgeVariants({ variant: "blue" })}>
                                <Image src={zalo} alt='zalo' width={25} height={25} /><p className='text-white pl-2'>
                                    0906744142
                                </p>
                            </Link>

                        </li>

                    </ul>
                </div>
                <div className="bg-white shadow-2xl rounded-2xl p-4 border border-green-500">
                    <ul className='font-dancing'>
                        <li className="font-bold" >Other</li>
                        <li className="max-w-[500px]">I am passionate about learning new technologies and always keep concentrated on improving my self skills. Being patient and responsible for working help me implement completely assigned tasks. </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default IchatTitle
