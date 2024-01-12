'use client'
import React from 'react'
import { AlertDialogButton } from './ui/alert-dialog'
import { signOut } from 'next-auth/react'
import { ButtonVariant } from './ui/button'

type Props = {
    children: React.ReactNode
}
const IlogoutButton = ({ children }: Props) => {
    return (
        <AlertDialogButton
            title='Đăng xuất !'
            description='Hẹn gặp lại quý khách'
            typeButton={ButtonVariant.RED}
            onclick={() => signOut({ callbackUrl: "/login" })}
            children={children}
        />
    )
}

export default IlogoutButton