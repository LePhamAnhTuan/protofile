'use client'
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from '@/components/ui/use-toast';
import { Frontend_URL } from '@/lib/Constants';
import React from 'react';

interface Props {
    data: string
}
const Ihello = () => {
    const [data, setData] = React.useState('')
    const handleCall = async () => {
        const res = await fetch(`${Frontend_URL}/api/hello`).then(res => res.json())
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