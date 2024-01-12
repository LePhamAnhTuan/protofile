'use client'
import React from 'react'
import { useToast } from '@/components/ui/use-toast';
import { Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

interface Props {
    data: string
}
const Ihello = () => {
    const [data, setData] = React.useState('')
    const handleCall = async () => {
        const res = await fetch('http://localhost:3000/api/hello').then(res => res.json())
        return await setData(res.data.result)
    }
    React.useEffect(() => {
        handleCall()
    }, [])

    const { toast } = useToast()
    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up ",
                    description: `Friday, February 10, 2023 at 5:57 PM  ${data}`,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                })
            }}
        >
            Add to calendar
        </Button>
    )
}

export default Ihello