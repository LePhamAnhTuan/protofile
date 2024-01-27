"use client"
import { Backend_URL } from '@/lib/Constants'
import { SetStateAction, useEffect, useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import IchatRight from '@/components/chat/chatRight';
export const Ichat = () => {

    const formSchema = z.object({
        message: z.string().min(1, "Vui lòng nhập tin nhắn")

    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: ""
        },

    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        registerUser(values)
    }
    const registerUser: any = async (data: any) => {
    }
    return (

        <div className="py-10 px-20">
            <ul id="screen-chat">

            </ul>
            <div className="form-chat">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="tin nhắn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /></div>

                        <Button type="submit" variant={"green"} className="w-auto" >Gửi</Button>
                    </form>
                </Form>

            </div>
        </div>
    )
}
