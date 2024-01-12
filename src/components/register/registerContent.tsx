'use client'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ResponseData } from '@/lib/types';
import { zodResolver } from "@hookform/resolvers/zod";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from '../ui/use-toast';
import { User, roleEnum } from './registerInterface';
const IregisterContent: React.FC<any> = (session: any) => {
  const router = useRouter();
  const { toast } = useToast()
  const formSchema = z.object({
    email: z.string().min(1, "Vui lòng nhập email").email("Nhập đúng định dạng email"),
    password: z.string({
      required_error: "Vui lòng nhập trường này",
    }).min(6, "Vui lòng nhập đủ 6 kí tự"),
    name: z.string({
      required_error: "Vui lòng nhập trường này",
    }),
    role: z.enum([roleEnum.user, roleEnum.admin]),
    isRemove: z.boolean()

  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@test.com",
      password: "123123",
      name: "test",
      role: roleEnum.user,
      isRemove: false
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    registerUser(values)
  }
  const registerUser: any = async (data: User) => {
    const response: ResponseData = await fetch(`/api/register`, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => response.json())

    toast({
      title: `${response.message}`,
      variant: response.code != 200 ? "destructive" : "success",
      description: `${response.status ?? ""}`,
    })
    if (response.code != 200) return
    setTimeout(() => {
      router.push('/login')
    }, 1500)

  }
  React.useEffect(() => {
    if (session && session.session && session.session.id) {
      router.push('/')
    } else { return }
  }, [session])
  return (

    <div className=''>
      <p className='text-center text-[50px] font-bold pb-2 dark:text-black'>Đăng ký</p>
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
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-black">Tên người dùng</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập tên người dùng"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-center items-center gap-2'>
            <Button type="submit" variant={"green"} className="w-full" >Hoàn thành</Button>
            <Link href={'/login'}>
              <Button type="submit" variant={"outline"} className="w-50%" >login</Button></Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default IregisterContent

