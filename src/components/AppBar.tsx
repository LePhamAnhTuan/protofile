import wavehand from '@/assets/header/waving-hand-svgrepo-com.svg';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { AlignJustify, LogOut, SquareUserRound, } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from "next/link";
import './AppBar.css';
import NavBarItem from './listItemNav/navItem';
import IlogoutButton from './logoutButton';
import { authOptions } from '@/lib/auth';
// import { authOptions } from '@/lib/auth';

const AppBar = async () => {
  const session: any = await getServerSession(authOptions);

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem("token", session?.backendTokens.accessToken);
  }
  const items = [
    {
      name: 'Tài khoản',
      url: '/my-account',
      icon: <SquareUserRound />
    },
    {
      name: 'Đăng xuất',
      url: '/logout',
      icon: <LogOut />
    }
  ]
  const itemWelcom = [
    {
      name: 'Đăng nhập',
      url: '/login',
      icon: <SquareUserRound />
    },
    {
      name: 'Đăng Ký',
      url: '/register',
      icon: <LogOut />
    }
  ]

  return (
    <header className="h-[64px]">
      <div className={cn(
        "flex max-w-full w-full justify-between items-center fixed h-16 backdrop-opacity-90 backdrop-blur-sm bg-none z-10 px-0",
        "lg:px-[20px] sm:px-[5px] md:px-0",
        "dark:bg-[#0a0a0a]",
      )}>
        <div className=" ">
          <Sheet>
            <SheetTrigger><AlignJustify size={30} width={"100px"} /></SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
        <div className=" ">
          <Link href={'/'}>
            <p className='text-[30px] font-bold logo_header dark:text-white'>{`<Le/Tuan>`}</p>
          </Link>
        </div>
        <div className=" w-[100px] flex items-center justify-center">

          <NavBarItem>
            <div className="min-w-[180px] py-4 mx-2">
              {session && session?.user ? <>
                <div className='inline-block w-full font-bold'>Chào mừng {session?.user?.name}<Image src={wavehand} alt="hand" className='inline-block' /></div>
                <Link href={items[0].url} key={items[0].name}>
                  <div className="flex p-4 hover:bg-red-100 dark:hover:bg-gray-500 rounded-sm ">
                    <div className="mr-4">{items[0].icon}</div>
                    <p className="text-center"> {items[0].name}</p>
                  </div>
                </Link>
                <IlogoutButton >
                  <div className={cn("flex p-4 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-sm",
                  )}>
                    <div className="mr-4">{items[1].icon}</div>
                    <p className="text-center"> {items[1].name}</p>
                  </div></IlogoutButton>


              </> :
                <>
                  {itemWelcom.map((item) => {
                    return <Link href={item.url} key={item.name}>
                      <div className="flex  p-4 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-sm">
                        <div className="mr-4">{item.icon}</div>
                        <p className="text-center"> {item.name}</p>
                      </div>
                    </Link>
                  })}
                </>}

            </div>

          </NavBarItem>

        </div>

      </div>
    </header>
  );
};

export default AppBar;
