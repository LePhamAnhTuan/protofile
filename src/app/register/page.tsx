
import IregisterContent from '@/components/register/registerContent';
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Register = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div className=" drop-shadow-lg border border-purple-300 p-20 lg:px-40 rounded-lg">
                <IregisterContent session={await session?.user} />
            </div>

        </div >

    )
}

export default Register   