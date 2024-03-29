import { Backend_URL } from '@/lib/Constants';
import { authOptions } from '@/lib/auth';
import type { Metadata, ResolvingMetadata } from 'next'
import { getServerSession } from 'next-auth';

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
    // read route params
    const session: any = await getServerSession(authOptions);
    const id = session.user.id

    // fetch data
    const res = await fetch(`${Backend_URL}user/${id}`, { method: 'GET' }).then((res) => res.json())

    return res
}
