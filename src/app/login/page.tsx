'use client'
import { GetServerSideProps } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
    const { toast } = useToast()
    const router = useRouter();
    const formSchema = z.object({
        email: z.string().min(1, "Vui lòng nhập email").email("Nhập đúng định dạng email"),
        password: z.string({
            required_error: "Vui lòng nhập trường này",
        }).min(6, "Vui lòng nhập đủ 6 kí tự"),

    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "test@test.com",
            password: "123123",

        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        handleSubmit(values)
    }
    const handleSubmit = async (data: any) => {
        const { email, password } = data;
        try {
            const res = await signIn('credentials', {
                email, password,
                redirect: false
            });

            if (res?.error == null) {
                toast({
                    title: `Đăng nhập thành công`,
                    variant: "success",
                })
                router.refresh();
                setTimeout(() => {
                    router.push('/')
                }, 1500)
            } else {
                toast({
                    title: `Đăng nhập thất bại`,
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex justify-center items-center h-full'>
            <div className=" drop-shadow-lg border border-purple-300 p-20 px-40 rounded-lg">
                <p className='text-center text-[50px] font-bold pb-2 dark:text-black'>Đăng nhập</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="dark:text-black">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="dark:text-black">Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập mật khẩu" {...field} type='password' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='flex justify-center items-center gap-2'>
                            <Button type="submit" variant={"green"} className="w-full" >Đăng nhập</Button>
                            <Link href={'/register'}>
                                <Button type="submit" variant={"outline"} className="w-50%" >Đăng ký</Button></Link>
                        </div>
                    </form>
                </Form>
            </div>

        </div >
    )

}

export default Login

