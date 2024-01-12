
import { useToast } from "@/components/ui/use-toast";

interface IProps {
    type: string;
    message: string;
}

export const openStack = ({ type, message }: IProps) => {
    const { toast } = useToast()
    console.log('message: ', message);
    toast({
        title: `${type == "error" ? "Thao tác thất bại" : "Thao tác thành công"}`,
        variant: `${type == "error" ? "destructive" : "success"}`,
        description: `${message}`

    })
    return

}
export const Backend_URL = process.env.URL_BE;
