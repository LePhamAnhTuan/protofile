import sama from '@/assets/logo/Samar.png'
import profile from '@/assets/logo/thorium_TdM6ozrBIg.png'
import PoochCare from '@/assets/logo/thorium_sEqj4hRNQQ.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import Link from 'next/link'
import { Button, ButtonVariant } from '../ui/button'
const Iproduct = () => {
    const items = [
        {
            image: sama,
            name: 'Samar',
            linkGit: 'https://github.com/LePhamAnhTuan/Samar',
            linkDemo: 'https://samar-snowy.vercel.app/'
        },
        {
            image: PoochCare,
            name: 'PoochCare',
            linkGit: 'https://github.com/minhkhoaluong/PoochCare_BCS07_nhom8',
            linkDemo: 'https://pooch-care-nine.vercel.app/'
        },
        {
            image: profile,
            name: 'profile',
            linkGit: '#',
            linkDemo: '#'
        }

    ]

    return (<>
        <div className="text-center text-[50px] py-10">
            <span className='title_resume'>My</span> <span className='text-[#ffa500]'>Project</span>
        </div>
        <Carousel className="w-full max-w-2xl "
            opts={{ slidesToScroll: 1, loop: true, }}

            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {items.map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <Link href={_.linkDemo} className='w-full pb-4'>
                                        <Image src={_.image} alt={_.name} ></Image>
                                    </Link>
                                    <div className='space-x-2'>
                                        <Link href={_.linkGit}>
                                            <Button type='button' variant={ButtonVariant.BLUE} >Link Github</Button></Link><Link href={_.linkDemo}>
                                            <Button type='button'>Link Demo</Button></Link>
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel></>

    )
}

export default Iproduct