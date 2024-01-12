import React from 'react'
import './style.css'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import bootrap from '@/assets/iconSkill/bootstrap-4.svg'
import css from '@/assets/iconSkill/css-3.svg'
import html from '@/assets/iconSkill/html5.svg'
import jquery from '@/assets/iconSkill/jquery-1.svg'
import sass from '@/assets/iconSkill/sass-1.svg'
import react from '@/assets/iconSkill/reactjs-ar21.svg'
import tailwind from '@/assets/iconSkill/tailwindcss.svg'
import docker from '@/assets/iconSkill/docker.svg'
import git from '@/assets/iconSkill/git-icon.svg'
import js from '@/assets/iconSkill/logo-javascript.svg'
import mongo from '@/assets/iconSkill/mongodb-icon-1.svg'
import mysql from '@/assets/iconSkill/mysql-6.svg'
import nestjs from '@/assets/iconSkill/nestjs.svg'
import nextjs from '@/assets/iconSkill/next-js.svg'
import node from '@/assets/iconSkill/nodejs-icon.svg'
import prisma from '@/assets/iconSkill/prisma-2.svg'
import redux from '@/assets/iconSkill/redux.svg'
import typesrc from '@/assets/iconSkill/typescript.svg'



const ImySkill = () => {

    return (
        <div>
            <div className="text-center text-[50px] py-10">
                <span className='text-[#ffa500]'>My </span><span className='title_resume'>Skill</span>
            </div>
            <Marquee>
                <b><i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quisquam facere, iste omnis hic blanditiis consequuntur tempore enim. Accusantium esse enim est fugit quaerat ea recusandae consequatur perspiciatis minima delectus.</i></b>
            </Marquee>

            <Marquee direction='right'>
                <Image className='mx-24' src={bootrap} alt='bootrap' width={70}></Image>
                <Image className='mx-24' src={css} alt='css' width={70}></Image>
                <Image className='mx-24' src={html} alt='html' width={70}></Image>
                <Image className='mx-24' src={jquery} alt='jquery' width={70}></Image>
                <Image className='mx-24' src={sass} alt='sass' width={70}></Image>
                <Image className='mx-24' src={react} alt='react' width={70}></Image>
                <Image className='mx-24' src={tailwind} alt='tailwind' width={70}></Image>
                <Image className='mx-24' src={git} alt='git' width={70}></Image>
                <Image className='mx-24' src={js} alt='js' width={70}></Image>
                <Image className='mx-24' src={nextjs} alt='nextjs' width={70}></Image>
                <Image className='mx-24' src={redux} alt='redux' width={70}></Image>
                <Image className='mx-24' src={typesrc} alt='typesrc' width={70}></Image>
            </Marquee>
            <Marquee >

                <Image className='mx-24' src={mongo} alt='mongo' width={70}></Image>
                <Image className='mx-24' src={mysql} alt='mysql' width={70}></Image>
                <Image className='mx-24' src={nestjs} alt='nestjs' width={70}></Image>
                <Image className='mx-24' src={node} alt='node' width={70}></Image>
                <Image className='mx-24' src={docker} alt='docker' width={70}></Image>
                <Image className='mx-24' src={prisma} alt='prisma' width={70}></Image>

            </Marquee>
            <Marquee direction='right'>
                <b><i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quisquam facere, iste omnis hic blanditiis consequuntur tempore enim. Accusantium esse enim est fugit quaerat ea recusandae consequatur perspiciatis minima delectus.</i></b>
            </Marquee>


        </div>

    )
}

export default ImySkill