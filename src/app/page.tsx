'use client'

import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { HomeIcon, UserRoundSearch } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  const { toast } = useToast()
  const items = [
    {
      icon: <HomeIcon size={70} />,
      title: 'Home page',
      url: '/homepage'
    },
    {
      icon: <UserRoundSearch />,
      title: 'My CV',
      url: '/protofile'
    },
    {
      icon: <UserRoundSearch />,
      title: 'Contact',
      url: '/contact'
    },
    {
      icon: <UserRoundSearch />,
      title: 'My CV',
      url: '/my-cv'
    },
    {
      icon: <UserRoundSearch />,
      title: 'My CV',
      url: '/my-cv'
    },
  ]
  return (
    <div className={cn(
      // "lg:bg-red-400",
      // "md:bg-slate-400",
      // "sm:bg-green-400",

    )}>
      <div className="flex flex-col justify-center items-center h-full">
        {/* <Lottie options={defaultOptions}
        height={400}
        width={600}
      /> */}
        <div className="
      grid 
      lg:grid-cols-2 
      gap-10 w-[60%] 
      h-screen 
      pt-10 
      md:grid-cols-1">
          {items.map((item: any, index: number) => {
            return <Link href={item.url} key={index}>
              <div className="w-full h-full border border-green-500 rounded-2xl flex flex-col justify-center items-center text-[30px] font-bold homepage_hover text-black dark:text-white" >
                <p>{item.icon}</p>
                <p className='text-[30px] font-bold '>{item.title}</p></div>
            </Link>
          })}



        </div>
      </div>

    </div>
  );
}
