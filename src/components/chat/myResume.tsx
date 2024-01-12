import { cn } from '@/lib/utils'
import React from 'react'

const ImyResume = () => {
    return (
        <>
            <div className="text-center text-[50px] py-10">
                <span className='title_resume'>My</span> <span className='text-[#ffa500]'>Resume</span>
            </div>
            <div className={cn("grid grid-cols-1 gap-10 ",
                "lg:grid-cols-2",
                "md:grid-cols-none",
                "sm:grid-cols-none")}>
                <div className=' grid gap-4 relative lg:grid-cols-[1fr_2fr]  md:grid-cols-none sm:grid-cols-none'>
                    <div className="rotate-[-90DEG] w-[100px] absolute top-1/2 left-[10%] text-center text-[50px] text-orange-500 hidden lg:block md:hidden sm:hidden ">EXPERIENCE</div>
                    <div className="block lg:block md:hidden sm:hidden"></div>
                    <div className="space-y-10">
                        <div className={cn("transition ease-in-out delay-150 border-4 rounded-lg border-dashed border-[#f0f0f0] duration-300 h-auto p-4",
                            "hover:border-solid hover:border-orange-500 hover:scale-110 hover:bg-white hover:-translate-y-1  ")}>
                            <p className='text-bold text-2xl'>Ho Chi Minh City University of Technology (HUTECH) </p>
                            <p className='text-green-500'>10/2016 - 10/2020</p>
                            <dl>
                                <b>Majors</b>
                                <li>Automotive Engineering Technology.</li>
                                <b>GPA</b>
                                <li>3.2/4</li>
                            </dl>


                        </div>
                        <div className={cn("transition ease-in-out delay-150 border-4 rounded-lg border-dashed border-[#f0f0f0] duration-300 h-auto p-4",
                            "hover:border-solid hover:border-orange-500 hover:scale-110 hover:bg-white hover:-translate-y-1  ")}>
                            <p className='text-bold text-2xl'>Cybersoft - Cyberlearn Programing Education</p>
                            <p className='text-green-500'>27/3/2023 - 30/7/2023</p>
                            <dl>
                                <li>Intern and mentor</li>
                                <li>In the morning, I practice at the company to support the development of web projects. In the evening, I work as a mentor to support programming teachers</li>
                            </dl>

                        </div>
                    </div>
                </div>
                <div>
                    <div className=' grid grid-cols-none gap-4 relative lg:grid-cols-[2fr_1fr]  md:grid-cols-none sm:grid-cols-none'>
                        <div className="rotate-[-90DEG] w-[100px] absolute top-1/2 right-[10%] text-center text-[50px] text-orange-500 lg:block md:hidden sm:hidden hidden">EDUCATION</div>

                        <div className="space-y-10">
                            <div className={cn("transition ease-in-out delay-150 border-4 rounded-lg border-dashed border-[#f0f0f0] duration-300 h-auto p-4",
                                "hover:border-solid hover:border-orange-500 hover:scale-110 hover:bg-white hover:-translate-y-1  ")}>
                                <p className='text-bold text-2xl'>Cybersoft - Cyberlearn Programing Education Center</p>
                                <p className='text-green-500'>MARCH 2023 - JULY 2023</p>
                                <dl>
                                    <li>Programming course: thinking in programming, problem-solving, Java language, OOP</li>
                                    <li>Front-end Foundation course: basic knowledge of HTML5, CSS3, Boostrap 4, SASS/SCSS, Javascript (ES5/ES6), Jquery, AJAX, Git, ReactJS, Tailwindcss, Ant design,...</li>
                                </dl>

                            </div>
                            <div className={cn("transition ease-in-out delay-150 border-4 rounded-lg border-dashed border-[#f0f0f0] duration-300 h-auto p-4",
                                "hover:border-solid hover:border-orange-500 hover:scale-110 hover:bg-white hover:-translate-y-1  ")}>
                                <p className='text-bold text-2xl'>Inter at FPT Information System</p>
                                <p className='text-green-500'>02/08/2023 - 29/12/2023</p>
                                <dl>
                                    <li><b>Front end</b></li>
                                    <li>Intern 3 month at FPT Information System
                                        Know use Mui-UI5 library, personalizing a product and custom some UX/UI</li>
                                    <li><b>Back end</b></li>
                                    <li>Intern 2 month at FPT Information System</li>

                                </dl>

                            </div>
                        </div>
                        <div className="hidden lg:block md:hidden sm:hidden">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImyResume