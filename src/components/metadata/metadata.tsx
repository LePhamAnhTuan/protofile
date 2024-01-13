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
    const res = await fetch(`http://localhost:8080/user/${id}`, { method: 'GET' }).then((res) => res.json())

    return res
}
