"use client"

import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from 'lucide-react';
interface Props {
    children: React.ReactNode;
}

const NavBarItem = ({ children }: Props) => {
    return <div>
        <NavigationMenu >
            <NavigationMenuList >
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-full h-fit bg-inherit hover:bg-inherit active:bg-inherit focus:bg-inherit focus-visible:bg-inherit ">
                        <MoreHorizontal size={40} />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <div className="w-fit">
                            {children}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    </div>;
}
export default NavBarItem

